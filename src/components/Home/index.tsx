import { HalfCircle } from "./HalfCircle.tsx";

export const Home = () => {
  return (
    <div className={`relative flex justify-center`}>
      <HalfCircle />;
      <div
        className={`absolute flex flex-col items-center justify-center text-xl font-semibold text-indigo-900`}
      >
        <h1>I speak your </h1>
        <h1>language</h1>
      </div>
    </div>
  );
};
