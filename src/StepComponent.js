function StepComponent({ label, counter, onIncrement, onDecrement }) {
  return (
    <div>
      <div className="custom-number-input inline-block">
        <div className="flex flex-row rounded-lg relative bg-transparent mt-1">
          <button
            data-action="decrement"
            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
            onClick={onDecrement}
          >
            <span className="m-auto text-2xl font-thin">−</span>
          </button>

          <input
            readOnly
            className="focus:outline-none text-center bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-base cursor-default text-gray-700 outline-none"
            name="custom-input-number"
            value={`${label}: ${counter}`}
          />

          <button
            data-action="increment"
            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
            onClick={onIncrement}
          >
            <span className="m-auto text-2xl font-thin">+</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default StepComponent;
