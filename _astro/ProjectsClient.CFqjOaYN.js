import{j as r}from"./jsx-runtime.D_zvdyIk.js";import{r as n}from"./index.qNTDzdXh.js";import{f as m}from"./preloader.CK6DpYzG.js";const b="urlitby4",x="production",h="v2025-01-28";function v({locale:t}){const[i,s]=n.useState([]),[d,c]=n.useState(!0);n.useEffect(()=>{const e=`*[_type == "project" && defined(slug)] | order(sortOrder asc, publishedAt desc) {
      "company": title[language == "${t}"][0].value,
      "slug": slug.current,
      "category": category[language == "${t}"][0].value,
      "description": description[language == "${t}"][0].value,
      "imageUrl": mainImage.asset->url
    }`,g=`https://${b}.api.sanity.io/${h}/data/query/${x}?query=${encodeURIComponent(e)}`;m(g).then(o=>o.json()).then(o=>{const p=(o.result||[]).map(a=>({slug:a.slug,company:a.company||a.slug,category:a.category||"",description:a.description||"",imageUrl:a.imageUrl||null}));s(p)}).catch(()=>s([])).finally(()=>c(!1))},[t]);const l=e=>t==="es"?`/es/proyectos/${e}`:`/projects/${e}`;return r.jsxs(r.Fragment,{children:[d?r.jsx("div",{className:"projects-rows",children:[1,2,3].map(e=>r.jsxs("div",{className:"masonry-card",style:{minHeight:240},children:[r.jsx("div",{className:"card-image",style:{background:"var(--bg-secondary)"}}),r.jsxs("div",{className:"card-body",style:{padding:"16px 16px 12px",gap:8,alignItems:"center"},children:[r.jsx("div",{className:"h-4 w-32 rounded",style:{background:"var(--bg-secondary)"}}),r.jsx("div",{className:"h-3 w-full rounded",style:{background:"var(--bg-secondary)"}}),r.jsx("div",{className:"h-3 w-3/4 rounded",style:{background:"var(--bg-secondary)"}})]})]},e))}):r.jsx("div",{className:"projects-rows",children:i.map(e=>r.jsxs("a",{href:l(e.slug),className:"masonry-card",children:[r.jsxs("div",{className:"card-image",children:[r.jsx("span",{className:"card-tag",children:e.category}),e.imageUrl&&r.jsx("img",{src:e.imageUrl,alt:e.company})]}),r.jsxs("div",{className:"card-body",children:[r.jsx("h3",{className:"card-title",children:e.company}),r.jsx("p",{className:"card-description text-xs sm:text-sm md:text-base",children:e.description})]})]}))}),r.jsx("style",{children:`
        .masonry-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.04) 0%, transparent 50%),
            linear-gradient(320deg, rgba(255, 255, 255, 0.02) 0%, transparent 40%),
            linear-gradient(to bottom, #1a1a2e 0%, #16213e 100%);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow:
            0 1px 2px rgba(3, 9, 35, 0.4),
            0 4px 16px rgba(3, 9, 35, 0.25);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .masonry-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: radial-gradient(ellipse at 20% 0%, rgba(255, 255, 255, 0.03) 0%, transparent 50%);
          pointer-events: none;
          z-index: 1;
        }

        .masonry-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to right, rgba(3, 9, 35, 0.1), transparent 30%),
            linear-gradient(to left, rgba(3, 9, 35, 0.1), transparent 30%),
            linear-gradient(to top, rgba(3, 9, 35, 0.2), transparent 30%);
          pointer-events: none;
          border-radius: 20px;
          z-index: 2;
        }

        .masonry-card:hover {
          border-color: rgba(255, 255, 255, 0.15);
          box-shadow:
            0 1px 2px rgba(3, 9, 35, 0.4),
            0 4px 16px rgba(3, 9, 35, 0.25);
          transform: none;
        }

        .masonry-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          z-index: 0;
        }

        .masonry-card:hover img {
          transform: scale(1.05);
        }

        .card-image {
          width: 100%;
          height: 50%;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }

        .card-image::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.55) 0%, transparent 100%);
          pointer-events: none;
          z-index: 5;
        }

        .card-tag {
          position: absolute;
          bottom: 12px;
          left: 12px;
          z-index: 10;
          padding: 4px 10px;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: rgba(255, 255, 255, 0.7);
          background: transparent;
          backdrop-filter: blur(4px);
          transition: all 0.5s ease;
          pointer-events: none;
        }

        .masonry-card:hover .card-tag {
          border-color: var(--accent);
          color: #fff;
          background: var(--accent);
        }

        :root[data-theme="light"] .masonry-card:hover .card-tag {
          border-color: var(--accent);
          color: #fff;
          background: var(--accent);
        }

        .card-body {
          width: 100%;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 16px 12px;
          margin-top: 12px;
          box-sizing: border-box;
          position: relative;
          z-index: 3;
        }

        .card-title {
          margin: 0 0 4px 0;
          font-size: 0.9rem;
          font-weight: 600;
          text-align: center;
          line-height: 1.3;
          color: var(--text-primary);
        }

        .card-description {
          margin: 7%;
          width: 100%;
          text-align: center;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        :root[data-theme="light"] .masonry-card {
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.7) 0%, transparent 50%),
            linear-gradient(320deg, rgba(255, 255, 255, 0.4) 0%, transparent 40%),
            linear-gradient(to bottom, #FFFFFF 0%, #F4F6FB 100%);
          border: 1px solid rgba(3, 9, 35, 0.15);
          box-shadow:
            0 1px 2px rgba(0, 0, 0, 0.06),
            0 4px 16px rgba(0, 0, 0, 0.08);
        }

        :root[data-theme="light"] .masonry-card::before {
          background: radial-gradient(ellipse at 20% 0%, rgba(0, 89, 255, 0.03) 0%, transparent 50%);
        }

        :root[data-theme="light"] .masonry-card::after {
          background:
            linear-gradient(to right, rgba(231, 236, 247, 0.15), transparent 30%),
            linear-gradient(to left, rgba(231, 236, 247, 0.15), transparent 30%),
            linear-gradient(to top, rgba(3, 9, 35, 0.04), transparent 30%);
        }

        :root[data-theme="light"] .masonry-card:hover {
          border-color: rgba(3, 9, 35, 0.15);
          box-shadow:
            0 1px 2px rgba(0, 0, 0, 0.04),
            0 4px 16px rgba(0, 0, 0, 0.06);
          transform: none;
        }

        .projects-rows {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 48px;
        }

        @media (max-width: 767px) {
          .projects-rows {
            grid-template-columns: 1fr;
          }
        }
      `})]})}export{v as default};
