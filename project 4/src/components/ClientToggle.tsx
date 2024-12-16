import React from 'react';

type ClientToggleProps = {
  isBusinessClient: boolean;
  setIsBusinessClient: (value: boolean) => void;
};

export default function ClientToggle({ isBusinessClient, setIsBusinessClient }: ClientToggleProps) {
  return (
    <div className="relative inline-block w-64 h-10">
      <button
        className="absolute inset-0 bg-background rounded-full transition-all duration-300 focus:outline-none"
        onClick={() => setIsBusinessClient(!isBusinessClient)}
        type="button"
        aria-pressed={isBusinessClient}
        aria-label="Basculer entre particulier et professionnel"
      >
        <div
          className={`absolute top-0 h-full w-1/2 bg-primary rounded-full transition-all duration-300 ${
            isBusinessClient ? 'left-1/2' : 'left-0'
          }`}
        />
        <div className="absolute inset-0 flex text-sm">
          <span
            className={`flex-1 flex items-center justify-center z-10 transition-colors duration-300 ${
              !isBusinessClient ? 'text-white' : 'text-primary'
            }`}
          >
            Particulier
          </span>
          <span
            className={`flex-1 flex items-center justify-center z-10 transition-colors duration-300 ${
              isBusinessClient ? 'text-white' : 'text-primary'
            }`}
          >
            Professionnel
          </span>
        </div>
      </button>
    </div>
  );
}