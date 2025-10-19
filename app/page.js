import { RippleButton } from "@/components/ripple-button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 gap-8 p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Magic UI Demo
        </h1>
        <p className="text-lg text-slate-300">
          Click the button to see the ripple effect
        </p>
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        <RippleButton>Click me</RippleButton>
        <RippleButton rippleColor="59, 130, 246" className="bg-blue-600 hover:bg-blue-700">
          Blue Button
        </RippleButton>
        <RippleButton rippleColor="34, 197, 94" className="bg-green-600 hover:bg-green-700">
          Green Button
        </RippleButton>
      </div>
    </div>
  );
}
