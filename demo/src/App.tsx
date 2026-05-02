import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Trash2, CheckCircle2, Circle, Sun, Moon, Calendar, ListTodo } from 'lucide-react'

// --- Types ---
interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: number
}

type FilterType = 'all' | 'active' | 'completed'

// --- Main Component ---
export default function App() {
  // --- State ---
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('twotoo-todos')
    return saved ? JSON.parse(saved) : []
  })
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState<FilterType>('all')
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || 
             window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false
  })

  // --- Effects ---
  useEffect(() => {
    localStorage.setItem('twotoo-todos', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  // --- Handlers ---
  const addTodo = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!input.trim()) return

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: input.trim(),
      completed: false,
      createdAt: Date.now(),
    }

    setTodos([newTodo, ...todos])
    setInput('')
  }

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  // --- Derived State ---
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active': return todos.filter(t => !t.completed)
      case 'completed': return todos.filter(t => t.completed)
      default: return todos
    }
  }, [todos, filter])

  const stats = {
    total: todos.length,
    active: todos.filter(t => !t.completed).length,
    completed: todos.filter(t => t.completed).length,
  }

  // --- Render ---
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500 font-sans selection:bg-indigo-500/30">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px] dark:bg-indigo-500/5" />
        <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] rounded-full bg-purple-500/10 blur-[120px] dark:bg-purple-500/5" />
      </div>

      <div className="relative max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-500/30">
              <ListTodo className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              TwoToo
            </h1>
          </div>
          
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-3 rounded-2xl glass hover:scale-110 active:scale-95 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
          </button>
        </header>

        {/* Input Section */}
        <div className="glass rounded-[2rem] p-2 mb-8 flex items-center shadow-2xl">
          <form onSubmit={addTodo} className="flex-1 flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="무엇을 도와드릴까요?"
              className="flex-1 bg-transparent border-none outline-none px-6 py-4 text-lg placeholder:text-slate-400 dark:placeholder:text-slate-500"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="mr-2 p-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-500/40 transition-all active:scale-95"
            >
              <Plus className="w-6 h-6" />
            </button>
          </form>
        </div>

        {/* Filter & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 px-2">
          <div className="flex bg-slate-200/50 dark:bg-slate-800/50 p-1 rounded-xl">
            {(['all', 'active', 'completed'] as FilterType[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                  filter === f 
                    ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {stats.completed > 0 && (
            <button
              onClick={clearCompleted}
              className="text-sm font-medium text-slate-400 hover:text-rose-500 transition-colors"
            >
              완료 항목 삭제
            </button>
          )}
        </div>

        {/* Todo List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredTodos.length > 0 ? (
              filteredTodos.map((todo) => (
                <motion.div
                  key={todo.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  className={`group glass flex items-center gap-4 p-5 rounded-3xl transition-all ${
                    todo.completed ? 'opacity-60' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`flex-shrink-0 transition-transform active:scale-90 ${
                      todo.completed ? 'text-indigo-500' : 'text-slate-300 dark:text-slate-700 hover:text-indigo-400'
                    }`}
                  >
                    {todo.completed ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                  </button>

                  <span className={`flex-1 text-lg font-medium transition-all ${
                    todo.completed ? 'line-through text-slate-400' : 'text-slate-700 dark:text-slate-200'
                  }`}>
                    {todo.text}
                  </span>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="p-2 text-slate-300 dark:text-slate-700 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 rounded-xl transition-all opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center"
              >
                <div className="inline-flex p-6 bg-slate-100 dark:bg-slate-800/50 rounded-full mb-4">
                  <Calendar className="w-10 h-10 text-slate-300 dark:text-slate-700" />
                </div>
                <p className="text-slate-400 dark:text-slate-500 font-medium">
                  할 일이 없습니다. 새로운 하루를 시작해볼까요?
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Stats */}
        {todos.length > 0 && (
          <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-sm text-slate-400 font-medium"
          >
            <div className="flex gap-4">
              <span>전체 {stats.total}</span>
              <span>진행 중 {stats.active}</span>
              <span>완료 {stats.completed}</span>
            </div>
            <div className="flex items-center gap-1.5 text-indigo-500/70">
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              오늘의 목표를 달성하세요!
            </div>
          </motion.footer>
        )}
      </div>
    </div>
  )
}
