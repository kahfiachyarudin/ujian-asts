import React from "react";
import { Link, useParams } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Detail() {
  const { id } = useParams();
  const faqData = [
    {
      id: 1,
      question: "Cara mendaftar akun",
      answer: "Petunjuk langkah demi langkah untuk mendaftarkan akun",
    },
    {
      id: 2,
      question: "Metode Pembayaran",
      answer: "Kami menerima pembayaran melalui berbagai metode yang tersedia.",
    },
    {
      id: 3,
      question: "Kebijakan pengembalian",
      answer:
        "Informasi tentang kebijakan pengembalian dan prosedur yang berlaku.",
    },
  ];
  const faqItem = faqData.find((item) => item.id === parseInt(id));

  if (!faqItem) {
    return <div>FAQ not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link to="/" className="text-primary underline-offset-4 mt-4 block">
        ← Kembali ke halaman utama
      </Link>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
            {id}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="mb-2 text-sm font-medium text-primary">
            Detail pertanyaan
          </h3>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            detail HOME - ID:{id}
          </h1>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Ini adalah halaman detail untuk HOME dengan ID:{" "}
            <strong className="font-semibold text-foreground">{id}</strong>
          </p>
          <div class="my-6 h-px bg-border"></div>
          <div class="rounded-xl bg-muted/50 p-4">
            <p class="text-sm leading-6 text-muted-foreground">
              Informasi lengkap mengenai pertanyaan ini dapat ditampilkan pada
              halaman detail.
            </p>
          </div>
          <a
            class="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            href="/"
            data-discover="true"
          >
            Kembali ke HOME
          </a>
        </CardContent>
      </Card>
    </div>
  );
}

export default Detail;
