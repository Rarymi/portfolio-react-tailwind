export const Teste = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center">
          TS
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-red-500 rounded-full w-12 h-12 flex items-center justify-center">
          3.9
        </div>

        <svg className="absolute top-0 left-0 w-full h-full">
          <path
            d="M 50% 0 Q 0 50% 50% 100%"
            stroke="black"
            fill="transparent"
          />
        </svg>
      </div>
    </div>
  );
};
