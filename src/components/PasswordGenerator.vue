<template>
  <div
    class="w-full bg-neutral-800 text-neutral-100 border-2 border-neutral-900 rounded-md shadow-xl flex flex-col justify-center items-center px-4 py-12 gap-8"
  >
    <h1 class="text-5xl font-bold">QuickPass</h1>
    <div class="w-full flex flex-col justify-center items-center gap-2">
      <h1 class="text-lg font-medium">Generated Password</h1>
      <div
        @click="copyPassword"
        class="text-lg w-4/5 p-4 text-center flex flex-col flex-wrap justify-center items-center rounded-md bg-neutral-900 border-2 border-black hover:border-neutral-700 hover:shadow-md duration-300 cursor-pointer"
      >
        <p class="w-full break-words">
          {{ generatedPassword }}
        </p>
      </div>
    </div>

    <div
      class="flex flex-col justify-evenly p-5 rounded-md font-medium flex-wrap gap-8"
    >
      <div class="w-full flex flex-row justify-evenly items-center gap-8">
        <label
          class="flex flex-col justify-center items-center gap-2 cursor-pointer"
        >
          <input
            v-model="includeUpperCase"
            type="checkbox"
            class="w-6 h-6 accent-black"
          />
          <span>Uppercase</span>
        </label>
        <label
          class="flex flex-col gap-2 justify-center items-center cursor-pointer"
        >
          <input
            v-model="includeNumbers"
            type="checkbox"
            class="w-6 h-6 accent-black"
          />
          <span>Numbers</span>
        </label>
        <label
          class="flex flex-col gap-2 justify-center items-center cursor-pointer"
        >
          <input
            v-model="includeSymbols"
            type="checkbox"
            class="w-6 h-6 accent-black"
          />
          <span>Symbols</span>
        </label>
      </div>

      <label class="flex gap-2 justify-center items-center cursor-pointer">
        <span>Length</span>
        <input
          v-model="passwordLength"
          class="w-full accent-black"
          type="range"
          :min="minLength"
          :max="maxLength"
        />
        <input
          v-model="passwordLength"
          class="w-12 py-1 bg-neutral-900 border-2 border-black rounded-md flex justify-center items-center text-center"
          type="number"
          :min="minLength"
          :max="maxLength"
        />
      </label>
    </div>

    <div class="w-full flex flex-row justify-center items-center gap-4">
      <button
        @click="generatedRandomPassword"
        class="w-36 h-14 bg-neutral-900 border-2 border-black font-medium rounded-md hover:bg-black hover:shadow-md active:scale-95 duration-300"
      >
        Generate
      </button>
      <button
        @click="copyPassword"
        class="w-36 h-14 bg-neutral-900 border-2 border-black font-medium rounded-md hover:bg-black hover:shadow-md active:scale-95 duration-300"
      >
        Copy
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRandomPasswordGenerator } from "../hooks/useRandomPasswordGenerator";

const {
  generatedPassword,
  minLength,
  maxLength,
  includeNumbers,
  includeSymbols,
  includeUpperCase,
  passwordLength,
  copyPassword,
  generatedRandomPassword,
} = useRandomPasswordGenerator();
</script>
