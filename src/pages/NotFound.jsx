import React from "react";

function NotFound() {
  return (
    <div>
      <div class="relative z-10 mx-auto max-w-2xl text-center">
        <div class="relative mb-8">
          <div class="select-none text-[9rem] font-black leading-none tracking-[-0.08em] text-foreground/5 sm:text-[12rem]">
            404
          </div>
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="flex items-center gap-2 sm:gap-4">
              <span class="text-7xl font-black tracking-tight text-foreground sm:text-9xl">
                4
              </span>
              <div class="relative flex h-20 w-20 items-center justify-center rounded-full border-[10px] border-primary sm:h-28 sm:w-28 sm:border-[14px]">
                <div class="h-3 w-3 rounded-full bg-primary sm:h-4 sm:w-4"></div>
                <div class="absolute -right-2 top-1/2 h-px w-5 bg-primary sm:-right-3 sm:w-8"></div>
              </div>
              <span class="text-7xl font-black tracking-tight text-foreground sm:text-9xl">
                4
              </span>
            </div>
          </div>
        </div>
        <div class="space-y-3">
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Lost somewhere?
          </p>
          <h1 class="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Halaman ini tidak ditemukan.
          </h1>
          <p class="mx-auto max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
            Sepertinya halaman yang Anda cari sedang tersesat, dipindahkan, atau
            memang belum pernah ada.
          </p>
        </div>
        <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            class="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            href="/"
            data-discover="true"
          >
            ← Kembali ke Home
          </a>
          <a
            class="inline-flex items-center justify-center rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            href="/"
            data-discover="true"
          >
            Pusat Bantuan
          </a>
        </div>
        <div class="mt-10 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span class="h-px w-8 bg-border"></span>
          <span>Error 404</span>
          <span class="h-px w-8 bg-border"></span>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
