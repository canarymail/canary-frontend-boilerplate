import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Mail, User, Lock, Settings, CheckCircle } from 'lucide-react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Mail className="h-4 w-4 text-primary-foreground" />
            </div>
            <h1 className="text-3xl font-bold">Demo Frontend</h1>
          </div>
          <p className="text-muted-foreground">
            A modern React boilerplate with shadcn/ui components
          </p>
          <div className="flex items-center justify-center gap-2">
            <Badge variant="secondary">React 18</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">shadcn/ui</Badge>
          </div>
        </div>

        {/* Demo Form Card */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Demo Form</CardTitle>
              <CardDescription>
                Try out the shadcn/ui components in action
              </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <Separator />
              
              <div className="flex gap-2">
                <Button type="submit" className="flex-1" disabled={isSubmitted}>
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="h-4 w-4" />
                      Submitted!
                    </>
                  ) : (
                    <>
                      <User className="h-4 w-4" />
                      Submit Form
                    </>
                  )}
                </Button>
                <Button type="button" variant="outline">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-muted-foreground">
              This form demonstrates various shadcn/ui components working together.
            </p>
          </CardFooter>
        </Card>

        {/* Component Showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Component Showcase</CardTitle>
            <CardDescription>
              Examples of different button variants and states
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
            </div>
            
            <Separator className="my-6" />
            
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Form Components</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Standard input" />
                <Input placeholder="Disabled input" disabled />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
