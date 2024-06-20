<script lang="ts" setup>
import { ref } from 'vue';

const coins = [
    "BTC", "ETH", "USDT", "USDC", "DAI", "UXD", "USDP", "WLD", "BNB", "SOL", 
    "XRP", "ADA", "AVAX", "DOGE", "TRX", "LINK", "DOT", "MATIC", "SHIB", "LTC", 
    "BCH", "EOS", "XLM", "FTM", "AAVE", "UNI", "ALGO", "BAT", "PAXG", "CAKE", 
    "AXS", "SLP", "MANA", "SAND", "CHZ"
];

const selectedCoin = ref(''); // enum
</script>

<template>
    <div class="grid grid-cols-1">
        <div class="flex p-20">
            <section className="w-full max-w-[1200px] mx-auto py-12 px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <div className="grid gap-6">
                    <div className="grid gap-2">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Trade Cryptocurrencies</h1>
                        <p className="text-muted-foreground">Buy and sell your favorite digital assets with ease.</p>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                        <label htmlFor="crypto" className="block text-sm font-medium text-muted-foreground">
                            Select Cryptocurrency
                        </label>
                        <div className="relative">
                            <select
                            id="crypto"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-2"
                            >
                            <option v-for="coin in coins">{{ coin }}</option>
                            </select>
                        </div>
                        </div>
                        <div className="grid gap-2">
                        <label htmlFor="amount" className="block text-sm font-medium text-muted-foreground">
                            Amount
                        </label>
                        <input
                            id="amount"
                            type="number"
                            step="0.01"
                            min="0.01"
                            placeholder="Enter amount"
                            className="block w-full rounded-md border-2 p-1 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                        />
                        </div>
                        <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-white font-semibold shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                        Buy Cryptocurrency
                        </button>
                    </div>
                    </div>
                    <div className="hidden md:block">
                    <div className="w-full aspect-[4/3]">
                        <LineChart className="w-full h-full" />
                    </div>
                    </div>
                </div>
                </section>
                    </div>
    </div>
</template>