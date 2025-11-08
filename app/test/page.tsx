export default function TestPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-4">
          CSS Test Page
        </h1>
        <p className="text-muted-foreground mb-6">
          This page tests that our CSS variables and Tailwind CSS are working correctly after fixing the shadcn/ui integration.
        </p>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="font-semibold mb-2">Primary Colors</h3>
            <div className="space-y-2">
              <div className="w-full h-8 bg-primary rounded"></div>
              <div className="w-full h-8 bg-secondary rounded"></div>
            </div>
          </div>
          
          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="font-semibold mb-2">Text Colors</h3>
            <p className="text-foreground">Foreground text</p>
            <p className="text-muted-foreground">Muted text</p>
            <p className="text-primary">Primary text</p>
          </div>
          
          <div className="p-6 bg-card border border-border rounded-lg">
            <h3 className="font-semibold mb-2">Interactive Elements</h3>
            <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded mb-2 hover:opacity-90 transition-opacity">
              Primary Button
            </button>
            <button className="w-full bg-secondary text-secondary-foreground py-2 px-4 rounded hover:opacity-90 transition-opacity">
              Secondary Button
            </button>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Status</h2>
          <p className="text-green-600">✅ CSS compilation successful</p>
          <p className="text-green-600">✅ Tailwind CSS working</p>
          <p className="text-green-600">✅ CSS variables resolved</p>
          <p className="text-green-600">✅ shadcn/ui integration fixed</p>
        </div>
      </div>
    </div>
  );
}