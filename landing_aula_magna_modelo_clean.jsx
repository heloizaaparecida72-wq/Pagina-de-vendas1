import React from "react";

/**
 * Landing Page — Emagrecimento (clean, responsiva)
 * Seções: hero (vídeo), dores, soluções, oferta, depoimentos, FAQ, garantia, rodapé
 *
 * Personalize:
 *  - Troque YOUTUBE_ID pelo ID do seu vídeo
 *  - Ajuste data/horário, preço e URL de checkout
 *  - Substitua textos pelas suas promessas e provas
 */

const dores = [
  "Você tenta de tudo e o peso volta (efeito sanfona).",
  "Falta tempo e energia para treinos longos.",
  "Dietas restritivas que geram ansiedade e recaídas.",
  "Informações conflitantes: o que realmente funciona para você?",
];

const solucoes = [
  "Protocolo prático em 7 minutos/dia para acelerar a queima de gordura.",
  "Plano de refeições flexível (sem passar fome) e lista de substituições.",
  "Receitas rápidas termogênicas e estratégias anti-compulsão.",
  "Acompanhamento por 14 dias no grupo para tirar dúvidas e manter ritmo.",
];

const depoimentos = [
  { nome: "Patrícia A.", texto: "Em 12 dias, -3,8 kg sem sofrer. O protocolo de 7 minutos virou hábito!" },
  { nome: "Renato M.", texto: "Parecia impossível. Com as trocas inteligentes parei de beliscar e desinchei rápido." },
  { nome: "Lívia S.", texto: "Receitas simples + checklist diário. Resultado constante e sem ansiedade." },
];

const faq = [
  { q: "Preciso fazer academia?", a: "Não. O método foca em protocolo rápido e ajustes alimentares realistas. Se você treina, potencializa o resultado." },
  { q: "Posso fazer se trabalho o dia todo?", a: "Sim. O plano foi desenhado para rotinas corridas: 7 minutos/dia + escolhas simples nas refeições." },
  { q: "Tem cardápio fechado?", a: "Você recebe modelos e uma lista de substituições para montar conforme seu gosto e orçamento." },
  { q: "Em quanto tempo vejo resultado?", a: "Muitos relatam mudança já na 1ª semana (menos inchaço e medidas). Resultados variam conforme adesão e histórico." },
];

export default function EmagrecimentoLanding() {
  const preco = "R$ 29,90";
  const parcelado = "4x de R$ 8,14";
  const data = "Próxima turma: 04 de Novembro";
  const horario = "20h às 22h (Brasília)";
  const checkoutUrl = "https://pay.kirvano.com/0cc1935f-1a05-493b-8097-3a380df0a4cf"; // seu link
  const heroImageUrl = "/mnt/data/9fb23ae1-d4c8-402a-881f-7dfe73555a2a.png"; // troque por URL/host da sua imagem se necessário

  const [variant, setVariant] = React.useState('A');

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Toggle A/B (apenas para você testar no editor) */}
        <div className="pointer-events-auto absolute right-4 top-4 z-20 hidden gap-2 rounded-xl border border-slate-800 bg-slate-900/80 p-1 text-xs text-slate-300 shadow-lg sm:flex">
          <button onClick={() => setVariant('A')} className={`rounded-lg px-3 py-1 ${variant==='A' ? 'bg-emerald-500 text-slate-900' : 'hover:bg-slate-800'}`}>Variante A</button>
          <button onClick={() => setVariant('B')} className={`rounded-lg px-3 py-1 ${variant==='B' ? 'bg-amber-400 text-slate-900' : 'hover:bg-slate-800'}`}>Variante B</button>
        </div>
        <div className="mx-auto max-w-6xl px-4 py-10 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
                Método de Emagrecimento — 7 Minutos
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Perca peso de forma <span className="text-emerald-400">rápida e sustentável</span> com um protocolo de
                apenas <span className="text-emerald-400">7 minutos por dia</span>
              </h1>
              <p className="mt-4 text-slate-300">
                {data}, das {horario}. Aula ao vivo (Zoom) — sem replay. Passo a passo direto para acelerar a queima de
                gordura, controlar a fome e vencer o efeito sanfona **sem dietas malucas**.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 inline-block"/>Resultados perceptíveis já na 1ª semana (menos inchaço e medidas).</li>
                <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 inline-block"/>Protocolos testados + cardápios flexíveis que cabem na sua rotina.</li>
                <li className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 inline-block"/>Checklist diário e grupo por 14 dias para manter consistência.</li>
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a href={checkoutUrl} className="rounded-2xl bg-emerald-500 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:scale-[1.02] hover:bg-emerald-400">
                  Garantir minha vaga por {preco}
                </a>
                <div className="text-sm text-slate-400">{parcelado} • Grupo no WhatsApp</div>
              </div>
            </div>

            {variant === 'A' ? (
              // Variante A — sua imagem com overlay e CTA verde
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 shadow-2xl">
                <img src={heroImageUrl} alt="Criativo — Perca até 20kg antes do Natal" className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-5 flex w-full justify-center px-4">
                  <a href={checkoutUrl} className="w-full max-w-md rounded-2xl bg-emerald-500 px-6 py-3 text-center text-base font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 backdrop-blur-sm transition hover:scale-[1.02] hover:bg-emerald-400">Ativar desconto agora</a>
                </div>
                <div className="absolute bottom-24 left-4 flex items-center gap-2 rounded-xl bg-black/50 px-3 py-1 text-sm text-amber-300 backdrop-blur-sm"><span role="img" aria-label="bell">🔔</span>Garantia 7 dias</div>
                <div className="absolute bottom-24 right-4 rounded-xl bg-black/50 px-3 py-1 text-sm text-slate-200 backdrop-blur-sm">Resultados variam</div>
              </div>
            ) : (
              // Variante B — overlay mais escuro e CTA âmbar
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 shadow-2xl">
                <img src={heroImageUrl} alt="Criativo — Perca até 20kg antes do Natal" className="h-full w-full object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-5 flex w-full justify-center px-4">
                  <a href={checkoutUrl} className="w-full max-w-md rounded-2xl bg-amber-400 px-6 py-3 text-center text-base font-semibold text-slate-900 shadow-lg shadow-amber-400/30 backdrop-blur-sm transition hover:scale-[1.02] hover:bg-amber-300">Começar agora por {preco}</a>
                </div>
                <div className="absolute bottom-24 left-4 flex items-center gap-2 rounded-xl bg-black/60 px-3 py-1 text-sm text-amber-300 backdrop-blur-sm">Garantia 7 dias</div>
                <div className="absolute bottom-24 right-4 rounded-xl bg-black/60 px-3 py-1 text-sm text-slate-200 backdrop-blur-sm">Sem replay</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* STICKY CTA (mobile) */}
      <div className="fixed inset-x-0 bottom-0 z-50 block bg-slate-900/80 p-3 backdrop-blur-sm shadow-2xl sm:hidden">
        <a href={checkoutUrl} className="block w-full rounded-xl bg-emerald-500 px-4 py-3 text-center font-semibold text-slate-900">Garantir minha vaga por {preco}</a>
      </div>

      {/* DORES */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold sm:text-3xl">O que te impede de emagrecer?</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dores.map((d, i) => (
            <div key={i} className="rounded-2xl border border-emerald-400/10 bg-slate-900/40 p-4 shadow-sm">
              <p className="text-slate-200">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section className="bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold sm:text-3xl">Como o método resolve</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solucoes.map((s, i) => (
              <div key={i} className="rounded-2xl border border-emerald-400/10 bg-slate-900/50 p-4">
                <p className="text-slate-200">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-white p-8 text-slate-900 shadow-2xl">
          <h3 className="text-center text-xl font-bold">MÉTODO 7 MINUTOS — TURMA AO VIVO</h3>
          <p className="mt-2 text-center text-slate-600">{data} • {horario} • Ao vivo no Zoom • Sem replay</p>
          <ul className="mx-auto mt-6 grid max-w-2xl list-disc gap-2 pl-5 text-slate-700">
            <li>Protocolo prático de 7 minutos/dia.</li>
            <li>Plano alimentar flexível + receitas rápidas.</li>
            <li>Checklist diário e grupo de 14 dias.</li>
          </ul>
          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center">
            <p className="text-sm text-slate-500">por apenas</p>
            <p className="mt-1 text-3xl font-extrabold">{parcelado}</p>
            <p className="text-sm text-slate-500">ou {preco} à vista</p>
            <a href={checkoutUrl} className="mt-5 inline-block rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-emerald-500/20 transition hover:scale-[1.02] hover:bg-emerald-400">Quero minha vaga por {preco}</a>
            <p className="mt-2 text-xs text-slate-500">Pagamento seguro • Pix • Cartão • Boleto</p>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold sm:text-3xl">Resultados reais</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {depoimentos.map((d) => (
              <figure key={d.nome} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <blockquote className="text-slate-200">“{d.texto}”</blockquote>
                <figcaption className="mt-4 text-sm text-slate-400">— {d.nome}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold sm:text-3xl">Perguntas frequentes</h2>
        <div className="mt-6 divide-y divide-slate-800 rounded-2xl border border-slate-800">
          {faq.map((item, idx) => (
            <details key={idx} className="group p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-slate-100">
                {item.q}
                <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-sm text-slate-300 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-slate-300">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* GARANTIA */}
      <section className="bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-3xl border border-emerald-400/20 bg-slate-900/60 p-8">
            <h2 className="text-center text-2xl font-bold sm:text-3xl">Garantia Simples</h2>
            <p className="mx-auto mt-3 max-w-3xl text-center text-slate-300">
              Se nas primeiras 2 horas você sentir que o método não entregou valor prático, envie mensagem ao suporte no
              mesmo dia e reembolsamos 100%. Sem burocracia.
            </p>
            <div className="mt-6 text-center">
              <a href={checkoutUrl} className="rounded-2xl bg-emerald-500 px-6 py-3 font-semibold text-slate-900 shadow-lg transition hover:scale-[1.02] hover:bg-emerald-400">Quero garantir minha vaga</a>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-top border-slate-800 px-4 py-10">
        <div className="mx-auto max-w-6xl text-sm text-slate-400">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Método 7 Minutos. Todos os direitos reservados.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-slate-200">Termos</a>
              <a href="#" className="hover:text-slate-200">Privacidade</a>
              <a href="#" className="hover:text-slate-200">Suporte</a>
            </div>
          </div>
          <p className="mt-6 text-xs leading-relaxed">
            Este conteúdo é informativo. Resultados variam conforme organismo, histórico e adesão. Consulte um
            profissional de saúde antes de iniciar qualquer protocolo. Não substitui acompanhamento médico/nutricional.
          </p>
        </div>
      </footer>
    </main>
  );
}
