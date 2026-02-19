'use client'

import { createClient } from '@/lib/supabase'
import { Bookmark } from '@/types'
import { useEffect, useState } from 'react'

interface BookmarkListProps {
  refreshTrigger: number
}

export default function BookmarkList({ refreshTrigger }: BookmarkListProps) {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchBookmarks()
  }, [refreshTrigger])

  const fetchBookmarks = async () => {
    try {
      const supabase = createClient()
      const { data, error } = await supabase
        .from('bookmarks')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setBookmarks(data || [])
    } catch (error) {
      console.error('Error fetching bookmarks:', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteBookmark = async (id: string) => {
    try {
      const supabase = createClient()
      await supabase.from('bookmarks').delete().eq('id', id)
      setBookmarks(bookmarks.filter(b => b.id !== id))
    } catch (error) {
      console.error('Error deleting bookmark:', error)
    }
  }

  if (loading) return <p className="text-center">Loading bookmarks...</p>

  return (
    <div className="space-y-3">
      {bookmarks.length === 0 ? (
        <p className="text-gray-500 text-center">No bookmarks yet. Add one!</p>
      ) : (
        bookmarks.map((bookmark) => (
          <div
            key={bookmark.id}
            className="p-4 border rounded-lg flex justify-between items-center hover:bg-gray-50"
          >
            <div>
              <h3 className="font-semibold">{bookmark.title}</h3>
              <a
                href={bookmark.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-sm truncate"
              >
                {bookmark.url}
              </a>
            </div>
            <button
              onClick={() => deleteBookmark(bookmark.id)}
              className="px-3 py-1 text-red-500 hover:bg-red-50 rounded"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  )
}