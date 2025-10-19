import { RippleButton } from '@/components/ripple-button';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 gap-12 p-4">
      {/* Заголовок */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Magic UI + shadcn/ui
        </h1>
        <p className="text-lg text-slate-300">
          Magic UI (анимации) + shadcn/ui (компоненты)
        </p>
      </div>

      {/* Magic UI - Ripple Button */}
      <section className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Magic UI - Ripple Button
        </h2>
        <div className="flex gap-4 flex-wrap justify-center">
          <RippleButton>Click me</RippleButton>
          <RippleButton
            rippleColor="59, 130, 246"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Blue Button
          </RippleButton>
          <RippleButton
            rippleColor="34, 197, 94"
            className="bg-green-600 hover:bg-green-700"
          >
            Green Button
          </RippleButton>
        </div>
      </section>

      {/* shadcn/ui - Button */}
      <section className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          shadcn/ui - Buttons.
        </h2>
        <div className="flex gap-4 flex-wrap justify-center">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline" enableRipple={true}>
            Outline
          </Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>
    </div>
  );
}
