/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QILTY2ldAlt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function Component() {
  const [items, setItems] = useState([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Do laundry", completed: false },
    { id: 3, text: "Clean the house", completed: false },
  ])
  const [newItem, setNewItem] = useState("")
  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, { id: items.length + 1, text: newItem, completed: false }])
      setNewItem("")
    }
  }
  const toggleComplete = (id) => {
    setItems(items.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
  }
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }
  const editItem = (id, newText) => {
    setItems(items.map((item) => (item.id === id ? { ...item, text: newText } : item)))
  }
  return (
    <div className="bg-background rounded-lg border p-6 max-w-md w-full mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Checklist</h1>
        <div className="flex items-center gap-2">
          <Input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Add new item"
            className="bg-muted rounded-md px-3 py-2 text-sm"
          />
          <Button onClick={addItem}>Add</Button>
        </div>
      </div>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between bg-muted rounded-md px-4 py-3">
            <div className="flex items-center gap-3">
              <Checkbox
                id={`item-${item.id}`}
                checked={item.completed}
                onCheckedChange={() => toggleComplete(item.id)}
              />
              <label
                htmlFor={`item-${item.id}`}
                className={`text-sm font-medium ${item.completed ? "line-through text-muted-foreground" : ""}`}
              >
                {item.text}
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => editItem(item.id, prompt("Enter new text"))}>
                <FilePenIcon className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => deleteItem(item.id)}>
                <TrashIcon className="w-4 h-4" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FilePenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}


function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}