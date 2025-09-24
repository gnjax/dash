# Codebase Summary

> Generated: 2025-09-24T10:03:05.021Z
> Commit: 8b14f92e9da9f695861bb06540f2351137144679
> Date: 2025-09-24 10:56:19 +0200
> Remote: git@github.com:gnjax/dash.git

This file concatenates important text/code files in the repo so a single raw URL can be shared.

---


---

## README.md

```md
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

---

## biome.json

```json
{
  "$schema": "https://biomejs.dev/schemas/2.2.0/schema.json",
  "vcs": {
    "enabled": true,
    "clientKind": "git",
    "useIgnoreFile": true
  },
  "files": {
    "ignoreUnknown": true,
    "includes": ["**", "!node_modules", "!.next", "!dist", "!build"]
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "suspicious": {
        "noUnknownAtRules": "off"
      }
    },
    "domains": {
      "next": "recommended",
      "react": "recommended"
    }
  },
  "assist": {
    "actions": {
      "source": {
        "organizeImports": "on"
      }
    }
  }
}

```

---

## debug-final.html

```html
<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" lang="fr" dir="ltr" class="tablesaw-enhanced"><head><title>
	Parcels&nbsp;
</title><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><link rel="shortcut icon" href="https://zenmarket.jp/favicon.ico?1"><link rel="apple-touch-icon" href="https://zenmarket.jp/img/apple-touch-icon.png"><link rel="apple-touch-icon" sizes="120x120" href="https://zenmarket.jp/img/apple-touch-icon-120x120.png"><link rel="apple-touch-icon" sizes="152x152" href="https://zenmarket.jp/img/apple-touch-icon-152x152.png"><meta name="description" content="ZenMarket est la solution pour vos achats au Japon. Amazon Japon, enchères JDirectItems, Rakuten, Mercari, Rakuma... Découvrez figurines, cartes, consoles, mode, vintage, nourriture japonaise et bien plus encore !"><link rel="alternate" hreflang="x-default" href="https://zenmarket.jp/profile/parcel.aspx?state=5"><link rel="canonical" href="https://zenmarket.jp/profile/parcel.aspx?state=5"><link rel="alternate" hreflang="en" href="https://zenmarket.jp/en/profile/parcel.aspx?state=5"><link rel="alternate" hreflang="ru" href="https://zenmarket.jp/ru/profile/parcel.aspx?state=5"><link rel="alternate" hreflang="uk" href="https://zenmarket.jp/ua/profile/parcel.aspx?state=5"><link rel="alternate" hreflang="zh-cn" href="https://zenmarket.jp/cn/profile/parcel.aspx?state=5"><link rel="alternate" hreflang="zh-tw" href="https://zenmarket.jp/tw/profile/parcel.aspx?state=5"><link rel="alternate" hreflang="ja" href="https://zenmarket.jp/ja/profile/parcel.aspx?state=5"><link rel="alternate" hreflang="es" href="https://zenmarket.jp/es/profile/parcel.aspx?state=5"><link rel="alternate" hreflang="fr" href="https://zenmarket.jp/fr/profile/parcel.aspx?state=5"><link rel="alternate" hreflang="ms" href="https://zenmarket.jp/ms/profile/parcel.aspx?state=5"><link rel="alternate" hreflang="vi" href="https://zenmarket.jp/vi/profile/parcel.aspx?state=5"><link rel="alternate" hreflang="ar" href="https://zenmarket.jp/ar/profile/parcel.aspx?state=5"><link rel="alternate" hreflang="de" href="https://zenmarket.jp/de/profile/parcel.aspx?state=5"><link rel="alternate" hreflang="id" href="https://zenmarket.jp/id/profile/parcel.aspx?state=5"><link rel="alternate" hreflang="th" href="https://zenmarket.jp/th/profile/parcel.aspx?state=5"><link rel="alternate" hreflang="it" href="https://zenmarket.jp/it/profile/parcel.aspx?state=5"><link rel="alternate" hreflang="pt" href="https://zenmarket.jp/pt/profile/parcel.aspx?state=5"><link rel="alternate" hreflang="tr" href="https://zenmarket.jp/tr/profile/parcel.aspx?state=5"><link rel="alternate" hreflang="pl" href="https://zenmarket.jp/pl/profile/parcel.aspx?state=5"><link rel="alternate" hreflang="ko" href="https://zenmarket.jp/ko/profile/parcel.aspx?state=5"><link href="//cdn.jsdelivr.net/bootstrap/3.3.7/css/bootstrap.min.css?v=1.00" rel="stylesheet" type="text/css"><link href="//cdn.jsdelivr.net/jgrowl/1.3.0/jquery.jgrowl.css?v=1.00" rel="stylesheet" type="text/css"><script src="https://ct.pinterest.com/static/ct/token_create.js"></script><script async="" src="https://scripts.clarity.ms/0.8.29/clarity.js"></script><script src="https://diffuser-cdn.app-us1.com/diffuser/diffuser.js" async=""></script><script src="https://script.crazyegg.com/pages/versioned/commontransformations-scripts/00d545fdc46c7e011b9eb4944fc2cf63.js" type="text/javascript" async=""></script><script async="" src="https://www.clarity.ms/tag/uet/97012053"></script><script async="" src="https://s.pinimg.com/ct/lib/main.817db39b.js"></script><script async="" src="https://snap.licdn.com/li.lms-analytics/insight.old.min.js"></script><script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=AW-824920677&amp;cx=c&amp;gtm=4e5981"></script><script type="text/javascript" async="" src="https://static.ads-twitter.com/uwt.js"></script><script type="text/javascript" async="" src="https://s.pinimg.com/ct/core.js"></script><script id="spdt-capture" async="" src="https://pixel.byspotify.com/ping.min.js"></script><script src="https://connect.facebook.net/signals/config/1125968480779087?v=2.9.228&amp;r=stable&amp;domain=zenmarket.jp&amp;hme=98a01a771f1571b63142a5ab6b1965d297e9ee4aa2fec3ece59f72d8c5b28e26&amp;ex_m=86%2C148%2C128%2C19%2C121%2C60%2C41%2C122%2C67%2C59%2C135%2C75%2C13%2C85%2C27%2C116%2C107%2C65%2C68%2C115%2C132%2C94%2C137%2C7%2C3%2C4%2C6%2C5%2C2%2C76%2C84%2C138%2C212%2C160%2C54%2C217%2C214%2C215%2C47%2C175%2C26%2C64%2C221%2C220%2C163%2C29%2C53%2C8%2C56%2C80%2C81%2C82%2C87%2C111%2C28%2C25%2C114%2C110%2C109%2C129%2C66%2C131%2C130%2C43%2C112%2C52%2C104%2C12%2C134%2C38%2C203%2C205%2C170%2C22%2C23%2C24%2C16%2C17%2C37%2C34%2C35%2C71%2C77%2C79%2C92%2C120%2C123%2C39%2C93%2C20%2C18%2C98%2C61%2C32%2C125%2C124%2C126%2C117%2C21%2C31%2C51%2C91%2C133%2C62%2C15%2C30%2C185%2C156%2C262%2C201%2C146%2C188%2C181%2C89%2C113%2C70%2C102%2C46%2C40%2C100%2C101%2C106%2C50%2C14%2C108%2C99%2C57%2C42%2C95%2C45%2C48%2C0%2C83%2C136%2C1%2C105%2C11%2C103%2C9%2C49%2C78%2C55%2C127%2C58%2C97%2C74%2C73%2C44%2C118%2C72%2C69%2C63%2C96%2C88%2C36%2C119%2C33%2C90%2C10%2C139" async=""></script><script type="text/javascript" async="" src="https://connect.facebook.net/en_US/fbevents.js"></script><script type="text/javascript" async="" src="https://snap.licdn.com/li.lms-analytics/insight.min.js"></script><script type="text/javascript" async="" src="https://bat.bing.com/bat.js"></script><script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=AW-452778110&amp;cx=c&amp;gtm=4e5981"></script><script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=G-LGLDRPP0Y9&amp;cx=c&amp;gtm=4e5981"></script><script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-K6QXBJ8"></script><script src="//cdn.jsdelivr.net/jquery/2.1.1/jquery.min.js?v=1.00" type="text/javascript"></script><script src="//cdn.jsdelivr.net/jgrowl/1.3.0/jquery.jgrowl.js?v=1.00" type="text/javascript"></script><script src="//cdn.jsdelivr.net/bootstrap/3.3.7/js/bootstrap.min.js?v=1.00" type="text/javascript"></script><script src="https://cdn.jsdelivr.net/jquery.sticky/1.0.1/jquery.sticky.min.js?v=1.00" type="text/javascript"></script><script src="//cdn.jsdelivr.net/jquery.cookie/1.4.1/jquery.cookie.min.js?v=1.00" type="text/javascript"></script><link rel="shortcut icon" href="/favicon.ico"><script src="/js/bootstrap-typeahead.js?v=1.1" type="text/javascript"></script><link href="//cdn.jsdelivr.net/npm/mmenu-js@8.5.24/dist/mmenu.min.css?v=1.00" rel="stylesheet" type="text/css"><script src="//cdn.jsdelivr.net/npm/mmenu-js@8.5.24/dist/mmenu.min.js?v=1.00" type="text/javascript"></script><link href="//cdn.jsdelivr.net/select2/4.0.3/css/select2.min.css?v=1.00" rel="stylesheet" type="text/css"><script src="//cdn.jsdelivr.net/select2/4.0.3/js/select2.min.js?v=1.00" type="text/javascript"></script><script src="/js/header.js?v=1.61" type="text/javascript"></script><!-- Google Tag Manager --><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K6QXBJ8');</script><!-- End Google Tag Manager --><link href="/profile/css/main.css?v=1.44" rel="stylesheet" type="text/css"><script src="//cdn.jsdelivr.net/dot.js/1.0.3/doT.min.js?v=1.00" type="text/javascript"></script><script src="/profile/js/profile-utils.js?v=1.02" type="text/javascript"></script><script src="//cdn.jsdelivr.net/accounting.js/0.3.2/accounting.min.js?v=1.00" type="text/javascript"></script><script src="//cdn.jsdelivr.net/npm/jquery-validation@1.14.0/dist/jquery.validate.min.js?v=1.01" type="text/javascript"></script><link href="//cdn.jsdelivr.net/tablesaw/0.1.4/tablesaw.stackonly.css?v=1.00" rel="stylesheet" type="text/css"><script src="//cdn.jsdelivr.net/tablesaw/0.1.4/tablesaw.stackonly.js?v=1.00" type="text/javascript"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/dist/js/bootstrap-datepicker.min.js?v=1.00" type="text/javascript"></script><link href="https://cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/dist/css/bootstrap-datepicker.min.css?v=1.00" rel="stylesheet" type="text/css"><link href="https://cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/dist/css/bootstrap-datepicker3.min.css?v=1.00" rel="stylesheet" type="text/css"><script src="https://cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/js/locales/bootstrap-datepicker.zh-CN.js?v=1.00" type="text/javascript"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/js/locales/bootstrap-datepicker.zh-TW.js?v=1.00" type="text/javascript"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/js/locales/bootstrap-datepicker.uk.js?v=1.00" type="text/javascript"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/js/locales/bootstrap-datepicker.ru.js?v=1.00" type="text/javascript"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/js/locales/bootstrap-datepicker.ja.js?v=1.00" type="text/javascript"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/js/locales/bootstrap-datepicker.fr.js?v=1.00" type="text/javascript"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/js/locales/bootstrap-datepicker.es.js?v=1.00" type="text/javascript"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/js/locales/bootstrap-datepicker.ms.js?v=1.00" type="text/javascript"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/js/locales/bootstrap-datepicker.vi.js?v=1.00" type="text/javascript"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/js/locales/bootstrap-datepicker.ar.js?v=1.00" type="text/javascript"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/js/locales/bootstrap-datepicker.de.js?v=1.00" type="text/javascript"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/js/locales/bootstrap-datepicker.id.js?v=1.00" type="text/javascript"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/js/locales/bootstrap-datepicker.th.js?v=1.00" type="text/javascript"></script><script src="https://cdn.jsdelivr.net/npm/bootstrap-datepicker@1.9.0/js/locales/bootstrap-datepicker.it.js?v=1.00" type="text/javascript"></script><link href="/css/application.css?v=1.85" rel="stylesheet" type="text/css"><link href="/profile/css/parcel.css?v=1.42" rel="stylesheet" type="text/css"><script src="/js/jquery.numeric.js?v=1.3" type="text/javascript"></script><script src="/js/jquery.ba-dotimeout.min.js?v=1.1" type="text/javascript"></script><script src="/js/utils.js?v=1.21" type="text/javascript"></script><script src="/profile/js/parcel.js?v=3.30" type="text/javascript"></script><script type="text/javascript" src="https://tracker.metricool.com/resources/be.js"></script><script src="https://bat.bing.com/p/action/97012053.js" type="text/javascript" async="" data-ueto="ueto_32ced0f10c"></script><script type="text/javascript" async="" src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/452778110/?random=1757453698304&amp;cv=11&amp;fst=1757453698304&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;en=gtag.config&amp;gtm=45be5981v898008281z8838262770za200zb838262770zd838262770xec&amp;gcd=13r3v3r2r5l1&amp;dma_cps=syphamo&amp;dma=1&amp;tag_exp=101509157~102015666~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~105367987~105367989~105426769~105426771&amp;u_w=1366&amp;u_h=900&amp;url=https%3A%2F%2Fzenmarket.jp%2Ffr%2Fprofile%2Fparcel.aspx%3Fstate%3D5&amp;frm=0&amp;tiba=Parcels%C2%A0&amp;hn=www.googleadservices.com&amp;npa=0&amp;pscdl=noapi&amp;auid=1233703651.1757439141&amp;uaa=x86&amp;uab=64&amp;uafvl=Chromium%3B140.0.7339.80%7CNot%253DA%253FBrand%3B24.0.0.0%7CGoogle%2520Chrome%3B140.0.7339.80&amp;uamb=0&amp;uam=&amp;uap=Windows&amp;uapv=10.0&amp;uaw=0&amp;_tu=CA&amp;data=event%3Dgtag.config&amp;rfmt=3&amp;fmt=4"></script><script type="text/javascript" async="" src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/452778110/?random=1757453698325&amp;cv=11&amp;fst=1757453698325&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;en=productDetailsView&amp;gtm=45be5981v898008281z8838262770za200zb838262770zd838262770xea&amp;gcd=13r3v3r2r5l1&amp;dma_cps=syphamo&amp;dma=1&amp;tag_exp=101509157~102015666~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~105367987~105367989~105426769~105426771&amp;u_w=1366&amp;u_h=900&amp;url=https%3A%2F%2Fzenmarket.jp%2Ffr%2Fprofile%2Fparcel.aspx%3Fstate%3D5&amp;label=Hits&amp;frm=0&amp;tiba=Parcels%C2%A0&amp;hn=www.googleadservices.com&amp;npa=0&amp;pscdl=noapi&amp;auid=1233703651.1757439141&amp;uaa=x86&amp;uab=64&amp;uafvl=Chromium%3B140.0.7339.80%7CNot%253DA%253FBrand%3B24.0.0.0%7CGoogle%2520Chrome%3B140.0.7339.80&amp;uamb=0&amp;uam=&amp;uap=Windows&amp;uapv=10.0&amp;uaw=0&amp;_tu=CA&amp;data=event%3DproductDetailsView%3Bads_data_redaction%3Dtrue&amp;rfmt=3&amp;fmt=4"></script><script type="text/javascript" async="" src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/824920677/?random=1757453698402&amp;cv=11&amp;fst=1757453698402&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;en=gtag.config&amp;gtm=45be5981v9192006536z8838262770za200zb838262770zd838262770xec&amp;gcd=13r3v3r2r5l1&amp;dma_cps=syphamo&amp;dma=1&amp;tag_exp=101509157~103116026~103200004~103233427~104527906~104528500~104684208~104684211~104948813~105347236~105367987~105367989~105426769~105426771~115480710&amp;u_w=1366&amp;u_h=900&amp;url=https%3A%2F%2Fzenmarket.jp%2Ffr%2Fprofile%2Fparcel.aspx%3Fstate%3D5&amp;frm=0&amp;tiba=Parcels%C2%A0&amp;hn=www.googleadservices.com&amp;npa=0&amp;pscdl=noapi&amp;auid=1233703651.1757439141&amp;uaa=x86&amp;uab=64&amp;uafvl=Chromium%3B140.0.7339.80%7CNot%253DA%253FBrand%3B24.0.0.0%7CGoogle%2520Chrome%3B140.0.7339.80&amp;uamb=0&amp;uam=&amp;uap=Windows&amp;uapv=10.0&amp;uaw=0&amp;_tu=CA&amp;data=event%3Dgtag.config&amp;rfmt=3&amp;fmt=4"></script><script type="text/javascript" charset="utf-8" src="https://prism.app-us1.com?a=652360825&amp;u=https%3A%2F%2Fzenmarket.jp%2Ffr%2Fprofile%2Fparcel.aspx%3Fstate%3D5&amp;t=29a245cf-07db-4174-ab33-3cdcbcbb1d01" async=""></script><script type="text/javascript" charset="utf-8" src="https://trackcmp.net/t_prism_sitemessages.php?trackid=652360825&amp;prismid=29a245cf-07db-4174-ab33-3cdcbcbb1d01&amp;url=https%3A%2F%2Fzenmarket.jp%2Ffr%2Fprofile%2Fparcel.aspx%3Fstate%3D5" async=""></script><meta http-equiv="origin-trial" content="A7JYkbIvWKmS8mWYjXO12SIIsfPdI7twY91Y3LWOV/YbZmN1ZhYv8O+Zs6/IPCfBE99aV9tIC8sWZSCN09vf7gkAAACWeyJvcmlnaW4iOiJodHRwczovL2N0LnBpbnRlcmVzdC5jb206NDQzIiwiZmVhdHVyZSI6IkRpc2FibGVUaGlyZFBhcnR5U3RvcmFnZVBhcnRpdGlvbmluZzIiLCJleHBpcnkiOjE3NDIzNDIzOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"></head>
<body class="mm-wrapper"><nav id="mobile-menu" class="mm-menu mm-menu_offcanvas mm-menu_border-none mm-menu_pagedim-black mm-menu_position-front" aria-hidden="true">
    

    <a href="#" type="button" class="close btn-menu-close" style="position: absolute; right: 20px; top: 10px; z-index: 10;" aria-label="Close">
        <svg class="svg-icon svg-icon-light align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" style="width: 25px; height: 25px;">
            <path fill="none" stroke="#ffffff" stroke-width="5" d="M41.999 20.002l-22 22m22 0L20 20" stroke-linejoin="round" stroke-linecap="round"></path>
        </svg>
    </a>
<div class="mm-panels"><div id="mm-1" class="mm-panel mm-panel_opened"><div class="mm-navbar mm-navbar_sticky"><a class="mm-navbar__title"><span>ZenMarket</span></a></div><ul class="mm-listview">
        <li id="header1_loggedInMobileMenu" class="mm-listitem">
            <a href="https://zenmarket.jp/fr/profile/" class="d-flex mm-listitem__text">
                <div class="d-flex justify-content-center align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px;" viewBox="0 0 64 64">
                        <path data-name="layer2" d="M50.9 55.3a12.2 12.2 0 0 0-4.3-1.7c-8.1-1.5-8.1-4.1-8.1-5.7v-1a14.8 14.8 0 0 0 4.2-7.1c2.5 0 3-5.1 3-5.9s.1-3.8-2.4-3.8c5.4-14.6-8.9-20.5-19.6-13-4.4 0-4.8 6.5-3.1 13-2.5 0-2.4 3.1-2.4 3.8s.6 5.9 3 5.9a14.8 14.8 0 0 0 4.3 7.2v1c0 1.6 0 4.2-8.1 5.7a11.9 11.9 0 0 0-4.3 1.6" fill="none" stroke="#202020" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"></path><circle data-name="layer1" cx="32" cy="32" r="30" fill="none" stroke="#202020" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"></circle></svg>
                </div>
                <div style="white-space: normal; margin-left: 15px; margin-right: 15px; font-size: 12px;">
                    <div>
                        <b>
                            <span id="header1_lblMobileMenuCustomerFullName">Gaetan BLERY</span></b> (<span id="header1_lblMobileMenuCustomerEmail">gaetan.blery@gmail.com</span>)
                    </div>
                    <div>
                        <span id="header1_lblMobileMenuCustomerFunds">Mes fonds : ¥4,122</span>
                    </div>
                </div>
            </a>
        </li>
        

        
        <li class="mm-listitem">
            <a href="https://zenmarket.jp/fr/profile/addfunds.aspx" class="d-flex mm-listitem__text">
                <div class="d-flex justify-content-center align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px;" viewBox="0 0 64 64">
                        <ellipse data-name="layer2" cx="44" cy="7.1" rx="18" ry="5.1" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"></ellipse><path data-name="layer2" d="M26 14.9c0 2.8 8.1 5.1 18 5.1s18-2.3 18-5.1m-36 8c0 2.8 8.1 5.1 18 5.1s18-2.3 18-5.1m-36 8c0 2.8 8.1 5.1 18 5.1s18-2.3 18-5.1M38 43.7c1.9.2 3.9.3 6 .3 9.9 0 18-2.3 18-5.1m-36-2.8V7.5" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"></path><path data-name="layer2" d="M62 7.1v39.8c0 2.8-8.1 5.1-18 5.1-2.1 0-4.1-.1-6-.3" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"></path><ellipse data-name="layer1" cx="20" cy="40.9" rx="18" ry="5.1" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"></ellipse><path data-name="layer1" d="M2 48.9c0 2.8 8 5.1 18 5.1s18-2.3 18-5.1" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"></path><path data-name="layer1" d="M38 40.9v16c0 2.8-8.1 5.1-18 5.1S2 59.7 2 56.9V41.3" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"></path></svg>
                </div>
                <div style="margin-left: 15px; margin-right: 15px;">
                    Ajouter des fonds
                </div>
            </a>
        </li>
        <li class="mm-listitem">
            <a href="https://zenmarket.jp/fr/profile/messages.aspx" class="d-flex mm-listitem__text">
                <div class="d-flex justify-content-center align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px;" viewBox="0 0 64 64">
                        <path data-name="layer2" d="M49.6 28.5C56.8 30.1 62 35.4 62 41.6a12.4 12.4 0 0 1-5.1 9.7L60 59l-10.3-4.3a21 21 0 0 1-4.7.5c-8.2 0-15.1-4.7-16.7-10.9" fill="none" stroke="#202020" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path><path data-name="layer1" d="M4 50l15.4-6.3a29.6 29.6 0 0 0 6.6.7c13.3 0 24-8.6 24-19.2S39.3 6 26 6 2 14.6 2 25.2C2 30.6 4.8 35.5 9.3 39z" fill="none" stroke="#202020" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path></svg>
                    <div id="header1_lblMobileMenuMessagesCounter" class="navbar-icon-link-badge bg-red" style="left: 42px; top: 2px; font-weight: 600; font-size: 9px;">1</div>
                </div>
                <div style="margin-left: 15px; margin-right: 15px;">
                    Messages
                </div>
            </a>
        </li>

        <li class="mm-listitem">
            <a href="https://zenmarket.jp/fr/profile/actions.aspx" class="d-flex mm-listitem__text">
                <div class="d-flex justify-content-center align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px;" viewBox="0 0 64 64">
                        <path data-name="layer2" d="M32 45.2V47a9 9 0 0 1-9 9 9 9 0 0 1-9-9v-7.2" fill="none" stroke="#202020" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"></path><path data-name="layer1" fill="none" stroke="#202020" stroke-width="3" d="M2 24v16M62 6v52M2 28l60-18M2 36l60 18" stroke-linejoin="round" stroke-linecap="round"></path></svg>
                    <div id="header1_lblMobileMenuActionsCounter" class="navbar-icon-link-badge bg-red" style="left: 42px; top: 2px; font-weight: 600; font-size: 9px;">20</div>
                </div>
                <div style="margin-left: 15px; margin-right: 15px;">
                    Événements
                </div>
            </a>
        </li>

        <li class="mm-listitem">
            <a href="https://zenmarket.jp/fr/profile/watchlist.aspx" class="d-flex mm-listitem__text">
                <div class="d-flex justify-content-center align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64">
                        <path d="M32 48L15 58l4-19L5 26l19-2 8-18 8 18 19 2-14 13 4 19-17-10z" stroke-width="3" stroke-linecap="round" stroke="#202020" fill="none" data-name="layer1" stroke-linejoin="round"></path>
                    </svg>
                </div>
                <div style="margin-left: 15px; margin-right: 15px;">
                    Ma Liste
                </div>
            </a>
        </li>

        <li class="mm-listitem">
            <a href="https://zenmarket.jp/fr/profile/parcel.aspx" class="d-flex mm-listitem__text">
                <div class="d-flex justify-content-center align-items-center">
                    <svg viewBox="0 0 64 64" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 36.125v14.037l22 11.58 22-11.58V36.125" stroke-width="3" stroke-miterlimit="10" stroke="#202020" fill="none" data-name="layer2" stroke-linejoin="round" stroke-linecap="round"></path><path d="M54 23.246l7-8.549-21.742-11.42-7.324 8.42L54 23.246z" stroke-width="3" stroke-miterlimit="10" stroke="#202020" fill="none" data-name="layer1" stroke-linejoin="round" stroke-linecap="round"></path><path d="M32 61.742v-27" stroke-width="3" stroke-miterlimit="10" stroke="#202020" fill="none" data-name="layer2" stroke-linejoin="round" stroke-linecap="round"></path><path d="M31.934 11.704l-7.258-8.42L3 14.769l7 8.742 21.934-11.807z" stroke-width="3" stroke-miterlimit="10" stroke="#202020" fill="none" data-name="layer1" stroke-linejoin="round" stroke-linecap="round"></path><path d="M32 34.742l-8.584 8.929L2.967 31.995 10 23.511l22 11.231zm22-11.496l7 8.742-20.324 11.743L32 34.742l22-11.496z" stroke-width="3" stroke-miterlimit="10" stroke="#202020" fill="none" data-name="layer1" stroke-linejoin="round" stroke-linecap="round"></path></svg>
                    
                </div>
                <div style="margin-left: 15px; margin-right: 15px;">
                    Colis
                </div>
            </a>
        </li>

        <li class="mm-listitem">
            <a href="https://zenmarket.jp/fr/profile/payments.aspx" class="d-flex mm-listitem__text">
                <div class="d-flex justify-content-center align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64">
                        <path data-name="layer2" d="M62 16a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v7h60zM2 23v25a3 3 0 0 0 3 3h54a3 3 0 0 0 3-3V23" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"></path><path data-name="layer1" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="3" d="M10 31h20m18 0h6m-44 8h8" stroke-linejoin="round" stroke-linecap="round"></path></svg>
                    
                </div>
                <div style="margin-left: 15px; margin-right: 15px;">
                    Paiements
                </div>
            </a>
        </li>
        <li class="mm-listitem">
            <a href="https://zenmarket.jp/fr/profile/levels.aspx" class="d-flex mm-listitem__text">
                <div class="d-flex justify-content-center align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" style="width: 24px; height: 24px;" viewBox="0 0 64 64">
                        <path data-name="layer2" d="M32 38v10c0 4-6 8-10 8h-3a3 3 0 0 0-3 3v3h32v-3a3 3 0 0 0-3-3h-3c-4 0-10-4-10-8" fill="none" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke="#202020" stroke-width="3"></path><path data-name="layer1" d="M48 22.1a16 16 0 0 1-32 0V2h32z" fill="none" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke="#202020" stroke-width="3"></path><path data-name="layer1" d="M16 7.9c-6-1.1-10 2.5-10 8S10.5 28 16 28h1.1M48 7.9c6-1.1 10 2.5 10 8S53.5 28 48 28h-1.1" fill="none" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke="#202020" stroke-width="3"></path></svg>
                </div>
                <div style="margin-left: 15px; margin-right: 15px;">
                    Niveaux
                </div>
            </a>
        </li>
        <li class="mm-listitem">
            <a href="https://zenmarket.jp/fr/profile/settings.aspx" class="d-flex mm-listitem__text">
                <div class="d-flex justify-content-center align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64">
                        <circle data-name="layer2" cx="32.106" cy="32.035" r="14" fill="none" stroke="#202020" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="round"></circle><path data-name="layer1" d="M60.2 27.264l-4.908-1.27a23.845 23.845 0 0 0-2.534-6.086l2.606-4.426a2.4 2.4 0 0 0-.371-2.915l-3.411-3.411a2.4 2.4 0 0 0-2.915-.371l-4.423 2.6a23.848 23.848 0 0 0-6.1-2.54L36.842 3.8A2.4 2.4 0 0 0 34.518 2h-4.825a2.4 2.4 0 0 0-2.323 1.8l-1.3 5.028a23.843 23.843 0 0 0-6.141 2.544L15.408 8.71a2.4 2.4 0 0 0-2.915.371l-3.412 3.412a2.4 2.4 0 0 0-.371 2.915l2.662 4.52a23.848 23.848 0 0 0-2.512 6.027L3.8 27.264A2.4 2.4 0 0 0 2 29.588v4.825a2.4 2.4 0 0 0 1.8 2.323l5.02 1.3a23.846 23.846 0 0 0 2.571 6.21l-2.6 4.423a2.4 2.4 0 0 0 .371 2.915l3.412 3.412a2.4 2.4 0 0 0 2.915.371l4.426-2.607a23.845 23.845 0 0 0 6.2 2.565L27.37 60.2a2.4 2.4 0 0 0 2.323 1.8h4.825a2.4 2.4 0 0 0 2.324-1.8l1.267-4.9a23.85 23.85 0 0 0 6.154-2.563l4.329 2.549a2.4 2.4 0 0 0 2.915-.371l3.412-3.412a2.4 2.4 0 0 0 .371-2.915l-2.549-4.329A23.845 23.845 0 0 0 55.332 38l4.869-1.26A2.4 2.4 0 0 0 62 34.413v-4.825a2.4 2.4 0 0 0-1.8-2.324z" fill="none" stroke="#202020" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" stroke-linejoin="round"></path></svg>
                </div>
                <div style="margin-left: 15px; margin-right: 15px;">
                    Paramètres
                </div>
            </a>
        </li>
        <li class="mmenu-item-category mm-listitem">


<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-2">Amazon<span class="mm-sronly">Open submenu</span></a></li>
<li class="mmenu-item-category mm-listitem">


<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-16">Rakuten<span class="mm-sronly">Open submenu</span></a></li>
<li class="mmenu-item-category mm-listitem">


<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-32">JDirectItems Auction<span class="mm-sronly">Open submenu</span></a></li>
<li class="mmenu-item-category mm-listitem">


<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-50">Mercari<span class="mm-sronly">Open submenu</span></a></li>
<li class="mmenu-item-category mm-listitem">


<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-71">Rakuten Rakuma<span class="mm-sronly">Open submenu</span></a></li>

<li class="mmenu-item-category mm-listitem">
    
    <a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-80">RECOMMANDATIONS <span style="font-size: 10px; background-color: #ee4500; padding: 2px 4px; line-height: 1; color: #fff; font-weight: 600; margin-left: 5px;">300 yens (<del>500 yens</del>)</span><span class="mm-sronly">Open submenu</span></a></li>
<li class="mmenu-item-category mm-listitem">
    
    
<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-81">Autres boutiques<span class="mm-sronly">Open submenu</span></a></li>

        <li class="d-flex flex-column mm-listitem"><a href="https://zenmarket.jp/fr/about.aspx" class="mm-listitem__text">À propos de nous</a></li>
        <li class="d-flex flex-column mm-listitem"><a href="https://zenmarket.jp/fr/blog.aspx" class="mm-listitem__text">Blog</a></li>
        
        <li class="d-flex flex-column mm-listitem"><a href="https://zenmarket.jp/fr/help.aspx" class="mm-listitem__text">Aide</a></li>
        
        <li class="d-flex flex-column mm-listitem"><a href="https://zenmarket.jp/fr/calc.aspx" class="mm-listitem__text">Combien cela me coûtera-t-il ?</a></li>
        <li class="mm-listitem">
            
            
        <a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-82">
                <span>Langue</span>
                <span id="header1_lblCurrentMobileCulture" class="mmenu-selected-item">Français</span>
            <span class="mm-sronly">Open submenu</span></a></li>
        <li class="mm-listitem">
            
            
        <a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-83">
                <span>Devise</span>
                <span id="lblMobileMenuCurrentCurency" class="mmenu-selected-item">Euro (EUR)</span>
            <span class="mm-sronly">Open submenu</span></a></li>

        <li class="mm-listitem">
            
            
        <a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mobileMenuPreferredShop">
                <span>Boutique préférée</span>
                <span id="lblMobileMenuPreferredShop" class="mmenu-selected-item">JDirectItems Auction</span>
            <span class="mm-sronly">Open submenu</span></a></li>
        
        <li class="d-flex flex-column mm-listitem"><a id="header1_btnMobileMenuLogout" href="javascript:__doPostBack('header1$btnMobileMenuLogout','')" class="mm-listitem__text">Se déconnecter</a></li>
        
    </ul></div><div id="mm-2" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-1"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-1" aria-hidden="true"><span>Amazon</span></a></div><ul class="mm-listview">
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-3">Livres, bandes dessinées et magazines<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-4">DVD, musique et jeux<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-5">Électronique et appareil photo<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-6">Ordinateurs et bureau<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-7">Maison et cuisine<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-8">Bricolage, outils et jardin<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-9">Aliments et boissons<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-10">Santé et soins personnels<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-11">Beauté<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-12">Bébé, jouets et loisirs<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-13">Mode<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-14">Sports et plein air<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-15">Automobile et industrie<span class="mm-sronly">Open submenu</span></a></li>
</ul></div><div id="mm-3" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-2"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-2" aria-hidden="true"><span>Livres, bandes dessinées et magazines</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=465392" class="mm-listitem__text">Livres japonais</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=52033011" class="mm-listitem__text">Livres en langues étrangères</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=466280" class="mm-listitem__text">Bandes dessinées</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=13384021" class="mm-listitem__text">Magazines</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=5364238051" class="mm-listitem__text">Couverture rigide</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2189048051" class="mm-listitem__text">Bunko livre de poche</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2189049051" class="mm-listitem__text">Broché Shinsho au format de poche</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=466306" class="mm-listitem__text">Livres pour enfants</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2405051051" class="mm-listitem__text">Nouvelle et future version</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=5301879051" class="mm-listitem__text">Achats en gros</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3895598051" class="mm-listitem__text">Livres d'occasion</a></li>
</ul></div><div id="mm-4" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-2"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-2" aria-hidden="true"><span>DVD, musique et jeux</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=561958" class="mm-listitem__text">DVD</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=403507011" class="mm-listitem__text">Blu-ray</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2351649051" class="mm-listitem__text">Vidéo Amazon</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=561956" class="mm-listitem__text">Musique</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2128134051" class="mm-listitem__text">Musique numérique</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2123629051" class="mm-listitem__text">Instruments de musique</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=637394" class="mm-listitem__text">Jeux TV</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=689132" class="mm-listitem__text">Jeux PC</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2510863051" class="mm-listitem__text">Jeux numériques</a></li>
</ul></div><div id="mm-5" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-2"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-2" aria-hidden="true"><span>Électronique et appareil photo</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3210981" class="mm-listitem__text">Tous les appareils photo et audiovisuels</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3895771" class="mm-listitem__text">Appareils de cuisine</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3895791" class="mm-listitem__text">Appareils électroménagers</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3895751" class="mm-listitem__text">Appareils de santé et de beauté</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3895761" class="mm-listitem__text">Climatisation et appareils saisonniers</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2133982051" class="mm-listitem__text">Éclairage</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2277724051" class="mm-listitem__text">Gros électroménager</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=124048011" class="mm-listitem__text">Tous les appareils</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=16462091" class="mm-listitem__text">Caméras et caméscopes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2680377051" class="mm-listitem__text">Caméras portables et caméras d'action</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=171350011" class="mm-listitem__text">Instruments optiques</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=128187011" class="mm-listitem__text">Mobiles et smartphones</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3477381" class="mm-listitem__text">Téléviseurs et enregistreurs</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=16462081" class="mm-listitem__text">Audio</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3477981" class="mm-listitem__text">Casques et écouteurs</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3544106051" class="mm-listitem__text">Technologie portable</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3371421" class="mm-listitem__text">Accessoires électroniques</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3128558051" class="mm-listitem__text">Tous les articles d'occasion</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3573765051" class="mm-listitem__text">Caméras et caméscopes d'occasion</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3708582051" class="mm-listitem__text">Appareils électroniques et téléphones d'occasion</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=4643094051" class="mm-listitem__text">Amazon Launchpad CE, appareil photo et PC</a></li>
</ul></div><div id="mm-6" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-2"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-2" aria-hidden="true"><span>Ordinateurs et bureau</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2127209051" class="mm-listitem__text">Tous les ordinateurs et périphériques</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2188762051" class="mm-listitem__text">Ordinateurs et tablettes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2151982051" class="mm-listitem__text">Moniteurs</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2188763051" class="mm-listitem__text">Imprimantes et encre</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2151970051" class="mm-listitem__text">Claviers, souris et tablettes graphiques</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2151984051" class="mm-listitem__text">LAN sans fil et périphériques réseau</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2151901051" class="mm-listitem__text">Pièces, processeur et disques durs internes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2151950051" class="mm-listitem__text">Disques externes et stockage</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3481981" class="mm-listitem__text">Cartes mémoire et clés USB</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2151826051" class="mm-listitem__text">Accessoires, supports vierges et câbles</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3378226051" class="mm-listitem__text">PC de jeu et accessoires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=86731051" class="mm-listitem__text">Tous les produits de papeterie et de bureau</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2478562051" class="mm-listitem__text">Papeterie</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=89083051" class="mm-listitem__text">Fournitures de bureau et scolaires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=89088051" class="mm-listitem__text">Stylos, crayons, fournitures</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=89085051" class="mm-listitem__text">Produits de papier de bureau</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=89090051" class="mm-listitem__text">Planificateurs</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=89084051" class="mm-listitem__text">Meubles et éclairage</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=89086051" class="mm-listitem__text">Électronique de bureau</a></li>
</ul></div><div id="mm-7" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-2"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-2" aria-hidden="true"><span>Maison et cuisine</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3828871" class="mm-listitem__text">Toutes les maisons et cuisines</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=13938481" class="mm-listitem__text">Ustensiles de cuisine, ustensiles et vaisselle</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3093567051" class="mm-listitem__text">Intérieur et articles divers</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2538755051" class="mm-listitem__text">Tapis, rideaux et coussins</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=16428011" class="mm-listitem__text">Meubles</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=13945081" class="mm-listitem__text">Stockage</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2378086051" class="mm-listitem__text">Literie</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3093569051" class="mm-listitem__text">Salle de bain, produits de nettoyage et blanchisserie</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2038875051" class="mm-listitem__text">Sécurité</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=124048011" class="mm-listitem__text">Appareils électroménagers</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2189701051" class="mm-listitem__text">Arts, artisanat et couture</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2127212051" class="mm-listitem__text">Fournitures et aliments pour animaux</a></li>
</ul></div><div id="mm-8" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-2"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-2" aria-hidden="true"><span>Bricolage, outils et jardin</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2016929051" class="mm-listitem__text">Tous les outils de bricolage, outils et jardin</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2031744051" class="mm-listitem__text">Outils électriques</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2038157051" class="mm-listitem__text">Outils manuels</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2448361051" class="mm-listitem__text">Remodelage</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2361405051" class="mm-listitem__text">Jardin</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2039681051" class="mm-listitem__text">Extérieurs</a></li>
</ul></div><div id="mm-9" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-2"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-2" aria-hidden="true"><span>Aliments et boissons</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=57239051" class="mm-listitem__text">Toutes les épiceries</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=5483650051" class="mm-listitem__text">Marque Amazon</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=4522742051" class="mm-listitem__text">Cadeaux gastronomiques</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2452994051" class="mm-listitem__text">Bonne affaire</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2199930051" class="mm-listitem__text">Magasin Nippon</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=10532149051" class="mm-listitem__text">Marche cool</a></li>
</ul></div><div id="mm-10" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-2"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-2" aria-hidden="true"><span>Santé et soins personnels</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=160384011" class="mm-listitem__text">Toutes les pharmacies</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2505532051" class="mm-listitem__text">Médecine</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=169911011" class="mm-listitem__text">Soins de santé</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2356869051" class="mm-listitem__text">Lentilles de contact</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=344024011" class="mm-listitem__text">Suppléments</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3396823051" class="mm-listitem__text">Régime</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=170432011" class="mm-listitem__text">Soins aux personnes âgées</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=170303011" class="mm-listitem__text">Couches et lingettes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=170563011" class="mm-listitem__text">Ménage</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=5483650051" class="mm-listitem__text">Marque Amazon</a></li>
</ul></div><div id="mm-11" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-2"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-2" aria-hidden="true"><span>Beauté</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=52374051" class="mm-listitem__text">Toute beauté</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=169667011" class="mm-listitem__text">Soins capillaires/coiffage</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=170040011" class="mm-listitem__text">Soins de la peau</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=170191011" class="mm-listitem__text">Maquillage et ongles</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=170267011" class="mm-listitem__text">Bain/Soins du corps</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=169762011" class="mm-listitem__text">Soins bucco-dentaires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3396994051" class="mm-listitem__text">Beauté de luxe</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3501772051" class="mm-listitem__text">Cosmétiques du docteur</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3217793051" class="mm-listitem__text">Kit d'essai</a></li>
</ul></div><div id="mm-12" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-2"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-2" aria-hidden="true"><span>Bébé, jouets et loisirs</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=344845011" class="mm-listitem__text">Bébé et maternité</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=13299531" class="mm-listitem__text">Jouets</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=466306" class="mm-listitem__text">Livres d'images et livres pour enfants</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=5536495051" class="mm-listitem__text">Avantages pour les parents</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2277721051" class="mm-listitem__text">Hobby</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2123629051" class="mm-listitem__text">Instruments de musique</a></li>
</ul></div><div id="mm-13" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-2"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-2" aria-hidden="true"><span>Mode</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2230006051" class="mm-listitem__text">Femmes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2230005051" class="mm-listitem__text">Hommes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2230804051" class="mm-listitem__text">Enfants et bébés</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2221077051" class="mm-listitem__text">Bagages</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=10353087051" class="mm-listitem__text">Vêtements et chaussures de sport</a></li>
</ul></div><div id="mm-14" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-2"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-2" aria-hidden="true"><span>Sports et plein air</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=14304371" class="mm-listitem__text">Tous les sports et plein air</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=15337751" class="mm-listitem__text">Vélos</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=14315411" class="mm-listitem__text">Extérieur</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=14315521" class="mm-listitem__text">Pêche</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=14315501" class="mm-listitem__text">Fitness et entraînement</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=14315441" class="mm-listitem__text">Golf</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2188968051" class="mm-listitem__text">Vêtements et chaussures de sport</a></li>
</ul></div><div id="mm-15" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-2"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-2" aria-hidden="true"><span>Automobile et industrie</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3445393051" class="mm-listitem__text">Tous les produits industriels et scientifiques</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2017304051" class="mm-listitem__text">Produits automobiles</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2319890051" class="mm-listitem__text">Produits pour moto</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3305008051" class="mm-listitem__text">Véhicule voiture et moto</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2016929051" class="mm-listitem__text">Bricolage, outils et jardin</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=2031746051" class="mm-listitem__text">Équipement de sécurité au travail</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3333565051" class="mm-listitem__text">Fournitures industrielles</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3037451051" class="mm-listitem__text">Laboratoire et scientifique</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/amazon.aspx?c=3450744051" class="mm-listitem__text">Conciergerie et assainissement</a></li>
</ul></div><div id="mm-16" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-1"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-1" aria-hidden="true"><span>Rakuten</span></a></div><ul class="mm-listview">
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-17">Beauté et cosmétiques<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-18">Santé et bien-être<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-19">Soins de santé<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-20">Pêche<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem"><span class="mm-listitem__text">Sports et amp; À l'extérieur
<ul>
<li><a href="https://zenmarket.jp/rakuten.aspx?c=101070">Tous</a></li>
<li><a href="https://zenmarket.jp/rakuten.aspx?c=101157">Cyclisme</a></li>
<li><a href="https://zenmarket.jp/rakuten.aspx?c=101975">Extérieur</a></li>
<li><a href="https://zenmarket.jp/rakuten.aspx?c=201890">Alpinisme/Trekking</a></li>
<li><a href="https://zenmarket.jp/rakuten.aspx?c=100558">Tennis</a></li>
<li><a href="https://zenmarket.jp/rakuten.aspx?c=201955">Tennis de table</a></li>
<li><a href="https://zenmarket.jp/rakuten.aspx?c=201937">Natation</a></li>
<li><a href="https://zenmarket.jp/rakuten.aspx?c=554975">Arts martiaux</a></li>
<li><a href="https://zenmarket.jp/rakuten.aspx?c=551942">Vêtements de sport</a></li>
<li><a href="https://zenmarket.jp/rakuten.aspx?c=101071">Outils/Accessoires</a></li>
</ul>
</span></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-21">Vêtements pour hommes<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-22">Vêtements pour femmes<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem"><span class="mm-listitem__text">Enfants et amp; Bébé
<ul>
<li><a href="https://zenmarket.jp/rakuten.aspx?c=100533">Tous</a></li>
<li><a href="https://zenmarket.jp/rakuten.aspx?c=207698">Junior</a></li>
<li><a href="https://zenmarket.jp/rakuten.aspx?c=111078">Enfants</a></li>
<li><a href="https://zenmarket.jp/rakuten.aspx?c=111102">Bébé</a></li>
<li><a href="https://zenmarket.jp/rakuten.aspx?c=111116">Maternité</a></li>
<li><a href="https://zenmarket.jp/rakuten.aspx?c=508445">Cadeaux pour bébé</a></li>
</ul>
</span></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-23">Sacs, accessoires et amp; Objets de créateurs<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-24">Montres<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-25">Bijoux<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-26">Jouets, loisirs et amp; Jeux<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-27">Électronique<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-28">PC et périphériques<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-29">Instruments de musique<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-30">Nourriture<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-31">Cuisine, salle à manger et amp; Bar<span class="mm-sronly">Open submenu</span></a></li>
</ul></div><div id="mm-17" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-16"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-16" aria-hidden="true"><span>Beauté et cosmétiques</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100939" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100944" class="mm-listitem__text">Soins de la peau</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=204233" class="mm-listitem__text">Maquillage</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100940" class="mm-listitem__text">Soins capillaires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100960" class="mm-listitem__text">Soins du corps</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=111787" class="mm-listitem__text">Maquillage et amp; Accessoires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100968" class="mm-listitem__text">Cosmétiques pour hommes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=204245" class="mm-listitem__text">Appareils de beauté / Épilation</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=216740" class="mm-listitem__text">Suppléments de boissons</a></li>
</ul></div><div id="mm-18" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-16"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-16" aria-hidden="true"><span>Santé et bien-être</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100938" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100984" class="mm-listitem__text">Régime</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100988" class="mm-listitem__text">Suppléments de beauté</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=550090" class="mm-listitem__text">Suppléments de santé</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100987" class="mm-listitem__text">Aliments santé</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=204745" class="mm-listitem__text">Soins dentaires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=101035" class="mm-listitem__text">Produits de relaxation/massage</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=203260" class="mm-listitem__text">Accessoires de santé</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=101041" class="mm-listitem__text">Accessoires de mesure</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=101036" class="mm-listitem__text">Aides au sommeil et amp; Produits</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=204744" class="mm-listitem__text">Support des appareils orthodontiques</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=101888" class="mm-listitem__text">Biens de santé</a></li>
</ul></div><div id="mm-19" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-16"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-16" aria-hidden="true"><span>Soins de santé</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=551169" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=205789" class="mm-listitem__text">Lentilles de contact et amp; Soins des yeux</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=201541" class="mm-listitem__text">Produits pharmaceutiques</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=101058" class="mm-listitem__text">Entretien et amp; Soins infirmiers</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=201525" class="mm-listitem__text">Contraceptifs</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=101048" class="mm-listitem__text">Équipement et amp; Fournitures</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=208264" class="mm-listitem__text">Nécessités quotidiennes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=551172" class="mm-listitem__text">Instruments médicaux</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=551174" class="mm-listitem__text">Hygiène et amp; Fournitures médicales</a></li>
</ul></div><div id="mm-20" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-16"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-16" aria-hidden="true"><span>Pêche</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=111961" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=201912" class="mm-listitem__text">Robines</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=201899" class="mm-listitem__text">Cannes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=201916" class="mm-listitem__text">Leurres</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=208108" class="mm-listitem__text">Ligne</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=201919" class="mm-listitem__text">Vêtements</a></li>
</ul></div><div id="mm-21" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-16"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-16" aria-hidden="true"><span>Vêtements pour hommes</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=551177" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100372" class="mm-listitem__text">Costumes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=110811" class="mm-listitem__text">Kimono</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=110765" class="mm-listitem__text">Hauts</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=558846" class="mm-listitem__text">Bas</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=558873" class="mm-listitem__text">Vêtements d'extérieur</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=558879" class="mm-listitem__text">Autres vêtements</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100434" class="mm-listitem__text">Sous-vêtements pour hommes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=304013" class="mm-listitem__text">Pyjamas pour hommes, vêtements de détente, peignoirs</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=562550" class="mm-listitem__text">Sous-vêtements/legwear pour hommes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=110983" class="mm-listitem__text">Chaussures pour hommes</a></li>
</ul></div><div id="mm-22" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-16"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-16" aria-hidden="true"><span>Vêtements pour femmes</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100371" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=110729" class="mm-listitem__text">Robes une pièce</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=555084" class="mm-listitem__text">Robes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=555086" class="mm-listitem__text">Hauts</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=555087" class="mm-listitem__text">Vêtements d'extérieur</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=555089" class="mm-listitem__text">Bas</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=555091" class="mm-listitem__text">Costumes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100428" class="mm-listitem__text">Kimono</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=555100" class="mm-listitem__text">Autres vêtements</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100380" class="mm-listitem__text">Décontracté</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100442" class="mm-listitem__text">Sous-vêtements pour femmes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=206746" class="mm-listitem__text">Pyjamas, vêtements de détente, chemises de nuit pour femmes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=553295" class="mm-listitem__text">Chaussettes/Jambières pour dames</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100480" class="mm-listitem__text">Chaussures pour femmes</a></li>
</ul></div><div id="mm-23" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-16"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-16" aria-hidden="true"><span>Sacs, accessoires et amp; Objets de créateurs</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=216131" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=110933" class="mm-listitem__text">Sac pour femme</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100472" class="mm-listitem__text">Sacs pour hommes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=110974" class="mm-listitem__text">Sacs unisexes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=502368" class="mm-listitem__text">Portefeuilles pour femmes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=552710" class="mm-listitem__text">Portefeuilles pour hommes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100454" class="mm-listitem__text">Magazines/articles de mode</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=502427" class="mm-listitem__text">Chapeaux</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100467" class="mm-listitem__text">Lunettes de soleil</a></li>
</ul></div><div id="mm-24" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-16"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-16" aria-hidden="true"><span>Montres</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=558929" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=301981" class="mm-listitem__text">Montres pour hommes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=302050" class="mm-listitem__text">Montres pour femmes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=302123" class="mm-listitem__text">Paire de montres</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=302133" class="mm-listitem__text">Montres unisexes</a></li>
</ul></div><div id="mm-25" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-16"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-16" aria-hidden="true"><span>Bijoux</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=216129" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100486" class="mm-listitem__text">Accessoires pour femmes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=407326" class="mm-listitem__text">Accessoires pour hommes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=508586" class="mm-listitem__text">Accessoires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=301966" class="mm-listitem__text">Paire d'accessoires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=551853" class="mm-listitem__text">Bijoux de mariée</a></li>
</ul></div><div id="mm-26" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-16"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-16" aria-hidden="true"><span>Jouets, loisirs et amp; Jeux</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=101164" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=101189" class="mm-listitem__text">Jouets</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=112203" class="mm-listitem__text">Chiffres</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=101299" class="mm-listitem__text">Manga</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=213749" class="mm-listitem__text">Déguisements</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=101165" class="mm-listitem__text">Loisirs</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=213731" class="mm-listitem__text">Articles de fête</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=112132" class="mm-listitem__text">La bonne aventure</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=101222" class="mm-listitem__text">Art</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=206324" class="mm-listitem__text">Jeu de société</a></li>
</ul></div><div id="mm-27" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-16"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-16" aria-hidden="true"><span>Électronique</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=562637" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=204200" class="mm-listitem__text">Appareils électroménagers</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=562640" class="mm-listitem__text">Équipement électroménager</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100191" class="mm-listitem__text">Beauté et amp; Santé</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=211742" class="mm-listitem__text">TV/Audio/Caméra</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=204199" class="mm-listitem__text">Caméra vidéo et amp; Magnétoscope</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100155" class="mm-listitem__text">Audio</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=200147" class="mm-listitem__text">Audio portable</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100083" class="mm-listitem__text">Appareils photo numériques</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100212" class="mm-listitem__text">Accessoires pour appareil photo</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=560202" class="mm-listitem__text">Smartphones</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=560312" class="mm-listitem__text">Lecteurs de livres électroniques</a></li>
</ul></div><div id="mm-28" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-16"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-16" aria-hidden="true"><span>PC et périphériques</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100026" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100040" class="mm-listitem__text">Ordinateurs portables</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=560008" class="mm-listitem__text">Ultrabooks</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=560029" class="mm-listitem__text">Tablette PC</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=552121" class="mm-listitem__text">PC netbook</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=550194" class="mm-listitem__text">Ordinateurs portables d'occasion</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=211368" class="mm-listitem__text">Ordinateurs de bureau</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=110353" class="mm-listitem__text">PDA</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=110105" class="mm-listitem__text">Affiche les moniteurs LCD</a></li>
</ul></div><div id="mm-29" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-16"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-16" aria-hidden="true"><span>Instruments de musique</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=112493" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=205906" class="mm-listitem__text">Guitares électriques</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=400258" class="mm-listitem__text">Guitare acoustique</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=205908" class="mm-listitem__text">Accessoires pour guitare</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=112499" class="mm-listitem__text">Basse</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=203020" class="mm-listitem__text">Chaînes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=211212" class="mm-listitem__text">Claviers/Synthétiseurs</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=211233" class="mm-listitem__text">Batterie</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=204228" class="mm-listitem__text">Matériel DJ</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=211356" class="mm-listitem__text">Instruments à anches</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=206023" class="mm-listitem__text">Pièces/accessoires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=206024" class="mm-listitem__text">DTM/Enregistrement/Instruments de sonorisation</a></li>
</ul></div><div id="mm-30" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-16"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-16" aria-hidden="true"><span>Nourriture</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100227" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=551167" class="mm-listitem__text">Bonbons/Snacks</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=509708" class="mm-listitem__text">Bonbons japonais</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=201179" class="mm-listitem__text">Bonbons chinois</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=562625" class="mm-listitem__text">Snacks</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=214276" class="mm-listitem__text">Bonbons bon marché</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100316" class="mm-listitem__text">Boissons</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100356" class="mm-listitem__text">Café et amp; Chocolat</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100351" class="mm-listitem__text">Thé</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100361" class="mm-listitem__text">Thé vert japonais</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=200029" class="mm-listitem__text">Thé chinois</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=201439" class="mm-listitem__text">Tisane</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=510901" class="mm-listitem__text">Saké</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100337" class="mm-listitem__text">Saké japonais</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=110662" class="mm-listitem__text">Shochu</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=510903" class="mm-listitem__text">Liqueur de prune</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100268" class="mm-listitem__text">Plats d'accompagnement et amp; Ingrédients</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100256" class="mm-listitem__text">Nouilles</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=110472" class="mm-listitem__text">Céréales et amp; Riz</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100300" class="mm-listitem__text">Assaisonnement</a></li>
</ul></div><div id="mm-31" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-16"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-16" aria-hidden="true"><span>Cuisine, salle à manger et amp; Bar</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=558944" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100629" class="mm-listitem__text">Ustensiles de cuisine, épicerie et amp; Tablier</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=407057" class="mm-listitem__text">Déjeuner (Bento)</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=301257" class="mm-listitem__text">Vaisselle occidentale</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=100698" class="mm-listitem__text">Vaisselle japonaise</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=501058" class="mm-listitem__text">Vaisselle chinoise</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=210206" class="mm-listitem__text">Vaisselle pour enfants</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuten.aspx?c=101848" class="mm-listitem__text">Autre vaisselle</a></li>
</ul></div><div id="mm-32" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-1"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-1" aria-hidden="true"><span>JDirectItems Auction</span></a></div><ul class="mm-listview">
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-33">Sport, loisirs<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-34">Mode<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-35">Montres, accessoires<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-36">Jouets, jeux<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-37">Bandes dessinées, dessins animés<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-38">Ordinateurs<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-39">Électronique<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-40">Musique<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-41">Loisirs, culture<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-42">Livres, magazines<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-43">Articles de fans<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-44">Beauté, soins de santé<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-45">Articles pour bébés<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-46">Antiquité, Collection<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-47">Maison, intérieur<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-48">Fournitures de bureau, fournitures de magasin<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-49">Automobile, moto<span class="mm-sronly">Open submenu</span></a></li>
</ul></div><div id="mm-33" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-32"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-32" aria-hidden="true"><span>Sport, loisirs</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=24698" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=25152" class="mm-listitem__text">Sportez-en un autre</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23008" class="mm-listitem__text">Vêtements de sport</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084263701" class="mm-listitem__text">Moniteur de fréquence cardiaque</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084062737" class="mm-listitem__text">Supplément</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084214045" class="mm-listitem__text">Lunettes de soleil de sport</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=24702" class="mm-listitem__text">Camp, articles de plein air</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=24802" class="mm-listitem__text">Vêtements d'extérieur</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084048304" class="mm-listitem__text">Course cycliste</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=25180" class="mm-listitem__text">Pêche</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084042464" class="mm-listitem__text">Voyage</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084036434" class="mm-listitem__text">Autre</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=26222" class="mm-listitem__text">Vélo, cyclisme</a></li>
</ul></div><div id="mm-34" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-32"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-32" aria-hidden="true"><span>Mode</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23000" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23288" class="mm-listitem__text">Mode féminine</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084005069" class="mm-listitem__text">Sacs pour femme</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23312" class="mm-listitem__text">Chaussures pour femmes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23176" class="mm-listitem__text">Mode masculine</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084006467" class="mm-listitem__text">Sacs pour hommes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23200" class="mm-listitem__text">Chaussures pour hommes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23004" class="mm-listitem__text">Accessoires de mode</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084293011" class="mm-listitem__text">Enfants, mode bébé</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084005204" class="mm-listitem__text">Vêtements japonais pour femme, kimono</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084005479" class="mm-listitem__text">Vêtements japonais homme, kimono</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084233229" class="mm-listitem__text">Sacs pour hommes et femmes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084061614" class="mm-listitem__text">Vêtements japonais, vêtements japonais</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084240597" class="mm-listitem__text">Fabriqué à la main</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23172" class="mm-listitem__text">Classé par marque</a></li>
</ul></div><div id="mm-35" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-32"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-32" aria-hidden="true"><span>Montres, accessoires</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23140" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084005359" class="mm-listitem__text">Accessoire pour femme</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084005358" class="mm-listitem__text">Accessoire pour homme</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084024557" class="mm-listitem__text">Boîtier pour montre</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084024555" class="mm-listitem__text">Ceinture pour montre, bracelets</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084024556" class="mm-listitem__text">Outil pour montre</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084024554" class="mm-listitem__text">Montre-bracelet à personnage</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23260" class="mm-listitem__text">Montre-bracelet de marque</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23268" class="mm-listitem__text">Montre-bracelet pour dame</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23272" class="mm-listitem__text">Montre-bracelet unisexe</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23264" class="mm-listitem__text">Montre-bracelet pour homme</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23276" class="mm-listitem__text">Montre de poche</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084240616" class="mm-listitem__text">Fabriqué à la main</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084006476" class="mm-listitem__text">Accessoires pour enfants</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084052553" class="mm-listitem__text">Accessoire de marque</a></li>
</ul></div><div id="mm-36" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-32"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-32" aria-hidden="true"><span>Jouets, jeux</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=25464" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084250263" class="mm-listitem__text">Modèles en plastique</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084251269" class="mm-listitem__text">Jouets radiocommandés</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084251212" class="mm-listitem__text">Modèles radiocommandés</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084260113" class="mm-listitem__text">Minicars</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084259630" class="mm-listitem__text">Slotcar</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084259579" class="mm-listitem__text">Modèle ferroviaire</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084259623" class="mm-listitem__text">Plarail</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=27673" class="mm-listitem__text">Jouets vintage</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084044370" class="mm-listitem__text">Jeux de héros, arts martiaux</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084044371" class="mm-listitem__text">Cosplay</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=25864" class="mm-listitem__text">Poupées, personnage de poupée</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=40494" class="mm-listitem__text">Peluches</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=26077" class="mm-listitem__text">Jouet personnage</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=26018" class="mm-listitem__text">Puzzle</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=27727" class="mm-listitem__text">Jeux</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084007247" class="mm-listitem__text">Pour bébé</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084024146" class="mm-listitem__text">Jouet d'entraînement intellectuel</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084024164" class="mm-listitem__text">Jouets électriques</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=26080" class="mm-listitem__text">Mécanisme à ressort</a></li>
</ul></div><div id="mm-37" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-32"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-32" aria-hidden="true"><span>Bandes dessinées, dessins animés</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=20060" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084062134" class="mm-listitem__text">Vêtements de jeu de costume</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084050909" class="mm-listitem__text">Autographe, photo manuscrite</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084000109" class="mm-listitem__text">Par travail</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084313425" class="mm-listitem__text">Illustration de dessin à la main</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084313426" class="mm-listitem__text">Effacer les fichiers</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084313427" class="mm-listitem__text">Badges</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084313428" class="mm-listitem__text">Tapisserie</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084313429" class="mm-listitem__text">Serviettes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084005356" class="mm-listitem__text">Photo de cellule</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084297891" class="mm-listitem__text">Dakimakura</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=20068" class="mm-listitem__text">Autre</a></li>
</ul></div><div id="mm-38" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-32"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-32" aria-hidden="true"><span>Ordinateurs</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23336" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084039759" class="mm-listitem__text">Ordinateur personnel</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084292086" class="mm-listitem__text">Tablette</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084288672" class="mm-listitem__text">Lecteur de livres électroniques</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084039561" class="mm-listitem__text">Périphériques</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084039480" class="mm-listitem__text">Pièces</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084049588" class="mm-listitem__text">Serveur</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23560" class="mm-listitem__text">Poste de travail</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23557" class="mm-listitem__text">PDA</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084039460" class="mm-listitem__text">Ordinateur de poche</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23564" class="mm-listitem__text">Autre</a></li>
</ul></div><div id="mm-39" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-32"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-32" aria-hidden="true"><span>Électronique</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23632" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23880" class="mm-listitem__text">Équipement d'imagerie</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23764" class="mm-listitem__text">Équipement audio</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084263358" class="mm-listitem__text">Pièces électriques</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23636" class="mm-listitem__text">Caméra, équipement optique</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23960" class="mm-listitem__text">Téléphone portable, smartphone</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084008364" class="mm-listitem__text">Cuisine, table à manger</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=24450" class="mm-listitem__text">Nettoyage</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084042673" class="mm-listitem__text">Beauté, santé</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084044953" class="mm-listitem__text">Batterie, chargeur</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084044958" class="mm-listitem__text">Transformateur, adaptateur</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=24466" class="mm-listitem__text">Appareils électroménagers</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23972" class="mm-listitem__text">Autre</a></li>
</ul></div><div id="mm-40" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-32"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-32" aria-hidden="true"><span>Musique</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=22152" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=22192" class="mm-listitem__text">CD</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=22260" class="mm-listitem__text">Enregistrer</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=22344" class="mm-listitem__text">Cassette</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084046929" class="mm-listitem__text">DVD</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084249081" class="mm-listitem__text">Blue-ray</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=22244" class="mm-listitem__text">Vidéo</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084005202" class="mm-listitem__text">Disque laser</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=22396" class="mm-listitem__text">Souvenirs, biens de mémoire</a></li>
</ul></div><div id="mm-41" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-32"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-32" aria-hidden="true"><span>Loisirs, culture</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=24242" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=20056" class="mm-listitem__text">Œuvre d'art</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=20124" class="mm-listitem__text">Fournitures artistiques</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=20924" class="mm-listitem__text">Artisanat, artisanat</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=20428" class="mm-listitem__text">Militaire</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=27753" class="mm-listitem__text">Chemin de fer</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=26186" class="mm-listitem__text">Avions</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=24318" class="mm-listitem__text">Observation des oiseaux</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23761" class="mm-listitem__text">Radio amateur</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=22436" class="mm-listitem__text">Instruments, outils et matériaux de musique</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084063789" class="mm-listitem__text">Fournitures de production de modèles</a></li>
</ul></div><div id="mm-42" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-32"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-32" aria-hidden="true"><span>Livres, magazines</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=21600" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=21636" class="mm-listitem__text">Manga, bandes dessinées</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=21884" class="mm-listitem__text">Magazine</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084008525" class="mm-listitem__text">Littérature, roman</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084263670" class="mm-listitem__text">Vieux livres, vieux documents</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084008550" class="mm-listitem__text">Non-fiction, éducation</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084008861" class="mm-listitem__text">Hobby, sport, utilisation pratique</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=21712" class="mm-listitem__text">Étude, éducation</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=21820" class="mm-listitem__text">Sciences et technologies naturelles</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=21624" class="mm-listitem__text">Livre pour enfants, livre d'images</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084009036" class="mm-listitem__text">Art, divertissement</a></li>
</ul></div><div id="mm-43" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-32"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-32" aria-hidden="true"><span>Articles de fans</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084032594" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084047071" class="mm-listitem__text">Par personnes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084309463" class="mm-listitem__text">T-shirts, chemises</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084309464" class="mm-listitem__text">Effacer les fichiers</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084047091" class="mm-listitem__text">Bulletin du fan club</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084309466" class="mm-listitem__text">Lampes stylo, lumières de concert</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084047088" class="mm-listitem__text">Pop</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084047081" class="mm-listitem__text">Photographie</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084047089" class="mm-listitem__text">Autre</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084309465" class="mm-listitem__text">Élastique pour cheveux</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084047075" class="mm-listitem__text">Autographes</a></li>
</ul></div><div id="mm-44" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-32"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-32" aria-hidden="true"><span>Beauté, soins de santé</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=42177" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084005298" class="mm-listitem__text">Soins des ongles</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084005297" class="mm-listitem__text">Soins capillaires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084007425" class="mm-listitem__text">Soins du corps</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084055379" class="mm-listitem__text">Soins buccodentaires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084042539" class="mm-listitem__text">Produits de détente</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=26100" class="mm-listitem__text">Régime</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084042538" class="mm-listitem__text">Soins infirmiers, articles sur les soins infirmiers</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084042544" class="mm-listitem__text">Fournitures saines, appareils de santé</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=24854" class="mm-listitem__text">Fournitures de premiers secours et d'hygiène</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084012478" class="mm-listitem__text">Lunettes, lentilles de contact</a></li>
</ul></div><div id="mm-45" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-32"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-32" aria-hidden="true"><span>Articles pour bébés</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=24202" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084042546" class="mm-listitem__text">Couches, truc à laver</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084008387" class="mm-listitem__text">Marchandises de sécurité</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084008379" class="mm-listitem__text">Articles de bain</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084042548" class="mm-listitem__text">Sorties, fournitures pour promenades</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084216344" class="mm-listitem__text">Événement, souvenirs</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084042550" class="mm-listitem__text">Soins infirmiers, fournitures de repas</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084240631" class="mm-listitem__text">Fabriqué à la main</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=24226" class="mm-listitem__text">Autre</a></li>
</ul></div><div id="mm-46" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-32"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-32" aria-hidden="true"><span>Antiquité, Collection</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=20000" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084261100" class="mm-listitem__text">Chiffres Tategu</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084259484" class="mm-listitem__text">Armure</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=20960" class="mm-listitem__text">Timbre, carte postale</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=20452" class="mm-listitem__text">Argent</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=20116" class="mm-listitem__text">Imprimés</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=27771" class="mm-listitem__text">Publicité, produits de nouveauté</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=20764" class="mm-listitem__text">Science, nature</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=20004" class="mm-listitem__text">Appareils électriques</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=21060" class="mm-listitem__text">Véhicule</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=42223" class="mm-listitem__text">SF</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084045612" class="mm-listitem__text">Bouchon de bouteille</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=27856" class="mm-listitem__text">Autographes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=21152" class="mm-listitem__text">Marchandises diverses</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084048439" class="mm-listitem__text">Gramophone</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=20992" class="mm-listitem__text">Cartes à collectionner</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=27858" class="mm-listitem__text">Disney</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084024008" class="mm-listitem__text">Artisanat</a></li>
</ul></div><div id="mm-47" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-32"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-32" aria-hidden="true"><span>Maison, intérieur</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=24198" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=42168" class="mm-listitem__text">Cuisine, vaisselle</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=42160" class="mm-listitem__text">Articles ménagers</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=24642" class="mm-listitem__text">Outil, fournitures de bricolage</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=20284" class="mm-listitem__text">Saison, fonctions ou événements annuels</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084061209" class="mm-listitem__text">Cérémonies</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=24678" class="mm-listitem__text">Autre</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084240626" class="mm-listitem__text">Travail fait main</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=24534" class="mm-listitem__text">Accessoires pour animaux</a></li>
</ul></div><div id="mm-48" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-32"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-32" aria-hidden="true"><span>Fournitures de bureau, fournitures de magasin</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=22896" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084042484" class="mm-listitem__text">Papeterie</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=22904" class="mm-listitem__text">Sacs, valises</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=22996" class="mm-listitem__text">Autre</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084063841" class="mm-listitem__text">Couvertures de livres</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=22920" class="mm-listitem__text">Accessoires de bureau</a></li>
</ul></div><div id="mm-49" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-32"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-32" aria-hidden="true"><span>Automobile, moto</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=26318" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=26322" class="mm-listitem__text">Pièces</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23879" class="mm-listitem__text">Système de navigation automobile</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084005799" class="mm-listitem__text">Sécurité</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=26320" class="mm-listitem__text">Accessoire</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084005798" class="mm-listitem__text">Sécurité</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=24650" class="mm-listitem__text">Outils</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=2084005546" class="mm-listitem__text">Biens liés à l'automobile</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/yahoo.aspx?c=23852" class="mm-listitem__text">Audio de voiture</a></li>
</ul></div><div id="mm-50" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-1"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-1" aria-hidden="true"><span>Mercari</span></a></div><ul class="mm-listview">
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-51">Vêtements pour femmes<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-52">Vêtements pour hommes<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-53">Bébés/enfants<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-54">Jouets<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-55">Cartes à collectionner<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-56">Chiffres<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-57">Pêche<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-58">Extérieur<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-59">Entraînement/exercice<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-60">Sports<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-61">Fait main / Artisanat<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-62">Meubles/Intérieur<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-63">Cosmétiques/Beauté<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-64">Livres/Revues/Manga<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-65">Smartphone/Tablette/PC<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-66">Jeux vidéo<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-67">Pièces automobiles<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-68">Accessoires automobiles<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-69">Moto<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-70">Ventes groupées<span class="mm-sronly">Open submenu</span></a></li>
</ul></div><div id="mm-51" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-50"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-50" aria-hidden="true"><span>Vêtements pour femmes</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=11" class="mm-listitem__text">Hauts</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=12" class="mm-listitem__text">Veste/Vêtements d'extérieur</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=13" class="mm-listitem__text">Pantalon</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=14" class="mm-listitem__text">Jupes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=15" class="mm-listitem__text">Robes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=16" class="mm-listitem__text">Chaussures</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=17" class="mm-listitem__text">Vêtements de détente/Pyjamas</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=18" class="mm-listitem__text">Jambières</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=19" class="mm-listitem__text">Chapeaux</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=20" class="mm-listitem__text">Sacs</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=21" class="mm-listitem__text">Accessoires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=22" class="mm-listitem__text">Accessoires pour cheveux</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=23" class="mm-listitem__text">Accessoires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=24" class="mm-listitem__text">Horloges</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=25" class="mm-listitem__text">Perruque / Extensions</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=26" class="mm-listitem__text">Kimono / Yukata</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=27" class="mm-listitem__text">Costume / Formel / Robe</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=28" class="mm-listitem__text">Maternité</a></li>
</ul></div><div id="mm-52" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-50"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-50" aria-hidden="true"><span>Vêtements pour hommes</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=2" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=30" class="mm-listitem__text">Hauts</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=31" class="mm-listitem__text">Veste/Vêtements d'extérieur</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=32" class="mm-listitem__text">Pantalon</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=33" class="mm-listitem__text">Chaussures</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=34" class="mm-listitem__text">Sacs</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=35" class="mm-listitem__text">Costumes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=36" class="mm-listitem__text">Chapeaux</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=37" class="mm-listitem__text">Accessoires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=38" class="mm-listitem__text">Accessoires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=39" class="mm-listitem__text">Horloges</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=40" class="mm-listitem__text">Maillots de bain / Rashguards</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=41" class="mm-listitem__text">Jambières</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=42" class="mm-listitem__text">Sous-vêtements</a></li>
</ul></div><div id="mm-53" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-50"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-50" aria-hidden="true"><span>Bébés/enfants</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=3" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=48" class="mm-listitem__text">Chaussures pour enfants</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=49" class="mm-listitem__text">Accessoires de mode pour enfants</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=50" class="mm-listitem__text">Couches / Toilettes / Bain</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=51" class="mm-listitem__text">Fournitures d'extérieur/de voyage</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=52" class="mm-listitem__text">Allaitement maternel/Nutrition</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=53" class="mm-listitem__text">Meubles / Literie pour bébé</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=54" class="mm-listitem__text">Jouets pour bébés et enfants</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=55" class="mm-listitem__text">Événements / Souvenirs</a></li>
</ul></div><div id="mm-54" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-50"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-50" aria-hidden="true"><span>Jouets</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=83" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=745" class="mm-listitem__text">Biens de personnage</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=742" class="mm-listitem__text">Jouets en peluche</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=731" class="mm-listitem__text">Accessoires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=743" class="mm-listitem__text">Modèle / Modèle en plastique</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=744" class="mm-listitem__text">Minicars</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=748" class="mm-listitem__text">Voitures RC de loisir</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=749" class="mm-listitem__text">Modèles ferroviaires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=750" class="mm-listitem__text">Autres</a></li>
</ul></div><div id="mm-55" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-50"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-50" aria-hidden="true"><span>Cartes à collectionner</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=82" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1152" class="mm-listitem__text">Yu-Gi-Oh&nbsp;! OCG Duel Monstres</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1288" class="mm-listitem__text">Magie&nbsp;:&nbsp;le rassemblement</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1289" class="mm-listitem__text">Jeu de cartes Pokémon</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1290" class="mm-listitem__text">Maîtres du duel</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1323" class="mm-listitem__text">Esprits de combat</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1322" class="mm-listitem__text">PriPara</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1291" class="mm-listitem__text">Aikatsu</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1292" class="mm-listitem__text">COMBAT DE CARTES !! Avant-garde</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1293" class="mm-listitem__text">Weiβ Schwarz</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1294" class="mm-listitem__text">LIGUE DES PROPRIÉTAIRES</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1295" class="mm-listitem__text">HÉROS DU BASEBALL</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1296" class="mm-listitem__text">Cartes Dragon Ball</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1321" class="mm-listitem__text">Fourniture/Accessoire/Biens</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=741" class="mm-listitem__text">Autres</a></li>
</ul></div><div id="mm-56" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-50"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-50" aria-hidden="true"><span>Chiffres</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=81" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=733" class="mm-listitem__text">BD/Anime</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=734" class="mm-listitem__text">Effets spéciaux</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=735" class="mm-listitem__text">Personnages du jeu</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=736" class="mm-listitem__text">SF/Fantastique/Horreur</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=737" class="mm-listitem__text">BD américaines</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=738" class="mm-listitem__text">Sports</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=739" class="mm-listitem__text">Militaire</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=740" class="mm-listitem__text">Autres</a></li>
</ul></div><div id="mm-57" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-50"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-50" aria-hidden="true"><span>Pêche</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1172" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1173" class="mm-listitem__text">Tiges</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1174" class="mm-listitem__text">Robines</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1175" class="mm-listitem__text">Leurres / Mouches</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1176" class="mm-listitem__text">Vêtements</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1177" class="mm-listitem__text">Ligne de pêche</a></li>
</ul></div><div id="mm-58" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-50"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-50" aria-hidden="true"><span>Extérieur</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1164" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1165" class="mm-listitem__text">Tentes / Bâches</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1166" class="mm-listitem__text">Lumières / Lanternes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1167" class="mm-listitem__text">Literie d'extérieur</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1168" class="mm-listitem__text">Table / Chaise / Hamac</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1170" class="mm-listitem__text">Barbecue/accessoires de cuisine</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1171" class="mm-listitem__text">Vaisselle d'extérieur</a></li>
</ul></div><div id="mm-59" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-50"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-50" aria-hidden="true"><span>Entraînement/exercice</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1153" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1191" class="mm-listitem__text">Vêtements de marche/course</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1192" class="mm-listitem__text">Autres</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1193" class="mm-listitem__text">Yoga/Pilates</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1194" class="mm-listitem__text">Entraînement avec poids</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1195" class="mm-listitem__text">Autres</a></li>
</ul></div><div id="mm-60" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-50"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-50" aria-hidden="true"><span>Sports</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=8" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1183" class="mm-listitem__text">Golf</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1139" class="mm-listitem__text">Bicyclettes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=884" class="mm-listitem__text">Base-ball</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=885" class="mm-listitem__text">Football / Futsal</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=892" class="mm-listitem__text">Tennis</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=104" class="mm-listitem__text">Snowboard</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1216" class="mm-listitem__text">Ski</a></li>
</ul></div><div id="mm-61" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-50"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-50" aria-hidden="true"><span>Fait main / Artisanat</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=9" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=914" class="mm-listitem__text">Accessoires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=106" class="mm-listitem__text">Mode</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=108" class="mm-listitem__text">Outils d'intérieur/vie quotidienne</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=109" class="mm-listitem__text">Loisirs/Jouets</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=110" class="mm-listitem__text">Bébés/enfants</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1097" class="mm-listitem__text">Matériaux/fournitures d'artisanat</a></li>
</ul></div><div id="mm-62" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-50"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-50" aria-hidden="true"><span>Meubles/Intérieur</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=4" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=57" class="mm-listitem__text">Cuisine / Vaisselle</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=58" class="mm-listitem__text">Lits / Matelas</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=59" class="mm-listitem__text">Canapé / Canapé-lit</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=60" class="mm-listitem__text">Chaises</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=61" class="mm-listitem__text">Bureaux / Tables</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=63" class="mm-listitem__text">Tapis / Moquettes / Nattes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=64" class="mm-listitem__text">Rideaux / Stores</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=65" class="mm-listitem__text">Lumières/Éclairage</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=66" class="mm-listitem__text">Literie</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=67" class="mm-listitem__text">Accessoires d'intérieur</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=68" class="mm-listitem__text">Saisons/Événements annuels</a></li>
</ul></div><div id="mm-63" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-50"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-50" aria-hidden="true"><span>Cosmétiques/Beauté</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=6" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=88" class="mm-listitem__text">Maquillage de base</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1387" class="mm-listitem__text">Maquillage</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=89" class="mm-listitem__text">Soins des ongles</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=87" class="mm-listitem__text">Parfum</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1263" class="mm-listitem__text">Soins de la peau/Cosmétiques de base</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=90" class="mm-listitem__text">Soins capillaires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=91" class="mm-listitem__text">Soins du corps</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=92" class="mm-listitem__text">Soins buccodentaires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=93" class="mm-listitem__text">Détente</a></li>
</ul></div><div id="mm-64" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-50"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-50" aria-hidden="true"><span>Livres/Revues/Manga</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=5" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=72" class="mm-listitem__text">Livres</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=71" class="mm-listitem__text">Manga</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=73" class="mm-listitem__text">Magazines</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=75" class="mm-listitem__text">CD</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=74" class="mm-listitem__text">DVD</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1160" class="mm-listitem__text">Records</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=76" class="mm-listitem__text">Jeux vidéo</a></li>
</ul></div><div id="mm-65" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-50"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-50" aria-hidden="true"><span>Smartphone/Tablette/PC</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=7" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=840" class="mm-listitem__text">Ordinateurs portables</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=839" class="mm-listitem__text">PC de bureau</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=97" class="mm-listitem__text">Caméras</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=98" class="mm-listitem__text">Équipement TV/Vidéo</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=862" class="mm-listitem__text">Accessoires pour smartphones</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=99" class="mm-listitem__text">Équipement audio</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1237" class="mm-listitem__text">Appareils de beauté</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1243" class="mm-listitem__text">Climatisation</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=101" class="mm-listitem__text">Appareils électroménagers</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1262" class="mm-listitem__text">Affichage/Moniteur</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1106" class="mm-listitem__text">Lecteurs de livres électroniques</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=841" class="mm-listitem__text">Périphériques PC</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1156" class="mm-listitem__text">Pièces PC</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=100" class="mm-listitem__text">Smartphone/Téléphone portable</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=863" class="mm-listitem__text">Batterie mobile</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=860" class="mm-listitem__text">Téléphones mobiles</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=861" class="mm-listitem__text">Corps PHS</a></li>
</ul></div><div id="mm-66" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-50"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-50" aria-hidden="true"><span>Jeux vidéo</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=76" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=701" class="mm-listitem__text">Unité principale (Nintendo Switch)</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=702" class="mm-listitem__text">Logiciel (version packagée)</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=703" class="mm-listitem__text">Unité principale (Nintendo Switch Lite)</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=704" class="mm-listitem__text">Logiciel (version packagée)</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=706" class="mm-listitem__text">Autres</a></li>
</ul></div><div id="mm-67" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-50"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-50" aria-hidden="true"><span>Pièces automobiles</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=946" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1334" class="mm-listitem__text">Suspension</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1335" class="mm-listitem__text">Freins</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1336" class="mm-listitem__text">Extérieur / Aéro</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1337" class="mm-listitem__text">Lumières</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1338" class="mm-listitem__text">Articles d'intérieur</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1339" class="mm-listitem__text">Pilotage</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1340" class="mm-listitem__text">Système de silencieux/d'échappement</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1341" class="mm-listitem__text">Système de refroidissement du compresseur du moteur</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1342" class="mm-listitem__text">Embrayage/Mission/Système d'entraînement</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1343" class="mm-listitem__text">Composants électriques</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1330" class="mm-listitem__text">Pneu/Jante</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1345" class="mm-listitem__text">Autres</a></li>
</ul></div><div id="mm-68" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-50"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-50" aria-hidden="true"><span>Accessoires automobiles</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=115" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1113" class="mm-listitem__text">Système de navigation automobile</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1114" class="mm-listitem__text">Audio de voiture</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1116" class="mm-listitem__text">Maintenance</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1254" class="mm-listitem__text">Caméra embarquée</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1280" class="mm-listitem__text">Détecteurs de radar</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1122" class="mm-listitem__text">Catalogue / Manuel</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1281" class="mm-listitem__text">Sécurité</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1117" class="mm-listitem__text">Appareils embarqués ETC</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=948" class="mm-listitem__text">Autres</a></li>
</ul></div><div id="mm-69" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-50"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-50" aria-hidden="true"><span>Moto</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=951" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1346" class="mm-listitem__text">Pneus</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1347" class="mm-listitem__text">Foulards</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1348" class="mm-listitem__text">Système de refroidissement du moteur</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1349" class="mm-listitem__text">Capot / Garde-boue</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1350" class="mm-listitem__text">Suspension</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1351" class="mm-listitem__text">Roues</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1352" class="mm-listitem__text">Sièges</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1353" class="mm-listitem__text">Freins</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1354" class="mm-listitem__text">Réservoirs</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1355" class="mm-listitem__text">Lumière/clignotant</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1356" class="mm-listitem__text">Pignon</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1357" class="mm-listitem__text">Compteurs</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1359" class="mm-listitem__text">Miroirs</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1360" class="mm-listitem__text">Autres</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=116" class="mm-listitem__text">Accessoires</a></li>
</ul></div><div id="mm-70" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-50"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-50" aria-hidden="true"><span>Ventes groupées</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1108" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=69" class="mm-listitem__text">Fournitures pour animaux</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=112" class="mm-listitem__text">Alimentation</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=929" class="mm-listitem__text">Boissons/Alcool</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=113" class="mm-listitem__text">Cuisine/Nécessités quotidiennes/Articles ménagers</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=1151" class="mm-listitem__text">Papeterie/Fournitures de bureau</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/mercari.aspx?c=117" class="mm-listitem__text">Fournitures de bureau/magasin</a></li>
</ul></div><div id="mm-71" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-1"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-1" aria-hidden="true"><span>Rakuten Rakuma</span></a></div><ul class="mm-listview">
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-72">Cosmétiques/beauté<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-73">Sports/plein air<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-74">Vêtements pour femmes<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-75">Vêtements pour hommes<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-76">Enfants/Bébés/Maternité<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-77">Smartphones/Appareils électroménagers/Appareils photo<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-78">Instruments de musique<span class="mm-sronly">Open submenu</span></a></li>
<li class="mm-listitem">

<a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-79">Nourriture<span class="mm-sronly">Open submenu</span></a></li>
</ul></div><div id="mm-72" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-71"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-71" aria-hidden="true"><span>Cosmétiques/beauté</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=10004" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=420" class="mm-listitem__text">Parfum</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=424" class="mm-listitem__text">Base de maquillage/cosmétiques</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=445" class="mm-listitem__text">Soins de la peau</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=463" class="mm-listitem__text">Kits/ensembles</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=467" class="mm-listitem__text">Clous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=474" class="mm-listitem__text">Soins capillaires/coiffage</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=492" class="mm-listitem__text">Soins du corps</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=505" class="mm-listitem__text">Soins buccodentaires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=511" class="mm-listitem__text">Détente</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=520" class="mm-listitem__text">Régime</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=524" class="mm-listitem__text">Cosmétiques/beauté - autres</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1696" class="mm-listitem__text">Outils de maquillage/produits de soins</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1713" class="mm-listitem__text">Rasage</a></li>
</ul></div><div id="mm-73" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-71"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-71" aria-hidden="true"><span>Sports/plein air</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=10014" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1095" class="mm-listitem__text">Golf</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1097" class="mm-listitem__text">Base-ball</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1098" class="mm-listitem__text">Football/futsal</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1100" class="mm-listitem__text">Snowboards</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1105" class="mm-listitem__text">Tennis</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1111" class="mm-listitem__text">Pêche</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1112" class="mm-listitem__text">Sports/plein air – autres</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1548" class="mm-listitem__text">Entraînement/exercice</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1549" class="mm-listitem__text">Courir</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1561" class="mm-listitem__text">Ski</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1568" class="mm-listitem__text">Bicyclettes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1582" class="mm-listitem__text">Extérieur</a></li>
</ul></div><div id="mm-74" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-71"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-71" aria-hidden="true"><span>Vêtements pour femmes</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=10001" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1" class="mm-listitem__text">Hauts</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=2" class="mm-listitem__text">Vestes/vêtements d'extérieur</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=3" class="mm-listitem__text">Robes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=4" class="mm-listitem__text">Chaussures</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=5" class="mm-listitem__text">Pantalon</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=6" class="mm-listitem__text">Jupes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=7" class="mm-listitem__text">Sacs</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=8" class="mm-listitem__text">Accessoires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=9" class="mm-listitem__text">Accessoires pour cheveux</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=10" class="mm-listitem__text">Vêtements de chambre/pyjamas</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=11" class="mm-listitem__text">Jambières</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=12" class="mm-listitem__text">Chapeaux</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=13" class="mm-listitem__text">Accessoires de mode</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=14" class="mm-listitem__text">Perruques/extensions</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=16" class="mm-listitem__text">Maillots de bain/yukata</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=17" class="mm-listitem__text">Vêtements/robes de soirée</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1275" class="mm-listitem__text">Sous-vêtements</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=227" class="mm-listitem__text">Autre</a></li>
</ul></div><div id="mm-75" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-71"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-71" aria-hidden="true"><span>Vêtements pour hommes</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=10005" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=526" class="mm-listitem__text">Hauts</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=539" class="mm-listitem__text">Vestes/vêtements d'extérieur</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=562" class="mm-listitem__text">Pantalon</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=572" class="mm-listitem__text">Chaussures</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=580" class="mm-listitem__text">Sacs</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=592" class="mm-listitem__text">Costumes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=598" class="mm-listitem__text">Chapeaux</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=606" class="mm-listitem__text">Accessoires</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=614" class="mm-listitem__text">Accessoires de mode</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=641" class="mm-listitem__text">Horloges</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=648" class="mm-listitem__text">Maillots de bain/yukata</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=656" class="mm-listitem__text">Jambières</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=661" class="mm-listitem__text">Sous-vêtements</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=665" class="mm-listitem__text">Autre</a></li>
</ul></div><div id="mm-76" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-71"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-71" aria-hidden="true"><span>Enfants/Bébés/Maternité</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=10003" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=214" class="mm-listitem__text">Maternité</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=229" class="mm-listitem__text">Vêtements filles (90cm ~)</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=245" class="mm-listitem__text">Vêtements pour garçons (90 cm ~)</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=261" class="mm-listitem__text">Chaussures enfants (15 cm ~)</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=274" class="mm-listitem__text">Chaussures bébé (~ 14 cm)</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=284" class="mm-listitem__text">Vêtements bébé (~ 85 cm)</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=303" class="mm-listitem__text">Sacs enfants</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=314" class="mm-listitem__text">Accessoires de mode pour enfants</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=329" class="mm-listitem__text">Fournitures d'extérieur</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=344" class="mm-listitem__text">Literie/meubles</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=359" class="mm-listitem__text">Fournitures d'allaitement/repas</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=370" class="mm-listitem__text">Couches/fournitures de toilette</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=382" class="mm-listitem__text">Fournitures de nettoyage/hygiène</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=396" class="mm-listitem__text">Fournitures commémoratives/cérémonies</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=406" class="mm-listitem__text">Jouets</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=419" class="mm-listitem__text">Autre</a></li>
</ul></div><div id="mm-77" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-71"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-71" aria-hidden="true"><span>Smartphones/Appareils électroménagers/Appareils photo</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=10006" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=667" class="mm-listitem__text">Smartphones/téléphones mobiles</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=673" class="mm-listitem__text">Accessoires pour smartphones</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=676" class="mm-listitem__text">PC/tablettes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=682" class="mm-listitem__text">Caméras</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=688" class="mm-listitem__text">Équipement TV/vidéo</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=694" class="mm-listitem__text">Équipement audio</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=701" class="mm-listitem__text">Appareils électroménagers</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=718" class="mm-listitem__text">Beauté/santé</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1361" class="mm-listitem__text">Appareils de cuisson</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1394" class="mm-listitem__text">AC</a></li>
</ul></div><div id="mm-78" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-71"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-71" aria-hidden="true"><span>Instruments de musique</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=10013" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=801" class="mm-listitem__text">Guitares</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=802" class="mm-listitem__text">Basses</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=803" class="mm-listitem__text">Instruments à cordes</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=804" class="mm-listitem__text">Instruments à vent</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=805" class="mm-listitem__text">Instruments à clavier</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=806" class="mm-listitem__text">Instruments de percussion</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=808" class="mm-listitem__text">Appareils d'enregistrement/PA</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=809" class="mm-listitem__text">Équipement DJ</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=810" class="mm-listitem__text">DTM/DAW</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=812" class="mm-listitem__text">Instruments de musique&nbsp;– autres</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1449" class="mm-listitem__text">Batterie</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1486" class="mm-listitem__text">Instruments de musique japonais</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1572" class="mm-listitem__text">Partitions</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1625" class="mm-listitem__text">Ukulélés</a></li>
</ul></div><div id="mm-79" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-71"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-71" aria-hidden="true"><span>Nourriture</span></a></div><ul class="mm-listview">
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=10012" class="mm-listitem__text">Tous</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1125" class="mm-listitem__text">Nourriture</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1126" class="mm-listitem__text">Boissons</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1127" class="mm-listitem__text">Aliments/boissons/alcools – autres</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1510" class="mm-listitem__text">Alcool</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1640" class="mm-listitem__text">Aliments transformés</a></li>
<li class="mm-listitem"><a href="https://zenmarket.jp/rakuma.aspx?c=1649" class="mm-listitem__text">Aliments santé</a></li>
</ul></div><div id="mm-80" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-1"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-1" aria-hidden="true"><span>RECOMMANDATIONS 300 yens (500 yens)</span></a></div><ul class="mm-listview">
        <li class="mm-listitem"><a href="https://zenmarket.jp/en/marketplace.aspx" class="mm-listitem__text">ZenPlus</a></li>
                <li class="mm-listitem"><a href="https://zenmarket.jp/fr/minne.aspx" class="mm-listitem__text">Minne</a></li>
                <li class="mm-listitem"><a href="https://zenmarket.jp/fr/bookoff.aspx" class="mm-listitem__text">Book Off</a></li>
                <li class="mm-listitem"><a href="https://zenmarket.jp/fr/shop.aspx?id=shop.lashinbang.com" class="mm-listitem__text">Lashinbang</a></li>
                <li class="mm-listitem"><a href="https://zenmarket.jp/fr/shop.aspx?id=mediaworld.co.jp" class="mm-listitem__text">MediaWorld</a></li>
                <li class="mm-listitem"><a href="https://zenmarket.jp/fr/shop.aspx?id=spinns.jp" class="mm-listitem__text">SPINNS</a></li>
                <li class="mm-listitem"><a href="https://zenmarket.jp/fr/shop.aspx?id=wormtokyo.com" class="mm-listitem__text">WORM TOKYO</a></li>
                <li class="mm-listitem"><a href="https://zenmarket.jp/fr/shop.aspx?id=dreamvs.jp" class="mm-listitem__text">Yumetenbo</a></li>
                <li class="mm-listitem"><a href="https://zenmarket.jp/fr/shop.aspx?id=store.shimamura.co.jp" class="mm-listitem__text">Shimamura Music</a></li>
                <li class="mm-listitem"><a href="https://zenmarket.jp/fr/digimart.aspx" class="mm-listitem__text">Digimart</a></li>
                <li class="mm-listitem"><a href="https://zenmarket.jp/fr/shop.aspx?id=www.j-guitar.com" class="mm-listitem__text">J-Guitar</a></li>
                <li class="mm-listitem"><a href="https://zenmarket.jp/fr/shop.aspx?id=cameranonaniwa.jp" class="mm-listitem__text">Camera no Naniwa</a></li>
                <li class="mm-listitem"><a href="https://zenmarket.jp/fr/recommendedshops.aspx" class="mm-listitem__text">Voir plus</a></li>
    </ul></div><div id="mm-81" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-1"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-1" aria-hidden="true"><span>Autres boutiques</span></a></div><ul class="mm-listview">
        <li class="mm-listitem"><a href="https://zenmarket.jp/fr/yshopping.aspx" class="mm-listitem__text">JDirectItems Shopping</a></li>
        <li class="mm-listitem"><a href="https://zenmarket.jp/fr/shop.aspx?id=www.suruga-ya.jp" class="mm-listitem__text">Suruga-ya</a></li>
        <li class="mm-listitem"><a href="https://zenmarket.jp/fr/shop.aspx?id=booth.pm" class="mm-listitem__text">BOOTH</a></li>
                <li class="mm-listitem"><a href="https://zenmarket.jp/fr/shop.aspx?id=magi.camp" class="mm-listitem__text">Magi</a></li>
        <li class="mm-listitem"><a href="https://zenmarket.jp/fr/othershops.aspx" class="mm-listitem__text">Voir plus</a></li>
    </ul></div><div id="mm-82" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-1"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-1" aria-hidden="true"><span>
                Langue
                Français
            </span></a></div><ul class="mm-listview">
                <li class="mm-listitem"><a href="/en/profile/parcel.aspx?state=5" class="mm-listitem__text">English</a></li>
                <li class="mm-listitem"><a href="/ru/profile/parcel.aspx?state=5" class="mm-listitem__text">Русский</a></li>
                <li class="mm-listitem"><a href="/ua/profile/parcel.aspx?state=5" class="mm-listitem__text">Українська</a></li>
                <li class="mm-listitem"><a href="/ja/profile/parcel.aspx?state=5" class="mm-listitem__text">日本語</a></li>
                <li class="mm-listitem"><a href="/cn/profile/parcel.aspx?state=5" class="mm-listitem__text">简体中文</a></li>
                <li class="mm-listitem"><a href="/tw/profile/parcel.aspx?state=5" class="mm-listitem__text">繁體中文</a></li>
                <li class="mm-listitem"><a href="/es/profile/parcel.aspx?state=5" class="mm-listitem__text">Español</a></li>
                <li class="mm-listitem"><a href="/fr/profile/parcel.aspx?state=5" class="mm-listitem__text">Français</a></li>
                <li class="mm-listitem"><a href="/ms/profile/parcel.aspx?state=5" class="mm-listitem__text">Bahasa Melayu</a></li>
                <li class="mm-listitem"><a href="/vi/profile/parcel.aspx?state=5" class="mm-listitem__text">Tiếng Việt</a></li>
                <li class="mm-listitem"><a href="/ar/profile/parcel.aspx?state=5" class="mm-listitem__text">عَرَبِيّ</a></li>
                <li class="mm-listitem"><a href="/de/profile/parcel.aspx?state=5" class="mm-listitem__text">Deutsch</a></li>
                <li class="mm-listitem"><a href="/id/profile/parcel.aspx?state=5" class="mm-listitem__text">Bahasa Indonesia</a></li>
                <li class="mm-listitem"><a href="/th/profile/parcel.aspx?state=5" class="mm-listitem__text">ภาษาไทย</a></li>
                <li class="mm-listitem"><a href="/it/profile/parcel.aspx?state=5" class="mm-listitem__text">Italiano</a></li>
                <li class="mm-listitem"><a href="/pt/profile/parcel.aspx?state=5" class="mm-listitem__text">Português</a></li>
                <li class="mm-listitem"><a href="/tr/profile/parcel.aspx?state=5" class="mm-listitem__text">Türkçe</a></li>
                <li class="mm-listitem"><a href="/pl/profile/parcel.aspx?state=5" class="mm-listitem__text">Polski</a></li>
                <li class="mm-listitem"><a href="/ko/profile/parcel.aspx?state=5" class="mm-listitem__text">한국어</a></li>
            </ul></div><div id="mm-83" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-1"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-1" aria-hidden="true"><span>
                Devise
                Euro (EUR)
            </span></a></div><ul class="mm-listview">
                <!-- Add search field for currencies -->
                <li class="currency-search-container mm-listitem" style="padding: 8px; border-bottom: 1px solid #eee;">
                    <input type="text" id="currencySearchInput" placeholder="Rechercher des devises" style="width: 100%; padding: 6px 10px; border: 1px solid rgb(221, 221, 221); border-radius: 4px; font-size: 14px;">
                </li>

                
                        <li class="currency-item mm-listitem" data-currency-name="dollar américain (usd)" data-currency-code="usd">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 USD = 142 JPY" data-currency="usd" data-currencysymbol="$">
                                Dollar américain (USD)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="yen (jpy)" data-currency-code="jpy">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="" data-currency="jpy" data-currencysymbol="¥">
                                Yen (JPY)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="yuan (cny)" data-currency-code="cny">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 CNY = 19,9 JPY" data-currency="cny" data-currencysymbol="元">
                                Yuan (CNY)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="euro (eur)" data-currency-code="eur">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 EUR = 166 JPY" data-currency="eur" data-currencysymbol="€">
                                Euro (EUR)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="livre sterling (gbp)" data-currency-code="gbp">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 GBP = 191 JPY" data-currency="gbp" data-currencysymbol="£">
                                Livre sterling (GBP)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="rouble russe (rub)" data-currency-code="rub">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 RUB = 1,7 JPY" data-currency="rub" data-currencysymbol="руб">
                                Rouble russe (RUB)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="hryvnia (uah)" data-currency-code="uah">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 UAH = 3,4 JPY" data-currency="uah" data-currencysymbol="грн">
                                Hryvnia (UAH)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="dollar australien (aud)" data-currency-code="aud">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 AUD = 93 JPY" data-currency="aud" data-currencysymbol="aud$">
                                Dollar australien (AUD)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="dollar canadien (cad)" data-currency-code="cad">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 CAD = 102 JPY" data-currency="cad" data-currencysymbol="cad$">
                                Dollar canadien (CAD)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="ringgit (myr)" data-currency-code="myr">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 MYR = 33,7 JPY" data-currency="myr" data-currencysymbol="rm">
                                Ringgit (MYR)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="roupie indonésienne (idr)" data-currency-code="idr">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 JPY = 116,19 IDR" data-currency="idr" data-currencysymbol="rp">
                                Roupie indonésienne (IDR)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="baht (thb)" data-currency-code="thb">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 THB = 4,5 JPY" data-currency="thb" data-currencysymbol="฿">
                                Baht (THB)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="dollar de hong kong (hkd)" data-currency-code="hkd">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 HKD = 18,2 JPY" data-currency="hkd" data-currencysymbol="hk$">
                                Dollar de Hong Kong (HKD)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="dollar de singapour (sgd)" data-currency-code="sgd">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 SGD = 110 JPY" data-currency="sgd" data-currencysymbol="sgd$">
                                Dollar de Singapour (SGD)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="nouveau dollar de taïwan (twd)" data-currency-code="twd">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 TWD = 4,7 JPY" data-currency="twd" data-currencysymbol="nt$">
                                Nouveau dollar de Taïwan (TWD)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="peso mexicain (mxn)" data-currency-code="mxn">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 MXN = 7,6 JPY" data-currency="mxn" data-currencysymbol="mxn$">
                                Peso mexicain (MXN)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="dong vietnamien (vnd)" data-currency-code="vnd">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 JPY = 186,41 VND" data-currency="vnd" data-currencysymbol="₫ ">
                                Dong vietnamien (VND)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="real brésilien (brl)" data-currency-code="brl">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 BRL = 26,04 JPY" data-currency="brl" data-currencysymbol="r$">
                                Real brésilien (BRL)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="zloty polonais (pln)" data-currency-code="pln">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 PLN = 39,01 JPY" data-currency="pln" data-currencysymbol="pln">
                                Zloty polonais (PLN)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="aed dhiram (aed)" data-currency-code="aed">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 AED = 38,54 JPY" data-currency="aed" data-currencysymbol="aed">
                                AED Dhiram (AED)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="roupie indienne (inr)" data-currency-code="inr">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 INR = 1,6 JPY" data-currency="inr" data-currencysymbol="inr">
                                Roupie indienne (INR)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="peso argentin (ars)" data-currency-code="ars">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 JPY = 10 ARS" data-currency="ars" data-currencysymbol="ars">
                                Peso argentin (ARS)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="peso chilien (clp)" data-currency-code="clp">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 JPY = 6,83 CLP" data-currency="clp" data-currencysymbol="clp">
                                Peso chilien (CLP)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="peso colombien (cop)" data-currency-code="cop">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 JPY = 27,7 COP" data-currency="cop" data-currencysymbol="cop">
                                Peso colombien (COP)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="sol péruvien (pen)" data-currency-code="pen">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 PEN = 40,82 JPY" data-currency="pen" data-currencysymbol="pen">
                                Sol péruvien (PEN)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="peso uruguayen (uyu)" data-currency-code="uyu">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 UYU = 3,5 JPY" data-currency="uyu" data-currencysymbol="uyu">
                                Peso uruguayen (UYU)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="guarani paraguayen (pyg)" data-currency-code="pyg">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 JPY = 50,6 PYG" data-currency="pyg" data-currencysymbol="pyg">
                                Guarani paraguayen (PYG)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="dirham marocain (mad)" data-currency-code="mad">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 MAD = 15,68 JPY" data-currency="mad" data-currencysymbol="mad">
                                Dirham marocain (MAD)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="livre égyptienne (egp)" data-currency-code="egp">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 EGP = 3 JPY" data-currency="egp" data-currencysymbol="egp">
                                Livre égyptienne (EGP)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="lire turque (try)" data-currency-code="try">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 TRY = 3,43 JPY" data-currency="try" data-currencysymbol="₺">
                                Lire turque (TRY)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="dollar néo-zélandais (nzd)" data-currency-code="nzd">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 NZD = 83,86 JPY" data-currency="nzd" data-currencysymbol="nz$">
                                Dollar néo-zélandais (NZD)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="forint hongrois (huf)" data-currency-code="huf">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 JPY = 2,37 HUF" data-currency="huf" data-currencysymbol="ft">
                                Forint hongrois (HUF)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="riyal saoudien (sar)" data-currency-code="sar">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 SAR = 37,73 JPY" data-currency="sar" data-currencysymbol="sar">
                                Riyal Saoudien (SAR)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="franc suisse (chf)" data-currency-code="chf">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 CHF = 177,45 JPY" data-currency="chf" data-currencysymbol="chf">
                                Franc Suisse (CHF)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="couronne danoise (dkk)" data-currency-code="dkk">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 DKK = 22,2 JPY" data-currency="dkk" data-currencysymbol="dkk">
                                Couronne Danoise (DKK)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="couronne norvégienne (nok)" data-currency-code="nok">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 NOK = 14,17 JPY" data-currency="nok" data-currencysymbol="nok">
                                Couronne Norvégienne (NOK)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="couronne suédoise (sek)" data-currency-code="sek">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 SEK = 15,09 JPY" data-currency="sek" data-currencysymbol="sek">
                                Couronne Suédoise (SEK)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="nairas nigérians (ngn)" data-currency-code="ngn">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 JPY = 10,64 NGN" data-currency="ngn" data-currencysymbol="ngn">
                                Nairas nigérians (NGN)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="rand sud-africain (zar)" data-currency-code="zar">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 ZAR = 8,07 JPY" data-currency="zar" data-currencysymbol="zar">
                                Rand sud-africain (ZAR)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="shillings kényans (kes)" data-currency-code="kes">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 KES = 1,09 JPY" data-currency="kes" data-currencysymbol="kes">
                                Shillings kényans (KES)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="cedi ghanéen (ghs)" data-currency-code="ghs">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 GHS = 11,7 JPY" data-currency="ghs" data-currencysymbol="ghs">
                                Cedi ghanéen (GHS)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="franc cfa ouest africain (xof)" data-currency-code="xof">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 JPY = 3,94 XOF" data-currency="xof" data-currencysymbol="xof">
                                Franc CFA ouest africain (XOF)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="franc cfa d" afrique="" centrale="" (xaf)'="" data-currency-code="xaf">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 JPY = 3,94 XAF" data-currency="xaf" data-currencysymbol="xaf">
                                Franc CFA d'Afrique centrale (XAF)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="dinar koweitien (kwd)" data-currency-code="kwd">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 KWD = 463,32 JPY" data-currency="kwd" data-currencysymbol="kwd">
                                Dinar koweitien (KWD)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="riyal qatarien (qar)" data-currency-code="qar">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 QAR = 38,88 JPY" data-currency="qar" data-currencysymbol="qar">
                                Riyal qatarien (QAR)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="dinar bahreini (bhd)" data-currency-code="bhd">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 BHD = 375,44 JPY" data-currency="bhd" data-currencysymbol="bhd">
                                Dinar bahreini (BHD)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="dinar irakien (iqd)" data-currency-code="iqd">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 JPY = 9,25 IQD" data-currency="iqd" data-currencysymbol="iqd">
                                Dinar irakien (IQD)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="peso philippin (php)" data-currency-code="php">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 PHP = 2,48 JPY" data-currency="php" data-currencysymbol="php">
                                Peso philippin (PHP)
                            </a>
                        </li>
                    
                        <li class="currency-item mm-listitem" data-currency-name="won sud-coréen (krw)" data-currency-code="krw">
                            <a href="#" class="change-currency close-mobile-menu mm-listitem__text" data-rate="1 JPY = 9,81 KRW" data-currency="krw" data-currencysymbol="₩">
                                Won sud-coréen (KRW)
                            </a>
                        </li>
                    

                <li id="noCurrencyResults" class="no-results-message mm-listitem" style="display: none; padding: 10px; text-align: center; color: #666; font-style: italic;">
                    Aucune devise trouvée
                </li>
            </ul></div><div id="mobileMenuPreferredShop" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mm-1"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mm-1" aria-hidden="true"><span>
                Boutique préférée
                JDirectItems Auction
            </span></a></div><ul class="mm-listview">
            <li class="select-mobile-menu-shop mm-listitem" data-shopid="rakuten" data-shopname="Rakuten"><a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-84">Rakuten<span class="mm-sronly">Open submenu</span></a></li><li class="select-mobile-menu-shop mm-listitem" data-shopid="amazon" data-shopname="Amazon"><a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-85">Amazon<span class="mm-sronly">Open submenu</span></a></li><li class="select-mobile-menu-shop mm-listitem" data-shopid="yahoo" data-shopname="JDirectItems Auction"><a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-86">JDirectItems Auction<span class="mm-sronly">Open submenu</span></a></li><li class="select-mobile-menu-shop mm-listitem" data-shopid="yahooshopping" data-shopname="JDirectItems Shopping"><a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-87">JDirectItems Shopping<span class="mm-sronly">Open submenu</span></a></li><li class="select-mobile-menu-shop mm-listitem" data-shopid="zenmarketplace" data-shopname="ZenPlus"><a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-88">ZenPlus<span class="mm-sronly">Open submenu</span></a></li><li class="select-mobile-menu-shop mm-listitem" data-shopid="rakuma" data-shopname="Rakuma"><a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-89">Rakuma<span class="mm-sronly">Open submenu</span></a></li><li class="select-mobile-menu-shop mm-listitem" data-shopid="mercari" data-shopname="Mercari"><a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-90">Mercari<span class="mm-sronly">Open submenu</span></a></li><li class="select-mobile-menu-shop mm-listitem" data-shopid="minne" data-shopname="minne"><a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-91">minne<span class="mm-sronly">Open submenu</span></a></li><li class="select-mobile-menu-shop mm-listitem" data-shopid="bookoff" data-shopname="Bookoff"><a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-92">Bookoff<span class="mm-sronly">Open submenu</span></a></li><li class="select-mobile-menu-shop mm-listitem" data-shopid="digimart" data-shopname="Digimart"><a class="mm-btn mm-btn_next mm-listitem__btn mm-listitem__text" href="#mm-93">Digimart<span class="mm-sronly">Open submenu</span></a></li></ul></div><div id="mm-84" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mobileMenuPreferredShop"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mobileMenuPreferredShop" aria-hidden="true"><span>Rakuten</span></a></div><ul class="mm-listview"><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="">Tous</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="100371" data-categoryname="Vêtements pour femmes">Vêtements pour femmes</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="551177" data-categoryname="Vêtements pour hommes">Vêtements pour hommes</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="216131" data-categoryname="Sacs">Sacs</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="100433" data-categoryname="Sous-vêtements">Sous-vêtements</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="558885" data-categoryname="Chaussures">Chaussures</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="558929" data-categoryname="Montres">Montres</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="216129" data-categoryname="Bijoux">Bijoux</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="100533" data-categoryname="Bébés">Bébés</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="100939" data-categoryname="Cosmétiques">Cosmétiques</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="100227" data-categoryname="Nourriture">Nourriture</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="100316" data-categoryname="Boissons">Boissons</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="551167" data-categoryname="Friandises">Friandises</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="101164" data-categoryname="Jouets">Jouets</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="215783" data-categoryname="Nécessités quotidiennes">Nécessités quotidiennes</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="101070" data-categoryname="Sport">Sport</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="100938" data-categoryname="Alimentation / Santé">Alimentation / Santé</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="551169" data-categoryname="Médicament">Médicament</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="100005" data-categoryname="Jardin">Jardin</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="101213" data-categoryname="Animaux domestiques">Animaux domestiques</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="100026" data-categoryname="Ordinateurs et bureau">Ordinateurs et bureau</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="562637" data-categoryname="Appareils ménagers">Appareils ménagers</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="211742" data-categoryname="TV/Audio/Appareils photo">TV/Audio/Appareils photo</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="558944" data-categoryname="Cuisine">Cuisine</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="101114" data-categoryname="Automobile">Automobile</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="503190" data-categoryname="Pièces automobiles">Pièces automobiles</a></li></ul></div><div id="mm-85" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mobileMenuPreferredShop"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mobileMenuPreferredShop" aria-hidden="true"><span>Amazon</span></a></div><ul class="mm-listview"><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="">Tous</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2221077051" data-categoryname="Sacs et Bagages">Sacs et Bagages</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2230005051" data-categoryname="Vêtements Hommes">Vêtements Hommes</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2230006051" data-categoryname="Vêtements Femmes">Vêtements Femmes</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="85895051" data-categoryname="Bijoux">Bijoux</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2230804051" data-categoryname="Enfants &amp; Bébé">Enfants &amp; Bébé</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2016926051" data-categoryname="Chaussures">Chaussures</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="324025011" data-categoryname="Montres">Montres</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2016929051" data-categoryname="Electroménager">Electroménager</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2319890051" data-categoryname="Accessoires Automobile">Accessoires Automobile</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2017304051" data-categoryname="Accessoires Moto">Accessoires Moto</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2127209051" data-categoryname="Ordinateurs et Réseaux">Ordinateurs et Réseaux</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="3210981" data-categoryname="Santé et Bien-être">Santé et Bien-être</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2123629051" data-categoryname="Instruments de musique">Instruments de musique</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="3828871" data-categoryname="Cuisine &amp; Salon">Cuisine &amp; Salon</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="52374051" data-categoryname="Cosmétiques">Cosmétiques</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="160384011" data-categoryname="Beauté">Beauté</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="14304371" data-categoryname="Sport">Sport</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="13299531" data-categoryname="Jouets">Jouets</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="57239051" data-categoryname="Nourriture">Nourriture</a></li></ul></div><div id="mm-86" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mobileMenuPreferredShop"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mobileMenuPreferredShop" aria-hidden="true"><span>JDirectItems Auction</span></a></div><ul class="mm-listview"><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="">Tous</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="23000" data-categoryname="Mode">Mode</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="23140" data-categoryname="Bijoux, Montres">Bijoux, Montres</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="24698" data-categoryname="Sport, Loisirs">Sport, Loisirs</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="24202" data-categoryname="Produits bébés">Produits bébés</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="42177" data-categoryname="Beauté, Santé">Beauté, Santé</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="26318" data-categoryname="Automobile">Automobile</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="23336" data-categoryname="Ordinateurs">Ordinateurs</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="23632" data-categoryname="Electronique">Electronique</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="24198" data-categoryname="Maison, Intérieur">Maison, Intérieur</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="22896" data-categoryname="Fournitures de bureau">Fournitures de bureau</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="21600" data-categoryname="Livres, Magazines">Livres, Magazines</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="22152" data-categoryname="Musique">Musique</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="25464" data-categoryname="Jouets, Jeux">Jouets, Jeux</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2084032594" data-categoryname="Articles de célébrités">Articles de célébrités</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="20060" data-categoryname="Comics, Animé">Comics, Animé</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="24242" data-categoryname="Maison, Intérieur">Maison, Intérieur</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="20000" data-categoryname="Antique, Collections">Antique, Collections</a></li></ul></div><div id="mm-87" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mobileMenuPreferredShop"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mobileMenuPreferredShop" aria-hidden="true"><span>JDirectItems Shopping</span></a></div><ul class="mm-listview"><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="">Tous</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="13457" data-categoryname="Mode">Mode</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2498" data-categoryname="Nourriture">Nourriture</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2513" data-categoryname="Loisirs, plein air">Loisirs, plein air</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2500" data-categoryname="Alimentation, Santé">Alimentation, Santé</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2501" data-categoryname="Cosmétiques, Parfums">Cosmétiques, Parfums</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2502" data-categoryname="PC, Accessoires">PC, Accessoires</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2504" data-categoryname="Appareils audio/vidéo, Appareil photo">Appareils audio/vidéo, Appareil photo</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2505" data-categoryname="Appareils ménagers et électrique de petites tailles">Appareils ménagers et électrique de petites tailles</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2506" data-categoryname="Meubles, Intérieur">Meubles, Intérieur</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2507" data-categoryname="Fleurs, jardinage">Fleurs, jardinage</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2508" data-categoryname="Cuisine, articles ménagers, produits de base">Cuisine, articles ménagers, produits de base</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2503" data-categoryname="Bricolage, Outils, Papeterie">Bricolage, Outils, Papeterie</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2509" data-categoryname="Animaux domestiques et de compagnie">Animaux domestiques et de compagnie</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2510" data-categoryname="Instruments de musique, Hobby, Apprentissage">Instruments de musique, Hobby, Apprentissage</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2511" data-categoryname="Jeux, jouets">Jeux, jouets</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2497" data-categoryname="Bébé, Enfants, Maternité">Bébé, Enfants, Maternité</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2512" data-categoryname="Sport">Sport</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2514" data-categoryname="Bicyclettes, voitures, motos">Bicyclettes, voitures, motos</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2516" data-categoryname="CD, Musique, Tickets">CD, Musique, Tickets</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2517" data-categoryname="DVD, Vidéo">DVD, Vidéo</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="10002" data-categoryname="Livres, BD, Magazines">Livres, BD, Magazines</a></li></ul></div><div id="mm-88" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mobileMenuPreferredShop"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mobileMenuPreferredShop" aria-hidden="true"><span>ZenPlus</span></a></div><ul class="mm-listview"><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="">Tous</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="10796" data-categoryname="Vêtements pour femmes">Vêtements pour femmes</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="10346" data-categoryname="Vêtements pour hommes">Vêtements pour hommes</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="7127" data-categoryname="Sacs">Sacs</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="1" data-categoryname="Sous-vêtements">Sous-vêtements</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="19176" data-categoryname="Chaussures">Chaussures</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="18299" data-categoryname="Montres">Montres</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="4050" data-categoryname="Bijoux">Bijoux</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2750" data-categoryname="Bébés">Bébés</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="13316" data-categoryname="Cosmétiques">Cosmétiques</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="19447" data-categoryname="Nourriture">Nourriture</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="33250" data-categoryname="Boissons">Boissons</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="5562" data-categoryname="Friandises">Friandises</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="350" data-categoryname="Jouets">Jouets</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="11753" data-categoryname="Nécessités quotidiennes">Nécessités quotidiennes</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="27895" data-categoryname="Sport">Sport</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="6127" data-categoryname="Alimentation / Santé">Alimentation / Santé</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="38851" data-categoryname="Médicaments">Médicaments</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="41720" data-categoryname="Jardin">Jardin</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="9088" data-categoryname="Animaux domestiques">Animaux domestiques</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="36201" data-categoryname="Ordinateurs et bureau">Ordinateurs et bureau</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="39510" data-categoryname="Appareils ménagers">Appareils ménagers</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="23530" data-categoryname="TV/Audio/Appareils photo">TV/Audio/Appareils photo</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="33707" data-categoryname="Cuisine">Cuisine</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="43073" data-categoryname="Auto">Auto</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="46517" data-categoryname="Pièces auto">Pièces auto</a></li></ul></div><div id="mm-89" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mobileMenuPreferredShop"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mobileMenuPreferredShop" aria-hidden="true"><span>Rakuma</span></a></div><ul class="mm-listview"><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="">Tous</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="10005" data-categoryname="Homme">Homme</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="10001" data-categoryname="Femme">Femme</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="10003" data-categoryname="Enfants / bébé / maternité">Enfants / bébé / maternité</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="10004" data-categoryname="Cosmétiques / beauté">Cosmétiques / beauté</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="10007" data-categoryname="Divertissement / hobbies">Divertissement / hobbies</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="10010" data-categoryname="Fait main">Fait main</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="10014" data-categoryname="Sports / extérieur">Sports / extérieur</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="10012" data-categoryname="Nourriture / boisson / saké">Nourriture / boisson / saké</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="10006" data-categoryname="Smartphones / appareils électroménagers / caméra">Smartphones / appareils électroménagers / caméra</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="10002" data-categoryname="Autres">Autres</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="10009" data-categoryname="Intérieur / maison / nécessités quotidiennes">Intérieur / maison / nécessités quotidiennes</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="10013" data-categoryname="Instrument de musique">Instrument de musique</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="10011" data-categoryname="Voiture / moto">Voiture / moto</a></li></ul></div><div id="mm-90" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mobileMenuPreferredShop"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mobileMenuPreferredShop" aria-hidden="true"><span>Mercari</span></a></div><ul class="mm-listview"><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="">Tous</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="2" data-categoryname="Vêtements Homme">Vêtements Homme</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="1" data-categoryname="Vêtements Femme">Vêtements Femme</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="3" data-categoryname="Enfants &amp; Bébés">Enfants &amp; Bébés</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="6" data-categoryname="Cosmétiques">Cosmétiques</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="8" data-categoryname="Passe-temps, Culturel">Passe-temps, Culturel</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="9" data-categoryname="Fait-main">Fait-main</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="7" data-categoryname="Électronique">Électronique</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="10" data-categoryname="Autres">Autres</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="4" data-categoryname="Maison, Intérieur">Maison, Intérieur</a></li><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="1318" data-categoryname="Voiture">Voiture</a></li></ul></div><div id="mm-91" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mobileMenuPreferredShop"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mobileMenuPreferredShop" aria-hidden="true"><span>minne</span></a></div><ul class="mm-listview"><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="">Tous</a></li></ul></div><div id="mm-92" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mobileMenuPreferredShop"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mobileMenuPreferredShop" aria-hidden="true"><span>Bookoff</span></a></div><ul class="mm-listview"><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="">Tous</a></li></ul></div><div id="mm-93" class="mm-panel mm-hidden" aria-hidden="true"><div class="mm-navbar mm-navbar_sticky"><a class="mm-btn mm-btn_prev mm-navbar__btn" href="#mobileMenuPreferredShop"><span class="mm-sronly">Close submenu</span></a><a class="mm-navbar__title" href="#mobileMenuPreferredShop" aria-hidden="true"><span>Digimart</span></a></div><ul class="mm-listview"><li class="mm-listitem"><a href="#" class="select-mobile-menu-category close-mobile-menu mm-listitem__text" data-categoryid="">Tous</a></li></ul></div></div></nav>
    <form method="post" action="./parcel.aspx?state=5" id="mainform" novalidate="novalidate">
<div class="aspNetHidden">
<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" style="">
<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" style="">
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="zE/tSL0AVSfmXuswc87KMB3hWZ9R07DfAgIg/wx3qK93EiDC8NoGoNVf5Vu1MflhQ0kEzPf+aQOqZwzPU06/xC4b7zxhvhCVfy3/5o+8B0Pq7rzRipjC707odexcqCor7AtDmjWjyzcpaCKcwdXSr5v81awnfYmk4RNMcQVCdyYxoFGys3fDrQxSboBRV9dzyyPHg+7lx4dYas9UE0snD4BqxjwlLAKAJpaFn48tciACbisgymFJ7p71FrBznHuvt5H4p6d3qdNjWfoKX9RcNivfGpxeoY+KejxxOkLI/RxtzHf6pJ4ev1yQIWSwbJ926TN0YIgZHmmD7iRdqe1DRlCxMmYzZNJvXeXWhrXxLH0IRuFJ6xOxE5rdGWsxbz3j9HyzeRo7WT3snjet8W3/5lk9pV+s59qUzKoE3hk6QwUGDfj8jsrZtnaKpWffUioBVcsASh3wiAmFpXLwauke0AjPVv0MycXIQHorVLfsaP2VRYasjpHTxBeh97q0vJ/ohN2ZWS3vyQGRF8HgKlHd8INiBi2KCCbb2Se+2ItUiKzthlxqIomnaZIMW+En//Zzysgmd+nN/oknckrZcJfPvF7FvuTCAdIxIMQnLODQY3LIAvulAHquMiN86KttN5wBANqob9xr6YeAkSfv1arBFA4bEvj7kYNOwR5W5ubmlRHBNeRMIGHOX9NDpe9g36pLFyG3gyhDsgFONcdvEp+Ij9MBHrpbIXv/ph7zeJ86yPNG0s9G58aY+2NOn42Y+muSq0q1Kmr4bM+9CSunwujtB7DZRH8KjqPbZMPFgJ5QGJQSPdVWY3vXXfmtQWSTC3N38YGs5ao1x+As3svZoN0deXKSW5glwNuRffUctOXzkLOc8+dOLjRLneAYdxcNzmMms0jWvSfa2K6j44YLdEyxCkinMld3UiGIAICcIFg/0khz+TU+FunopyhpheFOOHzzDTs18mM2wdukRaabfJcUE9yT7yXN3TEJTFX/mAqccoSuz0NI+N4WL//VkBB7wVQYYyt7zyHkoa76ZValxg5eQQ26PfnqEkBlyiHmnVBu4V5gSn+rkgD/A8ihKbhzoeMmHkQ8R2jUwWCjss52Ad491BpyuXJZNhGzJQylS70QHt4DvWmuDdLsYrv61y9VYY0sJUnlocq40utNo2Hd5AitlnaFvsdyXSNXt5AJPQnQ9HZdZQZ/dcXEJ4uoDu/zp7rEslTikELSkt2tw21sMq+VK7nE9ckJqQCsYS/tJ2pnPOMY7snjy9qShTr5F0w/flTMbklOULru2Pq8eOA/5/HqWYn+OdEWxCjKQdHgMAlI/I/hYSAuMl3x5H/LpnUcUpLvXzHZGlnSbuONLw9TKO7qfh4GOx2uN/4IGoBlIukcnl+5aVySJotfVt5zu/QCMkhiXwNJTMXkQ0DwdT2EKD0t0KKJeq/XgauRDepUwgXWjmm988j/po/OwKFhaBQeouYQmoMcAvSTPVh4WrlnQ9Og4TJp+E6QH2tIxde9s5aE4+nUoJ0pLIGhBoTUFR+RGiXETQ/fxlMeXNOsHonRCRNw4Yqdp4AvqkMcPSrne9XMN6PQP7D6dZ+7xE+rS+X/CChUKRQxW+64+lQAV5m+lQjDiGmjeI4HM10aRnyUFy/+dt4I6/vQXeF9crZvvP0cSkHzBvkpD14TVFxtoYGub+whZsw4fpCfY2Iyb9/nNX1XKmxls/nvJqPzTlrZ4bQyLC3lovjM3VXYOMyEGfPqpC2CBAhHh7NJ8+U4V/gqW/zs46XCO3VBt+3kaFyXlDvNus4F0p0tg1uq6rUZZt5i5DOPgbEcf153Ou1bkgc5K7i4iQk5IxBniUXYPnpeK/xnBPpO5zMbkF2SjmffI7inHnModFdlqdjvfLNlZKCrEZklLdbrUJ41QmWgwWzsKuK+QuBrVFVfL96BOX0dhZik/HWlCBy6JeirdQCxA0GYgotHm+lwN9cebRsxkeDyVCVe4ZXORpFLH/YfqeoHdpBBejstwMb4AB+pqzl3zdeaRrN4L4SoKAs/nX9lttsMOHv/i4LpRhQ5OJ2KR3bU45848po6m61LpIvPtDHRuZACsvhVHp2GwdPSTslJT+L6Ufzv+JSCG1/FY3k4sdwzCxuC/aLlFbjCzwcWJzCxCya8K1jv5gAtNmCWgkLNJf/vT1JfZ66CfXA/Y/z7IisyjZNqyTBa0tKDOro0tUVe1GIptSgyTi9BQ+j/RV67IfqSPLLBT3RuKclkHHOJh1ghhaazNOWM+oAGmlZ5wn3mvK8dpYbM2vMOkZSTSU3HqLkQB/55AZtQLZ1kjrzv3kqygv4QNsbMVC23hXXSlK+N1zE8PCMffWM7vNNFfSjT6+hEjsZfGuIUiHscbGT3Gb5tNmpJAbt0CV66WlODePDByRfXZNRk9pru0WqpA74bytxtkzOeIK/A4WhEe9J6YpvqhuT4U7K1PLFXNu7F3xhumOA6xcgj646YL3Bxbb7fs7uNf7FWUIvzOfciGUV9nSdz4pkRZTJYSb7KM1AgNHkt0f15x/flxTJwn0CvlJwJKWxZ1ECqiXTg+FmdwrWU7twtvneCT9za+Kk4AOGx5e0MYDKF8L2NBqPDVj7GQjQnbNFnbZS0IYsKiJ2aLBtfmlIys5fch4hgZXJpZFBZ+ScdfqAI2+O9OmGwgxC7Xnffi82vQbSH7P2BT1U19z9vAzkfCzZ0p/5k9Bc98QtojAZursBT4MZqU0Ao5KLKtI4l69L33+5BViptCMbbE43zDANqHot3QDLcbyA1K6oKfHKvOer0rJT8rsv8jyE/boWdKpga3LAXhNmg/m5r5ToeOsoWZJz3YmymGz2B+2mUIM8tqU2IMeMjFa46Qv6GMRyPBwbRIDn2PQScA9L9bzHiJA1QqRSmlSwTuIc0KHLcPZonPB25Wprjf4KapZONlNZg4Td1Y9EkUrCwAw6hZgAEJWMYNMb5Aaj5WV1oO0L9ENtr86vOiULi6g8d6kpf4CNDB56hXBXmxNI9p6HimoSrSSKl8dLecVHljiw2uMDl2/JZ06QvLYbOYSv1SxqHzPxfzYvkeO2T5ZZ84kioWY8pqSocRTKHq0qs5rVY/PlsGBDMXYVHB6PdrsOE7umMkQF4ORva/kr4/tmkpkVZdinJXyvqmx6FKE8e0ZjWecM3TMXOaI9Flp2y3ljtI5AtmI7momelI8IF5EckBSXwwz8XiwVc2bcr7qF3WbgSW4swQ9Sa6H5zNc0fgdHim9sl5PHlxdZUciC/Wt6CjVrJJGWPrdmj5LNXR4Ba6/gCZtnJ//VTGMfGoQ8tgvK/YTsEiQgkANPyMLKXYV+jLJ1T+zmvNP9nzWwqNCG1FBzhxrAAqJXYK+dCDATkbEqqhtUB6ahocnH98ka9d4SFhInc7L63dYxwZ8M19kDyw1+u+fM99a8N6BWNI1X//2w4FRwhHtLuhkQbbnYe4PilOf321VBJppUwLQMvCZFscz+pTmH+VQVlzTfXRQ2CbRfXgsVq+T8OsQDQoI8zNOhr8b7VmgJzhogq9W06t653Qn2udngickWZ2NN4sL73W1ghd/KH2/UoE5O/9xeQ6yJeaeMM13N8gx6r25Mr+dyyZVO8CUwoWOp7RK9gwqMEFw1fqd1YIQmGFJ2PahOxOwAcSP8yvF/6E5RB3d8OFZxRxWUD5guuVbbV0a4GByWyCzW/lpsFq2bNu5Nr8+px02d3SwtdJActhfrpvdX9Jehi1gaqkgKPYa6JJJFwKtlGpmssTVULaxhCrw9QcheSkXA9DxtHryN5i7giZRiVnG+6dPlZzev7fEpgHIJIqgjL0pqmHLkwqmHtS0Kt20SSR07V5lzgsO3eRvpN5PrE4jTEcHNNRzD77Y6xgBrQZLIVif1ba+Y87p64HtJM75Ez5bDcY6TwqIwx/CnM1ytNuy4+amID7h2WUsmS6WpwhNgEovLN8E2OC9xXmljkKCdC80LfPb31BZfP0kzvbwB2p0Y97msH+C5YooGW2lH+pqtYEMZKTaRMiKQf8XgCFuJbiLIo4s4HhucM2nc1D2rkftS7qbPKWpQiC3zjz/n4M3D2Ytr2zIxaPrHJS/2nJb7OEUurFrdLPddkC4TcjVGbskuojSbWJHBJXC5J4MOZEzDRUrLr3tOK2E2iv60gmve7bddseF0hllefQoknvRCzj3kCyoa3kuyLrDSUhtAlhP2fK0A3ismAXtGuMGr23+PzvrpTIwCFChFbVL3vmKUJAfPKGtUGX+AMcOnBypZCdlqCc0Gi/jN5Ld2Yuy98C/tNsaHGcCQjGN0c2Snn72y7+f79qN/5p4PXGkV7eeskdfhP9gKIlCW0itjZ/Rt+cweS3hXHsk2scGm/n/G+sxzPvsJh/GCcr4iAfekSPa8lPZCcV0M4Yqf6Hza3FqpWJcYEy8u+myf893VwrnSHmGZqh7CKUmkI1/3QgeAJdUQBKifGSIEYUQvZHHsHEXwA8M1YjQAEUsuYT7ImEH7rxrf53FiT3Zh62E8r0TJz8JiBDJ21lABk980StPbS29/DOnDe6ZxVss6iaS+WlozRUEdGjlb5zIi97kxYV7muRiIR9Y3CHtfkNsPvs33IGQjPrICyByg66jzAS9y3GGAegzUl8wlw+FkQofG2EVTvUUg1g4GwicROQKaRoN+iuD/Dqn87gsCWPBOAEBRbTYdRIQYkLb8TDiytiDdGXZ23wutwcdvWCrfL78nPUFgCBA6GrjNxyEBhc5MbCamqLf1wG1RQL4PRU7xjByUNoWndiq3ecxsW+i2CwTmol3Wb6KolMxnPoFfnTB9KDctd9VqlTjfY7w4GDv+3wFggvjdRux3zxJCc1lJ+p5p7brNYvDVf6tv1U/AVfU4bzn6OwTzhEZ5NNZhoxWMyGzhS2uvE51UMnod8tebrRTN9VQ02r7HZdVsC8DeA4Pwb6KKXyiUr+6jBZf+CLnzrYG87ClQwPKGogdJmuwkNribPMSnIWEDHrckqPd1PjtJ/Cgmg79g2JgE9pJY3q7Bts3FhXBmnTk5grHSQa3ivgqLundZKLgpFa39FxPBXXbc8XX9W6kC0bgFeN2De/W4lZGuRSEFLdnauv4HzGK018MLjxhlpV+JCyM36ZBdD428b3TdZ/jlJd6/nKpqG8cjZ6PUIjVJkfWhNiGYX9m9CEEG7KK8NURhmEOxRhO7OwiWzI0VP28fjqqSow02SjqLnLBeQCRZefLE2jeIg7e0hmzTw5A3ZS9ov2LkGvgWMRAywhnTvUNLZb84Wp27vkSkKKsscpgZ1T97S7JUYVMl+fVUW6dLYwDuwrjBOmoNO+aaEsru4IEWJDm6QHLupdfxc+6CVRi0n4ExYh0QzBjWTjEK+7FsneK6PM8MqVv565Fht4aKl9Aek92t12rF7iCA42+iL10eNODhZ368G64Bu3bp6KWSmRHdVJXKzR1HRNKnL5ROqriHpyjd9X3BfNRdYKln5JsUP6Ux0rbewQ6qKEjHXfrrXj4JahWABFCmBOx94WhFn9Zn/rOn+GuH/c8dgOHZ4nBOAycI/ZGXUMTc/wzo9gDDv/MVaId8aaWmGZGcTQ72rusLmmBnPDV8NNqMMvSKpVsZMc4C4CowjrwQy4UeVL7XxuKzkKsHUIc/B3H8nbB/RfFxr2wKBFcNRn+n3W5Xb9Na/QEKXmJCVo/YANLiFW0wB7iUn+xvXmqekAR1ZkS7ArBKf2GV/n7rCC0fSpP8MPkA5zPizGhrbiPV5Wg5RzC2BtKSLfSlNFq8eYmKM8LXqbX4Fnl5dukd8IB5W/+ypt4xDei898vmAA3EoXwjvbArrHdm7w1VSRgSMOS53K/Rh0A9eyXKXifP+imudw2Ih6A8Ry1ULXvw/hPWVr0wcd8B4rCBJdTJCaSjiu+4zkiGo/Teef21m7NTcNH3vI4xRIjPmKtevcRzzwSVq1bijQKl2fhkXCQFNS1X+VJbVMQboXlm6e9Bqnu3x7B/w0jzUU1Nq5FcL2MRM2dEU63MjvjbDwaaplb30AmRYdTqBSw6k6qzEMw8vkv5yUpjbrbHDV7g3jaAcB/vu2LwvvNH7XqHhOAtERdR+pDLCoXb/1sITDj4VWO79YdsO6EzUPsQsaS6i0C+1IJoQ+RvS4xyFfbu4Q1CzhE0W1bUTppTuG8FaIyENU7O2JbVG2uOpmC3qJFHMZkWWbmkg4B/BoA+8vKk50Mm+Tju2/r1Pit45FN7vL2Z6FHGQr/ffeQ/V9ZgPzOIup1eisiDiiHTqw0kqgM7jiB2eerqxHx9v4FbkI8Xu/Wka4u8eOazH1uSwUoURldmEXdpCO5wVdfVpr0C5iJguV2Zwo9lRmzzEpe3Dtlty/JgAMFolpDuL7Ex1czcXubyndYOkNig4pmfpCRH3mzytJ4jaHcutWlZYIy1QO3vZ+QbfC8uVl0n5ucs91ZHZrCaiOTuz+aUDHz5X1qW3c7NOyn4poprVlEr1CHJ9NLAiWLUKo5+9FOJDKqVvTUwU017qqGoU7fo/O3NWLoAQLGNVv4dEpStn7dwryZVDPbg7hqZQIrHHGeAaNCzOayTk83bO9ZMAKPXvezcLe6Y4XvRCFfjPoA0IhX9d8Emvh9mdNRisJDI5bkNf8QJ6cAbQ4Z5EJk+Xa33ca4t2e18wmzrVHZEKAV6ZJkHJuJk9ceXIW/cLGPqyQNxLSgpSHWW8JvK8cwinB4sIJfYn5UBs27ZeHk6jNMmSbaL9Vsm/Hy6CTKjp87/ETQ0KzavyOB4wMlRVzFt/vsPvUiXL/kzY+fIYluKerXQRrs9Td3hkYkFZ/rj+dWXkxRvD5mmlh78UTMjQRxF4KporInn4g6rmLp5zQO0XiPy8ZFcHG6zPwiwbS/gxW3MVClJMzQJkztYe4LkqnLCgLivMWEY23ggqUgob4mMw+oeKQNR6LT6y0DTBMy8tkEgZ6bPX78cNtdFeWCc+mnE1aeHRRnDZpSa0crM5jy9q9ndKULRJrgKI1ijC58VOC60RVmHiXIJeDvkoMVSynmGLq8Lde3fX68+0eKY9gg04RYA9o6UkQmX4xK/PM3iFSDg9KPl/Mq86E7CmsDj7Td6z4VfxkmiWfOpLw7b1MblaRpviKyMI5Q7u4vknhKCOPvaDYWMoepkE7Mk7SbTPw3eC7Blh4pVZvkIiKldF3UELY7PIxFnModpOLCKhFeFynX7Wy3JlDvHbE+3Z5c64LNE5R5FDZDg+wvBG+fmFv0Lv0tXCq5iMNA0jvmAcIhauetfJ+CqYzIPHeWiR15Gu8yQgRg1/IE/l1p5v2Y52CYcQN/HcX91Rr7QaG2A01K/ssPWBmRruF7u5oq9ZgE6qsGuJw3Dl6viIyLdtE2h4YFyidxp15FB+pWOEKAHbqVMM6vOZrq21b+4RBRDOCpFsPAjwk9IIhKolE0CzMKSqFOLpGaF1GBrcSxSbdqjQ4zzMKOxltt+RwgQyKLaWZVhkPAjTjD8sezB4OhSUqzbYb0VHbzaF1B+QkDDPBv+dMhLyaMasxLw5pr6uAOJ3IQl0LKCGE2X8FFwaOsko0mVD7Y9qRWNdhdJGm7pT7Vhjggrk5EBEgIrWJqUDuWET/XEU4ue/DLbmkf1rCvks1tx8GYSCOV6KObEjUOsF9k9HbyxhR5Du2bS4iuxqvkuzwweksmB1p8DA1G7bU3VnK6F5BFohr5cJkEilz4rOPNOvfYk51U7BvD4h7uGxIXUXEa+QaE8lNsNkpTTodmPQj547U9MP/hk9Z5uWZsqu9jPduUTl0PYFs4LzR5ZdxNzZAPLH19+bXYhQzHzrvd558TRJiWocmSUeqXh7DHXoXTaLDRA7djaGL5FPhoBcpaskDQsfq6hVPR8V3+haf5NxtfKlva8Fi/QvhyKJXTrBP4T5natyBZPUng9V3IVQ++VJgOh+PqvowXIDRzGFlmfNi4G1ZpbGJ/SP7nBSfWT7BBdK3IHD3zE1v432Gn985hnmeFxpiWKFFo0VQWro985TymAfQ32fkEUsnYrFKEjCOYBHOAsQoKp4mv59w1iJE0xRJXFoUb3sgOjFrIlf5RU866WzVrR4ZYN8nZdlNO8KIMbS4NkrddzLNi1BZxMBQ/J4fku7Zxag9IpHNrKB4L3ykYvLW4TfN/Tkcen98TayLyn38yYmPAHvH2/CPpdMWwE99ziHOyerbWCfGaO9mV8Y2PitMDtgsvgtOG0JuDt3EbS7oLgp+rvMFFAjI4692bbtP/ONop8fHTctBoqF0VvC4TYnwBbQeIWKK5+wNYbdRqv2Kt+tIgMAKcDf7V6G/m7zWHU5fjgZAfZkwut2X4DN9jts5Jl/A63YbWHMhuRrVy/VUsqLgkVyDgpf4qExL52WE8lvAMOeOUbzGG/pb+Onnoz7QSuRQXWN827zwHr4GQaARkT1gyMCMjJ5Ekp8P8DC0m/HVbPRVZwGc50BVy3CXL22nxvC3hBx+bgFwEibFp2TCtvdugz1LGD4JMmD+nXL5q6SAfou24Rtz8Ui0dyrrB3cagXSH8b5Fsi4RQcgOYmCRNDzCpk6tbGEZveAqs1HdW0FsdmNjkLuRGiaUMq0SgNQcMjYzY4bGQ0MquP1d8KMe72MFDBcoWrlWW0ibH31M4l9C30MqkJ2kJMW+M7Us9BgQA8vR/U9U+wdUXwee5RTYctIe0Ne7yFd2554rdQVwRH5PDjKY040l/4/GxSlwW3i+f7qjfCyZ0j7M/6v33C+4BD4JJI3JC3veC+nW66/cvSLkNlP/t0B1in+2eY5wohskTFhMFQU9SiG/d8j/CDfJ20ekGZlMnn3/t9iTrrpRPwY7AmegrVWrNxvcf64MzyH6tVrXlp823M3luvGaX5xwhxP9/hP9oW5CRRyu7fReCiDknk2dXQJ0RJFmxGypxmt0G3anMBuKhtz+BPivNi4G92a8QqiHWgICYdd6imGbBXHMmduknVNlBlp2mCZiVXgfqn1XNf59qVyw4duR6KqZCFib6nGOknCE/HNDsRNMpVIxkIttCuvXEP6N8yuwN+Q082o6bTsjnNw6JeHcFrPdHLrokr6UBFski/kzBnCH31A8690g4f+5fHG9SRu749PbFZih1osouyKK4/VDdsqKB3PIPyptdDyGTEjKc/jiZ901siDML2Zc4XEQwFh/NciotMWl7+98JZopBL8Qb1vDRgfOBw3MdEyEfHUrhSP+h1+wU9QOsVDkpn2KGSJczgwNgweNORrQMQEuVHgyiDETq8GQwidCsgxDI9mMUJ6+UWp2wwrfCXVfRO8lP7UJm2XInqLa0V+w+fnzxbajLLiwVaBsRKZXyH8YVzGCCP3KlQQEw4tPlnckzerP5nZMiuA1/SmZSzkArZjAWwCsaN7efKwb59Dlk8/ra6oS241qkHkCa2j27Cacv+Kf+14HugrdlJlno4ZH0VW3gaIJjAjAtkk+FaWgqRQOlMpZQ80KZ1pLcCijmwD9r3QNGTeDY0tnTlywreKDk5zKftB5dwapbdOMRq1uhKeF/KBbw2pLazPTe22mpKzW6r6uTioyif98/I8bPOXpyV2kXTPVCoPPmBxzdta8zQ6d/SceVI/MDn9GIFHEaPrxnt2Onaldt+ImUG6BMF+IQx4/OxJrPMcerb3zpfv6sk3ORS3QONoRRpkqMMZB8z+3pGvDejbB02rnE18XhA0akKHV47H+ULfq+WX6HtMTllqET6kJloUFxWEHD19GkHfYjddntebMHtMGG8ztpRrYpVeuiyRlxZ3CYXLoN/Vh1NPDLpWjAhCyby1uBFCve8BjybOWbL7WgQR+6QgJEF4O7sAfG+kHUZDRL/NancUbnFSLDEVn2emBzCJwQo60dNnQV3+T0yEXrjSSJHjErR4PvYuvp46l6IUZ55YlVyHwnZvaCq9SwtxlQ5Z5J3LIEUI1ompDPwQ0re8kOUheYHa7n5Ry4blZ5773Y23oPgex2gAaL4XbDyjlC5+nELPFVmvWqyqpVWcI7BDL3zUrsgbFYJM2xTq6iVQbLnimGT9W6tTPuy9kSDsMZxejh283OX7bPT8IGmk4qLL1JecCXJh7cS8e8cK6a0brDCF4BNn0C6g84iVlneqk9jl97t0wVQqAIpSDrA0/E6AMrC/PbdXrg/kQVrxPFaIZNs8LG6nSBBlqNCx0G6aSu2drKWQrdW5v3+Ot4x3fPtE+Yf66KqIe0DpOoQkJPPkiym64O3IfBVaevj7hQIa7AJ9NMj30CNCXgrywGV41HWnIMz+6cA8Hn/NQoDLdZWQjjXAu5E73uQyiCeLfplWEs9+w8N9qPIcf4bg4hLi0Qk9+alZ5x6M5HRErJqgHTd/30foVuf6FXrW4PsrIshFxZCPHHD4j3HLlRcHvWLvYV07il27g0P1SHorflvWoUBwhIDHjyczuStx+znEkBxkI5xBVZby1r5wZJspRpQb5Wd6n7Oo+mnSpRjpprimT/d7f1pztubL9qoVrRH3XauqsIZktv6kG31zhtbFvsw68NTTerHt9CnbV/hGsId5qB8P6oC0Q2WZFVz1cHO4Q1fkAbn7N7EJa9ab3I2veGd1oI7QCuc4o3zG4SXiGb/rWRTYDqy0dbFYIoUbUXTlDak3k4M/mVBxOEG7Ksd+un5iSb1BKHXBtIQ0Nz2BOJppgkYAWIT17nTEZqJPEcGsQUrybrNR8TY02hWbsyGo661RjXnm5tGK7hhefxS9HBremY1qVDec8+pRkO70Mu3S+sDoskNlqOpHCh8ekBf10hV4UJA+N/qO0CS+k/VlGj9Kq4sOBKgoJWAS2/zbKJ1L5yGqqDvfHL3XAWXE73aRI4irbmGqdutawyRlEBOSZ1Y4iN8oIx0XcFvIHjN3BvntYk4mui3fQIfQn92QvrpzVggTbZFyniBVQYcHgiLLFO84n3708ZfCRDYlI2RfXrTLbJYX3HsYMK0VqSKxTmJeHFyaZ9LnzgaHCwQxI5PWSbEZu/VQGVfVcL/HUfuSTQY8VseWp5H/khqvlymhvl3sY4WbqFkOpUBglFURRlOkW61ugb43jin2MPD6SbU+b7rJ6w7Y32lIDtW22gQE/9DwOo8dD9PvtHhHIx88dcrxOdu+SFfsqJFQofDZIMeypndZ8gqIvVQmJfCMwZLPYlQcSqvUZGEsSX2bVaAa16lx4JvEVFwSwZzeEM2IMlSKglR2hi3FoGrArmunKtj+nlItNs3rQiz1Vk609xdC7KyoNQbasLgFu75rTFocNFzl70Z//NEeG6YkgGQZYNlFdIjiZz+9CyCBfBtKJFpeAWSybB/i/Lf0/2bUJEk55L56iadgPWvObhWCDN5lY7azj35f0hDlQu6LWTwIc0tlIcZzZEIABNGXOzJy+9imc61PZhbw/1RgRE2NnKIQnukEFJcQzMJNP7Kn22Cja4+pZJBFVYhFWOMd1QnSI6map1vM/i20pMUZffob20j8b0ko0I8aztQ4XbxYwsmHrrD8SQTRrPEgzxJNui+FxbmAYbV5qrilVWgKUw/hQdXi+IJ5WqIEFAIuos37vTO8IAQHJ05ZciaipZWoSKnF35zTxJ0FiTJk75chWECIenDzynrWdJ6S8UqmiKO/MGIwbI5oFGObsoaG14ouJ74NX21XqgseFCG+3zuXBdn/MX0usp4rj1QSuwYaaCRmFH+E6o81jrJBDNwWvfrMuqJUB2142k2vrw+VheRQ2CmsShJvc2yGb3FSpmmGMwx02LVIhTO0c5vLD6ent1/4xG+jY0BnwRtMoSgoOah1/DMlMfCEkPJtObnVbhvp8qtvsgXHt6MXqrxyRdGWOzItsbwOYq2thERRf5LB6ifudk/GFVBAQNtBkXl7MNZ2/CFbX13sO8LBxo6+cxvneLNTUNXuGLt5Yx1ifS3p7rlkuv4f2kMvRYqah8Z6rEhoCB9ZOAwrs3AmBRVbA6PIv9By+VidSmZIjRYYndYK09NJRAVfZoXHW/bTJfd0xb++8iPNSCdx6Fie9xbsedm3WP6DI/vCvehNcZVWyWZIZHbiz/dVJhoaearcM90YEWTBO2xolSU/Kzma/SLku6/Mi9pYwnvxxwbMUQoxkUS9vREfPaL7PrsB0rTVhbgVmvfIgey1q6wrzPdVcGOKWdptNvfkrmk3z52QuEJ6AKDHtn+Kvxc0tbQMb1IMlC9Lg6uzohXzbYQ1JWQgCA8Q00VvZ8Y/jxaI528VGegBLeHbUuE+aO96A23KUmLuq5FuamihpRu/9MpU7oG1cU78hgrxZZkcLs2IcG2eJYew7m66x2n512jQnHJw9VPH8cBxyPH77RCqvC7MbRHMIJyo9HZiP3rwiW5IgUqlQXrpMvU416n+5Kzvu6JRSIhgV+Fba9fcBuq0iNgSNlRIkkGAX/5ok1DwpdGugCPcmwU8SAfgG+0OYhD1IedRVUwkbSmk/fV5RDXPlV/rki+pN7jETLxVjeVqdqh2wYOq9P8YfB+MzMaYWorSPj9NZAbdTwlCdPw6yBP8Bgfc00KE7AhgEWqBNif3uPG3qSaB4uyls9Aj1jw6WCibWDff80qFDQFxPDRKw1ngGuCp6fZayboi6wBgeDNzth0DXMp4t6+nairXaJlFnQg5K+umrPLPzU3pqpH/pOqzeWKResK5PWI11ugNRUVy/dRdx6P8HTiqPPnrdvzVy1+mK+E9jkIbm9JkOve/JFr/boTfQMA8ByD3MsvWJOxTjzmR818YltW6n1s92WjNSvz47lMPYWXhfm4Lg+yYg2Htg6EctYhfLXk8p5pCI/9dJlXTuhMzjpQQEIwXZFxlrsSaNLW0iAqVyZAOU5cvEF7LndKEbOj1yL167rwzRDqVlM/lLRJMaB+MglDUanF1J3WJJByTugj/Yd6hQZeeoNauJ6Bmqx0D6P7z9Z/NfBdoVGQg5PwRqDJghCaamCMjLGwtgTi82LuS0/Rl9Ckyt486XSGdkdAuY4UgobOj/EX1CHkXUj3w/akb365gpxIkfKARkwF7GipkeKYyyv8RXiI/7RTr4ooFn8S9QJoSzxT6pc+B9LnJ5bQ4DPBPjUk2XHkCrti00qRTd8p7oQzdQOeQN9qeIjkoigZ2XALM/fnx6L7zv89oH7oNUWsapi/TJcvHbVK3v4p0uNNVkA0/TOAtJo6rO83UkcvdJK1VY7w8H9zPWXtNmXChZbVWIlHD/JnQpIlVnNthx6IWh1Z2iMtg5qNM9RwU73TuH3Z0QTFqxClvMbT+gB7WEv6Q+ilKs6Xi0s0hvDw/CcphNF2iDzZpIHYPUW9lbFmH0tOqqA/G5vBmG2dL2YaIwwzHV5LOQrS1mkkgSjCVijV6G978RhOcgT/q8aWQDJ0KP56rDGUcLgeOV2MtknMdcEN/46XVgILDU7+jr4BoQTwzj+vqOhibFCcLrNEj8iRjELtzahyGCwxjiI3xK+1l8yQi06t9qupu70IEJoLka4V+SwtQbnTauaI16Z9jLsDBerVzkBuWKsv4WTdRb5+Ml3asWrFZMmgttxCGOKM2fSHnq7/289oGfIao1vN+fZVwIXAdGP0xj9y+ngrTsmWomV16vzrotOYHN2O+joGVucYfArY97n2w89OoRj04KC2C7LDtIE3UjtJqyyqWAMpvTHEZRBzIzkC5Ej0sl1QyqGrxKw/kb+zexy7Quz19rtvVrYC6jLPdlHTJW/NP5B6G649z4r40tk+HzyKJWuQzwGZJtbms7qhwzsiPxNLj28+C4CGIK14rIHzckwBsI+RuZONstBRYRVsUQQzkbiChHxDMbS4agyv+53KKPEOQnqFQMhRgBDVdqulMXlNQ6c+DQ/VGwYQmT+xShvDKl/fS5hKA8CiGx781ale6tFS74ZV5oSZQjvg1QBuwjq/+kaU7d+osr9Ck2dR+cAP2SDz+QA3sFoPneyFqS/90c9qfh9xRsJQWtpKkEIcRG6eOoxZiRQmlimHr3CrFbVAw2kN7mQyoOxgzORRiA+q2DHRjTpz7S04rtsCXXG1Tt71BhXQVUqPkskYZA237w0IlWqS6CEXFlCtOZwK+770o+2ckEFYij6SkG0YehJ7UMmW1GpkQGOPtspA8yQRXM5eQXJUIMVP9XRqSU35cnsdtSp7lXTG8By4DmMWTNK1ojiGexqhAUBkc5UeJVu4RUC0dxqnEDi56h+pQ6XSURZ4q6ledSuDUaAyl7MDK+CgWACaglVUlEXbJCA6Ka0waZGD6O3cMEmAKsCAbKMS9Tk0knslPeTZIL5DUSZAbrxlJiq9aCjJM2b1fjreVd97dsyc27dSAqIOIB9apvmAy3k6CEDNZ8mEZ8nPo4JxQ8H8F4kVRfzrS357IOyUwM+B+eqIGVCXPg1winHYBhuk0Q8pVKHWFayZB3wYoKPpOvHLMriug37I3oyoo+lDjJSiEHkIwj00YrXtUz52fZYCqGa6jynN7AbIw2OF4L8dlORnEghJeTWByxOhd94pGJIDHS7ctCi3+CprM5htzCd3E0o0cH0WFgPJ+IpIM6HLQcUIpVGFGET2gRBwhK27i7Re9zHlqyDp+hrajUQkXVj8Js98vVqlPMUlk2yb7IG9Wv8Zg+UVOjp2LouAtWMmXL801e+uTdRH2gC/8YYkzkX1CRFLkxErUdyw409tdEfsKVPVGKJOxnDMmMwKEM5y6bWMtZ/46Izqj1SssOjWXFvl+sbgdEl9e0wILJK6LcRr+birGZi80SYqx2IkuOC+qH+DK89qx1yg6fQDhFgoADxFcsTah/syOlrr13su/AtJ7aAG/h9ouyWFbZGKYpTTDYeioP3Fs4XeejQuEQQxjZy2JV5Qh6X7UiU/bWMS9mKEzxlUOFYNllsRk3kuJm2oFLbH+d+nt+mdHUr1QkhvmkRrYOikPTOt7/cRpAzsbqkjUivdM+PwYNNL+u8pTLdpnAWfbguXLjVhvZY9t1UZj1AZ92ffabEnSKaDp4zIUX2Ei+X6CcVxxLcA18E9TQPRfQ1HNrLqh6ttp2vk2P7Y4JbvBpCN9F+fByYWiIOt+Zxl3MqZd01yLevytlY3gfIutbcezD46yIiXIXugS7VHOGQEtpbXK7N4rPk9s7lGspKTDs1RKP0nFtkQUevNw6RfKjNjMNJH4MSkgZ1BESZ5eb8fCIoO9XmasO0c8X0iVli5TFTTHGhrB0JcMtB/+ddhskmvymTN1qWgCjQA=" style="">
</div>

<script type="text/javascript">
//<![CDATA[
var theForm = document.forms['mainform'];
if (!theForm) {
    theForm = document.mainform;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>
</script>


<script src="/WebResource.axd?d=pynGkmcFUV13He1Qd6_TZBYVGoQ8guvyChPcgfaTkGVoMnjaZL1GZFGfPQDeymgRQIQlQUBXiMtUiX4_ozRt-A2&amp;t=638628532040000000" type="text/javascript"></script>

<script>var iss=false;$('form').submit(function (event){if(iss)event.preventDefault();iss = true;});</script>
<div class="aspNetHidden">

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="8E4471EE" style="">
	<input type="hidden" name="__SCROLLPOSITIONX" id="__SCROLLPOSITIONX" value="0" style="">
	<input type="hidden" name="__SCROLLPOSITIONY" id="__SCROLLPOSITIONY" value="0" style="">
	<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="1ntMFfqpzSknAQGtQqya5drYe3kYMWPWXMTfFP7iTimIZ6rg3LwIoAM2H2Ko1TWlAAWFj+0Oh+11icRFGVxfjH0N8Wn8fouhyFW5M/lkg7UBr2zE20YFlmWTkCPk/68FiCIy2Jyk2JhWt9PCZw3TLDoZmD1Hea388scFyOnuWx1Hu9QWk03qrDTuxttwkpdtXO2i/OqGAd7HlUJPCzwnlmYaP5cXd5P0OoxonRFOIQWtmxzAKOa9qwZvdSSfnZNDmAlfJLeq5/nEp1huDS2kzCrf0sn/1ATF4Gv/xOa6m8y9a1d5B40e0SJf0RiabeVshZQ8cWnVxCKqcasqGLM1voMCFPzXcoU7zf8o5fr9pftkP2Va+oP4nq0d2An3BldxkAaTq0vg96gZcDnU1PaP8u/yx34o0/3lRWuiznPtbUlgGj6SxW30wbPFPKwBYMJ0VO5uvTvxHZ6+nOc0+4Dqgm0tAfsityDnp8potqMKRbbXP0J6w586CWTh+hsq0obhl76sV1/ZCD9vAvGUvXrmbW7gkxZpeXyIVGcneehaoqPmglEmcn1sGc3a+eCf1PI+Ki/2Udr0DgEtiqsZzRn4e5JMOLhSAWy8gpW5Fi2LriG3ps7Qn0LYBhyKESNDCYcAF4tcGUii3++PMKLqH0dGjUy5AQig6Ftp5w6Bju7uhpC7Qs/1rnXFX4SUhMZdk2Yr0HKR2t4mARWVjbWnb9xseAdhFid/pfGDdW+S3HlyuSUQg3WeUimF7w6t8oTqvw9S78nZZzYnfcIZxf4WN+f4Fm6HGgM2MRqJbwffFYl2OpHQt36if6bLVX0OZt1matZBip97uWwA9AZUFjImPbh+DKlZkXh63G32lT0OQae2VsnO3ifAJna2z/B4XZpuZ7fWlRt1svEAuyTtL+GLjoOrPfm1nQj//U8zOfKKG0VOePpCmRyWBwCoo1QYxc4MNwzQlNqLw+RUit9Fze20lnUKkrAlvXgjnwhi6v/4GOWHJIaOB7Uahhh+VOSppmZFIzBRl59bEsweGlb9JSG1JLS2gq2RC4tOaDzlvWZP+qOli9I9kfSQAxbFpjQot3BObd26TBZUSfFu0tuWAA0XuHwCvSXRgFHeFhXJMKRtql79N3no+jiEqyz86hr58CJPTP2rFsUsVoc45PByJKNeSWGl1PrU6YyAlObwuggpsue65zl6XLlxrRfm1fgsM8u15aDTZ9WcdtGo+wphpfzg6WbpWNK+l9eARoDSepmHIb7xKRvo50uM4sJ7v73mqBD1S9BdsCmUxMfyODSTRwWommkaVgsG44+5+6JXW7o3K12anRVI8A/s5n9PBpF9fky0+CwIWmhAdESFNqQ7L3vI6LOaHgbNttBi17CkxgtGcGlhr/9RqUo1LCfX+bqYIx9ewRy680W32N24pr8tqTVO9U/xi85vsbS2pVXM0EOxpwjYISw91NSkyth1Bq8Sz+nXwRQKkRw4Pejv9uzmVsOp3r5WG8P3FMVV4AnTRl/xiQ9ZMqC90NAh+kw5VfHICjHIzRL4C8PiiTj5+mWQj08ZC4+naFf73ytalzSq2aPc+2i4HStEbClWkwEp1DxJ3mbd0yqnLiKq5IveWsl9YWlojRnXCnMh8Yd4VNEDMS71ut9rRJaxw+8fiGwA3fCf80DNwUFQp8dWKDulhwNat7d8IyZnUPgQEIDysPh1pcX6lnftI0Dd+9GkPXAbzBJ46BCT8EaDYwtcz02sPgRoJVzH0nkmFzPkFMK+mMyp7Aga00znvcokDAb6Ude/Wbh2cBR5KvtpRE+0zsneMK/OsVgMim8eJY3MRL66ICNIIBk90dcvcclHR+Nb44FzgzDrA7NWR7n18v2/B14gZca28mpLZFs2S7X+Mt74jC9OPGh7stSvFKxBg4hPiEfjlOsYNp4CVV8j/fvzywBmbN1ULrbYvv1geFoHqfEYlQ3gktolh3/ip+ZDLAn8+OQfO7LPOpZcKZGDZO9h9bnuTVYAmMkz8raYomt3hVcPOzDnikEOADJAIsKl8HUj212JEkSlwkszROcQPwQTdZlxwbZ5WdA4FEI4Rmfp6LbJsbUxvAxTCQU1NizD4Jpaeho+0I4VOF+NcWS5SrginZl2fUTztnxj7ZdZ96lEQVD6aCeeealxaLrUpJNQZWbm5WB3zMdx4fIQk7WdrvE+oqIpqi71AR4ceYLrZo/WmNcMF89VnBRXHKJqVjpAcsa3l4uBXP1ZVaRUQk9L7U76lxyBQWpot60eJ0QFEjMzXpaSdHlg879zroazlAoWq7OjtiTRHDDJQsZCaX5dSvAzDgPrj9utYIG5ya3kJgNJW0jvA0eMGC0KjeaMhTF8y+Ok7/LWavapJJnrI7UgCWr4qEyL+LSN8dfLfbDH8QE94c9zErBFfTNdtvs66ghKpIjgkpPz+JA6/Sa+RLtOby4T1pkTMYUSIumy+NxomiJuzOj+TpU/tufO5XfbbUvk41zKpeKZmBMOsxw8AmC27DrQTRUzFjwoLwk37nNZpFj+mQ2JXvPMH3TK2QVIDD+YwVGl8uek4ZJedv7eIBYp+rKxaYJsuJiLtFa4dVXROQCXKxU5xRL8yeVFyceaUvUIc/vPjJMPq0e/Pr8TnT2DldSp7/JRVnmTd76tnUWjwrJGsscBahgnfMImtJW9az0mstZ3nLdAiT4OZCfGQpCJNTGP37srB6XI335gY5kBf2pBFWQWb0qb3s207CCeciEkJYreo9Ynl7ZCrtVLtl/dxxWMZsx7BSzHeghDZB7qliOGyI3+MtpBdcHL68lkAePAbYTsZkoDO7PtXpapNFQc" style="">
</div>
        <input type="hidden" name="header1$hfShop" id="hfShop" value="yahoo" style="">
<input type="hidden" name="header1$hfGenre" id="hfGenre" style="">
<input type="hidden" name="header1$hfAutocompleteGenre" id="hfAutocompleteGenre" style="">
<input type="hidden" name="header1$hfActiveTab" id="hfActiveTab" style="">
<input type="hidden" name="header1$hfAutocompleteServiceUrl" id="hfAutocompleteServiceUrl" value="https://zenmarket.jp/autocomplete.asmx" style="">
<input type="hidden" name="header1$hfSiteCurrency" id="hfSiteCurrency" value="eur" style="">


<div class="modal" id="signinModal" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" version="1.1" style="height: 12rem; width: 12rem;">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <polygon points="0 0 24 0 24 24 0 24"></polygon>
                            <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#5bc0de" fill-rule="nonzero" opacity="0.3"></path>
                            <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#5bc0de" fill-rule="nonzero"></path>
                        </g>
                    </svg>
                </span>
                <div class="modal-title">Connectez-vous ou créez un compte</div>
                <span class="modal-subtitle">Connectez-vous avec votre compte ou enregistrez-vous</span>
            </div>
            <div class="modal-body">

                <div class="row">
                    <div class="col-md-6">
                        <div style="margin-bottom: 5px;">
                            <label for="tbxLogin" style="font-weight: 600;">Identifiant de connexion (E-mail)</label>
                            <input type="text" id="tbxLogin" placeholder="Tapez votre e-mail" class="form-control input-lg enter-key" style="">
                        </div>

                        <div style="margin-bottom: 5px;">
                            <label for="tbxPassword" style="font-weight: 600;">Mot de passe</label><a data-toggle="modal" data-dismiss="modal" style="float: right; line-height: 20px; font-size: 10px; text-decoration: none" href="#rememberModal">Mot de passe oublié?</a>
                            <input type="password" id="tbxPassword" class="form-control  input-lg enter-key" style="">
                        </div>

                        <div>
                            <div class="hidden" id="invalidpassword">
                                <div style="background-color: #C95454; color: #fff; padding: 10px; margin: 10px 0;">Votre nom d'utilisateur ou votre mot de passe est incorrect. Veuillez réessayer.
</div>
                            </div>
                            <a href="javascript:void(0)" id="btnLogin" style="width: 100%; font-weight: bold;" class="btn btn-info btn-lg">Se connecter</a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div style="padding-top: 18px;">
                            
                            <div><a id="header1_fbLogin" class="btn-social btn-social-facebook" title="facebook" href="javascript:__doPostBack('header1$fbLogin','')"><span>Connectez-vous avec Facebook</span></a></div>
                            <div><a id="header1_googleLogin" class="btn-social btn-social-google" title="google" href="javascript:__doPostBack('header1$googleLogin','')"><span>Connectez-vous avec Google</span></a></div>
                            <div><a id="header1_aliPayLogin" class="btn-social btn-social-alipay" title="alipay" href="javascript:__doPostBack('header1$aliPayLogin','')"><span>Connectez-vous avec Alipay</span></a></div>
                        </div>

                    </div>
                </div>

                <hr>
                <div style="padding-bottom: 20px; font-weight: 600;">
                    Vous n'avez pas de compte ZenMarket?
                    <a href="../signup.aspx" style="text-decoration: none;">Créer un compte</a>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="undefined-sticky-wrapper" class="sticky-wrapper" style="height: 0px;"><div class="mobile-menu visible-xs" style="display: flex; flex-direction: column; background-color: rgb(97, 165, 216); padding: 8px; width: 100%; z-index: 1039;">
    <div style="display: flex; justify-content: space-between;">
        <div style="display: flex; align-items: center; justify-content: center;">
            <a href="#mobile-menu" style="width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;">
                <svg size="24" width="18" height="17" viewBox="0 0 18 17" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                    <rect y="1" width="18" height="2" rx="2" fill="#ffffff"></rect>
                    <rect y="7" width="18" height="2" rx="2" fill="#ffffff"></rect>
                    <rect y="13" width="18" height="2" rx="2" fill="#ffffff"></rect></svg>
            </a>
            <a href="https://zenmarket.jp/fr/" class="hide-on-scroll" style="padding-left: 8px; padding-right: 5px">
                <svg height="16" viewBox="0 0 895 150" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="#ffffff" stroke-width="5">
                        <path d="m90.68,18.54l0,10.96l-64.67,95.36l64.67,0l0,16.26l-87.32,0l0,-11.14l64.49,-95.36l-64.49,0l0,-16.08l87.32,0z" fill="#ffffff"></path>
                        <path d="m195.08,92.16c0.06,0.37 0.03,0.79 -0.09,1.28l-73.99,13.34c1.95,5.73 5.39,10.38 10.32,13.98c4.93,3.59 10.44,5.39 16.53,5.39c5.24,0 10.11,-1.03 14.62,-3.11c4.5,-2.07 8.25,-4.6 11.24,-7.58c2.98,-2.98 4.96,-5.87 5.94,-8.68l14.8,4.75c-1.46,3.78 -4.14,8.04 -8.04,12.79c-3.9,4.75 -9.11,8.92 -15.62,12.51c-6.52,3.59 -14.04,5.39 -22.56,5.39c-9.87,-0.12 -18.97,-3.17 -27.31,-9.13c-8.34,-5.97 -14.16,-13.7 -17.45,-23.2c-1.58,-4.63 -2.38,-9.56 -2.38,-14.8c0,-8.52 2.1,-16.41 6.3,-23.66c4.2,-7.24 9.92,-13 17.17,-17.26c7.24,-4.26 15.13,-6.39 23.66,-6.39c8.04,0 15.53,1.95 22.47,5.85c6.94,3.9 12.57,9.13 16.9,15.71c4.32,6.58 6.79,13.82 7.4,21.74c0,0.37 0.03,0.73 0.09,1.1l0,-0.02zm-19.82,-8.95c-2.07,-5.85 -5.69,-10.6 -10.87,-14.25c-5.18,-3.65 -10.81,-5.48 -16.9,-5.48c-4.87,0 -9.41,1.19 -13.61,3.56c-4.2,2.38 -7.67,5.57 -10.41,9.59c-2.74,4.02 -4.29,8.4 -4.66,13.15l-0.18,3.47l56.63,-10.05l0,0.01z" stroke-width="3px" fill="#ffffff"></path>
                        <path d="m274.1,53.61c5.72,3.53 10.2,8.38 13.43,14.52c3.23,6.15 4.84,12.94 4.84,20.37l0,52.61l-17.72,0l0,-52.07c0,-7.06 -2.22,-12.94 -6.67,-17.63c-4.45,-4.69 -10.02,-7.03 -16.72,-7.03c-6.7,0 -12.27,2.38 -16.72,7.12c-4.45,4.75 -6.67,10.66 -6.67,17.72l0,51.88l-17.35,0l0,-91.34l17.35,0l0,11.33c3.41,-4.02 7.49,-7.15 12.24,-9.41c4.75,-2.25 9.68,-3.38 14.8,-3.38c7.06,0 13.46,1.77 19.18,5.3l0.01,0.01z" fill="#ffffff"></path>
                        <path d="m451.85,141.12l-17.35,0l-19.73,-90.61l-29.23,90.61l-10.23,0l-29.23,-90.61l-19.55,90.61l-17.36,0l26.31,-122.58l15.35,0l29.59,86.23l29.6,-86.23l15.53,0l26.31,122.58l-0.01,0z" fill="#ffffff"></path>
                        <path d="m554.89,49.78l0,91.34l-17.36,0l0,-10.05c-4.26,3.65 -9.01,6.49 -14.25,8.5c-5.24,2.01 -10.78,3.01 -16.62,3.01c-8.53,0 -16.41,-2.13 -23.66,-6.39c-7.25,-4.26 -12.97,-9.99 -17.17,-17.17c-4.2,-7.18 -6.3,-15.04 -6.3,-23.57c0,-8.53 2.1,-16.38 6.3,-23.57c4.2,-7.18 9.92,-12.91 17.17,-17.17c7.24,-4.26 15.13,-6.39 23.66,-6.39c5.85,0 11.39,1 16.62,3.01c5.24,2.01 9.99,4.84 14.25,8.5l0,-10.05l17.36,0zm-32.7,72.34c4.5,-2.68 8.07,-6.36 10.69,-11.05c2.62,-4.69 3.93,-9.89 3.93,-15.62c0,-5.73 -1.31,-10.93 -3.93,-15.62c-2.62,-4.69 -6.18,-8.37 -10.69,-11.05c-4.51,-2.68 -9.56,-4.02 -15.16,-4.02c-5.6,0 -10.5,1.34 -15.07,4.02c-4.57,2.68 -8.16,6.37 -10.78,11.05c-2.62,4.69 -3.93,9.9 -3.93,15.62c0,5.72 1.31,10.93 3.93,15.62c2.62,4.69 6.21,8.38 10.78,11.05c4.57,2.68 9.59,4.02 15.07,4.02c5.48,0 10.66,-1.34 15.16,-4.02z" fill="#ffffff"></path>
                        <path d="m636.91,52.15l-5.3,17.72c-4.87,-3.65 -9.44,-5.48 -13.7,-5.48c-6.7,0 -12.27,2.38 -16.72,7.12c-4.45,4.75 -6.67,10.66 -6.67,17.72l0,51.88l-17.35,0l0,-91.34l17.35,0l0,11.33c3.41,-4.02 7.49,-7.15 12.24,-9.41c4.75,-2.25 9.68,-3.38 14.8,-3.38c5.72,0 10.84,1.28 15.35,3.84z" fill="#ffffff"></path>
                        <path d="m719.12,49.59l-32.33,39.46l32.33,52.07l-17.9,0l-24.48,-39.64l-8.59,10.41l0,29.23l-17.35,0l0,-136.1l17.35,0l0,84.77l32.7,-40.19l18.27,0l0,-0.01z" fill="#ffffff"></path>
                        <path d="m816.95,92.16c0.06,0.37 0.03,0.79 -0.09,1.28l-73.99,13.34c1.95,5.73 5.39,10.38 10.32,13.98c4.93,3.59 10.44,5.39 16.53,5.39c5.24,0 10.11,-1.03 14.62,-3.11c4.5,-2.07 8.25,-4.6 11.24,-7.58c2.98,-2.98 4.96,-5.87 5.94,-8.68l14.8,4.75c-1.46,3.78 -4.14,8.04 -8.04,12.79c-3.9,4.75 -9.11,8.92 -15.62,12.51c-6.52,3.59 -14.04,5.39 -22.56,5.39c-9.87,-0.12 -18.97,-3.17 -27.31,-9.13c-8.34,-5.97 -14.16,-13.7 -17.45,-23.2c-1.58,-4.63 -2.38,-9.56 -2.38,-14.8c0,-8.52 2.1,-16.41 6.3,-23.66c4.2,-7.24 9.92,-13 17.17,-17.26c7.24,-4.26 15.13,-6.39 23.66,-6.39c8.04,0 15.53,1.95 22.47,5.85c6.94,3.9 12.57,9.13 16.9,15.71c4.32,6.58 6.79,13.82 7.4,21.74c0,0.37 0.03,0.73 0.09,1.1l0,-0.02zm-19.82,-8.95c-2.07,-5.85 -5.69,-10.6 -10.87,-14.25c-5.18,-3.65 -10.81,-5.48 -16.9,-5.48c-4.87,0 -9.41,1.19 -13.61,3.56c-4.2,2.38 -7.67,5.57 -10.41,9.59c-2.74,4.02 -4.29,8.4 -4.66,13.15l-0.18,3.47l56.63,-10.05l0,0.01z" fill="#ffffff"></path>
                        <path d="m891.03,130.71c-2.8,3.29 -6.37,6.09 -10.69,8.4c-4.32,2.31 -9.04,3.47 -14.16,3.47c-8.04,0 -14.62,-2.22 -19.73,-6.67c-5.12,-4.44 -7.67,-11.11 -7.67,-20l0,-50.42l-12.97,0l0,-15.71l12.97,0l0,-29.78l17.36,-1.1l0,30.87l24.85,0l0,15.71l-24.85,0l0,45.67c0,4.63 1.34,8.34 4.02,11.14c2.68,2.8 5.85,4.2 9.5,4.2c2.44,0 4.69,-0.61 6.76,-1.83c2.07,-1.22 3.71,-2.62 4.93,-4.2c1.22,-1.58 1.83,-2.74 1.83,-3.47l7.86,13.7l-0.01,0.02z" fill="#ffffff"></path>
                    </g>
                </svg>
            </a>
        </div>

        <div class="show-on-scroll hidden" style="display: flex; flex-grow: 1; align-items: center; justify-content: center;">
            <div style="flex: 1 1 0%; height: 100%;">
                <div style="flex: 1 1 0%">
                    <div>
                        <div style="width: 100%; background: #fff; border: 1px solid #eee; height: 36px; border-radius: 20px; min-width: 200px; position: relative; padding-left: 0px; padding-right: 0px; display: flex; align-items: center;">
                            <a href="#" class="btn-mobile-menu-open-preferred-shop" style="border: 0px; background: none; cursor: pointer; height: 36px; width: 30px; padding: 0; display: flex; align-items: center; justify-content: center; position: relative; z-index: 0;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 64 64">
                                    <circle data-name="layer2" cx="32.106" cy="32.035" r="14" fill="none" stroke="#333333" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="round"></circle><path data-name="layer1" d="M60.2 27.264l-4.908-1.27a23.845 23.845 0 0 0-2.534-6.086l2.606-4.426a2.4 2.4 0 0 0-.371-2.915l-3.411-3.411a2.4 2.4 0 0 0-2.915-.371l-4.423 2.6a23.848 23.848 0 0 0-6.1-2.54L36.842 3.8A2.4 2.4 0 0 0 34.518 2h-4.825a2.4 2.4 0 0 0-2.323 1.8l-1.3 5.028a23.843 23.843 0 0 0-6.141 2.544L15.408 8.71a2.4 2.4 0 0 0-2.915.371l-3.412 3.412a2.4 2.4 0 0 0-.371 2.915l2.662 4.52a23.848 23.848 0 0 0-2.512 6.027L3.8 27.264A2.4 2.4 0 0 0 2 29.588v4.825a2.4 2.4 0 0 0 1.8 2.323l5.02 1.3a23.846 23.846 0 0 0 2.571 6.21l-2.6 4.423a2.4 2.4 0 0 0 .371 2.915l3.412 3.412a2.4 2.4 0 0 0 2.915.371l4.426-2.607a23.845 23.845 0 0 0 6.2 2.565L27.37 60.2a2.4 2.4 0 0 0 2.323 1.8h4.825a2.4 2.4 0 0 0 2.324-1.8l1.267-4.9a23.85 23.85 0 0 0 6.154-2.563l4.329 2.549a2.4 2.4 0 0 0 2.915-.371l3.412-3.412a2.4 2.4 0 0 0 .371-2.915l-2.549-4.329A23.845 23.845 0 0 0 55.332 38l4.869-1.26A2.4 2.4 0 0 0 62 34.413v-4.825a2.4 2.4 0 0 0-1.8-2.324z" fill="none" stroke="#333333" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4" stroke-linejoin="round"></path></svg></a>
                            <input id="mobile-menu-search-input2" autocomplete="off" type="text" class="mobile-menu-search-input" placeholder="Tapez le nom de l'article ou collez l'URL" style="flex: 1 1 0%; height: 20px; font-size: 14px; width: 100%; color: rgb(85, 85, 85); background: transparent; border: 0px;">
                            <a href="#" style="border: 0px; background: none; cursor: pointer; height: 36px; width: 30px; padding: 0; display: flex; align-items: center; justify-content: center; position: relative; z-index: 0;">
                                <svg role="presentation" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 5.5C13.26 5.5 15.5 7.74 15.5 10.5C15.5 13.26 13.26 15.5 10.5 15.5C7.74 15.5 5.5 13.26 5.5 10.5C5.5 7.74 7.74 5.5 10.5 5.5ZM10.5 4C6.91 4 4 6.91 4 10.5C4 14.09 6.91 17 10.5 17C14.09 17 17 14.09 17 10.5C17 6.91 14.09 4 10.5 4Z" fill="#333333"></path><path d="M19.25 19.25L14.75 14.75" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path></svg></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="hide-on-scroll" style="display: flex; align-items: center; justify-content: center;">
            
            <a href="https://zenmarket.jp/fr/profile/watchlist.aspx" class="d-flex justify-content-center align-items-center" style="width: 40px; height: 40px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64">
                    <path d="M32 48L15 58l4-19L5 26l19-2 8-18 8 18 19 2-14 13 4 19-17-10z" stroke-width="4" stroke-linecap="round" stroke="#ffffff" fill="none" data-name="layer1" stroke-linejoin="round"></path>
                </svg>
            </a>
            <a href="#addProductModal" data-toggle="modal" role="button" type="button" class="d-flex justify-content-center align-items-center" style="width: 40px; height: 40px;">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64">
                    <path data-name="layer2" fill="none" stroke="#ffffff" stroke-width="4" d="M55.7 33.3L58 22M6.1 22L12 52h19.2M26 2L8.1 22M38 2l18 20M2 22h60" stroke-linejoin="round" stroke-linecap="round"></path>
                    <circle data-name="layer1" cx="46" cy="46" r="16" fill="none" stroke="#ffffff" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"></circle>
                    <path data-name="layer1" fill="none" stroke="#ffffff" stroke-width="3" d="M46 38v16m-8-8h16" stroke-linejoin="round" stroke-linecap="round"></path>
                </svg>
            </a>
            <a href="https://zenmarket.jp/fr/profile/" class="d-flex justify-content-center align-items-center" style="width: 40px; height: 40px;">
                <svg role="presentation" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3.5C13.93 3.5 15.5 5.07 15.5 7C15.5 8.93 13.93 10.5 12 10.5C10.07 10.5 8.5 8.93 8.5 7C8.5 5.07 10.07 3.5 12 3.5ZM12 2C9.24 2 7 4.24 7 7C7 9.76 9.24 12 12 12C14.76 12 17 9.76 17 7C17 4.24 14.76 2 12 2Z" fill="#ffffff"></path><path d="M12.0002 14.5C15.7602 14.5 19.0502 16.97 20.1302 20.5H3.88017C4.95017 16.97 8.24017 14.5 12.0002 14.5ZM12.0002 13C7.13017 13 3.07017 16.48 2.18017 21.09C2.09017 21.56 2.44017 22 2.92017 22C6.20017 22 17.8002 22 21.0802 22C21.5602 22 21.9102 21.56 21.8202 21.09C20.9302 16.48 16.8702 13 12.0002 13Z" fill="#ffffff"></path></svg>
            </a>
            
        </div>
    </div>
    <div class="hide-on-scroll" style="display: flex; align-items: center; justify-content: center;">
        <div style="flex: 1 1 0%; height: 100%; padding: 5px 8px 0px 8px;">
            <div style="padding-bottom: 5px; flex: 1 1 0%">
                <div style="width: 100%;">
                    <div style="width: 100%; background: #fff; border: 1px solid #eee; height: 44px; border-radius: 44px; min-width: 200px; position: relative; padding-left: 15px; padding-right: 0px; display: flex; align-items: center;">
                        <input id="mobile-menu-search-input1" autocomplete="off" type="text" class="mobile-menu-search-input" placeholder="Tapez le nom de l'article ou collez l'URL" style="flex: 1 1 0%; height: 22px; font-size: 16px; width: 100%; color: rgb(85, 85, 85); background: transparent; border: 0px;">
                        <a id="header1_btnSearch2" style="border: 0px; background: none; cursor: pointer; height: 40px; width: 40px; display: flex; align-items: center; justify-content: center; position: relative; z-index: 0;" href="javascript:__doPostBack('header1$btnSearch2','')">
                            <svg role="presentation" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 5.5C13.26 5.5 15.5 7.74 15.5 10.5C15.5 13.26 13.26 15.5 10.5 15.5C7.74 15.5 5.5 13.26 5.5 10.5C5.5 7.74 7.74 5.5 10.5 5.5ZM10.5 4C6.91 4 4 6.91 4 10.5C4 14.09 6.91 17 10.5 17C14.09 17 17 14.09 17 10.5C17 6.91 14.09 4 10.5 4Z" fill="#333333"></path><path d="M19.25 19.25L14.75 14.75" stroke="#333333" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path></svg></a>
                    </div>
                    <div style="display: flex; color: #21406a; align-items: center; justify-content: center; padding-top: 8px; font-size: 10px;">
                        Rechercher sur<span style="font-weight: 600; padding: 0 5px;"><span id="mobile-menu-preferred-shop">JDirectItems Auction</span>, <span id="mobile-menu-preferred-category">Tous</span></span><a href="#" class="btn-mobile-menu-open-preferred-shop" style="color: #333">Changer</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></div>


<!-- The menu -->




<script>
    $(document).ready(function () {
        $('#addProductModal').on('shown.bs.modal', function () {
            $(this).find(".add-product-url").focus();
        });
    });
    function escapeData() {
        $("#hfProductComments").val(escape($("#tbAddProductComments").val()));
    }
</script>





<div class="header-top-line hidden-xs">
    <div class="container">
        <div class="row">
            <div class="header-top-line-menu-left col-sm-4 col-md-6">
                <div class="dropdown" style="display: inline">
                    <a href="#" type="button" style="color: #777; text-decoration: none" id="langDropDown" class=" btn btn-xs dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <span id="header1_lblCurrentCulture">Français</span>
                        <span class="caret"></span></a>
                    <ul class="dropdown-menu languages-dropdown" aria-labelledby="langDropDown">
                        <li><a href="/en/profile/parcel.aspx?state=5">English</a></li>
                        <li><a href="/ru/profile/parcel.aspx?state=5">Русский</a></li>
                        <li><a href="/ua/profile/parcel.aspx?state=5">Українська</a></li>
                        <li><a href="/ja/profile/parcel.aspx?state=5">日本語</a></li>
                        <li><a href="/cn/profile/parcel.aspx?state=5">简体中文</a></li>
                        <li><a href="/tw/profile/parcel.aspx?state=5">繁體中文</a></li>
                        <li><a href="/es/profile/parcel.aspx?state=5">Español</a></li>
                        <li><a href="/fr/profile/parcel.aspx?state=5">Français</a></li>
                        <li><a href="/ms/profile/parcel.aspx?state=5">Bahasa Melayu</a></li>
                        <li><a href="/vi/profile/parcel.aspx?state=5">Tiếng Việt</a></li>
                        <li><a href="/ar/profile/parcel.aspx?state=5">عَرَبِيّ</a></li>
                        <li><a href="/de/profile/parcel.aspx?state=5">Deutsch</a></li>
                        <li><a href="/id/profile/parcel.aspx?state=5">Bahasa Indonesia</a></li>
                        <li><a href="/th/profile/parcel.aspx?state=5">ภาษาไทย</a></li>
                        <li><a href="/it/profile/parcel.aspx?state=5">Italiano</a></li>
                        <li><a href="/pt/profile/parcel.aspx?state=5">Português</a></li>
                        <li><a href="/tr/profile/parcel.aspx?state=5">Türkçe</a></li>
                        <li><a href="/pl/profile/parcel.aspx?state=5">Polski</a></li>
                        <li><a href="/ko/profile/parcel.aspx?state=5">한국어</a></li>
                    </ul>
                </div>
                |
                <div class="dropdown" style="display: inline;">
                    <a href="#" type="button" style="color: #777; text-decoration: none; display: none" id="currencyDropDown" class=" btn btn-xs dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <span id="lblCurrentCurency">Euro (EUR)</span>
                        <span class="caret"></span>
                    </a>
                    <select id="currencySelect" tabindex="-1" class="select2-hidden-accessible" aria-hidden="true">
                        
                                <option value="usd" class="change-currency" data-rate="1 USD = 142 JPY" data-currency="usd" data-currencysymbol="$">Dollar américain (USD)</option>
                            
                                <option value="jpy" class="change-currency" data-rate="" data-currency="jpy" data-currencysymbol="¥">Yen (JPY)</option>
                            
                                <option value="cny" class="change-currency" data-rate="1 CNY = 19,9 JPY" data-currency="cny" data-currencysymbol="元">Yuan (CNY)</option>
                            
                                <option value="eur" class="change-currency" data-rate="1 EUR = 166 JPY" data-currency="eur" data-currencysymbol="€">Euro (EUR)</option>
                            
                                <option value="gbp" class="change-currency" data-rate="1 GBP = 191 JPY" data-currency="gbp" data-currencysymbol="£">Livre sterling (GBP)</option>
                            
                                <option value="rub" class="change-currency" data-rate="1 RUB = 1,7 JPY" data-currency="rub" data-currencysymbol="руб">Rouble russe (RUB)</option>
                            
                                <option value="uah" class="change-currency" data-rate="1 UAH = 3,4 JPY" data-currency="uah" data-currencysymbol="грн">Hryvnia (UAH)</option>
                            
                                <option value="aud" class="change-currency" data-rate="1 AUD = 93 JPY" data-currency="aud" data-currencysymbol="aud$">Dollar australien (AUD)</option>
                            
                                <option value="cad" class="change-currency" data-rate="1 CAD = 102 JPY" data-currency="cad" data-currencysymbol="cad$">Dollar canadien (CAD)</option>
                            
                                <option value="myr" class="change-currency" data-rate="1 MYR = 33,7 JPY" data-currency="myr" data-currencysymbol="rm">Ringgit (MYR)</option>
                            
                                <option value="idr" class="change-currency" data-rate="1 JPY = 116,19 IDR" data-currency="idr" data-currencysymbol="rp">Roupie indonésienne (IDR)</option>
                            
                                <option value="thb" class="change-currency" data-rate="1 THB = 4,5 JPY" data-currency="thb" data-currencysymbol="฿">Baht (THB)</option>
                            
                                <option value="hkd" class="change-currency" data-rate="1 HKD = 18,2 JPY" data-currency="hkd" data-currencysymbol="hk$">Dollar de Hong Kong (HKD)</option>
                            
                                <option value="sgd" class="change-currency" data-rate="1 SGD = 110 JPY" data-currency="sgd" data-currencysymbol="sgd$">Dollar de Singapour (SGD)</option>
                            
                                <option value="twd" class="change-currency" data-rate="1 TWD = 4,7 JPY" data-currency="twd" data-currencysymbol="nt$">Nouveau dollar de Taïwan (TWD)</option>
                            
                                <option value="mxn" class="change-currency" data-rate="1 MXN = 7,6 JPY" data-currency="mxn" data-currencysymbol="mxn$">Peso mexicain (MXN)</option>
                            
                                <option value="vnd" class="change-currency" data-rate="1 JPY = 186,41 VND" data-currency="vnd" data-currencysymbol="₫ ">Dong vietnamien (VND)</option>
                            
                                <option value="brl" class="change-currency" data-rate="1 BRL = 26,04 JPY" data-currency="brl" data-currencysymbol="r$">Real brésilien (BRL)</option>
                            
                                <option value="pln" class="change-currency" data-rate="1 PLN = 39,01 JPY" data-currency="pln" data-currencysymbol="pln">Zloty polonais (PLN)</option>
                            
                                <option value="aed" class="change-currency" data-rate="1 AED = 38,54 JPY" data-currency="aed" data-currencysymbol="aed">AED Dhiram (AED)</option>
                            
                                <option value="inr" class="change-currency" data-rate="1 INR = 1,6 JPY" data-currency="inr" data-currencysymbol="inr">Roupie indienne (INR)</option>
                            
                                <option value="ars" class="change-currency" data-rate="1 JPY = 10 ARS" data-currency="ars" data-currencysymbol="ars">Peso argentin (ARS)</option>
                            
                                <option value="clp" class="change-currency" data-rate="1 JPY = 6,83 CLP" data-currency="clp" data-currencysymbol="clp">Peso chilien (CLP)</option>
                            
                                <option value="cop" class="change-currency" data-rate="1 JPY = 27,7 COP" data-currency="cop" data-currencysymbol="cop">Peso colombien (COP)</option>
                            
                                <option value="pen" class="change-currency" data-rate="1 PEN = 40,82 JPY" data-currency="pen" data-currencysymbol="pen">Sol péruvien (PEN)</option>
                            
                                <option value="uyu" class="change-currency" data-rate="1 UYU = 3,5 JPY" data-currency="uyu" data-currencysymbol="uyu">Peso uruguayen (UYU)</option>
                            
                                <option value="pyg" class="change-currency" data-rate="1 JPY = 50,6 PYG" data-currency="pyg" data-currencysymbol="pyg">Guarani paraguayen (PYG)</option>
                            
                                <option value="mad" class="change-currency" data-rate="1 MAD = 15,68 JPY" data-currency="mad" data-currencysymbol="mad">Dirham marocain (MAD)</option>
                            
                                <option value="egp" class="change-currency" data-rate="1 EGP = 3 JPY" data-currency="egp" data-currencysymbol="egp">Livre égyptienne (EGP)</option>
                            
                                <option value="try" class="change-currency" data-rate="1 TRY = 3,43 JPY" data-currency="try" data-currencysymbol="₺">Lire turque (TRY)</option>
                            
                                <option value="nzd" class="change-currency" data-rate="1 NZD = 83,86 JPY" data-currency="nzd" data-currencysymbol="nz$">Dollar néo-zélandais (NZD)</option>
                            
                                <option value="huf" class="change-currency" data-rate="1 JPY = 2,37 HUF" data-currency="huf" data-currencysymbol="ft">Forint hongrois (HUF)</option>
                            
                                <option value="sar" class="change-currency" data-rate="1 SAR = 37,73 JPY" data-currency="sar" data-currencysymbol="sar">Riyal Saoudien (SAR)</option>
                            
                                <option value="chf" class="change-currency" data-rate="1 CHF = 177,45 JPY" data-currency="chf" data-currencysymbol="chf">Franc Suisse (CHF)</option>
                            
                                <option value="dkk" class="change-currency" data-rate="1 DKK = 22,2 JPY" data-currency="dkk" data-currencysymbol="dkk">Couronne Danoise (DKK)</option>
                            
                                <option value="nok" class="change-currency" data-rate="1 NOK = 14,17 JPY" data-currency="nok" data-currencysymbol="nok">Couronne Norvégienne (NOK)</option>
                            
                                <option value="sek" class="change-currency" data-rate="1 SEK = 15,09 JPY" data-currency="sek" data-currencysymbol="sek">Couronne Suédoise (SEK)</option>
                            
                                <option value="ngn" class="change-currency" data-rate="1 JPY = 10,64 NGN" data-currency="ngn" data-currencysymbol="ngn">Nairas nigérians (NGN)</option>
                            
                                <option value="zar" class="change-currency" data-rate="1 ZAR = 8,07 JPY" data-currency="zar" data-currencysymbol="zar">Rand sud-africain (ZAR)</option>
                            
                                <option value="kes" class="change-currency" data-rate="1 KES = 1,09 JPY" data-currency="kes" data-currencysymbol="kes">Shillings kényans (KES)</option>
                            
                                <option value="ghs" class="change-currency" data-rate="1 GHS = 11,7 JPY" data-currency="ghs" data-currencysymbol="ghs">Cedi ghanéen (GHS)</option>
                            
                                <option value="xof" class="change-currency" data-rate="1 JPY = 3,94 XOF" data-currency="xof" data-currencysymbol="xof">Franc CFA ouest africain (XOF)</option>
                            
                                <option value="xaf" class="change-currency" data-rate="1 JPY = 3,94 XAF" data-currency="xaf" data-currencysymbol="xaf">Franc CFA d'Afrique centrale (XAF)</option>
                            
                                <option value="kwd" class="change-currency" data-rate="1 KWD = 463,32 JPY" data-currency="kwd" data-currencysymbol="kwd">Dinar koweitien (KWD)</option>
                            
                                <option value="qar" class="change-currency" data-rate="1 QAR = 38,88 JPY" data-currency="qar" data-currencysymbol="qar">Riyal qatarien (QAR)</option>
                            
                                <option value="bhd" class="change-currency" data-rate="1 BHD = 375,44 JPY" data-currency="bhd" data-currencysymbol="bhd">Dinar bahreini (BHD)</option>
                            
                                <option value="iqd" class="change-currency" data-rate="1 JPY = 9,25 IQD" data-currency="iqd" data-currencysymbol="iqd">Dinar irakien (IQD)</option>
                            
                                <option value="php" class="change-currency" data-rate="1 PHP = 2,48 JPY" data-currency="php" data-currencysymbol="php">Peso philippin (PHP)</option>
                            
                                <option value="krw" class="change-currency" data-rate="1 JPY = 9,81 KRW" data-currency="krw" data-currencysymbol="₩">Won sud-coréen (KRW)</option>
                            
                    </select><span class="select2 select2-container select2-container--currency-theme" dir="ltr" style="width: 100px;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-currencySelect-container"><span class="select2-selection__rendered" id="select2-currencySelect-container" title="Euro (EUR)">Euro (EUR)</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                    <span class="caret" style="color: #777; margin-left: -10px"></span>
                </div>
                |
                
                <h3 class="header-slogan">Intermédiaire d'achat pour les sites japonais</h3>
                
            </div>
            <div class="col-sm-8 col-md-6 header-top-line-menu-right">
                
                <div id="header1_logged_top_line_customer_menu">
                    <a href="addfunds.aspx" id="header1_top_line_funds">Mes fonds : ¥4,122</a>|
                    <a href="addfunds.aspx">Ajouter des fonds</a>|
                    <a href="https://zenmarket.jp/fr/profile/watchlist.aspx">Ma Liste</a> |
                    <a href="https://zenmarket.jp/fr/about.aspx">À propos de nous</a> |
                    <a href="https://zenmarket.jp/fr/blog.aspx">Blog</a> |
                    <a style="padding: 0 0 0 3px;" href="https://zenmarket.jp/fr/help.aspx">Aide</a>
                </div>
            </div>
        </div>

    </div>
</div>

<div id="header" class="hidden-xs">
    <a href="../calc.aspx" id="header1_cb" class="hidden-xs hidden-sm fixed-rotated-button">Combien cela me coûtera-t-il ?</a>
    <div class="container">
        <div class="header-middle-row">
            <div class="logo flexcol-logo">
                <a href="https://zenmarket.jp/fr/">
                    <img src="../img/logo2.png?1" id="header1_logo" alt="zenmarket"></a>
            </div>

            <div class="search-line flexcol-search">
                <div class="input-group">
                    <div class="btn-group input-group-addon" style="padding: 0; border: 0px;">
                        <a class="btn dropdown-toggle shop-categories header-search-shop-container" style="padding: 13px 12px; width: 100%;" data-toggle="dropdown" href="#">
                            <span class="header-search-shop">JDirectItems Auction</span><span class="caret"></span>
                        </a>
                        <ul id="default-shops-list" role="menu" class="dropdown-menu default-shops" style="max-height: 400px; overflow-x: hidden; min-width: 250px; overflow-y: auto;">
                            <li><a data-shopid="rakuten" data-target="#">Rakuten</a></li>
                            <li><a data-shopid="amazon" data-target="#">Amazon</a></li>
                            <li><a data-shopid="yahoo" data-target="#">JDirectItems Auction</a></li>
                            <li><a data-shopid="yahooshopping" data-target="#">JDirectItems Shopping</a></li>
                            <li><a data-shopid="zenmarketplace" data-target="#">ZenPlus</a></li>
                            <li><a data-shopid="rakuma" data-target="#">Rakuma</a></li>
                            <li><a data-shopid="mercari" data-target="#">Mercari</a></li>
                            <li><a data-shopid="minne" data-target="#">minne</a></li>
                            <li><a data-shopid="bookoff" data-target="#">Bookoff</a></li>
                            <li><a data-shopid="digimart" data-target="#">Digimart</a></li>                            
                        </ul>
                    </div>
                    <div id="shop-categories-container" class="btn-group input-group-addon" style="padding: 0; border: 0px;">
                        <a class="btn dropdown-toggle shop-categories" style="padding: 13px 12px; width: 100%;" data-toggle="dropdown" href="#">
                            <span class="header-search-category">Tous</span><span class="caret"></span>
                        </a>
                        <ul role="menu" class="dropdown-menu default-categories" style="max-height: 400px; overflow-x: hidden; min-width: 250px; overflow-y: auto;">
                            <li><a data-target="#" data-categoryid="">Tous</a></li>
                            <li class="divider"></li>
                            <li class="current-category" style="display: none;">
                                <a id="header1_current_catLink">Dans cette catégorie</a></li>
                            <li class="current-category divider" style="display: none;"></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="100371">Vêtements pour femmes</a></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="551177">Vêtements pour hommes</a></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="216131">Sacs</a></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="100433">Sous-vêtements</a></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="558885">Chaussures</a></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="558929">Montres</a></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="216129">Bijoux</a></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="100533">Bébés</a></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="100939">Cosmétiques</a></li>
                            <li class="category divider rakuten-categories" style="display: none;"></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="100227">Nourriture</a></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="100316">Boissons</a></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="551167">Friandises</a></li>
                            <li class="category divider rakuten-categories" style="display: none;"></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="101164">Jouets</a></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="215783">Nécessités quotidiennes</a></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="101070">Sport</a></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="100938">Alimentation / Santé</a></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="551169">Médicament</a></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="100005">Jardin</a></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="101213">Animaux domestiques</a></li>
                            <li class="category divider rakuten-categories" style="display: none;"></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="100026">Ordinateurs et bureau</a></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="562637">Appareils ménagers</a></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="211742">TV/Audio/Appareils photo</a></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="558944">Cuisine</a></li>
                            <li class="category divider rakuten-categories" style="display: none;"></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="101114">Automobile</a></li>
                            <li class="category rakuten-categories" style="display: none;"><a data-target="#" data-categoryid="503190">Pièces automobiles</a></li>

                            <li class="category amazon-categories" style="display: none;"><a data-target="#" data-categoryid="2221077051">Sacs et Bagages</a></li>
                            <li class="category amazon-categories" style="display: none;"><a data-target="#" data-categoryid="2230005051">Vêtements Hommes</a></li>
                            <li class="category amazon-categories" style="display: none;"><a data-target="#" data-categoryid="2230006051">Vêtements Femmes</a></li>
                            <li class="category amazon-categories" style="display: none;"><a data-target="#" data-categoryid="85895051">Bijoux</a></li>
                            <li class="category amazon-categories" style="display: none;"><a data-target="#" data-categoryid="2230804051">Enfants &amp; Bébé</a></li>
                            <li class="category amazon-categories" style="display: none;"><a data-target="#" data-categoryid="2016926051">Chaussures</a></li>
                            <li class="category amazon-categories" style="display: none;"><a data-target="#" data-categoryid="324025011">Montres</a></li>
                            <li class="category divider amazon-categories" style="display: none;"></li>
                            <li class="category amazon-categories" style="display: none;"><a data-target="#" data-categoryid="2016929051">Electroménager</a></li>
                            <li class="category amazon-categories" style="display: none;"><a data-target="#" data-categoryid="2319890051">Accessoires Automobile</a></li>
                            <li class="category amazon-categories" style="display: none;"><a data-target="#" data-categoryid="2017304051">Accessoires Moto</a></li>
                            <li class="category amazon-categories" style="display: none;"><a data-target="#" data-categoryid="2127209051">Ordinateurs et Réseaux</a></li>
                            <li class="category amazon-categories" style="display: none;"><a data-target="#" data-categoryid="3210981">Santé et Bien-être</a></li>
                            <li class="category amazon-categories" style="display: none;"><a data-target="#" data-categoryid="2123629051">Instruments de musique</a></li>
                            <li class="category amazon-categories" style="display: none;"><a data-target="#" data-categoryid="3828871">Cuisine &amp; Salon</a></li>
                            <li class="category divider amazon-categories" style="display: none;"></li>
                            <li class="category amazon-categories" style="display: none;"><a data-target="#" data-categoryid="52374051">Cosmétiques</a></li>
                            <li class="category amazon-categories" style="display: none;"><a data-target="#" data-categoryid="160384011">Beauté</a></li>
                            <li class="category amazon-categories" style="display: none;"><a data-target="#" data-categoryid="14304371">Sport</a></li>
                            <li class="category amazon-categories" style="display: none;"><a data-target="#" data-categoryid="13299531">Jouets</a></li>
                            <li class="category divider amazon-categories" style="display: none;"></li>
                            <li class="category amazon-categories" style="display: none;"><a data-target="#" data-categoryid="57239051">Nourriture</a></li>

                            <li class="category yahoo-categories" style="display: list-item;"><a data-categoryid="23000" data-target="#">Mode</a></li>
                            <li class="category yahoo-categories" style="display: list-item;"><a data-categoryid="23140" data-target="#">Bijoux, Montres</a></li>
                            <li class="category yahoo-categories" style="display: list-item;"><a data-categoryid="24698" data-target="#">Sport, Loisirs</a></li>
                            <li class="category yahoo-categories" style="display: list-item;"><a data-categoryid="24202" data-target="#">Produits bébés</a></li>
                            <li class="category yahoo-categories" style="display: list-item;"><a data-categoryid="42177" data-target="#">Beauté, Santé</a></li>
                            <li class="category divider yahoo-categories" style="display: list-item;"></li>
                            <li class="category yahoo-categories" style="display: list-item;"><a data-categoryid="26318" data-target="#">Automobile</a></li>
                            <li class="category yahoo-categories" style="display: list-item;"><a data-categoryid="23336" data-target="#">Ordinateurs</a></li>
                            <li class="category yahoo-categories" style="display: list-item;"><a data-categoryid="23632" data-target="#">Electronique</a></li>
                            <li class="category yahoo-categories" style="display: list-item;"><a data-categoryid="24198" data-target="#">Maison, Intérieur</a></li>
                            <li class="category yahoo-categories" style="display: list-item;"><a data-categoryid="22896" data-target="#">Fournitures de bureau</a></li>
                            <li class="category divider yahoo-categories" style="display: list-item;"></li>
                            <li class="category yahoo-categories" style="display: list-item;"><a data-categoryid="21600" data-target="#">Livres, Magazines</a></li>
                            <li class="category yahoo-categories" style="display: list-item;"><a data-categoryid="22152" data-target="#">Musique</a></li>
                            <li class="category yahoo-categories" style="display: list-item;"><a data-categoryid="25464" data-target="#">Jouets, Jeux</a></li>
                            <li class="category yahoo-categories" style="display: list-item;"><a data-categoryid="2084032594" data-target="#">Articles de célébrités</a></li>
                            <li class="category yahoo-categories" style="display: list-item;"><a data-categoryid="20060" data-target="#">Comics, Animé</a></li>
                            <li class="category yahoo-categories" style="display: list-item;"><a data-categoryid="24242" data-target="#">Maison, Intérieur</a></li>
                            <li class="category yahoo-categories" style="display: list-item;"><a data-categoryid="20000" data-target="#">Antique, Collections</a></li>

                            <li class="category yahooshopping-categories" style="display: none;"><a data-categoryid="13457" data-target="#">Mode</a></li>
                            <li class="category yahooshopping-categories" style="display: none;"><a data-categoryid="2498" data-target="#">Nourriture</a></li>
                            <li class="category yahooshopping-categories" style="display: none;"><a data-categoryid="2513" data-target="#">Loisirs, plein air</a></li>
                            <li class="category yahooshopping-categories" style="display: none;"><a data-categoryid="2500" data-target="#">Alimentation, Santé</a></li>
                            <li class="category yahooshopping-categories" style="display: none;"><a data-categoryid="2501" data-target="#">Cosmétiques, Parfums</a></li>
                            <li class="category divider yahooshopping-categories" style="display: none;"></li>
                            <li class="category yahooshopping-categories" style="display: none;"><a data-categoryid="2502" data-target="#">PC, Accessoires</a></li>
                            <li class="category yahooshopping-categories" style="display: none;"><a data-categoryid="2504" data-target="#">Appareils audio/vidéo, Appareil photo</a></li>
                            <li class="category yahooshopping-categories" style="display: none;"><a data-categoryid="2505" data-target="#">Appareils ménagers et électrique de petites tailles</a></li>
                            <li class="category yahooshopping-categories" style="display: none;"><a data-categoryid="2506" data-target="#">Meubles, Intérieur</a></li>
                            <li class="category yahooshopping-categories" style="display: none;"><a data-categoryid="2507" data-target="#">Fleurs, jardinage</a></li>
                            <li class="category divider yahooshopping-categories" style="display: none;"></li>
                            <li class="category yahooshopping-categories" style="display: none;"><a data-categoryid="2508" data-target="#">Cuisine, articles ménagers, produits de base</a></li>
                            <li class="category yahooshopping-categories" style="display: none;"><a data-categoryid="2503" data-target="#">Bricolage, Outils, Papeterie</a></li>
                            <li class="category yahooshopping-categories" style="display: none;"><a data-categoryid="2509" data-target="#">Animaux domestiques et de compagnie</a></li>
                            <li class="category yahooshopping-categories" style="display: none;"><a data-categoryid="2510" data-target="#">Instruments de musique, Hobby, Apprentissage</a></li>
                            <li class="category yahooshopping-categories" style="display: none;"><a data-categoryid="2511" data-target="#">Jeux, jouets</a></li>
                            <li class="category yahooshopping-categories" style="display: none;"><a data-categoryid="2497" data-target="#">Bébé, Enfants, Maternité</a></li>
                            <li class="category yahooshopping-categories" style="display: none;"><a data-categoryid="2512" data-target="#">Sport</a></li>
                            <li class="category yahooshopping-categories" style="display: none;"><a data-categoryid="2514" data-target="#">Bicyclettes, voitures, motos</a></li>
                            <li class="category yahooshopping-categories" style="display: none;"><a data-categoryid="2516" data-target="#">CD, Musique, Tickets</a></li>
                            <li class="category yahooshopping-categories" style="display: none;"><a data-categoryid="2517" data-target="#">DVD, Vidéo</a></li>
                            <li class="category yahooshopping-categories" style="display: none;"><a data-categoryid="10002" data-target="#">Livres, BD, Magazines</a></li>

                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="10796">Vêtements pour femmes</a></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="10346">Vêtements pour hommes</a></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="7127">Sacs</a></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="1">Sous-vêtements</a></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="19176">Chaussures</a></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="18299">Montres</a></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="4050">Bijoux</a></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="2750">Bébés</a></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="13316">Cosmétiques</a></li>
                            <li class="category divider zenmarketplace-categories" style="display: none;"></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="19447">Nourriture</a></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="33250">Boissons</a></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="5562">Friandises</a></li>
                            <li class="category divider zenmarketplace-categories" style="display: none;"></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="350">Jouets</a></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="11753">Nécessités quotidiennes</a></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="27895">Sport</a></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="6127">Alimentation / Santé</a></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="38851">Médicaments</a></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="41720">Jardin</a></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="9088">Animaux domestiques</a></li>
                            <li class="category divider zenmarketplace-categories" style="display: none;"></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="36201">Ordinateurs et bureau</a></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="39510">Appareils ménagers</a></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="23530">TV/Audio/Appareils photo</a></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="33707">Cuisine</a></li>
                            <li class="category divider zenmarketplace-categories" style="display: none;"></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="43073">Auto</a></li>
                            <li class="category zenmarketplace-categories" style="display: none;"><a data-target="#" data-categoryid="46517">Pièces auto</a></li>

                            <li class="category rakuma-categories" style="display: none;"><a data-target="#" data-categoryid="10005">Homme</a></li>
                            <li class="category rakuma-categories" style="display: none;"><a data-target="#" data-categoryid="10001">Femme</a></li>
                            <li class="category rakuma-categories" style="display: none;"><a data-target="#" data-categoryid="10003">Enfants / bébé / maternité</a></li>
                            <li class="category divider rakuma-categories" style="display: none;"></li>
                            <li class="category rakuma-categories" style="display: none;"><a data-target="#" data-categoryid="10004">Cosmétiques / beauté</a></li>
                            <li class="category divider rakuma-categories" style="display: none;"></li>
                            <li class="category rakuma-categories" style="display: none;"><a data-target="#" data-categoryid="10007">Divertissement / hobbies</a></li>
                            <li class="category rakuma-categories" style="display: none;"><a data-target="#" data-categoryid="10010">Fait main</a></li>
                            <li class="category rakuma-categories" style="display: none;"><a data-target="#" data-categoryid="10014">Sports / extérieur</a></li>
                            <li class="category divider rakuma-categories" style="display: none;"></li>
                            <li class="category rakuma-categories" style="display: none;"><a data-target="#" data-categoryid="10012">Nourriture / boisson / saké</a></li>
                            <li class="category divider rakuma-categories" style="display: none;"></li>
                            <li class="category rakuma-categories" style="display: none;"><a data-target="#" data-categoryid="10006">Smartphones / appareils électroménagers / caméra</a></li>
                            <li class="category rakuma-categories" style="display: none;"><a data-target="#" data-categoryid="10002">Autres</a></li>
                            <li class="category divider rakuma-categories" style="display: none;"></li>
                            <li class="category rakuma-categories" style="display: none;"><a data-target="#" data-categoryid="10009">Intérieur / maison / nécessités quotidiennes</a></li>
                            <li class="category divider rakuma-categories" style="display: none;"></li>
                            <li class="category rakuma-categories" style="display: none;"><a data-target="#" data-categoryid="10013">Instrument de musique</a></li>
                            <li class="category rakuma-categories" style="display: none;"><a data-target="#" data-categoryid="10011">Voiture / moto</a></li>

                            <li class="category mercari-categories" style="display: none;"><a data-target="#" data-categoryid="2">Vêtements Homme</a></li>
                            <li class="category mercari-categories" style="display: none;"><a data-target="#" data-categoryid="1">Vêtements Femme</a></li>
                            <li class="category mercari-categories" style="display: none;"><a data-target="#" data-categoryid="3">Enfants &amp; Bébés</a></li>
                            <li class="category divider mercari-categories" style="display: none;"></li>
                            <li class="category mercari-categories" style="display: none;"><a data-target="#" data-categoryid="6">Cosmétiques</a></li>
                            <li class="category divider mercari-categories" style="display: none;"></li>
                            <li class="category mercari-categories" style="display: none;"><a data-target="#" data-categoryid="8">Passe-temps, Culturel</a></li>
                            <li class="category mercari-categories" style="display: none;"><a data-target="#" data-categoryid="9">Fait-main</a></li>
                            <li class="category divider mercari-categories" style="display: none;"></li>
                            <li class="category mercari-categories" style="display: none;"><a data-target="#" data-categoryid="7">Électronique</a></li>
                            <li class="category mercari-categories" style="display: none;"><a data-target="#" data-categoryid="10">Autres</a></li>
                            <li class="category divider mercari-categories" style="display: none;"></li>
                            <li class="category mercari-categories" style="display: none;"><a data-target="#" data-categoryid="4">Maison, Intérieur</a></li>
                            <li class="category divider mercari-categories" style="display: none;"></li>
                            <li class="category mercari-categories" style="display: none;"><a data-target="#" data-categoryid="1318">Voiture</a></li>
                        </ul>
                    </div>

                    <input name="header1$tbxSearch" type="text" id="header1_tbxSearch" class="form-control input-lg default-search header-search" autocomplete="off" placeholder="Tapez le nom de l'article ou collez l'URL" style="">
                    <a id="header1_btnSearch" class="btn btn-default btn-lg header-search-button input-group-addon" href="javascript:__doPostBack('header1$btnSearch','')"><span class="glyphicon glyphicon-search"></span></a>
                </div>
            </div>
            
            <div id="header1_after_login_customer_menu" class="header-cart-navi logged-auth flexcol-logged-auth">
                <div class="btn-group">
                    <a href="#addProductModal" data-toggle="modal" role="button" type="button" style="font-weight: 600" class="btn btn-lg btn-info">
                        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    </a>
                    <a href="/profile/" type="button" style="font-weight: 600" class="btn btn-lg btn-info">
                        <span class="glyphicon glyphicon-shopping-cart" style="padding-right: 10px;" aria-hidden="true"></span>
                        Mon compte
                        <span id="header1_lblCounter" class="label header-counter" style="background-color: #269BBD">21</span></a>
                    <button type="button" class="btn btn-lg btn-info dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        <span class="caret"></span>
                        <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <ul class="dropdown-menu dropdown-profile-menu" role="menu" style="margin-left: 50px; width: 177px;">
                        <li><a href="/profile/messages.aspx">Messages<span id="header1_mcount" class="label label-default" style="margin-left: 10px;">1</span></a></li>
                        <li><a href="/profile/actions.aspx">Événements<span id="header1_acount" class="label label-default" style="margin-left: 10px;">20</span></a></li>
                        <li><a href="/profile/watchlist.aspx">Ma Liste</a></li>
                        <li><a href="/profile/parcel.aspx">Colis<span id="header1_pacount" class="label label-default" style="margin-left: 10px;"></span></a></li>
                        <li><a href="/profile/payments.aspx">Paiements<span id="header1_paycount" class="label label-default" style="margin-left: 10px;"></span></a></li>
                        <li><a href="/profile/settings.aspx">Paramètres</a></li>
                        <li class="divider"></li>
                        <li><a id="header1_logout" style="text-decoration: none" href="javascript:__doPostBack('header1$logout','')">Se déconnecter</a></li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</div>

<div class="header-bottom-line">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <a href="../default.aspx" id="header1_default_tab" class="logo-icon">
                    <img src="../img/zenlogo_sm.png?1"></a>

                <a href="https://zenmarket.jp/fr/amazon.aspx" id="header1_amazon_tab">Amazon</a>
                <a href="https://zenmarket.jp/fr/rakuten.aspx" id="header1_rakuten_tab" style="position: relative">
                    Rakuten
                    </a>


                

                

                <a href="https://zenmarket.jp/fr/yahoo.aspx" id="header1_yahooauctions_tab" style="text-transform:unset">JDirectItems Auction</a>

                <a href="https://zenmarket.jp/fr/mercari.aspx" id="header1_mercari_tab" style="position: relative">
                    Mercari
                    </a>

                
                <div id="rakuma_tab" style="position: relative; display: inline-block; padding-left: 15px; cursor: pointer">
                    <a class="dropdown-toggle" data-toggle="dropdown">
                        RAKUMA
                        
                        <span>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                                <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
                            </svg>
                        </span>
                    </a>
                    <ul class="dropdown-menu" role="menu" style="margin-top: 5px; margin-left: 15px">
                        <li><a href="https://zenmarket.jp/fr/rakuma.aspx?sellerType=1" style="margin-left: 10px">Boutiques officielles<span class="label label-default" style="margin-left: 10px;"></span></a></li>                        
                        <li><a href="https://zenmarket.jp/fr/rakuma.aspx?sellerType=2" style="margin-left: 10px">Vendeurs particuliers<span class="label label-default" style="margin-left: 10px;"></span></a></li>
                    </ul>
                </div>

                <div id="header1_recommended_tab" style="position: relative; display: inline-block; padding-left: 15px; cursor: pointer">
                    <span style="font-size: 10px; position: absolute; top: -7px; background-color: #ee4500; padding: 3px; line-height: 1; right: 5px; color: white; font-weight: 800">
                        -40% sur les frais                        
                    </span>
                    <a class="dropdown-toggle" data-toggle="dropdown">
                        Recommandé
                        <span>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                                <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
                            </svg>
                        </span>
                    </a>
                    <ul class="dropdown-menu" role="menu" style="margin-top: 5px; margin-left: 15px">
                        <li><a href="https://zenmarket.jp/fr/marketplace.aspx" style="margin-left: 10px">ZenPlus<span class="label label-default" style="margin-left: 10px;"></span></a></li>
                        <li><a href="https://zenmarket.jp/fr/minne.aspx" style="margin-left: 10px">MINNE<span class="label label-default" style="margin-left: 10px;"></span></a></li>
                        <li><a href="https://zenmarket.jp/fr/bookoff.aspx" style="margin-left: 10px">BOOKOFF<span class="label label-default" style="margin-left: 10px;"></span></a></li>                        
                        <li><a href="https://zenmarket.jp/fr/shop.aspx?id=shop.lashinbang.com" style="margin-left: 10px">LASHINBANG<span class="label label-default" style="margin-left: 10px;"></span></a></li>
                        <li><a href="https://zenmarket.jp/fr/shop.aspx?id=mediaworld.co.jp" style="margin-left: 10px">MEDIAWORLD<span class="label label-default" style="margin-left: 10px;"></span></a></li>
                        <li><a href="https://zenmarket.jp/fr/shop.aspx?id=spinns.jp" style="margin-left: 10px">SPINNS<span class="label label-default" style="margin-left: 10px;"></span></a></li>
                        <li><a href="https://zenmarket.jp/fr/shop.aspx?id=wormtokyo.com" style="margin-left: 10px">WORM TOKYO<span class="label label-default" style="margin-left: 10px;"></span></a></li>
                        <li><a href="https://zenmarket.jp/fr/shop.aspx?id=dreamvs.jp" style="margin-left: 10px">Yumetenbo<span class="label label-default" style="margin-left: 10px;"></span></a></li>
                        <li><a href="https://zenmarket.jp/fr/shop.aspx?id=store.shimamura.co.jp" style="margin-left: 10px">Shimamura Music<span class="label label-default" style="margin-left: 10px;"></span></a></li>
                        <li><a href="https://zenmarket.jp/fr/digimart.aspx" style="margin-left: 10px">Digimart<span class="label label-default" style="margin-left: 10px;"></span></a></li>
                        <li><a href="https://zenmarket.jp/fr/shop.aspx?id=www.j-guitar.com" style="margin-left: 10px">J-GUITAR<span class="label label-default" style="margin-left: 10px;"></span></a></li>
                        <li><a href="https://zenmarket.jp/fr/shop.aspx?id=shop.kurosawagakki.com" style="margin-left: 10px">Kurosawa Gakki<span class="label label-default" style="margin-left: 10px;"></span></a></li>
                        <li><a href="https://zenmarket.jp/fr/shop.aspx?id=cameranonaniwa.jp" style="margin-left: 10px">NANIWA CAMERA<span class="label label-default" style="margin-left: 10px;"></span></a></li>                        
                        <li><a href="https://zenmarket.jp/fr/recommendedshops.aspx" style="margin-left: 10px">VOIR PLUS<span class="label label-default" style="margin-left: 10px;"></span></a></li>
                    </ul>
                </div>

                <div id="header1_othershops_tab" style="position: relative; display: inline-block; padding-left: 15px; cursor: pointer">
                    <a class="dropdown-toggle" data-toggle="dropdown">
                        Autres boutiques
                        <span>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                                <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
                            </svg>
                        </span>
                    </a>
                    <ul class="dropdown-menu" role="menu" style="margin-top: 5px">
                        <li><a href="https://zenmarket.jp/fr/yshopping.aspx" style="margin-left: 10px; text-transform:unset;">JDirectItems Shopping<span class="label label-default" style="margin-left: 10px;"></span></a></li>
                        <li><a href="https://zenmarket.jp/fr/shop.aspx?id=www.suruga-ya.jp" style="margin-left: 10px">SURUGA-YA<span class="label label-default" style="margin-left: 10px;"></span></a></li>
                        <li><a href="https://zenmarket.jp/fr/shop.aspx?id=booth.pm" style="margin-left: 10px">BOOTH<span class="label label-default" style="margin-left: 10px;"></span></a></li>
                        <li><a href="https://zenmarket.jp/fr/shop.aspx?id=magi.camp" style="margin-left: 10px">MAGI<span class="label label-default" style="margin-left: 10px;"></span></a></li>
                        
                        <li><a href="https://zenmarket.jp/fr/othershops.aspx" style="margin-left: 10px">Voir plus<span class="label label-default" style="margin-left: 10px;"></span></a></li>
                    </ul>
                </div>

                

                
            </div>
        </div>
    </div>
</div>
<div class="clearfix"></div>


<div id="header1_rakutenBanner" class="header-banner" style="position: relative;" data-banner-type="rakuten" data-content-hash="e0a88b72adb1ef9bd01f974be7d9a3beff65e00ea5b664bf4f06fd4b3ff83173">
    <div style="background-color: #ff7c7c; color:#FFF; padding: 5px 10px; text-align: center; text-transform: uppercase; font-weight: 600; font-size: clamp(1rem, 3vw, 1.4rem);"> <div class="container" style="padding: 0;display: flex; justify-content: space-between;"> <span style="letter-spacing: 0.7px; flex: 0 0 69%; display:flex; flex-direction: column; justify-content: center; margin-right: 1em; ">-15% sur le 1er article Rakuten du 8/9 0h00 au 28/9 à 23h59</span>        <a style="background: #D53939; color:#FFF!important; text-decoration: none; font-family: Roboto, sans-serif; border-radius: 2px; padding: 0.6rem 1.5rem; font-weight: 700; font-size: clamp(0.9rem, 2.7vw, 1.3rem); display: flex; flex-direction: column; justify-content: center; min-width: 20%;" href="https://zenmarket.jp/rakuten.aspx?topbanner=fr">VOIR PLUS</a>    </div></div>
</div>







<div id="header1_advBanner" class="header-banner" style="position: relative;" data-banner-type="adv" data-content-hash="bf41452f71a32875f574726e72879b12ba43158d8cac312bb4d2c382e7b65ec5">
    <div style="background-color: #F2AA02; color:#FFFFFF; padding: 5px 10px; text-align: center; text-transform: uppercase; font-weight: 600; font-size: clamp(1rem, 3vw, 1.4rem);"> <div class="container" style="padding: 0;display: flex; justify-content: space-between;"> <span style="letter-spacing: 0.7px; flex: 0 0 69%; display:flex; flex-direction: column; justify-content: center; margin-right: 1em; ">Jusqu'à 3000 yens de réduction Membres du programme de fidélité uniquement</span>        <a style="background: #FF6702; color:#FFFFFF!important; text-decoration: none; font-family: Roboto, sans-serif; border-radius: 2px; padding: 0.6rem 1.5rem; font-weight: 700; font-size: clamp(0.9rem, 2.7vw, 1.3rem); display: flex; flex-direction: column; justify-content: center; min-width: 20%;" href="https://discover-fr.zenmarket.jp/campagnes/shipping/silverweek?topbanner=fr">Détails Détails</a>    </div></div>
</div>



<script type="text/javascript">$(function () { $('#adviceModal').on('show.bs.modal', function (e) { var captchaImage = $("#header1_ZenCaptcha_captchaImage"); $(captchaImage).attr("src", $(captchaImage).data("src")); }); });</script>

<div class="modal" id="adviceModal" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <span class="modal-icon glyphicon glyphicon-search"></span>
                <h4 class="modal-title">Vous ne trouvez pas votre article ?</h4>
                <span class="modal-subtitle">Nous pouvons vous aider à le trouver</span>
            </div>
            <div class="modal-body">
                <p>Vous pouvez utiliser la barre de recherche en haut pour explorer les produits en sélectionnant un magasin ou une catégorie dans les menus déroulants. Vous pouvez également y coller l'URL d'une page d'un article. Vous ne trouvez pas ce que vous cherchez ? Décrivez votre article ci-dessous et nous vous répondrons rapidement !</p>
                <hr>

                
                <div class="row">
                    <div class="col-md-12" style="padding-top: 10px;">
                        <label for="colortabs_tbxComments" class="control-label">Description</label>
                        <textarea name="header1$tbxComments" rows="5" cols="20" id="header1_tbxComments" class="form-control" placeholder="Merci de fournir un maximum de détails sur votre article, comme la marque, le modèle, la couleur, la taille, etc." style=""></textarea>
                    </div>
                </div>
                
            </div>
            <div class="modal-footer">
                <input type="button" name="header1$btnSend" value="Soumettre" onclick="javascript:__doPostBack('header1$btnSend','')" id="header1_btnSend" class="btn btn-info btn-lg" style="">
            </div>
        </div>
    </div>
</div>

<div class="modal" id="addProductModal" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <span class="modal-icon icon-t-shirt"></span>
                <h4 class="modal-title">Ajouter un produit ou une enchère</h4>
                <span class="modal-subtitle">Vous pouvez ajouter un article au panier à partir de son URL. Si vous souhaitez plusieurs types, veuillez les ajouter séparément dans votre panier.</span>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label class="control-label">URL</label>
                    <input name="header1$tbxAddProductURL" type="text" id="header1_tbxAddProductURL" class="form-control input-lg add-product-url" placeholder="Lien URL de l'article" style="">
                </div>

                <div class="form-group">
                    <label class="control-label">Description</label>
                    <input type="hidden" name="header1$hfProductComments" id="hfProductComments" style="">
                    <textarea id="tbAddProductComments" class="form-control" rows="5" placeholder="" style=""></textarea>
                </div>

                <div class="form-group">
                    <label class="control-label" style="padding-right: 10px;">Quantité</label>
                    <input name="header1$tbxAddProductQty" type="text" value="1" id="header1_tbxAddProductQty" class="form-control numbers-only" placeholder="" style="width: 50px; vertical-align: baseline; display: inline;">
                </div>
            </div>
            <div class="modal-footer">
                <input type="hidden" name="header1$hfAddViaZenLink" id="header1_hfAddViaZenLink" style="">
                <input type="button" name="header1$btnAddProductToCart" value="Ajouter" onclick="escapeData(); this.disabled = true;__doPostBack('header1$btnAddProductToCart','')" id="header1_btnAddProductToCart" class="btn btn-info btn-lg" style="">
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    $(function () {
        $(".filter-currency").text(" (" + $("#hfSiteCurrency").val().toUpperCase() + ")");
        $('#currencySelect').on('select2:select', function (e) {
            const selectedOption = $(e.params.data.element);
            const currency = selectedOption.data("currency");
            const rate = selectedOption.data('rate');
            const currencySymbol = selectedOption.data('currencysymbol');

            $(".filter-currency").text(" (" + currency.toUpperCase() + ")");
            $(".amount").each(function () { $(this).text($(this).data(currency)); });
            $("#lblCurrentCurency").text(selectedOption.text());
            $("#lblMobileMenuCurrentCurency").text(selectedOption.text());
            $(".header-exchange-rate").text(rate);
            $("#hfSiteCurrency").val(currency);
            $.cookie("currency", currency, { expires: 100, path: '/' });

            $(".currencySymbol").text(currencySymbol);
        });

        $(".change-currency").click(function () {
            var currency = $(this).data("currency");
            $(".filter-currency").text(" (" + currency.toUpperCase() + ")");
            $(".amount").each(function () { $(this).text($(this).data(currency)); });
            $("#lblCurrentCurency").text($(this).text());
            $("#lblMobileMenuCurrentCurency").text($(this).text());
            $(".header-exchange-rate").text($(this).data("rate"));
            $("#hfSiteCurrency").val(currency);
            $.cookie("currency", currency, { expires: 100, path: '/' });

            $(".currencySymbol").text($(this).data("currencysymbol"));
        });

        if ($.cookie("zlang") == "ar") {
            $(".default-categories,.default-shops,.languages-dropdown").addClass("pull-right");
        }

        $(".close-header-banner").click(function () {
            var cookieKey = "hdnbanners" + $(this).parents(".header-banner").data("banner-type");

            if ($.cookie(cookieKey)) {
                $.cookie(cookieKey, $.cookie(cookieKey) + ";" + $(this).parents(".header-banner").data("content-hash"), { expires: 30, path: '/' });
            } else {
                $.cookie(cookieKey, $(this).parents(".header-banner").data("content-hash"), { expires: 30, path: '/' });
            }

            $(this).parents(".header-banner").hide();
        });
    });
</script>

<script type="text/javascript">
    var authServiceURL = '../api/auth/login';

    function signin() {
        $("#btnLogin").button('loading');
        $.ajax({
            type: "POST",
            url: authServiceURL,
            data: JSON.stringify({ 'UserName': $("#tbxLogin").val(), 'Password': $("#tbxPassword").val() }),
            contentType: "application/json",
            dataType: "json",
            cache: false,
            success: function (data) {
                if (data.IsUserLoggedIn == false) {
                    $("#invalidpassword").removeClass("hidden");
                    $("#btnLogin").button('reset');
                } else {
                    $("#invalidpassword").addClass("hidden");
                    location.reload(true);
                }
            }
        }).fail(function () {
            $("#btnLogin").button('reset');
        });
    }

    $(".enter-key").keydown(function (e) {
        var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
        if (key == 13) {
            signin();
            return false;
        }
    });

    $("#btnLogin").click(function () {
        signin();
    });    
</script>
<div class="modal" id="rememberModal" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <span class="modal-icon glyphicon glyphicon glyphicon-question-sign"></span>
                <h4 class="modal-title">Mot de passe oublié?</h4>
                <span class="modal-subtitle">Entrez adresse email que vous avez utilisé pour l'inscription.</span>
            </div>
            <div class="modal-body">
                <label>E-mail:</label>
                <input name="header1$tbxRememberLogin" type="text" id="header1_tbxRememberLogin" class="form-control input-lg enter-key" data-onenter="&lt;%=btnRemember.UniqueID%&gt;" placeholder="Entrer votre e-mail" style="">
                <div style="margin-top: 5px;">Vous recevrez un message avec des instructions sur la façon de restaurer votre mot de passe. (Vérifiez le dossier spam si vous ne recevez pas le message.)</div>
            </div>
            <div class="modal-footer" style="margin-top: 0;">
                <input type="button" name="header1$btnRemember" value="Soumettre" onclick="javascript:__doPostBack('header1$btnRemember','')" id="header1_btnRemember" class="btn btn-info btn-lg" style="">
            </div>
        </div>
    </div>
</div>

<div class="modal" style="text-align: left;" id="zenlinkAddedModal" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <span class="modal-icon glyphicon glyphicon-ok" style="font-size: 50px; padding-bottom: 25px;"></span>
                <h4 class="modal-title">Product was added to Shopping Cart</h4>
                <span class="modal-subtitle">You used ZenMarket service to add product from seller site</span>
            </div>
            <div class="modal-body">
                <span id="header1_zenlinkAddedModalDetails"></span>
            </div>
            <div class="modal-footer">
                <a href="default.aspx" class="btn btn-default btn-lg pull-right">Proceed to Checkout</a>
            </div>
        </div>
    </div>
</div>


<div id="addExistingProductModal" class="modal" style="text-align: left;" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <span class="modal-icon glyphicon glyphicon glyphicon-question-sign"></span>
                <h4 class="modal-title">Article dupliqué détecté</h4>
                <span class="modal-subtitle">Cet article est déjà dans votre panier. Veuillez choisir l'une des actions suivantes.</span>
            </div>
            <div class="modal-body">
                <input type="hidden" name="header1$AddExistingProductModal$hfAddExistingProductModalQty" id="hfAddExistingProductModalQty" style="">
                <input type="hidden" name="header1$AddExistingProductModal$hfAddExistingProductModalShop" id="hfAddExistingProductModalShop" style="">
                <input type="hidden" name="header1$AddExistingProductModal$hfAddExistingProductModalShopCode" id="hfAddExistingProductModalShopCode" style="">
                <input type="hidden" name="header1$AddExistingProductModal$hfAddExistingProductModalProductCode" id="hfAddExistingProductModalProductCode" style="">
                <input type="hidden" name="header1$AddExistingProductModal$hfAddExistingProductModalSelectedVariations" id="hfAddExistingProductModalSelectedVariations" style="">
                <input type="hidden" name="header1$AddExistingProductModal$hfAddExistingProductModalDescription" id="hfAddExistingProductModalDescription" style="">
                <div class="row" style="padding-bottom: 10px; margin-bottom: 10px; border-bottom: 1px solid #f2f2f2;">
                    <div class="col-md-8">                        
                        <div style="padding-bottom: 10px;">
                            <span style="text-transform: uppercase; vertical-align: middle; font-weight: 800;">Augmenter la quantité de l'article</span>                            
                        </div>
                        <div>Je veux ajouter des exemplaires du même article.</div>
                    </div>
                    <div class="col-md-4">
                        <input type="submit" name="header1$AddExistingProductModal$btnIncreaseQty" value="Augmenter quantité" id="btnIncreaseQty" class="btn btn-info" style="width: 100%;">
                    </div>
                </div>
                <div class="row" style="padding-bottom: 10px; margin-bottom: 10px; border-bottom: 1px solid #f2f2f2;">
                    <div class="col-md-8">
                        <div style="padding-bottom: 10px;">
                            <span style="text-transform: uppercase; vertical-align: middle; font-weight: 800;">Annuler l'action</span>
                        </div>

                        <div>C'est une erreur. Je ne souhaite pas ajouter l'article en double au panier.</div>
                    </div>
                    <div class="col-md-4">
                        <input type="submit" name="header1$AddExistingProductModal$btnCancel" value="Annuler" id="btnCancel" class="btn btn-info" data-dismiss="modal" style="width: 100%;">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



<div id="gdpr-terms-warning" style="position: fixed; bottom: 0px; z-index: 1001; background: rgb(51, 51, 51); width: 100%; color: rgb(238, 238, 238); padding: 10px; vertical-align: middle;">
    <div class="row">
<div class="col-md-10" style="padding-top: 6px;">En utilisant notre site web, vous acceptez notre <a href="https://zenmarket.jp/en/privacy.aspx">politique de confidentialité et de cookies.</a>.</div>
<div class="col-md-2"><a id="accept-gdpr-terms" class="btn btn-default" style="display: inline-block; margin-left: 10px; margin-right: 20px;" href="#">Accepter</a> <a id="decline-gdpr-terms" class="btn btn-default" style="display: inline-block;" href="#">Décliner</a> </div>
</div>    
</div>

<script type="text/javascript">
    $(function () {
        if ($.cookie("gdprterms") != 1) {
            $("#gdpr-terms-warning").show();
        }

        $("#decline-gdpr-terms").click(function () {
            $.cookie('gdprterms', 1, { expires: 1365 });
            $.cookie('gdprconsent', 0, { expires: 1365 });
            $("#gdpr-terms-warning").hide();
            return false;
        });
    });
</script>



<script src="../js/banner_countdown.js?v1.2" type="text/javascript"></script>



        <input type="hidden" name="hfUserName" id="hfUserName" value="gaetan.blery@gmail.com" style="">
        <input type="hidden" name="responseParcelID" id="responseParcelID" style="">
        <input type="hidden" name="hfChangeParcelID" id="hfChangeParcelID" style="">
        <input type="hidden" name="hfChangeParcelCountry" id="hfChangeParcelCountry" style="">
        <input type="hidden" name="hfChangeParcelItemsCount" id="hfChangeParcelItemsCount" style="">
        <input type="hidden" name="payParcelID" id="payParcelID" style="">
        <input type="hidden" name="hfEditParcelId" id="hfEditParcelId" style="">
        <input type="hidden" name="hfParcelUpdatedDeclaredPrices" id="hfParcelUpdatedDeclaredPrices" style="">
        <input type="hidden" name="hfNewShippingServiceForRP" id="hfNewShippingServiceForRP" style="">
        <input type="hidden" name="hfActionRequiredParcelId" id="hfActionRequiredParcelId" style="">
        <input type="hidden" name="hfja" id="hfja" value="1" style="">
        <input type="hidden" name="hfdf" id="hfdf" style="">
        <input type="hidden" name="hfCarrierLimits" id="hfCarrierLimits" style="">
        <input type="hidden" name="hfStateRequiredForCountries" id="hfStateRequiredForCountries" value="[&quot;BR&quot;,&quot;CL&quot;,&quot;CO&quot;,&quot;PE&quot;]" style="">
        <input type="hidden" name="hfTaxNumberRequiredCountriesAndCarriers" id="hfTaxNumberRequiredCountriesAndCarriers" value="{&quot;AR&quot;:[&quot;UPS&quot;,&quot;FEDEX&quot;,&quot;DHL&quot;],&quot;BR&quot;:[&quot;EMS&quot;,&quot;AVIA_SM&quot;,&quot;AVIA&quot;,&quot;UPS&quot;,&quot;FEDEX&quot;,&quot;DHL&quot;,&quot;Surface&quot;],&quot;CL&quot;:[&quot;UPS&quot;],&quot;ID&quot;:[&quot;EMS&quot;,&quot;AVIA_SM&quot;,&quot;AVIA&quot;,&quot;Surface&quot;],&quot;IL&quot;:[&quot;EMS&quot;],&quot;KR&quot;:[&quot;UPS&quot;,&quot;FEDEX&quot;,&quot;DHL&quot;,&quot;ECMS_EXPRESS&quot;],&quot;MX&quot;:[&quot;EMS&quot;,&quot;AVIA_SM&quot;,&quot;AVIA&quot;,&quot;UPS&quot;,&quot;FEDEX&quot;,&quot;DHL&quot;,&quot;FEDEX_FICP&quot;]}" style="">
        <input type="hidden" name="hfDeliveryPointId" id="hfDeliveryPointId" style="">
        <input type="hidden" name="hfTrMaxPriceLimitInJpy" id="hfTrMaxPriceLimitInJpy" value="5179" style="">
        <input type="hidden" name="hfEcmsPickDeliveryPointInfo" id="hfEcmsPickDeliveryPointInfo" style="">
        <input type="hidden" name="hfChangeParcelShippingService" id="hfChangeParcelShippingService" style="">

        <div id="main" class="container shadow-t" style="padding-top: 0px; padding-bottom: 0px;">
            <div class="row profile-content-container" style="overflow: hidden;">
                <div class="col-sm-2 profile-menu">
                    
<div class="profile-nav hidden-xs">
    <a href="default.aspx" id="DashboardMenu" class="menu-item"><span id="ico1" class="icon-megaphone hidden-xs"></span><span class="pm-title">Général</span></a>
    <a href="messages.aspx" id="MessagesMenu" class="menu-item"><span id="ico2" class="icon-bubble hidden-xs"><span class="badge counter-icon">1</span></span><span class="pm-title">Messages<span class="badge counter-icon-2 hidden-lg hidden-md hidden-sm">1</span></span> </a>
    <a href="actions.aspx" id="ActionsMenu" class="menu-item"><span id="ico3" class="glyphicon icon-alarm hidden-xs"><span class="badge counter-icon">20</span></span><span class="pm-title">Événements<span class="badge counter-icon-2 hidden-lg hidden-md hidden-sm">20</span></span></a>
    <a href="watchlist.aspx" id="WatchListMenu" class="menu-item"><svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" style="width: 36px;" class="hidden-xs"><path d="M32 48L15 58l4-19L5 26l19-2 8-18 8 18 19 2-14 13 4 19-17-10z" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke="#ffffff" fill="none" data-name="layer1" stroke-linejoin="round"></path></svg><span class="pm-title">Ma Liste</span></a>
    <a href="parcel.aspx" id="ParcelMenu" class="menu-item selected"><span id="ico4" class="icon-truck hidden-xs"></span><span class="pm-title">Colis</span></a>
    
    <a href="payments.aspx" id="PaymentsMenu" class="menu-item"><span id="ico5" class="icon-wallet hidden-xs"></span><span class="pm-title">Paiements</span></a>    
    <a href="levels.aspx" id="TiersMenu" class="menu-item"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="hidden-xs" style="width: 36px;"><path data-name="layer2" d="M32 38v10c0 4-6 8-10 8h-3a3 3 0 0 0-3 3v3h32v-3a3 3 0 0 0-3-3h-3c-4 0-10-4-10-8" fill="none" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke="#ffffff" stroke-width="4"></path><path data-name="layer1" d="M48 22.1a16 16 0 0 1-32 0V2h32z" fill="none" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke="#ffffff" stroke-width="4"></path><path data-name="layer1" d="M16 7.9c-6-1.1-10 2.5-10 8S10.5 28 16 28h1.1M48 7.9c6-1.1 10 2.5 10 8S53.5 28 48 28h-1.1" fill="none" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke="#ffffff" stroke-width="4"></path></svg><span class="pm-title">Niveaux</span></a>
    <a href="settings.aspx" id="SettingsMenu" class="menu-item"><span id="ico6" class="icon-settings hidden-xs"></span><span class="pm-title">Paramètres</span></a>
</div>







                </div>

                <div class="col-sm-10 profile-content">
                    <div class="row profile-header-container" style="padding-bottom: 10px;">
                        <div class="col-sm-5">
                            <div id="pagetitle" class="profile-header hidden-xs">Colis</div>
                        </div>
                        <div class="col-sm-7">
                            <div class="row equal">
                                <div class="col-sm-4" style="padding-left: 0; padding-right: 0px;">
                                    
                                </div>
                                <div class="col-sm-4" style="padding-left: 0; padding-right: 0px;">
                                    <a class="menu-item add-funds" href="addfunds.aspx" style="height: 100%; font-size: 18px; background-color: #277ea9;">
                                        <span style="color: #fff; font-size: 12px; padding-bottom: 2px; text-transform: uppercase;" class="pm-title">Votre solde</span>
                                        <span id="lblUserBalance" style="font-weight: 300; font-size: 18px;">¥4,122</span>
                                        
                                        <div style="font-size: 10px; padding-top: 2px;">
                                            <span id="lblUserPoints">Vous avez ¥500 ZenPoints</span>
                                        </div>
                                        
                                    </a>
                                </div>
                                <div class="col-sm-4" style="padding-left: 0; padding-right: 0;">
                                    <a class="menu-item add-funds-button" href="addfunds.aspx" style="font-size: 18px;">
                                        <p style="position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%); width: 100%;">Ajouter des fonds</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    <div id="allParcels">
                        <div id="parcels-container" class="row parcels">
                            <div class="col-md-12" style="padding-bottom: 20px;">
                                <a href="?action=new" class="btn-create-new-parcel clear-margin">Créer un nouveau colis</a>
                            </div>
                        </div>

                        <div id="filter" class="row" style="padding: 10px 0; border-bottom: 1px solid #f3f3f3; margin-bottom: 10px;">
                            <div class="col-md-12" style="text-align: right;">
                                <span style="font-size: 12px; padding: 3px 5px; line-height: 1.42857143; display: inline-block; border: 0.8px solid#fff; text-transform: uppercase; font-weight: 600; color: #aaa;">Filtre</span>
                                <a href="parcel.aspx" id="filter0" class="btn btn-outline btn-state-0">Tous</a>
                                <a href="?state=1" id="filter1" class="btn btn-outline btn-state-1">En préparation</a>
                                <a href="?state=2" id="filter2" class="btn btn-outline btn-state-2">En attente de paiement</a>
                                <a href="?state=3" id="filter3" class="btn btn-outline btn-state-3">En attente de collecte</a>
                                <a href="?state=5" id="filter5" class="btn btn-outline btn-state-5 btn-state-active">Envoyé</a>
                            </div>
                        </div>

                        
                                <div class="parcel">
                                    <div class="row equal">
                                        <div class="col-md-3">
                                            <div class="parcel-control-menu parcel-state-5" style="height: 100%;">
                                                <div style="font-size: 28px; text-align: center; padding-bottom: 15px;">
                                                    #2
                                                </div>
                                                <div style="text-align: center; font-weight: bold; font-size: 16px; text-transform: uppercase">Envoyé</div>
                                                <div style="font-size: 12px; text-align: center;">08/09/2025</div>


                                                <div style="text-align: center; padding-top: 15px; margin-top: 15px;">
                                                    
                                                    <a href="#" data-parcelid="2190567" class="btn btn-sm btn-parcel-control show-content">Contenu du colis</a>
                                                    <a href="support.aspx" target="_blank" class="btn btn-sm btn-parcel-control" style="margin-top: 10px;">Signaler un problème</a>

                                                    <a id="rptParcels_ctl00_lbDownloadParcelContent" class="btn btn-sm btn-parcel-control" href="javascript:__doPostBack('rptParcels$ctl00$lbDownloadParcelContent','')" style="margin-top: 10px;">Télécharger le contenu</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-9">
                                            <div style="padding: 10px;">
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div style="font-size: 28px; padding-bottom: 5px; font-weight: 600; padding-top: 10px; text-transform: uppercase;">
                                                            <span style="color: #1F9EC7">
                                                                Surface
                                                            </span>

                                                            <div style="font-size: 16px; margin-top: 5px; font-weight: 600; float: right; padding-right: 10px;">
                                                                <span class="label label-default label-parcel" style="display: none">Pas d'étiquettes de prix</span>
                                                                <span class="label label-default label-parcel" style="display: inline">Pas de logo</span>
                                                                <span class="label tp label-default label-parcel" style="display: none" data-trigger="click" data-placement="bottom" data-content="" data-original-title="" title="">Demande [?]</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-4" style="line-height: 24px;">
                                                        <div style="padding: 10px 0;">
                                                            <div id="rptParcels_ctl00_measureRow">
                                                                
                                                                        <span style="font-weight: 600;">50cm × 42cm × 28cm - 6610g</span>
                                                                    

                                                            </div>

                                                            <div>
                                                                <span style="vertical-align: middle;"><a href="https://trackings.post.japanpost.jp/services/srv/search/direct?searchKind=S004&amp;locale=en&amp;reqCodeNo1=CN111089355JP" target="_blank">CN111089355JP</a></span>
                                                            </div>

                                                            <div>
                                                                
                                                                        <span style="vertical-align: middle;"><a href="https://docs.zen.group/shipping-labels/e8eecdaa7a5f4322977ee82764f02e7d/CN111089355JP.pdf" target="_blank">Document d'expédition</a></span>
                                                                    
                                                            </div>

                                                            <div>
                                                                <span style="vertical-align: middle;">
                                                                    <a id="rptParcels_ctl00_lbDownloadDoc" href="javascript:__doPostBack('rptParcels$ctl00$lbDownloadDoc','')">Facture</a>
                                                                </span>
                                                                <br>
                                                            </div>

                                                            <div>
                                                                <span style="text-transform: uppercase; font-weight: 600;">Envoi:</span>
                                                                ¥6,100
                                                            </div>

                                                            <div>
                                                                <span style="text-transform: uppercase; font-weight: 600; text-decoration: underline;"><a href="https://zenmarket.jp/shipping.aspx#insurance" target="_blank">Assuré</a></span>
                                                            </div>

                                                            

                                                            
                                                        </div>
                                                    </div>
                                                    <div class="col-md-8" style="line-height: 24px;">
                                                        <div style="padding: 10px 0;">

                                                            <div style="padding-bottom: 10px;">
                                                                France, Six-Fours-Les-Plages, 215c avenue bucarin, 83140 <br> Gaetan BLERY <br> +33673369270
                                                            </div>

                                                            <div>
                                                                <span style="text-transform: uppercase; font-weight: 600;">Stratégie pour le colis:</span>
                                                                Diviser les articles en deux ou plusieurs colis
                                                            </div>

                                                            <div>
                                                                <span style="text-transform: uppercase; font-weight: 600;">Prix des articles dans le colis:</span>
                                                                ¥33,168
                                                            </div>

                                                            

                                                            
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-12">
                                                        
                                                        <div id="rptParcels_ctl00_responseRow" style="padding-top: 20px; margin-top: 10px; border-top: 1px solid #eee">
                                                            <div class="row">
                                                                <div class="col-md-12 text-right">
                                                                    <a href="#responseWindow" role="button" data-toggle="modal" data-parcelid="2190567" class="btn btn-info btn-lg parcel-response-button">Laisser des commentaires</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            
                    </div>



                    
                </div>
            </div>
        </div>
        <div class="modal" id="declarationPriceWindow" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <span class="modal-icon icon-megaphone"></span>
                        <h4 class="modal-title">Valeur totale déclarée des articles dans le colis</h4>
                        <span class="modal-subtitle">La valeur du colis ne peut pas être déclarée en dessous de 10% du total du prix réel.</span>
                    </div>
                    <div class="modal-body">
                        <table style="width: 100%; text-align: center">
                            <thead>
                                <tr>
                                    <th style="text-align: center">Total prix réel </th>
                                    <th style="text-align: center">Total valeur déclarée</th>
                                </tr>
                            </thead>

                            <tbody><tr>
                                <td class="total-price"></td>
                                <td>
                                    <input class="form-control numeric total-declared-price" style="display: inline; width: 150px;">
                                </td>
                            </tr>
                        </tbody></table>
                        <div class="items-table-container">
                            <hr>
                            <table>
                                <thead>
                                    <tr>
                                        <th style="text-transform: uppercase; font-weight: 600; padding: 12px 8px;"></th>
                                        <th style="text-transform: uppercase; font-weight: 600; padding: 12px 8px; width: 50px;">Qté</th>
                                        <th style="text-transform: uppercase; font-weight: 600; padding: 12px 8px;">Prix réel à l'unité</th>
                                        <th style="text-transform: uppercase; font-weight: 600; padding: 12px 8px;">Prix déclaré à l'unité</th>
                                    </tr>
                                </thead>
                                <tbody class="items-rows-container">
                                </tbody>
                            </table>
                            <hr>
                        </div>
                        <div style="display: none;" class="bs-callout bs-callout-warning declared-price-of-product-more-than-real-error"></div>
                        <div style="display: none;" class="bs-callout bs-callout-warning declared-price-more-than-real-error">Total valeur déclaré ne peut pas être supérieur au Total prix réel</div>
                        <div style="display: none;" class="bs-callout bs-callout-warning declared-price-zero-or-negative-error">Veuillez entrer un nombre supérieur à 0.</div>
                        <div style="display: none;" class="bs-callout bs-callout-warning declared-price-limit-error">La valeur du colis ne peut pas être déclarée en dessous de 10% du total du prix réel.</div>
                        <div style="display: none;" class="bs-callout bs-callout-info declared-price-was-changed-info">La valeur totale déclarée a été ajustée automatiquement.</div>

                        <div class="form-group">
                            <div class="controls">
                                <div>
                                    <input id="cbxAgree" type="checkbox" name="cbxAgree" checked="checked" style="">&nbsp;<span id="lblAgreeText">Je suis en accord avec ce qui suit : <br>
- L'assurance postale couvre uniquement la valeur déclarée. Dans le cas où vous avez réduit la valeur, vous devez payer une partie de la valeur non déclarée comme votre assurance ZenMarket pour obtenir une protection. <br>
- Aussi, si vous changez la valeur déclarée, nous ne serons pas en mesure de fournir de preuve si le colis est retenu par le service des douanes.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a href="#" id="btnSaveDP" class="btn btn-info btn-lg">Sauver</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="changeDP" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <span class="modal-icon icon-megaphone"></span>
                        <h4 class="modal-title">Valeur totale déclarée des articles dans le colis</h4>
                        <span class="modal-subtitle">La valeur du colis ne peut pas être déclarée en dessous de 10% du total du prix réel.</span>
                    </div>
                    <div class="modal-body">
                        <div class="loading">
                            <img src="../img/loading.gif" style="position: absolute; left: 50%; margin-left: -16px;">
                        </div>
                        <div class="modal-prices-content">
                            <table style="width: 100%; text-align: center">
                                <thead>
                                    <tr>
                                        <th style="text-align: center">Total prix réel </th>
                                        <th style="text-align: center">Total valeur déclarée</th>
                                    </tr>
                                </thead>

                                <tbody><tr>
                                    <td class="total-price"></td>
                                    <td>
                                        <input class="form-control numeric total-declared-price" style="display: inline; width: 150px;">
                                    </td>
                                </tr>
                            </tbody></table>
                            <div class="items-table-container">
                                <hr>
                                <table>
                                    <thead>
                                        <tr>
                                            <th style="text-transform: uppercase; font-weight: 600; padding: 12px 8px;"></th>
                                            <th style="text-transform: uppercase; font-weight: 600; padding: 12px 8px; width: 50px;">Qté</th>
                                            <th style="text-transform: uppercase; font-weight: 600; padding: 12px 8px;">Prix réel à l'unité</th>
                                            <th style="text-transform: uppercase; font-weight: 600; padding: 12px 8px;">Prix déclaré à l'unité</th>
                                        </tr>
                                    </thead>
                                    <tbody class="items-rows-container">
                                    </tbody>
                                </table>
                                <hr>
                            </div>
                            <div style="display: none;" class="bs-callout bs-callout-warning declared-price-of-product-more-than-real-error"></div>
                            <div style="display: none;" class="bs-callout bs-callout-warning declared-price-more-than-real-error">Total valeur déclaré ne peut pas être supérieur au Total prix réel</div>
                            <div style="display: none;" class="bs-callout bs-callout-warning declared-price-zero-or-negative-error">Veuillez entrer un nombre supérieur à 0.</div>
                            <div style="display: none;" class="bs-callout bs-callout-warning declared-price-limit-error">La valeur du colis ne peut pas être déclarée en dessous de 10% du total du prix réel.</div>
                            <div style="display: none;" class="bs-callout bs-callout-info declared-price-was-changed-info">La valeur totale déclarée a été ajustée automatiquement.</div>
                            <div class="form-group">
                                <div class="controls">
                                    <div>
                                        <input id="cbxcdpAgrement" type="checkbox" name="cbxcdpAgrement" checked="checked" style="">&nbsp;<span id="lblAgreeText1">Je suis en accord avec ce qui suit : <br>
- L'assurance postale couvre uniquement la valeur déclarée. Dans le cas où vous avez réduit la valeur, vous devez payer une partie de la valeur non déclarée comme votre assurance ZenMarket pour obtenir une protection. <br>
- Aussi, si vous changez la valeur déclarée, nous ne serons pas en mesure de fournir de preuve si le colis est retenu par le service des douanes.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <input type="button" name="btnChangeDeclarePrice" value="Sauver" onclick="javascript: if(!validateAndPrepareToSaveDeclaredPrice($('#changeDP'))) return;__doPostBack('btnChangeDeclarePrice','')" id="btnChangeDeclarePrice" class="btn btn-info btn-lg" style="">
                    </div>
                </div>
            </div>
        </div>

        <script id="itemdeclaredpricetmpl" type="text/x-dot-template">
            <tr>
              <td style="padding:8px;"><a href='{{=it.ProductURL}}' target="_blank">{{=it.ProductName}}</a> ({{=it.WareHouseID}})</td>
              <td style="padding:8px; text-align: center;">{{=it.Qty}}</td>
              <td style="padding:8px;">{{=it.Price}}</td>
              <td style="padding:8px;">
                {{? it.DeclaredPrice}}
                    <input class="form-control numeric product-declared-price" style="display: inline; width: 70px;" data-ptype='{{=it.PType}}' data-itemid='{{=it.ItemId}}' data-qty='{{=it.Qty}}' data-price='{{=it.PricePerItem}}' value='{{=it.DeclaredPrice}}' />
                {{??}}
                    <input class="form-control numeric product-declared-price" style="display: inline; width: 70px;" data-ptype='{{=it.PType}}' data-itemid='{{=it.ItemId}}' data-qty='{{=it.Qty}}' data-price='{{=it.PricePerItem}}'/>
                {{?}}                
              </td>
            </tr>           
        </script>

        <div class="modal" id="modalSpecialRequest" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <span class="modal-icon icon-megaphone"></span>
                        <h4 class="modal-title">Envoyer une demande concernant le colis</h4>
                        <span class="modal-subtitle">Avant de soumettre votre demande, vérifiez les restrictions concernant l'<a href="https://zenmarket.jp/shipping.aspx#packing-request" target="_blank">emballage</a> et la <a href="https://zenmarket.jp/shipping.aspx#item-declaration" target="_blank">déclaration</a>.<br><br>

Des <a href="https://zenmarket.jp/fees.aspx" target="_blank">frais supplémentaires</a> s'appliquent pour <b>l'ajout, le retrait, la destruction d'articles ou la demande de photos</b>, car ces actions nécessitent l'annulation du colis.<br><br>

En soumettant votre demande, vous acceptez ces frais, qui seront appliqués une fois l'opération terminée.</span>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label class="control-label">Demande:</label>
                            <div class="controls">
                                <textarea name="tbxSpecialRequest" rows="5" cols="20" id="tbxSpecialRequest" class="form-control" style="width: 100%;"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <input type="submit" name="btnCreateSpecialRequest" value="Soumettre" id="btnCreateSpecialRequest" class="btn btn-info btn-lg" style="">
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="modalPackingOptions" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <span class="modal-icon icon-settings"></span>
                        <h4 class="modal-title">Changer les options du colis</h4>
                        <span class="modal-subtitle">Veuillez sélectionner les options que vous souhaitez modifier.</span>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <div>
                                <label style="font-weight: 600; text-transform: uppercase;">
                                    <span style="padding-right: 5px;"><input id="cbxEditFrame" type="checkbox" name="cbxEditFrame" style=""></span>
                                    Renfort supplémentaire - ¥1,000 (<a href="#" tabindex="0" role="button" data-toggle="popover" data-trigger="focus" data-placement="top" title="" data-content="We safely pack all parcels, however, for large or heavy (more than 10 kg. or 60 cm.) boxes we recommend to use our reinforcement service.
Also we can handle special requests for packing of fragile items or other items that require careful attention and extra time (LP players,fragile car models etc.).

Les articles neufs/scellés ne sont pas ouverts par nos équipes sans autorisation. Si vous souhaitez protéger les articles de l’intérieur, veuillez faire une demande spéciale lors de la création de votre colis.
" data-original-title="Reinforcement or special requests">détails</a>)</label>
                            </div>
                            <div style="padding-top: 10px;">
                                <label style="font-weight: 600; text-transform: uppercase;">
                                    <span style="padding-right: 5px;"><input id="cbxEditNoStickers" type="checkbox" name="cbxEditNoStickers" style=""></span>
                                    Pas de branding ZenMarket (autocollants avec logo, flyers)</label>
                            </div>
                            <div style="padding-top: 10px;">
                                <label style="font-weight: 600; text-transform: uppercase;">
                                    <span style="padding-right: 5px;"><input id="cbxEditRemovePriceTags" type="checkbox" name="cbxEditRemovePriceTags" style=""></span>
                                    Retirez les étiquettes/prix et les factures des vendeurs</label>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <input type="submit" name="btnSavePackingOptions" value="Sauver" id="btnSavePackingOptions" class="btn btn-info btn-lg" style="">
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="editParcelModal" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header" style="padding: 15px 15px 50px;">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>

                        <h4 class="modal-title" style="text-transform: uppercase; padding-top: 40px;">Modifier / Annuler le colis #<span id="modifyParcelId"></span></h4>
                        <span class="modal-subtitle">Que souhaitez vous faire ?</span>
                    </div>
                    <div class="modal-body" style="background-color: #fff;">
                        <div id="edit-delivery-method-row" class="row" style="padding-bottom: 10px; margin-bottom: 10px; border-bottom: 1px solid #f2f2f2;">
                            <div class="col-sm-8">
                                <div style="padding-bottom: 10px;">
                                    <span style="text-transform: uppercase; vertical-align: middle; font-weight: 800;">Modifier la méthode de livraison</span>
                                    <span class="label label-success" style="margin-left: 10px;">Gratuit</span>
                                </div>
                                <div>*Certains articles peuvent ne pas convenir à un envoi avec une autre méthode d'envoi</div>
                            </div>
                            <div class="col-sm-4">
                                <input type="submit" name="btnChangeShippingService" value="Modifier" id="btnChangeShippingService" class="btn btn-info" style="width: 100%;">
                                <div class="pay_again_alert">Les frais d'envoi seront de nouveau nécessaires. </div>
                            </div>
                        </div>
                        <div id="edit-address-row" class="row" style="padding-bottom: 10px; margin-bottom: 10px; border-bottom: 1px solid #f2f2f2;">
                            <div class="col-sm-8">
                                <div style="padding-bottom: 10px;">
                                    <span style="text-transform: uppercase; vertical-align: middle; font-weight: 800;">Modifier l'adresse de livraison</span>
                                    <span class="label label-success" style="margin-left: 10px;">Gratuit</span>
                                </div>
                                <div></div>
                            </div>
                            <div class="col-sm-4">
                                <input type="submit" name="btnChangeShippingAddress" value="Modifier" id="btnChangeShippingAddress" class="btn btn-info" style="width: 100%;">
                                
                            </div>
                        </div>
                        <div id="edit-declare-price-row" class="row" style="padding-bottom: 10px; margin-bottom: 10px; border-bottom: 1px solid #f2f2f2;">
                            <div class="col-sm-8">
                                <div style="padding-bottom: 10px;">
                                    <span style="text-transform: uppercase; vertical-align: middle; font-weight: 800;">Modifier la valeur du colis</span>
                                    <span class="label label-success" style="margin-left: 10px;">Gratuit</span>
                                </div>
                                <div></div>
                            </div>
                            <div class="col-sm-4">
                                <a href="#" id="change-dp" role="button" style="width: 100%;" class="btn btn-info">Modifier</a>
                                <div class="pay_again_alert">Les frais d'envoi seront de nouveau nécessaires. </div>
                            </div>
                        </div>

                        <div id="edit-packing-options-row" class="row" style="padding-bottom: 10px; margin-bottom: 10px; border-bottom: 1px solid #f2f2f2;">
                            <div class="col-sm-8">
                                <div style="padding-bottom: 10px;">
                                    <span style="text-transform: uppercase; vertical-align: middle; font-weight: 800;">Changer les options du colis</span>
                                    <span class="label label-success" style="margin-left: 10px;">Gratuit</span>
                                </div>
                                <div>Vous pouvez choisir ou annuler les options "pas d'étiquettes de prix ni de factures" ou "pas de branding ZenMarket".</div>
                            </div>
                            <div class="col-sm-4">
                                <input type="submit" name="btnChangePackingOptions" value="Modifier" id="btnChangePackingOptions" class="btn btn-info" style="width: 100%;">
                            </div>
                        </div>

                        <div class="row" style="padding-bottom: 10px; margin-bottom: 10px; border-bottom: 1px solid #f2f2f2;">
                            <div class="col-sm-8">
                                <div style="padding-bottom: 10px;">
                                    <span style="text-transform: uppercase; vertical-align: middle; font-weight: 800;">Envoyer une demande concernant le colis</span>
                                </div>
                                <div>*Selon le moment où elle est faite, il est possible que nous ne puissions pas répondre à cette demande.</div>
                            </div>
                            <div class="col-sm-4">
                                <a href="#modalSpecialRequest" onclick="javascript:$('#editParcelModal').modal('hide');" role="button" data-toggle="modal" style="width: 100%;" class="btn btn-info">Soumettre</a>
                            </div>
                        </div>

                        <div id="edit-cancel-parcel-row" class="row" style="padding-bottom: 10px; margin-bottom: 10px;">
                            <div class="col-sm-8">
                                <div style="padding-bottom: 10px;">
                                    <span style="text-transform: uppercase; vertical-align: middle; font-weight: 800;">Annuler le colis</span>
                                    <span id="parcel-cancel-free-label" class="label label-success" style="margin-left: 10px;">Gratuit</span>
                                    <span id="parcel-cancel-not-free-label" class="label label-warning" style="margin-left: 10px;"></span>
                                </div>
                                <div>Votre colis peut être annulé gratuitement dans les 10 premières minutes après que sa création.<br>* Les articles seront remis dans l'entrepôt.
<br>*Regrouper, réemballer, ajouter ou enlever des articles est considéré comme une annulation de colis.</div>
                            </div>
                            <div class="col-sm-4">
                                <a href="#" id="cancelParcel1" role="button" style="width: 100%;" class="btn btn-info">Annuler le colis</a>
                                <a href="#" id="cancelParcel2" role="button" data-toggle="modal" style="width: 100%;" class="btn btn-info">Annuler le colis</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="fixLogisticsRestrictionsModal" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header" style="padding: 15px 15px 50px;">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <span class="modal-icon icon-alarm"></span>
                        <h4 class="modal-title" style="text-transform: uppercase; padding-top: 40px;">Action Requise</h4>
                        <span class="modal-subtitle">En raison de restrictions logistiques, vous devez choisir une des options suivantes</span>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label>Sélectionner une action</label>
                            <select name="ddlLogisticsRestrictionActions" id="ddlLogisticsRestrictionActions" class="form-control flr-modal-select-no-search select2-hidden-accessible" tabindex="-1" aria-hidden="true">
	<option value="0">Changer de méthode de paiement et préparer le colis</option>
	<option value="1">Retirer les articles empêchant l'envoi et préparer le colis</option>
	<option value="2">Annuler le colis</option>

</select><span class="select2 select2-container select2-container--default" dir="ltr" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-ddlLogisticsRestrictionActions-container"><span class="select2-selection__rendered" id="select2-ddlLogisticsRestrictionActions-container" title="Changer de méthode de paiement et préparer le colis">Changer de méthode de paiement et préparer le colis</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                        </div>
                        <div id="logistics-restriction-action-change-shipping-service" style="display: none;">
                            <div class="form-group">
                                <label>Sélectionner une méthode d'envoi</label>
                                <select name="ddlLogisticsRestrictionChangeShippingService" id="ddlLogisticsRestrictionChangeShippingService" class="form-control" style="width: 100%;">

</select>
                            </div>
                            
                            <div id="logisticsRestrictionsDeliveryPointsPanel" class="form-group" style="display: none;">
                                <label></label>
                                <select name="ddlLogisticsRestrictionChangeDeliveryPoint" id="ddlLogisticsRestrictionChangeDeliveryPoint" class="form-control flr-modal-select-with-search select2-hidden-accessible" data-placeholder="Veuillez sélectionner un point de livraison." style="width: 100%;" tabindex="-1" aria-hidden="true">

</select><span class="select2 select2-container select2-container--default" dir="ltr" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-ddlLogisticsRestrictionChangeDeliveryPoint-container"><span class="select2-selection__rendered" id="select2-ddlLogisticsRestrictionChangeDeliveryPoint-container"><span class="select2-selection__placeholder notranslate">Veuillez sélectionner un point de livraison.</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                            </div>
                            <div id="logisticsRestrictionChangeFullNameLocalLanguagePanel" class="form-group" style="display: none;">
                                <label>Nom complet en chinois (tel qu’indiqué sur la pièce d’identité)</label>
                                <input name="tbxLogisticsRestrictionChangeFullNameLocalLanguage" type="text" maxlength="35" id="tbxLogisticsRestrictionChangeFullNameLocalLanguage" class="form-control" dir="ltr" style="">
                            </div>
                            <div id="logisticsRestrictionChangeEcmsPickDeliveryPointPanel" class="form-group" style="display: none;">
                                <input type="hidden" name="hfLogisticsRestrictionChangeEcmsPickDeliveryPointInfo" id="hfLogisticsRestrictionChangeEcmsPickDeliveryPointInfo" style="">
                                <label style="display: block;">Point de livraison&nbsp;(<a href="javascript:void(0);" id="logisticsRestrictionChangeEcmsPickDeliveryPointLink">Changer</a>)</label>
                                <br>
                                <span id="logisticsRestrictionChangeSelectedEcmsPickDeliveryPoint"></span><a href="javascript:void(0);" id="logisticsRestrictionRemoveEcmsPickDeliveryPointLink">Retirer</a>
                            </div>
                            <div id="logisticsRestrictionsStatePanel" class="form-group">
                                <label for="tbxLogisticsRestrictionChangeShippingServiceState">Département (si nécessaire)</label>
                                <br>
                                <input name="tbxLogisticsRestrictionChangeShippingServiceState" type="text" id="tbxLogisticsRestrictionChangeShippingServiceState" class="form-control" dir="ltr" style="">
                            </div>
                            <div id="logisticsRestrictionsTaxNumberPanel" class="form-group" style="display: none;">
                                <label id="logisticsRestrictionsTaxNumberLabel" for="tbxLogisticsRestrictionChangeShippingServiceTaxNumber"></label>
                                <br>
                                <input name="tbxLogisticsRestrictionChangeShippingServiceTaxNumber" type="text" id="tbxLogisticsRestrictionChangeShippingServiceTaxNumber" class="form-control" dir="ltr" style="">
                            </div>

                            <div id="logisticsRestrictionEcmsPickChangeWarning" class="alert alert-warning" style="margin: 3px; display: none;"><b>IMPORTANT</b>: Veuillez vérifier votre adresse de livraison après avoir cliqué sur « Modifier »</div>

                            <div style="text-align: right">
                                <input type="submit" name="btnLogisticsRestrictionsChangeShippingSerivce" value="Envoyer" id="btnLogisticsRestrictionsChangeShippingSerivce" class="btn btn-info btn-lg" style="">
                            </div>
                        </div>
                        <div id="logistics-restriction-action-remove-products" style="display: none;">
                            <label>Les articles qui vont être retirés du colis</label>
                            <table id="logistics-restriction-removed-products-list">
                                
                            </table>
                            <div style="text-align: right">
                                <input type="submit" name="btnLogisticsRestrictionsRemoveRestrictedProducts" value="Retirer des articles" id="btnLogisticsRestrictionsRemoveRestrictedProducts" class="btn btn-info btn-lg" style="">
                            </div>
                        </div>
                        <div id="logistics-restriction-action-cancel-parcel" style="display: none;">
                            <div style="text-align: right">
                                <input type="submit" name="btnLogisticsRestrictionsCancelParcel" value="Annuler le colis" id="btnLogisticsRestrictionsCancelParcel" class="btn btn-info btn-lg" style="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="responseWindow" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <span class="modal-icon icon-megaphone"></span>
                        <h4 class="modal-title">Commentaire Public</h4>
                        <span class="modal-subtitle">Vous pouvez laisser vos commentaires sur notre service ici. Un seul commentaire par commande est autorisé.</span>
                    </div>
                    <div class="modal-body">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="control-label">Note (5 - très bien, ..., 1 - mauvais):</label>
                                <select name="ddlMark" id="ddlMark" class="form-control">
	<option value="5">★★★★★ (5/5)</option>
	<option value="4">★★★★☆ (4/5)</option>
	<option value="3">★★★☆☆ (3/5)</option>
	<option value="2">★★☆☆☆ (2/5)</option>
	<option value="1">★☆☆☆☆ (1/5)</option>

</select>
                            </div>

                            <div class="form-group">
                                <label class="control-label">Nom ou surnom (Optionnel)</label>
                                <div class="controls">
                                    <input name="tbxResponseName" type="text" value="Gaetan BLERY" id="tbxResponseName" class="form-control" style="">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="control-label">Commentaires:</label>
                                <div class="controls">
                                    <textarea name="tbxResponse" rows="5" cols="20" id="tbxResponse" class="form-control" style=""></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <input type="button" name="btnSendResponse" value="Laisser un commentaire" onclick="javascript:__doPostBack('btnSendResponse','')" id="btnSendResponse" class="btn btn-info btn-lg" style="">
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="modal3dpartyFeedback" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header" style="padding: 30px 25px 30px; text-transform: uppercase;">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <span class="modal-icon icon-megaphone"></span>
                        <h4 class="modal-title">Commentaire Public</h4>

                    </div>
                    <div class="modal-body" style="background: none">
                        <p>Les commentaires positifs de clients formidables comme vous, aident les autres utilisateurs à nous faire confiance en nos services.</p><p>Nous aimerions que vous partagiez votre <a href="https://fr.trustpilot.com/review/zenmarket.jp" target="_blank">expérience sur Trustpilot</a>. Vous pouvez copier et coller le commentaire que vous avez écrit ou en écrire une nouvelle, un grand merci d'avance!</p>
                        <div id="userFeedbackText" class="bs-callout bs-callout-info"></div>
                    </div>
                    <div class="modal-footer" style="background: none">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="addressWindow" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <span class="modal-icon icon-location"></span>
                        <h4 class="modal-title">Adresses enregistrées</h4>
                        <span class="modal-subtitle">Vous pouvez choisir l'une des adresses que vous avez utilisées lors d'un envoi précédent</span>
                    </div>
                    <div class="modal-body">
                        <table class="table table-stripped">
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>


        <div class="modal" id="showContent" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header" style="padding: 30px 25px 30px; text-transform: uppercase;">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h4 class="modal-title">Contenu du colis</h4>
                    </div>
                    <div class="modal-body" style="background: none">
                        <table id="parcelcontent-container" class="table table-striped tablesaw tablesaw-stack" data-tablesaw-mode="stack">
                            <thead>
                                <tr>
                                    <th style="text-transform: uppercase; font-weight: 600; padding: 12px 8px;">Nom de l'article</th>
                                    <th style="text-transform: uppercase; font-weight: 600; padding: 12px 8px;">Qté</th>
                                    <th style="text-transform: uppercase; font-weight: 600; padding: 12px 8px;">Prix</th>
                                    <th style="text-transform: uppercase; font-weight: 600; padding: 12px 8px;">T.V.A</th>
                                    <th style="text-transform: uppercase; font-weight: 600; padding: 12px 8px;">Prix d'envoi local</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr id="loading">
                                    <td colspan="7" style="text-align: center;">
                                        <img src="../img/loading.gif"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer" style="background: none">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
                    </div>
                </div>
            </div>
        </div>

        <script id="prcontenttmpl" type="text/x-dot-template">
            <tr class='pcc-content'>
              <td style="padding:8px;"><b class="tablesaw-cell-label">Nom de l'article</b><a href='{{=it.ProductURL}}' target="_blank">{{=it.ProductName}}</a> ({{=it.WareHouseID}})</td>
              <td style="padding:8px;"><b class="tablesaw-cell-label">Qté</b>{{=it.Qty}}</td>
              <td style="padding:8px;"><b class="tablesaw-cell-label">Prix</b>{{=it.Price}}</td>
              <td style="padding:8px;"><b class="tablesaw-cell-label">T.V.A</b>{{=it.Tax}}</td>              
              {{? it.SellerItemsCount!=0}}
              <td style="padding:8px;" rowspan='{{=it.SellerItemsCount}}'><b class="tablesaw-cell-label">Prix d'envoi local</b>{{=it.LocalShippingPrice}}</td>
              {{?}}
              <td style="padding:8px;">
                {{? it.PhotoURL != "" }}                                
                <a target="_blank" style="text-decoration: none; font-size: 14px;" href='{{=it.PhotoURL}}'><span class="glyphicon glyphicon-camera"></span>&nbsp;Photo</a>                
                {{?}}
              </td>
            </tr>           
        </script>

        <input type="hidden" name="AliPayPaymentControl$hfAmount" id="AliPayPaymentControl_hfAmount" style="">
<div id="AliPayPaymentControl_AliPayPaymentsModal" class="modal" style="text-align: left;" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <span class="modal-icon icon-wallet"></span>
                <h4 class="modal-title">Ajouter de l'argent à votre compte</h4>
                <span class="modal-subtitle"></span>
            </div>
            <div class="modal-body">
                <label class="form-label" style="padding-bottom: 0px; font-weight: 400;">Vous avez des fonds insuffisants en dépôt. Avant de procéder au paiement, veuillez ajouter de l'argent.</label>
                <div style="padding-top: 15px; font-weight:600; font-size:16px;">
                    Montant qui sera facturé: <span id="AliPayPaymentControl_divTotalAmount"></span>
                </div>
            </div>
            <div class="modal-footer">
                <a href="addfunds.aspx" class="pull-left" style="font-size: 14px; line-height: 45px;">Méthodes de paiement alternatives</a>
                <a id="AliPayPaymentControl_aAliPayPaymentButton" class="btn btn-primary btn-lg pull-right" href="javascript:__doPostBack('AliPayPaymentControl$aAliPayPaymentButton','')">Continuer vers AliPay &amp; rarr;</a>
            </div>
        </div>
    </div>
</div>
        

<div class="modal" id="notEnFundsWindow" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <span class="modal-icon icon-wallet"></span>
                <h4 class="modal-title">Nous vous prions de faire un dépôt</h4>
                <span class="modal-subtitle">Vous avez des fonds insuffisants en dépôt. Avant de procéder au paiement, veuillez ajouter de l'argent.</span>
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-default btn-lg" style="float:left" data-dismiss="modal">Annuler</button>
               <a id="NotEnoughFundsModal_addfunds" class="btn btn-warning btn-lg" href="javascript:__doPostBack('NotEnoughFundsModal$addfunds','')">Ajouter de l'argent</a>                
            </div>

        </div>
    </div>
</div>



        <input type="hidden" name="hfImportTax" id="hfImportTax" value="0" style="">
        <input type="hidden" name="hfConfirmPaymentTotal" id="hfConfirmPaymentTotal" value="0" style="">
        <input type="hidden" name="hfInsurePaymentTotal" id="hfInsurePaymentTotal" value="0" style="">
        <input type="hidden" name="hfPointAvailableTotal" id="hfPointAvailableTotal" value="0" style="">
        <input type="hidden" name="hfPromoCodeId" id="hfPromoCodeId" value="0" style="">
        <input type="hidden" name="hfConfirmPaymentWithDiscountTotal" id="hfConfirmPaymentWithDiscountTotal" value="0" style="">
        <input type="hidden" name="hfPromotionAmount" id="hfPromotionAmount" value="0" style="">
        <input type="hidden" name="hfDdpTax" id="hfDdpTax" value="0" style="">

        <div class="modal" id="confirmPaymentModal" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <span class="modal-icon icon-bubble"></span>
                        <h4 class="modal-title">Confirmation de paiement</h4>
                        <span class="modal-subtitle">Veuillez confirmer que vous souhaitez payer le montant mentionné.</span>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <div id="importTaxContainer" style="border-bottom: 1px #eee solid; padding-bottom: 10px; margin-bottom: 10px;">
                                <label style="font-weight: 600">
                                    <input id="cbxPayImportTax" type="checkbox" name="cbxPayImportTax" style="">&nbsp;Votre colis est soumis à une pré-facturation obligatoire des taxes (voir les détails <a href="https://zenmarket.jp/shipping.aspx#Customs%20duties" target="_blank">ici</a>). Si vous bénéficiez d’un statut d’exonération fiscale dans votre juridiction ou si votre colis contient des articles à taux réduit, vous pouvez désactiver cette option en décochant la case.</label>
                            </div>
                            <div id="ddpContainer" style="border-bottom: 1px #eee solid; padding-bottom: 10px; margin-bottom: 10px;">
                                <label style="font-weight: 600">
                                    <input id="cbxPayDDP" type="checkbox" name="cbxPayDDP" style="">&nbsp;<strong>Prépaiement des droits de livraison (taxe d'importation et douane) via <a href="https://zenmarket.jp/en/shipping.aspx#us-prepaid-import-tax" target="_blank">DDP</a>.</strong><br>Évitez les frais supplémentaires ou les retards à la livraison en payant les droits à l'avance.</label>
                            </div>
                            <label style="display: block; font-weight: 600">Code coupon (optionnel) :</label>
                            <input name="tbxPromoCode" type="text" id="tbxPromoCode" class="form-control" dir="ltr" style="width: 200px;">
                            <div id="promo-warning" class="alert alert-warning" style="display: none; margin-top: 10px"></div>
                            <div id="promo-success" class="alert alert-success" style="display: none; margin-top: 10px">Code promotionnel enregistré avec succès</div>
                        </div>
                        <div class="form-group" style="margin: 0;">
                            <span id="lblTaxIncludedToShippingPrice" style="font-size: 12px;"></span>
                        </div>
                        <div class="form-group" style="margin: 0;">
                            <span style="font-weight: 600;">Points utilisés:</span>
                            <span id="lblPointsPaymentAmount"></span>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a id="confirmPayment" style="padding: 0;" class="btn btn-warning btn-lg" href="javascript:__doPostBack('confirmPayment','')">
                            <div style="font-size: 24px; font-weight: 700;">
                                <table>
                                    <tbody><tr>
                                        <td style="padding: 5px 15px;">
                                            <span id="lblPaymentAmountConfirm"></span>
                                        </td>
                                        <td style="font-size: 16px; font-weight: 400; padding: 5px 15px; border-left: 1px dashed #f5c786; text-transform: uppercase;">Payer</td>
                                    </tr>
                                </tbody></table>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="confirmCancelParcelModal" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <span class="modal-icon icon-bubble"></span>
                        <h4 class="modal-title">Êtes-vous sûr de vouloir annuler votre colis?</h4>
                        <span class="modal-subtitle"></span>
                    </div>
                    <div class="modal-body">
                        <p>! Les frais d'annulation de colis sont de <span id="parcel_cancel_fee">1000</span> yens.</p>
<p>! Les frais de renforcement ne sont pas remboursés.</p>
<p>! Pour modifier la méthode d'expédition, ou l'adresse de livraison, veuillez utiliser le bouton "Retour" ci-dessous ou nous contacter.</p>
                    </div>
                    <div class="modal-footer">
                        <a href="#editParcelModal" onclick="javascript:$('#confirmCancelParcelModal').modal('hide');" role="button" data-toggle="modal" class="btn btn-lg btn-default">Retour</a>
                        <input type="submit" name="btnCancelParcel" value="Annuler le colis" id="btnCancelParcel" class="btn btn-info btn-lg" style="">
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="changeSSModal" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <span class="modal-icon icon-truck"></span>
                        <h4 class="modal-title">Modifier la méthode d'envoi</h4>
                        <span class="modal-subtitle">Une fois la méthode d'envoi modifiée, veuillez attendre un nouveau devis.</span>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label style="display: block;" for="ddlChangeSSModalShippingService"><strong>La méthode d'expédition</strong> <br>(peut être changée avant que les frais d'expédition ne soient payés)</label>
                            <select name="ddlChangeSSModalShippingService" id="ddlChangeSSModalShippingService" class="form-control" style="width: 100%;">
	<option value="EMS">EMS (∼7 jours)</option>
	<option value="AVIA">Airmail, colis standard (∼2 semaines)</option>
	<option value="SAL">SAL, colis standard (sera envoyé après la fin des restrictions dues au COVID19)</option>

</select>
                        </div>
                        <div id="changeSSModalPackingStrategy" class="form-group">
                            <label for="ddlChangeSSModalPackingStrategy">Si mon colis est trop lourd/grand pour la méthode d'expédition choisie.
</label>
                            <br>
                            <select name="ddlChangeSSModalPackingStrategy" id="ddlChangeSSModalPackingStrategy" class="form-control css-modal-ddl-packing-strategy" style="width: 100%;">
	<option selected="selected" value="3" style="display: none;">Laissez des articles dans l'entrepôt</option>
	<option value="1">Utiliser la méthode d'expédition SUIVANTE</option>
	<option value="2" style="display: none;">Diviser les articles en deux ou plusieurs colis</option>

</select>
                        </div>
                        <div id="changeSSModalDeliveryPoints" class="form-group" style="display: none;">
                            <label style="display: block;" for="ddlChangeSSModalDeliveryPoints">Point de livraison</label>
                            <select name="ddlChangeSSModalDeliveryPoints" id="ddlChangeSSModalDeliveryPoints" class="form-control css-modal-select-with-search select2-hidden-accessible" data-placeholder="Veuillez sélectionner un point de livraison." style="width: 100%;" tabindex="-1" aria-hidden="true">

</select><span class="select2 select2-container select2-container--default" dir="ltr" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-ddlChangeSSModalDeliveryPoints-container"><span class="select2-selection__rendered" id="select2-ddlChangeSSModalDeliveryPoints-container"><span class="select2-selection__placeholder notranslate">Veuillez sélectionner un point de livraison.</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                        </div>
                        <div id="changeSSModalFullNameLocalLanguagePanel" class="form-group" style="display: none;">
                            <label>Nom complet en chinois (tel qu’indiqué sur la pièce d’identité)</label>
                            <input name="tbxChangeSSModalFullNameLocalLanguage" type="text" maxlength="35" id="tbxChangeSSModalFullNameLocalLanguage" class="form-control" dir="ltr" style="">
                        </div>
                        <div id="changeSSModalEcmsPickDeliveryPointPanel" class="form-group" style="display: none;">
                            <input type="hidden" name="hfChangeSSModalEcmsPickDeliveryPointInfo" id="hfChangeSSModalEcmsPickDeliveryPointInfo" style="">
                            <label style="display: block;">Point de livraison&nbsp;(<a href="javascript:void(0);" id="changeSSModalEcmsPickDeliveryPointLink">Changer</a>)</label>
                            <span id="changeSSModalSelectedEcmsPickDeliveryPoint"></span><a href="javascript:void(0);" id="changeSSRemoveEcmsPickDeliveryPointLink">Retirer</a>
                        </div>
                        <div id="setState" class="form-group">
                            <label for="tbxSetState">Département (si nécessaire)</label>
                            <br>
                            <input name="tbxSetState" type="text" id="tbxSetState" class="form-control" dir="ltr" style="">
                        </div>
                        <div id="setTaxNumber" class="form-group" style="display: none;">
                            <label id="setTaxNumberLabel" for="tbxSetTaxNumber"></label>
                            <br>
                            <input name="tbxSetTaxNumber" type="text" id="tbxSetTaxNumber" class="form-control" dir="ltr" style="">
                        </div>
                        <div id="changeSSModalEcmsPickChangeWarning" class="alert alert-warning" style="margin: 3px; display: none;"><b>IMPORTANT</b>: Veuillez vérifier votre adresse de livraison après avoir cliqué sur « Modifier »</div>
                    </div>
                    <div class="modal-footer">
                        <input type="button" name="btnSaveSS" value="Modifier" onclick="javascript: if(!$('#mainform').valid()) return;__doPostBack('btnSaveSS','')" id="btnSaveSS" class="btn btn-info btn-lg" style="">
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="changeShippingAddress" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <span class="modal-icon icon-location"></span>
                        <h4 class="modal-title">Modifier l'adresse de livraison</h4>
                    </div>
                    <div class="modal-body">
                        <input type="hidden" name="changeShippingAddressShippingService" id="changeShippingAddressShippingService" style="">
                        <div id="existingAddressBlock" class="form-group">
                            <label style="display: block;" for="tbxChangeCountry">Adresses enregistrées</label>
                            <select name="ddlChangeShippingAddressExistingAddresses" id="ddlChangeShippingAddressExistingAddresses" class="form-control csa-modal-select-with-search select2-hidden-accessible" tabindex="-1" aria-hidden="true">

</select><span class="select2 select2-container select2-container--default" dir="ltr" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-ddlChangeShippingAddressExistingAddresses-container"><span class="select2-selection__rendered" id="select2-ddlChangeShippingAddressExistingAddresses-container"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                        </div>
                        <div class="form-group">
                            <label style="display: block;" for="tbxChangeCountry">Pays</label>
                            <input name="tbxChangeCountry" type="text" readonly="readonly" id="tbxChangeCountry" class="form-control" style="">
                        </div>
                        <div class="form-group">
                            <label style="display: block;" for="tbxChangeName">Nom et prénom</label>
                            <input name="tbxChangeName" type="text" id="tbxChangeName" class="form-control" dir="ltr" style="">
                        </div>
                        <div class="form-group">
                            <label style="display: block;" for="tbxChangePhone">Téléphone</label>
                            <input name="tbxChangePhone" type="text" id="tbxChangePhone" class="form-control" dir="ltr" style="">
                        </div>

                        <div class="form-group">
                            <label style="display: block;" for="tbxChangePostCode">Code postal</label>
                            <input name="tbxChangePostCode" type="text" maxlength="9" id="tbxChangePostCode" class="form-control" dir="ltr" style="">
                        </div>

                        <div class="form-group">
                            <label style="display: block;" for="tbxChangeState">Département (si nécessaire)</label>
                            <input name="tbxChangeState" type="text" maxlength="24" id="tbxChangeState" class="form-control" dir="ltr" style="">
                            
                        </div>

                        <div class="form-group">
                            <label style="display: block;" for="tbxChangeCity">Ville</label>
                            <input name="tbxChangeCity" type="text" maxlength="30" id="tbxChangeCity" class="form-control" dir="ltr" style="">
                        </div>

                        <div class="form-group">
                            <label style="display: block;" for="tbxChangeStreet">Rue, appartement, bâtiment etc.</label>
                            <input name="tbxChangeStreet" type="text" maxlength="70" id="tbxChangeStreet" class="form-control" dir="ltr" style="">
                        </div>

                        <div class="form-group">
                            <label id="changeTaxNumberLabel" for="tbxChangeTaxNumber"></label>
                            <input name="tbxChangeTaxNumber" type="text" maxlength="70" id="tbxChangeTaxNumber" class="form-control" dir="ltr" style="">
                        </div>

                        <div class="form-group">
                            <label style="display: block;" for="tbxChangeEmail">EMAIL</label>
                            <input name="tbxChangeEmail" type="text" id="tbxChangeEmail" class="form-control" dir="ltr" style="">
                        </div>

                        <div id="changePassportDetailsContainer">
                            <div class="form-group">
                                <label style="display: block;" for="tbxChangePassportDetailsBirthDate">Date de naissance</label>
                                <input name="tbxChangePassportDetailsBirthDate" type="text" id="tbxChangePassportDetailsBirthDate" class="form-control" dir="ltr" style="">
                            </div>
                            <div class="form-group">
                                <label style="display: block;" for="tbxChangePassportDetailsSeries">Type de passeport</label>
                                <input name="tbxChangePassportDetailsSeries" type="text" id="tbxChangePassportDetailsSeries" class="form-control" dir="ltr" style="">
                            </div>
                            <div class="form-group">
                                <label style="display: block;" for="tbxChangePassportDetailsNumber">Numéro de passeport</label>
                                <input name="tbxChangePassportDetailsNumber" type="text" id="tbxChangePassportDetailsNumber" class="form-control" dir="ltr" style="">
                            </div>
                            <div class="form-group">
                                <label style="display: block;" for="tbxChangePassportDetailsIssueDate">Date de délivrance</label>
                                <input name="tbxChangePassportDetailsIssueDate" type="text" id="tbxChangePassportDetailsIssueDate" class="form-control" dir="ltr" style="">
                            </div>
                            <div class="form-group">
                                <label style="display: block;" for="tbxChangePassportDetailsIssuedBy">Pays de délivrance</label>
                                <input name="tbxChangePassportDetailsIssuedBy" type="text" id="tbxChangePassportDetailsIssuedBy" class="form-control" dir="ltr" style="">
                            </div>
                        </div>
                        <div id="changeFullNameLocalLanguageContainer" class="form-group">
                            <label>Nom complet en chinois (tel qu’indiqué sur la pièce d’identité)</label>
                            <input name="tbxChangeFullNameLocalLanguage" type="text" id="tbxChangeFullNameLocalLanguage" class="form-control" dir="ltr" style="">
                        </div>
                        <div id="changeSAEcmsPickDeliveryPointContainer" class="form-group">
                            <input type="hidden" name="hfChangeSAEcmsPickDeliveryPointInfo" id="hfChangeSAEcmsPickDeliveryPointInfo" style="">
                            <label style="display: block;">Point de livraison&nbsp;(<a href="javascript:void(0);" id="changeSAEcmsPickDeliveryPointLink">Changer</a>)</label>
                            <span id="changeSASelectedEcmsPickDeliveryPoint"></span><a href="javascript:void(0);" id="changeSARemoveEcmsPickDeliveryPointLink">Retirer</a>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <input type="button" name="btnSaveSA" value="Modifier" onclick="javascript: if(!$('#mainform').valid()) return;__doPostBack('btnSaveSA','')" id="btnSaveSA" class="btn btn-info btn-lg" style="">
                    </div>
                </div>
            </div>
        </div>

        <div class="modal" id="selectDeliveryPointModal" data-backdrop="true" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <span class="modal-icon icon-megaphone"></span>
                        <h4 class="modal-title">Point de livraison</h4>
                        <span class="modal-subtitle">Veuillez choisir le point de livraison</span>
                    </div>
                    <div class="modal-body">
                        <div style="margin-bottom: 5px;" id="deliveryPointsNotFoundContainer">
                            Il n'y a pas de points de livraison de disponible. Veuillez choisir un autre mode de livraison ou modifier votre adresse de livraison.
                        </div>
                        <div style="margin-bottom: 5px;" id="deliveryPointsContainer">
                            <label for="ddlDeliveryPoint" style="font-weight: 600;">Point de livraison</label>
                            <select id="ddlDeliveryPoint" name="ddlDeliveryPoint" class="form-control validate-select" data-placeholder="Veuillez sélectionner un point de livraison."></select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="selectDeliveryPointBtn" class="btn btn-primary btn-lg pull-right" data-dismiss="modal">Modifier</button>
                    </div>
                </div>
            </div>
        </div>

        

<style>
 [dir="rtl"] .footer-content > .col-sm-4,  [dir="rtl"] .footer-content .row > .col-xs-6 {
      float: right;
    }
</style>

<div id="footer">
    <div class="container">
        <div class="footer-content row">
            <div class="col-sm-4">
                <div class="widget">
                    <div class="row">
                        <div class="col-xs-6">
                            <h4>À propos de nous</h4>
                            <div class="footer-list lists-none">
                                <ul><li><a href="https://zenmarket.jp/fr/about.aspx">Profil de l'entreprise</a></li>
                                    <li><a href="https://zenmarket.jp/fr/advantages.aspx">Nos avantages</a></li>
                                    <li><a href="https://zenmarket.jp/fr/blog.aspx">Nouvelles et mises à jour</a></li>
									<li><a href="https://zenmarket.jp/fr/privacy.aspx">Politique de confidentialité - Utilisations des cookies</a></li>
                                    <li><a href="https://zenmarket.jp/fr/useragreement.aspx">Conditions générales d'utilisation</a></li>

 <li><a href="https://zenmarket.jp/fr/responsibility.aspx">Notre responsabilité</a></li> 
									<li><a href="https://zenmarket.jp/fr/responses.aspx">Témoignages des clients</a></li></ul>
                            </div>
                        </div>
                        <div class="col-xs-6">
                            <h4>Acheter au Japon</h4>
                            <div class="footer-list lists-none">
                                <ul>
                                    <li><a href="https://zenmarket.jp/fr/marketplace.aspx">ZenPlus</a></li>
<li><a href="https://zenmarket.jp/fr/s/zenpop">ZenPop</a></li>
<li><a href="https://zenmarket.jp/fr/rakuten.aspx">Rakuten.co.jp</a></li>
                                    <li><a href="https://zenmarket.jp/fr/amazon.aspx">Amazon.co.jp</a></li>                               
                                    <li><a href="https://zenmarket.jp/fr/yahoo.aspx">JDirectItems Auction</a></li> 
                                    <li><a href="https://zenmarket.jp/fr/yshopping.aspx">JDirectItems Shopping</a></li>
                                    <li><a href="https://zenmarket.jp/fr/rakuma.aspx">Rakuma</a></li>
                                    <li><a href="https://zenmarket.jp/fr/mercari.aspx">Mercari</a></li>
                                    <li><a href="https://zenmarket.jp/fr/recommendedshops.aspx">Boutiques recommandées</a></li>
				    <li><a href="https://zenmarket.jp/fr/calc.aspx">Simulateur de coût</a></li>
				    <li><a href="https://zenmarket.jp/fr/showcase/zenmarket-showcases-par-thematique">Voir les produits par catégorie</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="widget">
                    <div class="row">
                        <div class="col-xs-6">
                            <h4>Paiements et frais</h4>
                            <div class="footer-list lists-none">
                                <ul><li><a href="https://zenmarket.jp/fr/payment.aspx#Payments on ZenMarket">Paiements sur ZenMarket</a></li>
<li><a href="https://zenmarket.jp/fr/payment.aspx#How much shall I pay?">Combien ça coûte ?</a></li>
<li><a href="https://zenmarket.jp/fr/payment.aspx#Payment methods and fees">Modes de paiement et frais</a></li>
<li><a href="https://zenmarket.jp/fr/payment.aspx#Payment currency">Devises</a></li>
<li><a href="https://zenmarket.jp/fr/payment.aspx#Payment processing">Traitement des paiements</a></li>
<li><a href="https://zenmarket.jp/fr/payment.aspx#buying_on_credit">Puis-je acheter à crédit ?</a></li>
<li><a href="https://zenmarket.jp/fr/payment.aspx#how_to_use_coupon_code">Comment utiliser un code coupon ?</a></li>
<li><a href="https://zenmarket.jp/fr/fees.aspx#Fee summary">Récapitulatif des frais</a></li>
<li><a href="https://zenmarket.jp/fr/fees.aspx#ZenMarket service fee">Frais de service ZenMarket</a></li>
<li><a href="https://zenmarket.jp/fr/fees.aspx#Payment fee">Frais de paiement</a></li>
<li><a href="https://zenmarket.jp/fr/fees.aspx#Optional fees">Frais optionnels</a></li>
<li><a href="https://zenmarket.jp/fr/fees.aspx#Cancellation fees">Frais d'annulation</a></li></ul>
                            </div>
                        </div>
                        <div class="col-xs-6">
                            <h4>Envoi</h4>
                            <div class="footer-list lists-none">
                                <ul><li><a href="https://zenmarket.jp/fr/shipping.aspx#Shipping methods">Méthodes de livraison</a></li>
<li><a href="https://zenmarket.jp/fr/shipping.aspx#Shipping fees">Frais de port</a></li>
<li><a href="https://zenmarket.jp/fr/shipping.aspx#Size/weight limits">Limites de taille / poids</a></li>
<li><a href="https://zenmarket.jp/fr/shipping.aspx#prohibited_items">Objets interdits</a></li>
<li><a href="https://zenmarket.jp/fr/shipping.aspx#Customs duties">Frais de douanes</a></li>
<li><a href="https://zenmarket.jp/fr/shipping.aspx#When will you ship?">Quand livrerez-vous ?</a></li>
<li><a href="https://zenmarket.jp/fr/shipping.aspx#delivery_problems">Problèmes de livraison</a></li></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="widget">
                    <div class="row">
                        <div class="col-xs-6">
                            <h4>Aide</h4>
                            <div class="footer-list lists-none">
                                <ul><li><a href="https://zenmarket.jp/fr/help.aspx#feedback">Service client</a></li></ul>
                            </div>
                        </div>
                        <div class="col-xs-6" style="padding: 0;">
                            <h4 class="title">Restez connecté</h4>
                            <div class="social-media footer-list lists-none">
                                <ul>
                                    <style>
        .social-media ul li{
margin-bottom:5px }
.social-media ul{
height:auto;
}
        .social-media a.icon {
background-color: #666666 !important;
background-repeat: no-repeat !important;
background-position:7px 7px !important;
        }
        .social-media a.icon.lr {
background-position:4px 4px!important;
        }
         .social-media a.icon.ms {
background-position:5px 5px!important;
        }
        .social-media a.icon:hover{
background-color: #74acd5 !important;
        }
        /* remove RSS icon 
        .social-media ul li:nth-child(5) {
    display: none;
} */
    </style>
        
        <li><a href="https://twitter.com/zenmarket_fr" target="_blank" title="Twitter" style="background:url('https://static2.zenmarket.jp/upload/p1gdu559ej14fouunu79o9367114.png')" class="icon"><span>Twitter</span></a>
        </li>
        <li><a href="https://www.facebook.com/zenmarketfr" target="_blank" title="Facebook" style="background:url('https://static2.zenmarket.jp/upload/p1gdu54242lgn43k10nl3mrddtk.png')" class="icon"><span>Facebook</span></a>
        </li>
        <li><a href="https://www.instagram.com/zenmarket_fr/" target="_blank" title="Instagram" style="background:url('https://static2.zenmarket.jp/upload/p1gdu547ca3e8dlqg7nlvhh35m.png')" class="icon"><span>Instagram</span></a>
        </li>
        <li><a href="https://discord.com/invite/Vpm5FGTtz8" target="_blank" title="Discord" style="background:url('https://static2.zenmarket.jp/upload/p1gdu53tce1ev3o3d6cu1h9o1ktvi.png')" class="icon"><span>Discord</span></a>
        </li>
        <li><a href="https://www.youtube.com/channel/UCKWV4J2O_W7H3j93MqVqqtA" target="_blank" title="Youtube" style="background:url('https://static2.zenmarket.jp/upload/p1gdu56s6p1cepkqn15vd1siaake6.png')" class="icon"><span>YouTube</span></a>
        </li>
     <li><a href="https://www.pinterest.jp/zenmarket_fr/" target="_blank" title="Pinterest" style="background:url('https://static2.zenmarket.jp/upload/p1gs8ppp751b82v4b19mb1htn1q6c4.png')" class="icon"><span>Pinterest</span></a>
        </li>                                    
                                    <li><a href="https://zenmarket.jp/rss.ashx?lang=fr-FR" title="rss" class="icon rss"><span>rss</span></a></li>
                                </ul>
                            </div>
                            <div class="clearfix"></div>
                            <h4 class="title" style="padding-top:15px;">Langues</h4>
                             <div class="footer-list lists-none">
                                <ul><li><a href="https://zenmarket.jp/en/">English</a></li>
<li><a href="https://zenmarket.jp/ja/">日本語</a></li>
<li><a href="https://zenmarket.jp/ru/">Русский</a></li>
<li><a href="https://zenmarket.jp/ua/">Українська</a></li>
<li><a href="https://zenmarket.jp/cn/">简体中文</a></li>
<li><a href="https://zenmarket.jp/tw/">繁體中文</a></li>
<li><a href="https://zenmarket.jp/es/">Español</a></li>
<li><a href="https://zenmarket.jp/fr/">Français</a></li>
<li><a href="https://zenmarket.jp/ms/">Bahasa Melayu</a></li>
<li><a href="https://zenmarket.jp/vi/">Tiếng Việt</a></li>
<li><a href="https://zenmarket.jp/ar/">العربية</a></li>
<li><a href="https://zenmarket.jp/de/">Deutsch</a></li>
<li><a href="https://zenmarket.jp/id/">Bahasa Indonesia</a></li>
<li><a href="https://zenmarket.jp/th/">ภาษาไทย</a></li>
<li><a href="https://zenmarket.jp/it/">Italiano</a></li>
<li><a href="https://zenmarket.jp/pt/">Português</a></li>
<li><a href="https://zenmarket.jp/tr/">Türkçe</a></li>
<li><a href="https://zenmarket.jp/pl/">Polski</a></li>
<li><a href="https://zenmarket.jp/ko/">한국어</a></li></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clearfix">
            </div>
        </div>
        <div class="row footer-bottom-center">
            <div class="col-sm-3" style="padding-left: 0; text-align:left;">
                Copyright © 2025 <a href="#" style="color: #aaa;">ZenMarket</a>                       
            </div>      
            <div class="col-sm-6" style="padding-left: 0; text-align:center;">
                <a href="https://kouaniinkai.pref.osaka.lg.jp/section/info/kobutsu.html" target="_blank" style="color: #aaa; overflow-wrap: break-word;"></a>
            </div>            
            <div class="col-sm-3" style="text-align: right; padding-right: 0;">                
                <span class="sprite sprite-Mastercard"></span>
                <span class="sprite sprite-PayPal"></span>
                <span class="sprite sprite-Visa"></span>
            </div>
        </div>
    </div>
</div>


        <span id="latin_requried" style="display: none;">Vous devez entrer vos informations en utilisant des caractères latins (français)</span>
        <span id="lblPhoneIsIncorrect" style="display: none;"></span>
        <span id="cyrillic_forbidden" style="display: none;">Veuillez ne pas utiliser de lettres cyrilliques dans votre adresse de livraison.</span>
        <span id="spaces_not_allowed" style="display: none;">Les espaces ne sont pas autorisés.</span>
        <span id="brackets_not_allowed" style="display: none;">Les parenthèses ne sont pas autorisés.</span>
        <span id="state_required" style="display: none;">Veuillez entrer un département</span>
        <span id="delivery_point_not_selected" style="display: none;"></span>
        <span id="select_delivery_point_error" style="display: none;">Veuillez choisir le point de livraison</span>
        <span id="ecms_pick_delivery_point_details" style="display: none;">Nom: '{dpame}', adresse: '{dpaddress}'. Téléphone: '{dpphone}'</span>
    
<script>!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');twq('init','o51re');twq('track','PageView');</script><!-- Google Tag Manager (noscript) --><noscript><iframe src='https://www.googletagmanager.com/ns.html?id=GTM-K6QXBJ8' height='0' width='0' style='display:none;visibility:hidden'></iframe></noscript><!-- End Google Tag Manager(noscript) -->
<script type="text/javascript">
//<![CDATA[

theForm.oldSubmit = theForm.submit;
theForm.submit = WebForm_SaveScrollPositionSubmit;

theForm.oldOnSubmit = theForm.onsubmit;
theForm.onsubmit = WebForm_SaveScrollPositionOnSubmit;
//]]>
</script>
</form><meta name="google-site-verification" content="evosD6FT3JtUXgxhDDS97RYVL7jcgXWw3joTNNT-duE">
<script type="text/javascript" id="" charset="">function loadScript(b){var c=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript";a.src="https://tracker.metricool.com/resources/be.js";a.onreadystatechange=b;a.onload=b;c.appendChild(a)}loadScript(function(){beTracker.t({hash:"c14395587c264d9c1d42d8bb9cb8c00a"})});</script><script type="text/javascript" id="" charset="">(function(a,b){var d="spdt-capture",e="script";if(!b.getElementById(d)){a.spdt=a.spdt||function(){(a.spdt.q=a.spdt.q||[]).push(arguments)};var c=b.createElement(e);c.id=d;c.async=1;c.src="https://pixel.byspotify.com/ping.min.js";b=b.getElementsByTagName(e)[0];b.parentNode.insertBefore(c,b)}a.spdt("conf",{key:"cc6c10a4dd9b42099ce4bad57275255a"});a.spdt("view")})(window,document);</script><script type="text/javascript" id="" charset="">CE_FEATURES={ab_tests:{enabled:!1},editor:{enabled:!1}};location.hostname.substring(0,8)==="discover"&&(CE_FEATURES.ab_tests.enabled=!0,CE_FEATURES.editor.enabled=!0);</script>
<iframe height="0" width="0" style="display: none; visibility: hidden;"></iframe><script id="" text="" charset="" type="text/javascript" src="//script.crazyegg.com/pages/scripts/0126/6926.js"></script><script type="text/javascript" id="" charset="">(function(){var f="utm_source",b=new URLSearchParams(window.location.search);b=b.get("utm_source");a:{var a=f+"\x3d";var c=decodeURIComponent(document.cookie);c=c.split(";");for(var d=0;d<c.length;d++){var e=c[d].trim();if(e.indexOf(a)===0){a=e.substring(a.length,e.length);break a}}a=null}console.log("utm_source from URL:",b);console.log("Current utm_source cookie value:",a);b&&b!==a?(console.log("Updating utm_source cookie..."),a=new Date,a.setTime(a.getTime()+6048E5),a="; expires\x3d"+a.toUTCString(),
document.cookie=f+"\x3d"+b+a+"; path\x3d/; domain\x3d.zenmarket.jp",console.log("utm_source cookie updated:",b)):console.log("utm_source cookie not updated or no new value provided.")})();</script>
<script type="text/javascript" id="" charset="">(function(){var f="utm_medium",b=new URLSearchParams(window.location.search);b=b.get("utm_medium");a:{var a=f+"\x3d";var c=decodeURIComponent(document.cookie);c=c.split(";");for(var d=0;d<c.length;d++){var e=c[d].trim();if(e.indexOf(a)===0){a=e.substring(a.length,e.length);break a}}a=null}console.log("utm_medium from URL:",b);console.log("Current utm_medium cookie value:",a);b&&b!==a?(console.log("Updating utm_medium cookie..."),a=new Date,a.setTime(a.getTime()+6048E5),a="; expires\x3d"+a.toUTCString(),
document.cookie=f+"\x3d"+b+a+"; path\x3d/; domain\x3d.zenmarket.jp",console.log("utm_medium cookie updated:",b)):console.log("utm_medium cookie not updated or no new value provided.")})();</script>
<script type="text/javascript" id="" charset="">(function(){var f="utm_campaign",b=new URLSearchParams(window.location.search);b=b.get("utm_campaign");a:{var a=f+"\x3d";var c=decodeURIComponent(document.cookie);c=c.split(";");for(var d=0;d<c.length;d++){var e=c[d].trim();if(e.indexOf(a)===0){a=e.substring(a.length,e.length);break a}}a=null}console.log("utm_campaign from URL:",b);console.log("Current utm_campaign cookie value:",a);b&&b!==a?(console.log("Updating utm_campaign cookie..."),a=new Date,a.setTime(a.getTime()+6048E5),a="; expires\x3d"+
a.toUTCString(),document.cookie=f+"\x3d"+b+a+"; path\x3d/; domain\x3d.zenmarket.jp",console.log("utm_campaign cookie updated:",b)):console.log("utm_campaign cookie not updated or no new value provided.")})();</script><script type="text/javascript" id="" charset="">(function(){var f="utm_id",b=new URLSearchParams(window.location.search);b=b.get("utm_id");a:{var a=f+"\x3d";var c=decodeURIComponent(document.cookie);c=c.split(";");for(var d=0;d<c.length;d++){var e=c[d].trim();if(e.indexOf(a)===0){a=e.substring(a.length,e.length);break a}}a=null}console.log("utm_id from URL:",b);console.log("Current utm_id cookie value:",a);b&&b!==a?(console.log("Updating utm_id cookie..."),a=new Date,a.setTime(a.getTime()+6048E5),a="; expires\x3d"+a.toUTCString(),document.cookie=
f+"\x3d"+b+a+"; path\x3d/; domain\x3d.zenmarket.jp",console.log("utm_id cookie updated:",b)):console.log("utm_id cookie not updated or no new value provided.")})();</script>
<script type="text/javascript" id="" charset="">(function(){var f="utm_term",b=new URLSearchParams(window.location.search);b=b.get("utm_term");a:{var a=f+"\x3d";var c=decodeURIComponent(document.cookie);c=c.split(";");for(var d=0;d<c.length;d++){var e=c[d].trim();if(e.indexOf(a)===0){a=e.substring(a.length,e.length);break a}}a=null}console.log("utm_term from URL:",b);console.log("Current utm_term cookie value:",a);b&&b!==a?(console.log("Updating utm_term cookie..."),a=new Date,a.setTime(a.getTime()+6048E5),a="; expires\x3d"+a.toUTCString(),document.cookie=
f+"\x3d"+b+a+"; path\x3d/; domain\x3d.zenmarket.jp",console.log("utm_term cookie updated:",b)):console.log("utm_term cookie not updated or no new value provided.")})();</script>
<script type="text/javascript" id="" charset="">(function(){var f="utm_content",b=new URLSearchParams(window.location.search);b=b.get("utm_content");a:{var a=f+"\x3d";var c=decodeURIComponent(document.cookie);c=c.split(";");for(var d=0;d<c.length;d++){var e=c[d].trim();if(e.indexOf(a)===0){a=e.substring(a.length,e.length);break a}}a=null}console.log("utm_content from URL:",b);console.log("Current utm_content cookie value:",a);b&&b!==a?(console.log("Updating utm_content cookie..."),a=new Date,a.setTime(a.getTime()+6048E5),a="; expires\x3d"+a.toUTCString(),
document.cookie=f+"\x3d"+b+a+"; path\x3d/; domain\x3d.zenmarket.jp",console.log("utm_content cookie updated:",b)):console.log("utm_content cookie not updated or no new value provided.")})();</script>
<script type="text/javascript" id="" charset="">(function(){function e(c){c+="\x3d";var b=decodeURIComponent(document.cookie);b=b.split(";");for(var f=0;f<b.length;f++){var g=b[f].trim();if(g.indexOf(c)===0)return g.substring(c.length,g.length)}return null}function k(){var c=e("gclid"),b=e("fbclid");return c?"google ads":b?"meta":null}var h="ads_source",a=e(h);console.log("Current ads_source cookie value:",a);console.log("Checking for gclid or fbclid cookies...");var d=k();console.log("Detected ad source:",d);d&&d!==a?(console.log("Updating ads_source cookie..."),
a=new Date,a.setTime(a.getTime()+6048E5),a="; expires\x3d"+a.toUTCString(),document.cookie=h+"\x3d"+d+a+"; path\x3d/; domain\x3d.zenmarket.jp",console.log("ads_source cookie updated:",d)):console.log("ads_source cookie not updated or no new value provided.")})();</script>

    <script type="text/javascript">
        var messages = {
            profileParcelsNameRequired: "Veuillez entrer votre prénom et votre nom de famille",
            profileParcelsFullNameLocalLanguageRequired: "",
            profileParcelsStrategyRequired: "Choisissez une stratégie pour le colis",
            profileParcelsPhoneRequired: "Veuillez entrer un numéro de téléphone",
            profileParcelsPostalcodeRequired: "Veuillez entrer un code postal",
            profileParcelsAddressRequired: "Merci d'entrer une rue",
            profileParcelsCityRequired: "Veuillez entrer une ville",
            profileParcelsSmallMaxPrice: "Airmail Small, SAL small n'est pas disponible pour les colis d'une valeur totale supérieure à {0} JPY.",
            profileParcelsECMSMaxPrice: "ECMS Express n'est pas disponible pour les colis d'une valeur totale supérieure à {0} JPY.",
            profileParcelsStateRequired: "Veuillez entrer un département",
            profileParcelsStateFrozen: "Nous vérifions quelques détails concernant votre colis. Veuillez patienter.",
            profileParcelsTaxNumberRequired: "Indiquer votre numéro fiscal",
            profileParcelsWrongEmail: "L'adresse électronique est incorrecte.",
            profileParcelsZenExpressStandartMaxPrice: "Zen Express n'est pas disponible pour les colis dont la valeur excède {0} yens.",
            profileParcelsZenExpressPudoMaxPrice: "",
            profileParcelsSberLogisticsMaxPrice: "",
            profileParcelsAvailableSymbols: "Vous devez saisir vos informations en utilisant uniquement des caractères Latins, chiffres, espaces et symboles (,.()#|\/''\"-~[])",
            profileParcelsCourierAlertMessageTR: "Les colis d'une valeur de <b>30 euros</b> et plus sont soumis aux procédures douanières officielles et doivent être importés par un courtier en douane."
        };
    </script>


<ul class="typeahead dropdown-menu"></ul><ul class="typeahead dropdown-menu"></ul><ul class="typeahead dropdown-menu"></ul><div class="mm-page mm-slideout" id="mm-0"><div></div><div id="batBeacon776743031049" style="width: 0px; height: 0px; display: none; visibility: hidden;"><img id="batBeacon181483490011" width="0" height="0" alt="" src="https://bat.bing.com/action/0?ti=97012053&amp;tm=gtm002&amp;Ver=2&amp;mid=07c3e6a7-ae4a-4807-9add-6358b2e325dd&amp;bo=2&amp;sid=f086a2e08da211f09b77f95ff84ad59d&amp;vid=f08681808da211f0b98be997f55f1416&amp;vids=0&amp;msclkid=N&amp;gtm_tag_source=1&amp;uach=pv%3D10.0&amp;pi=918639831&amp;lg=fr-FR&amp;sw=1366&amp;sh=900&amp;sc=24&amp;nwd=1&amp;tl=Parcels%C2%A0&amp;p=https%3A%2F%2Fzenmarket.jp%2Ffr%2Fprofile%2Fparcel.aspx%3Fstate%3D5&amp;r=&amp;lt=1692&amp;evt=pageLoad&amp;sv=2&amp;asc=G&amp;cdb=AQAS&amp;rn=875336" style="width: 0px; height: 0px; display: none; visibility: hidden;"><img id="batBeacon746346288104" width="0" height="0" alt="" src="https://bat.bing.com/action/0?ti=97012053&amp;tm=gtm002&amp;Ver=2&amp;mid=34d5cb6d-e7cc-4089-8b54-87b7a42b9446&amp;bo=1&amp;sid=f086a2e08da211f09b77f95ff84ad59d&amp;vid=f08681808da211f0b98be997f55f1416&amp;vids=0&amp;msclkid=N&amp;page_path=%2F&amp;tpp=1&amp;spa=Y&amp;p=https%3A%2F%2Fzenmarket.jp%2F&amp;uach=pv%3D10.0&amp;pi=918639831&amp;lg=fr-FR&amp;sw=1366&amp;sh=900&amp;sc=24&amp;nwd=1&amp;tl=Parcels%C2%A0&amp;r=https%3A%2F%2Fzenmarket.jp%2Ffr%2Fprofile%2Fparcel.aspx%3Fstate%3D5&amp;evt=pageLoad&amp;sv=2&amp;asc=G&amp;cdb=AQAS&amp;rn=781358" style="width: 0px; height: 0px; display: none; visibility: hidden;"></div></div><img src="https://t.co/1/i/adsct?bci=4&amp;dv=Europe%2FParis%26fr-FR%26Google%20Inc.%26Linux%20x86_64%26255%261366%26900%2632%2624%261366%26900%260%26na&amp;eci=3&amp;event=%7B%7D&amp;event_id=5dc15cf3-e9a0-4e82-a759-147660bb80bc&amp;integration=gtm&amp;p_id=Twitter&amp;p_user_id=0&amp;pl_id=561ae348-93dd-443b-8063-02ab2e3032c3&amp;pt=Parcels&amp;tw_document_href=https%3A%2F%2Fzenmarket.jp%2Ffr%2Fprofile%2Fparcel.aspx%3Fstate%3D5&amp;tw_iframe_status=0&amp;txn_id=o51re&amp;type=javascript&amp;version=2.3.34" height="1" width="1" style="display: none;"><img src="https://analytics.twitter.com/1/i/adsct?bci=4&amp;dv=Europe%2FParis%26fr-FR%26Google%20Inc.%26Linux%20x86_64%26255%261366%26900%2632%2624%261366%26900%260%26na&amp;eci=3&amp;event=%7B%7D&amp;event_id=5dc15cf3-e9a0-4e82-a759-147660bb80bc&amp;integration=gtm&amp;p_id=Twitter&amp;p_user_id=0&amp;pl_id=561ae348-93dd-443b-8063-02ab2e3032c3&amp;pt=Parcels&amp;tw_document_href=https%3A%2F%2Fzenmarket.jp%2Ffr%2Fprofile%2Fparcel.aspx%3Fstate%3D5&amp;tw_iframe_status=0&amp;txn_id=o51re&amp;type=javascript&amp;version=2.3.34" height="1" width="1" style="display: none;"><img src="https://t.co/1/i/adsct?bci=4&amp;dv=Europe%2FParis%26fr-FR%26Google%20Inc.%26Linux%20x86_64%26255%261366%26900%2632%2624%261366%26900%260%26na&amp;eci=3&amp;event=%7B%7D&amp;event_id=cdb16a17-43f5-4517-a279-51faae3ad1f3&amp;integration=gtm&amp;p_id=Twitter&amp;p_user_id=0&amp;pl_id=561ae348-93dd-443b-8063-02ab2e3032c3&amp;pt=Parcels&amp;tw_document_href=https%3A%2F%2Fzenmarket.jp%2Ffr%2Fprofile%2Fparcel.aspx%3Fstate%3D5&amp;tw_iframe_status=0&amp;txn_id=o51re&amp;type=javascript&amp;version=2.3.34" height="1" width="1" style="display: none;"><img src="https://analytics.twitter.com/1/i/adsct?bci=4&amp;dv=Europe%2FParis%26fr-FR%26Google%20Inc.%26Linux%20x86_64%26255%261366%26900%2632%2624%261366%26900%260%26na&amp;eci=3&amp;event=%7B%7D&amp;event_id=cdb16a17-43f5-4517-a279-51faae3ad1f3&amp;integration=gtm&amp;p_id=Twitter&amp;p_user_id=0&amp;pl_id=561ae348-93dd-443b-8063-02ab2e3032c3&amp;pt=Parcels&amp;tw_document_href=https%3A%2F%2Fzenmarket.jp%2Ffr%2Fprofile%2Fparcel.aspx%3Fstate%3D5&amp;tw_iframe_status=0&amp;txn_id=o51re&amp;type=javascript&amp;version=2.3.34" height="1" width="1" style="display: none;"><img src="https://t.co/1/i/adsct?bci=4&amp;dv=Europe%2FParis%26fr-FR%26Google%20Inc.%26Linux%20x86_64%26255%261366%26900%2632%2624%261366%26900%260%26na&amp;eci=4&amp;event=%7B%7D&amp;event_id=0323af50-35a3-426e-9fab-b1b4bc58d631&amp;integration=gtm&amp;p_id=Twitter&amp;p_user_id=0&amp;pl_id=561ae348-93dd-443b-8063-02ab2e3032c3&amp;pt=Parcels&amp;tw_document_href=https%3A%2F%2Fzenmarket.jp%2Ffr%2Fprofile%2Fparcel.aspx%3Fstate%3D5&amp;tw_iframe_status=0&amp;txn_id=tw-o51re-ocpcl&amp;type=javascript&amp;version=2.3.34" height="1" width="1" style="display: none;"><img src="https://analytics.twitter.com/1/i/adsct?bci=4&amp;dv=Europe%2FParis%26fr-FR%26Google%20Inc.%26Linux%20x86_64%26255%261366%26900%2632%2624%261366%26900%260%26na&amp;eci=4&amp;event=%7B%7D&amp;event_id=0323af50-35a3-426e-9fab-b1b4bc58d631&amp;integration=gtm&amp;p_id=Twitter&amp;p_user_id=0&amp;pl_id=561ae348-93dd-443b-8063-02ab2e3032c3&amp;pt=Parcels&amp;tw_document_href=https%3A%2F%2Fzenmarket.jp%2Ffr%2Fprofile%2Fparcel.aspx%3Fstate%3D5&amp;tw_iframe_status=0&amp;txn_id=tw-o51re-ocpcl&amp;type=javascript&amp;version=2.3.34" height="1" width="1" style="display: none;"><img src="https://t.co/i/adsct?bci=5&amp;dv=Europe%2FParis%26fr-FR%26Google%20Inc.%26Linux%20x86_64%26255%261366%26900%2632%2624%261366%26900%260%26na&amp;eci=2&amp;event_id=dfa42174-7b51-4aa4-8ba8-934afb8be720&amp;events=%5B%5B%22pageview%22%2C%7B%7D%5D%5D&amp;integration=gtm&amp;p_id=Twitter&amp;p_user_id=0&amp;pl_id=561ae348-93dd-443b-8063-02ab2e3032c3&amp;pt=Parcels&amp;tw_document_href=https%3A%2F%2Fzenmarket.jp%2Ffr%2Fprofile%2Fparcel.aspx%3Fstate%3D5&amp;tw_iframe_status=0&amp;tw_order_quantity=0&amp;tw_sale_amount=0&amp;txn_id=o51re&amp;type=javascript&amp;version=2.3.34" height="1" width="1" style="display: none;"><img src="https://analytics.twitter.com/i/adsct?bci=5&amp;dv=Europe%2FParis%26fr-FR%26Google%20Inc.%26Linux%20x86_64%26255%261366%26900%2632%2624%261366%26900%260%26na&amp;eci=2&amp;event_id=dfa42174-7b51-4aa4-8ba8-934afb8be720&amp;events=%5B%5B%22pageview%22%2C%7B%7D%5D%5D&amp;integration=gtm&amp;p_id=Twitter&amp;p_user_id=0&amp;pl_id=561ae348-93dd-443b-8063-02ab2e3032c3&amp;pt=Parcels&amp;tw_document_href=https%3A%2F%2Fzenmarket.jp%2Ffr%2Fprofile%2Fparcel.aspx%3Fstate%3D5&amp;tw_iframe_status=0&amp;tw_order_quantity=0&amp;tw_sale_amount=0&amp;txn_id=o51re&amp;type=javascript&amp;version=2.3.34" height="1" width="1" style="display: none;"><script type="text/javascript" id="" charset="">(function(a,d,e,f,g,b,c){a.visitorGlobalObjectAlias=f;a[a.visitorGlobalObjectAlias]=a[a.visitorGlobalObjectAlias]||function(){(a[a.visitorGlobalObjectAlias].q=a[a.visitorGlobalObjectAlias].q||[]).push(arguments)};a[a.visitorGlobalObjectAlias].l=(new Date).getTime();b=d.createElement("script");b.src=e;b.async=!0;c=d.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)})(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");vgo("setAccount","652360825");
vgo("setTrackByDefault",!0);vgo("process");</script><div class="mm-wrapper__blocker mm-slideout"><a href="#mm-0"><span class="mm-sronly">Close menu</span></a></div></body></html>
```

---

## next.config.ts

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

```

---

## package-lock.json

```json
{
  "name": "inventory-app",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "inventory-app",
      "version": "0.1.0",
      "dependencies": {
        "@prisma/client": "^6.15.0",
        "next": "15.5.2",
        "react": "19.1.0",
        "react-dom": "19.1.0"
      },
      "devDependencies": {
        "@biomejs/biome": "2.2.0",
        "@tailwindcss/postcss": "^4",
        "@types/node": "^20.19.13",
        "@types/react": "^19",
        "@types/react-dom": "^19",
        "autoprefixer": "^10.4.21",
        "chokidar": "^3.6.0",
        "husky": "^9.1.7",
        "playwright": "^1.55.0",
        "postcss": "^8.5.6",
        "prisma": "^6.15.0",
        "tailwindcss": "^4.1.13",
        "tsx": "^4.20.5",
        "typescript": "^5"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@biomejs/biome": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@biomejs/biome/-/biome-2.2.0.tgz",
      "integrity": "sha512-3On3RSYLsX+n9KnoSgfoYlckYBoU6VRM22cw1gB4Y0OuUVSYd/O/2saOJMrA4HFfA1Ff0eacOvMN1yAAvHtzIw==",
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "bin": {
        "biome": "bin/biome"
      },
      "engines": {
        "node": ">=14.21.3"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/biome"
      },
      "optionalDependencies": {
        "@biomejs/cli-darwin-arm64": "2.2.0",
        "@biomejs/cli-darwin-x64": "2.2.0",
        "@biomejs/cli-linux-arm64": "2.2.0",
        "@biomejs/cli-linux-arm64-musl": "2.2.0",
        "@biomejs/cli-linux-x64": "2.2.0",
        "@biomejs/cli-linux-x64-musl": "2.2.0",
        "@biomejs/cli-win32-arm64": "2.2.0",
        "@biomejs/cli-win32-x64": "2.2.0"
      }
    },
    "node_modules/@biomejs/cli-darwin-arm64": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@biomejs/cli-darwin-arm64/-/cli-darwin-arm64-2.2.0.tgz",
      "integrity": "sha512-zKbwUUh+9uFmWfS8IFxmVD6XwqFcENjZvEyfOxHs1epjdH3wyyMQG80FGDsmauPwS2r5kXdEM0v/+dTIA9FXAg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=14.21.3"
      }
    },
    "node_modules/@biomejs/cli-darwin-x64": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@biomejs/cli-darwin-x64/-/cli-darwin-x64-2.2.0.tgz",
      "integrity": "sha512-+OmT4dsX2eTfhD5crUOPw3RPhaR+SKVspvGVmSdZ9y9O/AgL8pla6T4hOn1q+VAFBHuHhsdxDRJgFCSC7RaMOw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=14.21.3"
      }
    },
    "node_modules/@biomejs/cli-linux-arm64": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@biomejs/cli-linux-arm64/-/cli-linux-arm64-2.2.0.tgz",
      "integrity": "sha512-6eoRdF2yW5FnW9Lpeivh7Mayhq0KDdaDMYOJnH9aT02KuSIX5V1HmWJCQQPwIQbhDh68Zrcpl8inRlTEan0SXw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=14.21.3"
      }
    },
    "node_modules/@biomejs/cli-linux-arm64-musl": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@biomejs/cli-linux-arm64-musl/-/cli-linux-arm64-musl-2.2.0.tgz",
      "integrity": "sha512-egKpOa+4FL9YO+SMUMLUvf543cprjevNc3CAgDNFLcjknuNMcZ0GLJYa3EGTCR2xIkIUJDVneBV3O9OcIlCEZQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=14.21.3"
      }
    },
    "node_modules/@biomejs/cli-linux-x64": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@biomejs/cli-linux-x64/-/cli-linux-x64-2.2.0.tgz",
      "integrity": "sha512-5UmQx/OZAfJfi25zAnAGHUMuOd+LOsliIt119x2soA2gLggQYrVPA+2kMUxR6Mw5M1deUF/AWWP2qpxgH7Nyfw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=14.21.3"
      }
    },
    "node_modules/@biomejs/cli-linux-x64-musl": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@biomejs/cli-linux-x64-musl/-/cli-linux-x64-musl-2.2.0.tgz",
      "integrity": "sha512-I5J85yWwUWpgJyC1CcytNSGusu2p9HjDnOPAFG4Y515hwRD0jpR9sT9/T1cKHtuCvEQ/sBvx+6zhz9l9wEJGAg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=14.21.3"
      }
    },
    "node_modules/@biomejs/cli-win32-arm64": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@biomejs/cli-win32-arm64/-/cli-win32-arm64-2.2.0.tgz",
      "integrity": "sha512-n9a1/f2CwIDmNMNkFs+JI0ZjFnMO0jdOyGNtihgUNFnlmd84yIYY2KMTBmMV58ZlVHjgmY5Y6E1hVTnSRieggA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=14.21.3"
      }
    },
    "node_modules/@biomejs/cli-win32-x64": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/@biomejs/cli-win32-x64/-/cli-win32-x64-2.2.0.tgz",
      "integrity": "sha512-Nawu5nHjP/zPKTIryh2AavzTc/KEg4um/MxWdXW0A6P/RZOyIpa7+QSjeXwAwX/utJGaCoXRPWtF3m5U/bB3Ww==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT OR Apache-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=14.21.3"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.5.0.tgz",
      "integrity": "sha512-97/BJ3iXHww3djw6hYIfErCZFee7qCtrneuLa20UXFCOTCfBM2cvQHjWJ2EG0s0MtdNwInarqCTz35i4wWXHsQ==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.25.9.tgz",
      "integrity": "sha512-OaGtL73Jck6pBKjNIe24BnFE6agGl+6KxDtTfHhy1HmhthfKouEcOhqpSL64K4/0WCtbKFLOdzD/44cJ4k9opA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.25.9.tgz",
      "integrity": "sha512-5WNI1DaMtxQ7t7B6xa572XMXpHAaI/9Hnhk8lcxF4zVN4xstUgTlvuGDorBguKEnZO70qwEcLpfifMLoxiPqHQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.25.9.tgz",
      "integrity": "sha512-IDrddSmpSv51ftWslJMvl3Q2ZT98fUSL2/rlUXuVqRXHCs5EUF1/f+jbjF5+NG9UffUDMCiTyh8iec7u8RlTLg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.25.9.tgz",
      "integrity": "sha512-I853iMZ1hWZdNllhVZKm34f4wErd4lMyeV7BLzEExGEIZYsOzqDWDf+y082izYUE8gtJnYHdeDpN/6tUdwvfiw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.25.9.tgz",
      "integrity": "sha512-XIpIDMAjOELi/9PB30vEbVMs3GV1v2zkkPnuyRRURbhqjyzIINwj+nbQATh4H9GxUgH1kFsEyQMxwiLFKUS6Rg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.25.9.tgz",
      "integrity": "sha512-jhHfBzjYTA1IQu8VyrjCX4ApJDnH+ez+IYVEoJHeqJm9VhG9Dh2BYaJritkYK3vMaXrf7Ogr/0MQ8/MeIefsPQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.25.9.tgz",
      "integrity": "sha512-z93DmbnY6fX9+KdD4Ue/H6sYs+bhFQJNCPZsi4XWJoYblUqT06MQUdBCpcSfuiN72AbqeBFu5LVQTjfXDE2A6Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.25.9.tgz",
      "integrity": "sha512-mrKX6H/vOyo5v71YfXWJxLVxgy1kyt1MQaD8wZJgJfG4gq4DpQGpgTB74e5yBeQdyMTbgxp0YtNj7NuHN0PoZg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.25.9.tgz",
      "integrity": "sha512-HBU2Xv78SMgaydBmdor38lg8YDnFKSARg1Q6AT0/y2ezUAKiZvc211RDFHlEZRFNRVhcMamiToo7bDx3VEOYQw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.25.9.tgz",
      "integrity": "sha512-BlB7bIcLT3G26urh5Dmse7fiLmLXnRlopw4s8DalgZ8ef79Jj4aUcYbk90g8iCa2467HX8SAIidbL7gsqXHdRw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.25.9.tgz",
      "integrity": "sha512-e7S3MOJPZGp2QW6AK6+Ly81rC7oOSerQ+P8L0ta4FhVi+/j/v2yZzx5CqqDaWjtPFfYz21Vi1S0auHrap3Ma3A==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.25.9.tgz",
      "integrity": "sha512-Sbe10Bnn0oUAB2AalYztvGcK+o6YFFA/9829PhOCUS9vkJElXGdphz0A3DbMdP8gmKkqPmPcMJmJOrI3VYB1JQ==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.25.9.tgz",
      "integrity": "sha512-YcM5br0mVyZw2jcQeLIkhWtKPeVfAerES5PvOzaDxVtIyZ2NUBZKNLjC5z3/fUlDgT6w89VsxP2qzNipOaaDyA==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.25.9.tgz",
      "integrity": "sha512-++0HQvasdo20JytyDpFvQtNrEsAgNG2CY1CLMwGXfFTKGBGQT3bOeLSYE2l1fYdvML5KUuwn9Z8L1EWe2tzs1w==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.25.9.tgz",
      "integrity": "sha512-uNIBa279Y3fkjV+2cUjx36xkx7eSjb8IvnL01eXUKXez/CBHNRw5ekCGMPM0BcmqBxBcdgUWuUXmVWwm4CH9kg==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.25.9.tgz",
      "integrity": "sha512-Mfiphvp3MjC/lctb+7D287Xw1DGzqJPb/J2aHHcHxflUo+8tmN/6d4k6I2yFR7BVo5/g7x2Monq4+Yew0EHRIA==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.25.9.tgz",
      "integrity": "sha512-iSwByxzRe48YVkmpbgoxVzn76BXjlYFXC7NvLYq+b+kDjyyk30J0JY47DIn8z1MO3K0oSl9fZoRmZPQI4Hklzg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.25.9.tgz",
      "integrity": "sha512-9jNJl6FqaUG+COdQMjSCGW4QiMHH88xWbvZ+kRVblZsWrkXlABuGdFJ1E9L7HK+T0Yqd4akKNa/lO0+jDxQD4Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.25.9.tgz",
      "integrity": "sha512-RLLdkflmqRG8KanPGOU7Rpg829ZHu8nFy5Pqdi9U01VYtG9Y0zOG6Vr2z4/S+/3zIyOxiK6cCeYNWOFR9QP87g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.25.9.tgz",
      "integrity": "sha512-YaFBlPGeDasft5IIM+CQAhJAqS3St3nJzDEgsgFixcfZeyGPCd6eJBWzke5piZuZ7CtL656eOSYKk4Ls2C0FRQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.25.9.tgz",
      "integrity": "sha512-1MkgTCuvMGWuqVtAvkpkXFmtL8XhWy+j4jaSO2wxfJtilVCi0ZE37b8uOdMItIHz4I6z1bWWtEX4CJwcKYLcuA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openharmony-arm64": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.25.9.tgz",
      "integrity": "sha512-4Xd0xNiMVXKh6Fa7HEJQbrpP3m3DDn43jKxMjxLLRjWnRsfxjORYJlXPO4JNcXtOyfajXorRKY9NkOpTHptErg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.25.9.tgz",
      "integrity": "sha512-WjH4s6hzo00nNezhp3wFIAfmGZ8U7KtrJNlFMRKxiI9mxEK1scOMAaa9i4crUtu+tBr+0IN6JCuAcSBJZfnphw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.25.9.tgz",
      "integrity": "sha512-mGFrVJHmZiRqmP8xFOc6b84/7xa5y5YvR1x8djzXpJBSv/UsNK6aqec+6JDjConTgvvQefdGhFDAs2DLAds6gQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.25.9.tgz",
      "integrity": "sha512-b33gLVU2k11nVx1OhX3C8QQP6UHQK4ZtN56oFWvVXvz2VkDoe6fbG8TOgHFxEvqeqohmRnIHe5A1+HADk4OQww==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.25.9.tgz",
      "integrity": "sha512-PPOl1mi6lpLNQxnGoyAfschAodRFYXJ+9fs6WHXz7CSWKbOqiMZsubC+BQsVKuul+3vKLuwTHsS2c2y9EoKwxQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@img/sharp-darwin-arm64": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.34.3.tgz",
      "integrity": "sha512-ryFMfvxxpQRsgZJqBd4wsttYQbCxsJksrv9Lw/v798JcQ8+w84mBWuXwl+TT0WJ/WrYOLaYpwQXi3sA9nTIaIg==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.2.0"
      }
    },
    "node_modules/@img/sharp-darwin-x64": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.34.3.tgz",
      "integrity": "sha512-yHpJYynROAj12TA6qil58hmPmAwxKKC7reUqtGLzsOHfP7/rniNGTL8tjWX6L3CTV4+5P4ypcS7Pp+7OB+8ihA==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.2.0"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.2.0.tgz",
      "integrity": "sha512-sBZmpwmxqwlqG9ueWFXtockhsxefaV6O84BMOrhtg/YqbTaRdqDE7hxraVE3y6gVM4eExmfzW4a8el9ArLeEiQ==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.2.0.tgz",
      "integrity": "sha512-M64XVuL94OgiNHa5/m2YvEQI5q2cl9d/wk0qFTDVXcYzi43lxuiFTftMR1tOnFQovVXNZJ5TURSDK2pNe9Yzqg==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.2.0.tgz",
      "integrity": "sha512-mWd2uWvDtL/nvIzThLq3fr2nnGfyr/XMXlq8ZJ9WMR6PXijHlC3ksp0IpuhK6bougvQrchUAfzRLnbsen0Cqvw==",
      "cpu": [
        "arm"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.2.0.tgz",
      "integrity": "sha512-RXwd0CgG+uPRX5YYrkzKyalt2OJYRiJQ8ED/fi1tq9WQW2jsQIn0tqrlR5l5dr/rjqq6AHAxURhj2DVjyQWSOA==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-ppc64": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-ppc64/-/sharp-libvips-linux-ppc64-1.2.0.tgz",
      "integrity": "sha512-Xod/7KaDDHkYu2phxxfeEPXfVXFKx70EAFZ0qyUdOjCcxbjqyJOEUpDe6RIyaunGxT34Anf9ue/wuWOqBW2WcQ==",
      "cpu": [
        "ppc64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.2.0.tgz",
      "integrity": "sha512-eMKfzDxLGT8mnmPJTNMcjfO33fLiTDsrMlUVcp6b96ETbnJmd4uvZxVJSKPQfS+odwfVaGifhsB07J1LynFehw==",
      "cpu": [
        "s390x"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.2.0.tgz",
      "integrity": "sha512-ZW3FPWIc7K1sH9E3nxIGB3y3dZkpJlMnkk7z5tu1nSkBoCgw2nSRTFHI5pB/3CQaJM0pdzMF3paf9ckKMSE9Tg==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.2.0.tgz",
      "integrity": "sha512-UG+LqQJbf5VJ8NWJ5Z3tdIe/HXjuIdo4JeVNADXBFuG7z9zjoegpzzGIyV5zQKi4zaJjnAd2+g2nna8TZvuW9Q==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.2.0.tgz",
      "integrity": "sha512-SRYOLR7CXPgNze8akZwjoGBoN1ThNZoqpOgfnOxmWsklTGVfJiGJoC/Lod7aNMGA1jSsKWM1+HRX43OP6p9+6Q==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-linux-arm": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.34.3.tgz",
      "integrity": "sha512-oBK9l+h6KBN0i3dC8rYntLiVfW8D8wH+NPNT3O/WBHeW0OQWCjfWksLUaPidsrDKpJgXp3G3/hkmhptAW0I3+A==",
      "cpu": [
        "arm"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.2.0"
      }
    },
    "node_modules/@img/sharp-linux-arm64": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.34.3.tgz",
      "integrity": "sha512-QdrKe3EvQrqwkDrtuTIjI0bu6YEJHTgEeqdzI3uWJOH6G1O8Nl1iEeVYRGdj1h5I21CqxSvQp1Yv7xeU3ZewbA==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.2.0"
      }
    },
    "node_modules/@img/sharp-linux-ppc64": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-ppc64/-/sharp-linux-ppc64-0.34.3.tgz",
      "integrity": "sha512-GLtbLQMCNC5nxuImPR2+RgrviwKwVql28FWZIW1zWruy6zLgA5/x2ZXk3mxj58X/tszVF69KK0Is83V8YgWhLA==",
      "cpu": [
        "ppc64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-ppc64": "1.2.0"
      }
    },
    "node_modules/@img/sharp-linux-s390x": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.34.3.tgz",
      "integrity": "sha512-3gahT+A6c4cdc2edhsLHmIOXMb17ltffJlxR0aC2VPZfwKoTGZec6u5GrFgdR7ciJSsHT27BD3TIuGcuRT0KmQ==",
      "cpu": [
        "s390x"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.2.0"
      }
    },
    "node_modules/@img/sharp-linux-x64": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.34.3.tgz",
      "integrity": "sha512-8kYso8d806ypnSq3/Ly0QEw90V5ZoHh10yH0HnrzOCr6DKAPI6QVHvwleqMkVQ0m+fc7EH8ah0BB0QPuWY6zJQ==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.2.0"
      }
    },
    "node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.34.3.tgz",
      "integrity": "sha512-vAjbHDlr4izEiXM1OTggpCcPg9tn4YriK5vAjowJsHwdBIdx0fYRsURkxLG2RLm9gyBq66gwtWI8Gx0/ov+JKQ==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.0"
      }
    },
    "node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.34.3.tgz",
      "integrity": "sha512-gCWUn9547K5bwvOn9l5XGAEjVTTRji4aPTqLzGXHvIr6bIDZKNTA34seMPgM0WmSf+RYBH411VavCejp3PkOeQ==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.2.0"
      }
    },
    "node_modules/@img/sharp-wasm32": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.34.3.tgz",
      "integrity": "sha512-+CyRcpagHMGteySaWos8IbnXcHgfDn7pO2fiC2slJxvNq9gDipYBN42/RagzctVRKgxATmfqOSulgZv5e1RdMg==",
      "cpu": [
        "wasm32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later AND MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.4.4"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-arm64": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-arm64/-/sharp-win32-arm64-0.34.3.tgz",
      "integrity": "sha512-MjnHPnbqMXNC2UgeLJtX4XqoVHHlZNd+nPt1kRPmj63wURegwBhZlApELdtxM2OIZDRv/DFtLcNhVbd1z8GYXQ==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-ia32": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.34.3.tgz",
      "integrity": "sha512-xuCdhH44WxuXgOM714hn4amodJMZl3OEvf0GVTm0BEyMeA2to+8HEdRPShH0SLYptJY1uBw+SCFP9WVQi1Q/cw==",
      "cpu": [
        "ia32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-x64": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.34.3.tgz",
      "integrity": "sha512-OWwz05d++TxzLEv4VnsTz5CmZ6mI6S05sfQGEMrNrQcOEERbX46332IvE7pO/EUiw7jUrrS40z/M7kPyjfl04g==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@isaacs/fs-minipass": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/@isaacs/fs-minipass/-/fs-minipass-4.0.1.tgz",
      "integrity": "sha512-wgm9Ehl2jpeqP3zw/7mo3kRHFp5MEDhqAdwy1fTGkHAwnkGOVsgpvQhL8B5n1qlb01jV3n/bI0ZfZp5lWA1k4w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "minipass": "^7.0.4"
      },
      "engines": {
        "node": ">=18.0.0"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.30",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.30.tgz",
      "integrity": "sha512-GQ7Nw5G2lTu/BtHTKfXhKHok2WGetd4XYcVKGx00SjAk8GMwgJM3zr6zORiPGuOE+/vkc90KtTosSSvaCjKb2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@next/env": {
      "version": "15.5.2",
      "resolved": "https://registry.npmjs.org/@next/env/-/env-15.5.2.tgz",
      "integrity": "sha512-Qe06ew4zt12LeO6N7j8/nULSOe3fMXE4dM6xgpBQNvdzyK1sv5y4oAP3bq4LamrvGCZtmRYnW8URFCeX5nFgGg==",
      "license": "MIT"
    },
    "node_modules/@next/swc-darwin-arm64": {
      "version": "15.5.2",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-arm64/-/swc-darwin-arm64-15.5.2.tgz",
      "integrity": "sha512-8bGt577BXGSd4iqFygmzIfTYizHb0LGWqH+qgIF/2EDxS5JsSdERJKA8WgwDyNBZgTIIA4D8qUtoQHmxIIquoQ==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-darwin-x64": {
      "version": "15.5.2",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-x64/-/swc-darwin-x64-15.5.2.tgz",
      "integrity": "sha512-2DjnmR6JHK4X+dgTXt5/sOCu/7yPtqpYt8s8hLkHFK3MGkka2snTv3yRMdHvuRtJVkPwCGsvBSwmoQCHatauFQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-gnu": {
      "version": "15.5.2",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-gnu/-/swc-linux-arm64-gnu-15.5.2.tgz",
      "integrity": "sha512-3j7SWDBS2Wov/L9q0mFJtEvQ5miIqfO4l7d2m9Mo06ddsgUK8gWfHGgbjdFlCp2Ek7MmMQZSxpGFqcC8zGh2AA==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-musl": {
      "version": "15.5.2",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-musl/-/swc-linux-arm64-musl-15.5.2.tgz",
      "integrity": "sha512-s6N8k8dF9YGc5T01UPQ08yxsK6fUow5gG1/axWc1HVVBYQBgOjca4oUZF7s4p+kwhkB1bDSGR8QznWrFZ/Rt5g==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-gnu": {
      "version": "15.5.2",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-15.5.2.tgz",
      "integrity": "sha512-o1RV/KOODQh6dM6ZRJGZbc+MOAHww33Vbs5JC9Mp1gDk8cpEO+cYC/l7rweiEalkSm5/1WGa4zY7xrNwObN4+Q==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-musl": {
      "version": "15.5.2",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-15.5.2.tgz",
      "integrity": "sha512-/VUnh7w8RElYZ0IV83nUcP/J4KJ6LLYliiBIri3p3aW2giF+PAVgZb6mk8jbQSB3WlTai8gEmCAr7kptFa1H6g==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-arm64-msvc": {
      "version": "15.5.2",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-arm64-msvc/-/swc-win32-arm64-msvc-15.5.2.tgz",
      "integrity": "sha512-sMPyTvRcNKXseNQ/7qRfVRLa0VhR0esmQ29DD6pqvG71+JdVnESJaHPA8t7bc67KD5spP3+DOCNLhqlEI2ZgQg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-x64-msvc": {
      "version": "15.5.2",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-x64-msvc/-/swc-win32-x64-msvc-15.5.2.tgz",
      "integrity": "sha512-W5VvyZHnxG/2ukhZF/9Ikdra5fdNftxI6ybeVKYvBPDtyx7x4jPPSNduUkfH5fo3zG0JQ0bPxgy41af2JX5D4Q==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@prisma/client": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/@prisma/client/-/client-6.15.0.tgz",
      "integrity": "sha512-wR2LXUbOH4cL/WToatI/Y2c7uzni76oNFND7+23ypLllBmIS8e3ZHhO+nud9iXSXKFt1SoM3fTZvHawg63emZw==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "peerDependencies": {
        "prisma": "*",
        "typescript": ">=5.1.0"
      },
      "peerDependenciesMeta": {
        "prisma": {
          "optional": true
        },
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@prisma/config": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/@prisma/config/-/config-6.15.0.tgz",
      "integrity": "sha512-KMEoec9b2u6zX0EbSEx/dRpx1oNLjqJEBZYyK0S3TTIbZ7GEGoVyGyFRk4C72+A38cuPLbfQGQvgOD+gBErKlA==",
      "devOptional": true,
      "license": "Apache-2.0",
      "dependencies": {
        "c12": "3.1.0",
        "deepmerge-ts": "7.1.5",
        "effect": "3.16.12",
        "empathic": "2.0.0"
      }
    },
    "node_modules/@prisma/debug": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/@prisma/debug/-/debug-6.15.0.tgz",
      "integrity": "sha512-y7cSeLuQmyt+A3hstAs6tsuAiVXSnw9T55ra77z0nbNkA8Lcq9rNcQg6PI00by/+WnE/aMRJ/W7sZWn2cgIy1g==",
      "devOptional": true,
      "license": "Apache-2.0"
    },
    "node_modules/@prisma/engines": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/@prisma/engines/-/engines-6.15.0.tgz",
      "integrity": "sha512-opITiR5ddFJ1N2iqa7mkRlohCZqVSsHhRcc29QXeldMljOf4FSellLT0J5goVb64EzRTKcIDeIsJBgmilNcKxA==",
      "devOptional": true,
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "6.15.0",
        "@prisma/engines-version": "6.15.0-5.85179d7826409ee107a6ba334b5e305ae3fba9fb",
        "@prisma/fetch-engine": "6.15.0",
        "@prisma/get-platform": "6.15.0"
      }
    },
    "node_modules/@prisma/engines-version": {
      "version": "6.15.0-5.85179d7826409ee107a6ba334b5e305ae3fba9fb",
      "resolved": "https://registry.npmjs.org/@prisma/engines-version/-/engines-version-6.15.0-5.85179d7826409ee107a6ba334b5e305ae3fba9fb.tgz",
      "integrity": "sha512-a/46aK5j6L3ePwilZYEgYDPrhBQ/n4gYjLxT5YncUTJJNRnTCVjPF86QdzUOLRdYjCLfhtZp9aum90W0J+trrg==",
      "devOptional": true,
      "license": "Apache-2.0"
    },
    "node_modules/@prisma/fetch-engine": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/@prisma/fetch-engine/-/fetch-engine-6.15.0.tgz",
      "integrity": "sha512-xcT5f6b+OWBq6vTUnRCc7qL+Im570CtwvgSj+0MTSGA1o9UDSKZ/WANvwtiRXdbYWECpyC3CukoG3A04VTAPHw==",
      "devOptional": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "6.15.0",
        "@prisma/engines-version": "6.15.0-5.85179d7826409ee107a6ba334b5e305ae3fba9fb",
        "@prisma/get-platform": "6.15.0"
      }
    },
    "node_modules/@prisma/get-platform": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/@prisma/get-platform/-/get-platform-6.15.0.tgz",
      "integrity": "sha512-Jbb+Xbxyp05NSR1x2epabetHiXvpO8tdN2YNoWoA/ZsbYyxxu/CO/ROBauIFuMXs3Ti+W7N7SJtWsHGaWte9Rg==",
      "devOptional": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/debug": "6.15.0"
      }
    },
    "node_modules/@standard-schema/spec": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/@standard-schema/spec/-/spec-1.0.0.tgz",
      "integrity": "sha512-m2bOd0f2RT9k8QJx1JN85cZYyH1RqFBdlwtkSlf4tBDYLCiiZnv1fIIwacK6cqwXavOydf0NPToMQgpKq+dVlA==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/@swc/helpers": {
      "version": "0.5.15",
      "resolved": "https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.15.tgz",
      "integrity": "sha512-JQ5TuMi45Owi4/BIMAJBoSQoOJu12oOk/gADqlcUL9JEdHB8vyjUSsxqeNXnmXHjYKMi2WcYtezGEEhqUI/E2g==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.1.12",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.1.12.tgz",
      "integrity": "sha512-3hm9brwvQkZFe++SBt+oLjo4OLDtkvlE8q2WalaD/7QWaeM7KEJbAiY/LJZUaCs7Xa8aUu4xy3uoyX4q54UVdQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.4",
        "enhanced-resolve": "^5.18.3",
        "jiti": "^2.5.1",
        "lightningcss": "1.30.1",
        "magic-string": "^0.30.17",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.1.12"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/tailwindcss": {
      "version": "4.1.12",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.1.12.tgz",
      "integrity": "sha512-DzFtxOi+7NsFf7DBtI3BJsynR+0Yp6etH+nRPTbpWnS2pZBaSksv/JGctNwSWzbFjp0vxSqknaUylseZqMDGrA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.1.12",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.1.12.tgz",
      "integrity": "sha512-gM5EoKHW/ukmlEtphNwaGx45fGoEmP10v51t9unv55voWh6WrOL19hfuIdo2FjxIaZzw776/BUQg7Pck++cIVw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "detect-libc": "^2.0.4",
        "tar": "^7.4.3"
      },
      "engines": {
        "node": ">= 10"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.1.12",
        "@tailwindcss/oxide-darwin-arm64": "4.1.12",
        "@tailwindcss/oxide-darwin-x64": "4.1.12",
        "@tailwindcss/oxide-freebsd-x64": "4.1.12",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.1.12",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.1.12",
        "@tailwindcss/oxide-linux-arm64-musl": "4.1.12",
        "@tailwindcss/oxide-linux-x64-gnu": "4.1.12",
        "@tailwindcss/oxide-linux-x64-musl": "4.1.12",
        "@tailwindcss/oxide-wasm32-wasi": "4.1.12",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.1.12",
        "@tailwindcss/oxide-win32-x64-msvc": "4.1.12"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.1.12",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.1.12.tgz",
      "integrity": "sha512-oNY5pq+1gc4T6QVTsZKwZaGpBb2N1H1fsc1GD4o7yinFySqIuRZ2E4NvGasWc6PhYJwGK2+5YT1f9Tp80zUQZQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.1.12",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.1.12.tgz",
      "integrity": "sha512-cq1qmq2HEtDV9HvZlTtrj671mCdGB93bVY6J29mwCyaMYCP/JaUBXxrQQQm7Qn33AXXASPUb2HFZlWiiHWFytw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.1.12",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.1.12.tgz",
      "integrity": "sha512-6UCsIeFUcBfpangqlXay9Ffty9XhFH1QuUFn0WV83W8lGdX8cD5/+2ONLluALJD5+yJ7k8mVtwy3zMZmzEfbLg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.1.12",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.1.12.tgz",
      "integrity": "sha512-JOH/f7j6+nYXIrHobRYCtoArJdMJh5zy5lr0FV0Qu47MID/vqJAY3r/OElPzx1C/wdT1uS7cPq+xdYYelny1ww==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.1.12",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.1.12.tgz",
      "integrity": "sha512-v4Ghvi9AU1SYgGr3/j38PD8PEe6bRfTnNSUE3YCMIRrrNigCFtHZ2TCm8142X8fcSqHBZBceDx+JlFJEfNg5zQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.1.12",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.1.12.tgz",
      "integrity": "sha512-YP5s1LmetL9UsvVAKusHSyPlzSRqYyRB0f+Kl/xcYQSPLEw/BvGfxzbH+ihUciePDjiXwHh+p+qbSP3SlJw+6g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.1.12",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.1.12.tgz",
      "integrity": "sha512-V8pAM3s8gsrXcCv6kCHSuwyb/gPsd863iT+v1PGXC4fSL/OJqsKhfK//v8P+w9ThKIoqNbEnsZqNy+WDnwQqCA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.1.12",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.1.12.tgz",
      "integrity": "sha512-xYfqYLjvm2UQ3TZggTGrwxjYaLB62b1Wiysw/YE3Yqbh86sOMoTn0feF98PonP7LtjsWOWcXEbGqDL7zv0uW8Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.1.12",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.1.12.tgz",
      "integrity": "sha512-ha0pHPamN+fWZY7GCzz5rKunlv9L5R8kdh+YNvP5awe3LtuXb5nRi/H27GeL2U+TdhDOptU7T6Is7mdwh5Ar3A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.1.12",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.1.12.tgz",
      "integrity": "sha512-4tSyu3dW+ktzdEpuk6g49KdEangu3eCYoqPhWNsZgUhyegEda3M9rG0/j1GV/JjVVsj+lG7jWAyrTlLzd/WEBg==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.4.5",
        "@emnapi/runtime": "^1.4.5",
        "@emnapi/wasi-threads": "^1.0.4",
        "@napi-rs/wasm-runtime": "^0.2.12",
        "@tybys/wasm-util": "^0.10.0",
        "tslib": "^2.8.0"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.1.12",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.1.12.tgz",
      "integrity": "sha512-iGLyD/cVP724+FGtMWslhcFyg4xyYyM+5F4hGvKA7eifPkXHRAUDFaimu53fpNg9X8dfP75pXx/zFt/jlNF+lg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.1.12",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.1.12.tgz",
      "integrity": "sha512-NKIh5rzw6CpEodv/++r0hGLlfgT/gFN+5WNdZtvh6wpU2BpGNgdjvj6H2oFc8nCM839QM1YOhjpgbAONUb4IxA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/postcss": {
      "version": "4.1.12",
      "resolved": "https://registry.npmjs.org/@tailwindcss/postcss/-/postcss-4.1.12.tgz",
      "integrity": "sha512-5PpLYhCAwf9SJEeIsSmCDLgyVfdBhdBpzX1OJ87anT9IVR0Z9pjM0FNixCAUAHGnMBGB8K99SwAheXrT0Kh6QQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "@tailwindcss/node": "4.1.12",
        "@tailwindcss/oxide": "4.1.12",
        "postcss": "^8.4.41",
        "tailwindcss": "4.1.12"
      }
    },
    "node_modules/@tailwindcss/postcss/node_modules/tailwindcss": {
      "version": "4.1.12",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.1.12.tgz",
      "integrity": "sha512-DzFtxOi+7NsFf7DBtI3BJsynR+0Yp6etH+nRPTbpWnS2pZBaSksv/JGctNwSWzbFjp0vxSqknaUylseZqMDGrA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "20.19.13",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.19.13.tgz",
      "integrity": "sha512-yCAeZl7a0DxgNVteXFHt9+uyFbqXGy/ShC4BlcHkoE0AfGXYv/BUiplV72DjMYXHDBXFjhvr6DD1NiRVfB4j8g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.1.12",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.1.12.tgz",
      "integrity": "sha512-cMoR+FoAf/Jyq6+Df2/Z41jISvGZZ2eTlnsaJRptmZ76Caldwy1odD4xTr/gNV9VLj0AWgg/nmkevIyUfIIq5w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.0.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.1.9",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.1.9.tgz",
      "integrity": "sha512-qXRuZaOsAdXKFyOhRBg6Lqqc0yay13vN7KrIg4L7N4aaHN68ma9OK3NE1BoDFgFOTfM7zg+3/8+2n8rLUH3OKQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.0.0"
      }
    },
    "node_modules/anymatch": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz",
      "integrity": "sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "normalize-path": "^3.0.0",
        "picomatch": "^2.0.4"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/autoprefixer": {
      "version": "10.4.21",
      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.21.tgz",
      "integrity": "sha512-O+A6LWV5LDHSJD3LjHYoNi4VLsj/Whi7k6zG12xTYaU4cQ8oxQGckXNX8cRHK5yOZ/ppVHe0ZBXGzSV9jXdVbQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/autoprefixer"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "browserslist": "^4.24.4",
        "caniuse-lite": "^1.0.30001702",
        "fraction.js": "^4.3.7",
        "normalize-range": "^0.1.2",
        "picocolors": "^1.1.1",
        "postcss-value-parser": "^4.2.0"
      },
      "bin": {
        "autoprefixer": "bin/autoprefixer"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      },
      "peerDependencies": {
        "postcss": "^8.1.0"
      }
    },
    "node_modules/binary-extensions": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz",
      "integrity": "sha512-Ceh+7ox5qe7LJuLHoY0feh3pHuUDHAcRUeyL2VYghZwfpkNIy/+8Ocg0a3UuSoYzavmylwuLWQOf3hl0jjMMIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.25.4",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.25.4.tgz",
      "integrity": "sha512-4jYpcjabC606xJ3kw2QwGEZKX0Aw7sgQdZCvIK9dhVSPh76BKo+C+btT1RRofH7B+8iNpEbgGNVWiLki5q93yg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "caniuse-lite": "^1.0.30001737",
        "electron-to-chromium": "^1.5.211",
        "node-releases": "^2.0.19",
        "update-browserslist-db": "^1.1.3"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/c12": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/c12/-/c12-3.1.0.tgz",
      "integrity": "sha512-uWoS8OU1MEIsOv8p/5a82c3H31LsWVR5qiyXVfBNOzfffjUWtPnhAb4BYI2uG2HfGmZmFjCtui5XNWaps+iFuw==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "chokidar": "^4.0.3",
        "confbox": "^0.2.2",
        "defu": "^6.1.4",
        "dotenv": "^16.6.1",
        "exsolve": "^1.0.7",
        "giget": "^2.0.0",
        "jiti": "^2.4.2",
        "ohash": "^2.0.11",
        "pathe": "^2.0.3",
        "perfect-debounce": "^1.0.0",
        "pkg-types": "^2.2.0",
        "rc9": "^2.1.2"
      },
      "peerDependencies": {
        "magicast": "^0.3.5"
      },
      "peerDependenciesMeta": {
        "magicast": {
          "optional": true
        }
      }
    },
    "node_modules/c12/node_modules/chokidar": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-4.0.3.tgz",
      "integrity": "sha512-Qgzu8kfBvo+cA4962jnP1KkS6Dop5NS6g7R5LFYJr4b8Ub94PPQXUksCw9PvXoeXPRRddRNC5C1JQUR2SMGtnA==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "readdirp": "^4.0.1"
      },
      "engines": {
        "node": ">= 14.16.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/c12/node_modules/readdirp": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-4.1.2.tgz",
      "integrity": "sha512-GDhwkLfywWL2s6vEjyhri+eXmfH6j1L7JE27WhqLeYzoh/A3DBaYGEj2H/HFZCn/kMfim73FXxEJTw06WtxQwg==",
      "devOptional": true,
      "license": "MIT",
      "engines": {
        "node": ">= 14.18.0"
      },
      "funding": {
        "type": "individual",
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001739",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001739.tgz",
      "integrity": "sha512-y+j60d6ulelrNSwpPyrHdl+9mJnQzHBr08xm48Qno0nSk4h3Qojh+ziv2qE6rXf4k3tadF4o1J/1tAbVm1NtnA==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chokidar": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz",
      "integrity": "sha512-7VT13fmjotKpGipCW9JEQAusEPE+Ei8nl6/g4FBAmIm0GOOLMua9NDDo/DWp0ZAxCr3cPq5ZpBqmPAQgDda2Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "anymatch": "~3.1.2",
        "braces": "~3.0.2",
        "glob-parent": "~5.1.2",
        "is-binary-path": "~2.1.0",
        "is-glob": "~4.0.1",
        "normalize-path": "~3.0.0",
        "readdirp": "~3.6.0"
      },
      "engines": {
        "node": ">= 8.10.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/chownr": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/chownr/-/chownr-3.0.0.tgz",
      "integrity": "sha512-+IxzY9BZOQd/XuYPRmrvEVjF/nqj5kgT4kEq7VofrDoM1MxoRjEWkrCC3EtLi59TVawxTAn+orJwFQcrqEN1+g==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/citty": {
      "version": "0.1.6",
      "resolved": "https://registry.npmjs.org/citty/-/citty-0.1.6.tgz",
      "integrity": "sha512-tskPPKEs8D2KPafUypv2gxwJP8h/OaJmC82QQGGDQcHvXX43xF2VDACcJVmZ0EuSxkpO9Kc4MlrA3q0+FG58AQ==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "consola": "^3.2.3"
      }
    },
    "node_modules/client-only": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz",
      "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==",
      "license": "MIT"
    },
    "node_modules/color": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/color/-/color-4.2.3.tgz",
      "integrity": "sha512-1rXeuUUiGGrykh+CeBdu5Ie7OJwinCgQY0bc7GCRxy5xVHy+moaqkpL/jqQq0MtQOeYcrqEz4abc5f0KtU7W4A==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "color-convert": "^2.0.1",
        "color-string": "^1.9.0"
      },
      "engines": {
        "node": ">=12.5.0"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/color-string": {
      "version": "1.9.1",
      "resolved": "https://registry.npmjs.org/color-string/-/color-string-1.9.1.tgz",
      "integrity": "sha512-shrVawQFojnZv6xM40anx4CkoDP+fZsw/ZerEMsW/pyzsRbElpsL/DBVW7q3ExxwusdNXI3lXpuhEZkzs8p5Eg==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "color-name": "^1.0.0",
        "simple-swizzle": "^0.2.2"
      }
    },
    "node_modules/confbox": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/confbox/-/confbox-0.2.2.tgz",
      "integrity": "sha512-1NB+BKqhtNipMsov4xI/NnhCKp9XG9NamYp5PVm9klAT0fsrNPjaFICsCFhNhwZJKNh7zB/3q8qXz0E9oaMNtQ==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/consola": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/consola/-/consola-3.4.2.tgz",
      "integrity": "sha512-5IKcdX0nnYavi6G7TtOhwkYzyjfJlatbjMjuLSfE2kYT5pMDOilZ4OvMhi637CcDICTmz3wARPoyhqyX1Y+XvA==",
      "devOptional": true,
      "license": "MIT",
      "engines": {
        "node": "^14.18.0 || >=16.10.0"
      }
    },
    "node_modules/csstype": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.1.3.tgz",
      "integrity": "sha512-M1uQkMl8rQK/szD0LNhtqxIPLpimGm8sOBwU7lLnCpSbTyY3yeU1Vc7l4KT5zT4s/yOxHH5O7tIuuLOCnLADRw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/deepmerge-ts": {
      "version": "7.1.5",
      "resolved": "https://registry.npmjs.org/deepmerge-ts/-/deepmerge-ts-7.1.5.tgz",
      "integrity": "sha512-HOJkrhaYsweh+W+e74Yn7YStZOilkoPb6fycpwNLKzSPtruFs48nYis0zy5yJz1+ktUhHxoRDJ27RQAWLIJVJw==",
      "devOptional": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/defu": {
      "version": "6.1.4",
      "resolved": "https://registry.npmjs.org/defu/-/defu-6.1.4.tgz",
      "integrity": "sha512-mEQCMmwJu317oSz8CwdIOdwf3xMif1ttiM8LTufzc3g6kR+9Pe236twL8j3IYT1F7GfRgGcW6MWxzZjLIkuHIg==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/destr": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/destr/-/destr-2.0.5.tgz",
      "integrity": "sha512-ugFTXCtDZunbzasqBxrK93Ik/DRYsO6S/fedkWEMKqt04xZ4csmnmwGDBAb07QWNaGMAmnTIemsYZCksjATwsA==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.0.4.tgz",
      "integrity": "sha512-3UDv+G9CsCKO1WKMGw9fwq/SWJYbI0c5Y7LU1AXYoDdbhE2AHQ6N6Nb34sG8Fj7T5APy8qXDCKuuIHd1BR0tVA==",
      "devOptional": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/dotenv": {
      "version": "16.6.1",
      "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-16.6.1.tgz",
      "integrity": "sha512-uBq4egWHTcTt33a72vpSG0z3HnPuIl6NqYcTrKEg2azoEyl2hpW0zqlxysq2pK9HlDIHyHyakeYaYnSAwd8bow==",
      "devOptional": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://dotenvx.com"
      }
    },
    "node_modules/effect": {
      "version": "3.16.12",
      "resolved": "https://registry.npmjs.org/effect/-/effect-3.16.12.tgz",
      "integrity": "sha512-N39iBk0K71F9nb442TLbTkjl24FLUzuvx2i1I2RsEAQsdAdUTuUoW0vlfUXgkMTUOnYqKnWcFfqw4hK4Pw27hg==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "@standard-schema/spec": "^1.0.0",
        "fast-check": "^3.23.1"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.215",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.215.tgz",
      "integrity": "sha512-TIvGp57UpeNetj/wV/xpFNpWGb0b/ROw372lHPx5Aafx02gjTBtWnEEcaSX3W2dLM3OSdGGyHX/cHl01JQsLaQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/empathic": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/empathic/-/empathic-2.0.0.tgz",
      "integrity": "sha512-i6UzDscO/XfAcNYD75CfICkmfLedpyPDdozrLMmQc5ORaQcdMoc21OnlEylMIqI7U8eniKrPMxxtj8k0vhmJhA==",
      "devOptional": true,
      "license": "MIT",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/enhanced-resolve": {
      "version": "5.18.3",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.18.3.tgz",
      "integrity": "sha512-d4lC8xfavMeBjzGr2vECC3fsGXziXZQyJxD868h2M/mBI3PwAuODxAkLkq5HYuvrPYcUtiLzsTo8U3PgX3Ocww==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.2.0"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/esbuild": {
      "version": "0.25.9",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.25.9.tgz",
      "integrity": "sha512-CRbODhYyQx3qp7ZEwzxOk4JBqmD/seJrzPa/cGjY1VtIn5E09Oi9/dB4JwctnfZ8Q8iT7rioVv5k/FNT/uf54g==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.25.9",
        "@esbuild/android-arm": "0.25.9",
        "@esbuild/android-arm64": "0.25.9",
        "@esbuild/android-x64": "0.25.9",
        "@esbuild/darwin-arm64": "0.25.9",
        "@esbuild/darwin-x64": "0.25.9",
        "@esbuild/freebsd-arm64": "0.25.9",
        "@esbuild/freebsd-x64": "0.25.9",
        "@esbuild/linux-arm": "0.25.9",
        "@esbuild/linux-arm64": "0.25.9",
        "@esbuild/linux-ia32": "0.25.9",
        "@esbuild/linux-loong64": "0.25.9",
        "@esbuild/linux-mips64el": "0.25.9",
        "@esbuild/linux-ppc64": "0.25.9",
        "@esbuild/linux-riscv64": "0.25.9",
        "@esbuild/linux-s390x": "0.25.9",
        "@esbuild/linux-x64": "0.25.9",
        "@esbuild/netbsd-arm64": "0.25.9",
        "@esbuild/netbsd-x64": "0.25.9",
        "@esbuild/openbsd-arm64": "0.25.9",
        "@esbuild/openbsd-x64": "0.25.9",
        "@esbuild/openharmony-arm64": "0.25.9",
        "@esbuild/sunos-x64": "0.25.9",
        "@esbuild/win32-arm64": "0.25.9",
        "@esbuild/win32-ia32": "0.25.9",
        "@esbuild/win32-x64": "0.25.9"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/exsolve": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/exsolve/-/exsolve-1.0.7.tgz",
      "integrity": "sha512-VO5fQUzZtI6C+vx4w/4BWJpg3s/5l+6pRQEHzFRM8WFi4XffSP1Z+4qi7GbjWbvRQEbdIco5mIMq+zX4rPuLrw==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/fast-check": {
      "version": "3.23.2",
      "resolved": "https://registry.npmjs.org/fast-check/-/fast-check-3.23.2.tgz",
      "integrity": "sha512-h5+1OzzfCC3Ef7VbtKdcv7zsstUQwUDlYpUTvjeUsJAssPgLn7QzbboPtL5ro04Mq0rPOsMzl7q5hIbRs2wD1A==",
      "devOptional": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/dubzzz"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fast-check"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "pure-rand": "^6.1.0"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/fraction.js": {
      "version": "4.3.7",
      "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-4.3.7.tgz",
      "integrity": "sha512-ZsDfxO51wGAXREY55a7la9LScWpwv9RxIrYABrlvOFBlH/ShPnrtsXeuUIfXKKOVicNxQ+o8JTbJvjS4M89yew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      },
      "funding": {
        "type": "patreon",
        "url": "https://github.com/sponsors/rawify"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/get-tsconfig": {
      "version": "4.10.1",
      "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.10.1.tgz",
      "integrity": "sha512-auHyJ4AgMz7vgS8Hp3N6HXSmlMdUyhSUrfBF16w153rxtLIEOE+HGqaBppczZvnHLqQJfiHotCYpNhl0lUROFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "resolve-pkg-maps": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
      }
    },
    "node_modules/giget": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/giget/-/giget-2.0.0.tgz",
      "integrity": "sha512-L5bGsVkxJbJgdnwyuheIunkGatUF/zssUoxxjACCseZYAVbaqdh9Tsmmlkl8vYan09H7sbvKt4pS8GqKLBrEzA==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "citty": "^0.1.6",
        "consola": "^3.4.0",
        "defu": "^6.1.4",
        "node-fetch-native": "^1.6.6",
        "nypm": "^0.6.0",
        "pathe": "^2.0.3"
      },
      "bin": {
        "giget": "dist/cli.mjs"
      }
    },
    "node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/husky": {
      "version": "9.1.7",
      "resolved": "https://registry.npmjs.org/husky/-/husky-9.1.7.tgz",
      "integrity": "sha512-5gs5ytaNjBrh5Ow3zrvdUUY+0VxIuWVL4i9irt6friV+BqdCfmV11CQTWMiBYWHbXhco+J1kHfTOUkePhCDvMA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "husky": "bin.js"
      },
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/typicode"
      }
    },
    "node_modules/is-arrayish": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.2.tgz",
      "integrity": "sha512-eVRqCvVlZbuw3GrM63ovNSNAeA1K16kaR/LRY/92w0zxQ5/1YzwblUX652i4Xs9RwAGjW9d9y6X88t8OaAJfWQ==",
      "license": "MIT",
      "optional": true
    },
    "node_modules/is-binary-path": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz",
      "integrity": "sha512-ZMERYes6pDydyuGidse7OsHxtbI7WVeUEozgR/g7rd0xUimYNlvZRE/K2MgZTjWy725IfelLeVcEM97mmtRGXw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "binary-extensions": "^2.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/jiti": {
      "version": "2.5.1",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.5.1.tgz",
      "integrity": "sha512-twQoecYPiVA5K/h6SxtORw/Bs3ar+mLUtoPSc7iMXzQzK8d7eJ/R09wmTwAjiamETn1cXYPGfNnu7DMoHgu12w==",
      "devOptional": true,
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.30.1",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.30.1.tgz",
      "integrity": "sha512-xi6IyHML+c9+Q3W0S4fCQJOym42pyurFiJUHEcEyHS0CeKzia4yZDEsLlqOFykxOdHpNy0NmvVO31vcSqAxJCg==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-darwin-arm64": "1.30.1",
        "lightningcss-darwin-x64": "1.30.1",
        "lightningcss-freebsd-x64": "1.30.1",
        "lightningcss-linux-arm-gnueabihf": "1.30.1",
        "lightningcss-linux-arm64-gnu": "1.30.1",
        "lightningcss-linux-arm64-musl": "1.30.1",
        "lightningcss-linux-x64-gnu": "1.30.1",
        "lightningcss-linux-x64-musl": "1.30.1",
        "lightningcss-win32-arm64-msvc": "1.30.1",
        "lightningcss-win32-x64-msvc": "1.30.1"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.30.1",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.30.1.tgz",
      "integrity": "sha512-c8JK7hyE65X1MHMN+Viq9n11RRC7hgin3HhYKhrMyaXflk5GVplZ60IxyoVtzILeKr+xAJwg6zK6sjTBJ0FKYQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.30.1",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.30.1.tgz",
      "integrity": "sha512-k1EvjakfumAQoTfcXUcHQZhSpLlkAuEkdMBsI/ivWw9hL+7FtilQc0Cy3hrx0AAQrVtQAbMI7YjCgYgvn37PzA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.30.1",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.30.1.tgz",
      "integrity": "sha512-kmW6UGCGg2PcyUE59K5r0kWfKPAVy4SltVeut+umLCFoJ53RdCUWxcRDzO1eTaxf/7Q2H7LTquFHPL5R+Gjyig==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.30.1",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.30.1.tgz",
      "integrity": "sha512-MjxUShl1v8pit+6D/zSPq9S9dQ2NPFSQwGvxBCYaBYLPlCWuPh9/t1MRS8iUaR8i+a6w7aps+B4N0S1TYP/R+Q==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.30.1",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.30.1.tgz",
      "integrity": "sha512-gB72maP8rmrKsnKYy8XUuXi/4OctJiuQjcuqWNlJQ6jZiWqtPvqFziskH3hnajfvKB27ynbVCucKSm2rkQp4Bw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.30.1",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.30.1.tgz",
      "integrity": "sha512-jmUQVx4331m6LIX+0wUhBbmMX7TCfjF5FoOH6SD1CttzuYlGNVpA7QnrmLxrsub43ClTINfGSYyHe2HWeLl5CQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.30.1",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.30.1.tgz",
      "integrity": "sha512-piWx3z4wN8J8z3+O5kO74+yr6ze/dKmPnI7vLqfSqI8bccaTGY5xiSGVIJBDd5K5BHlvVLpUB3S2YCfelyJ1bw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.30.1",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.30.1.tgz",
      "integrity": "sha512-rRomAK7eIkL+tHY0YPxbc5Dra2gXlI63HL+v1Pdi1a3sC+tJTcFrHX+E86sulgAXeI7rSzDYhPSeHHjqFhqfeQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.30.1",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.30.1.tgz",
      "integrity": "sha512-mSL4rqPi4iXq5YVqzSsJgMVFENoa4nGTT/GjO2c0Yl9OuQfPsIfncvLrEW6RbbB24WtZ3xP/2CCmI3tNkNV4oA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.30.1",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.30.1.tgz",
      "integrity": "sha512-PVqXh48wh4T53F/1CCu8PIPCxLzWyCnn/9T5W1Jpmdy5h9Cwd+0YQS6/LwhHXSafuc61/xg9Lv5OrCby6a++jg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.18",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.18.tgz",
      "integrity": "sha512-yi8swmWbO17qHhwIBNeeZxTceJMeBvWJaId6dyvTSOwTipqeHhMhOrz6513r1sOKnpvQ7zkhlG8tPrpilwTxHQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/minipass": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz",
      "integrity": "sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/minizlib": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-3.0.2.tgz",
      "integrity": "sha512-oG62iEk+CYt5Xj2YqI5Xi9xWUeZhDI8jjQmC5oThVH5JGCTgIjr7ciJDzC7MBzYd//WvR1OTmP5Q38Q8ShQtVA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "minipass": "^7.1.2"
      },
      "engines": {
        "node": ">= 18"
      }
    },
    "node_modules/mkdirp": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-3.0.1.tgz",
      "integrity": "sha512-+NsyUUAZDmo6YVHzL/stxSu3t9YS1iljliy3BSDrXJ/dkn1KYdmtZODGGjLcc9XLgVVpH4KshHB8XmZgMhaBXg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "mkdirp": "dist/cjs/src/bin.js"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/next": {
      "version": "15.5.2",
      "resolved": "https://registry.npmjs.org/next/-/next-15.5.2.tgz",
      "integrity": "sha512-H8Otr7abj1glFhbGnvUt3gz++0AF1+QoCXEBmd/6aKbfdFwrn0LpA836Ed5+00va/7HQSDD+mOoVhn3tNy3e/Q==",
      "license": "MIT",
      "dependencies": {
        "@next/env": "15.5.2",
        "@swc/helpers": "0.5.15",
        "caniuse-lite": "^1.0.30001579",
        "postcss": "8.4.31",
        "styled-jsx": "5.1.6"
      },
      "bin": {
        "next": "dist/bin/next"
      },
      "engines": {
        "node": "^18.18.0 || ^19.8.0 || >= 20.0.0"
      },
      "optionalDependencies": {
        "@next/swc-darwin-arm64": "15.5.2",
        "@next/swc-darwin-x64": "15.5.2",
        "@next/swc-linux-arm64-gnu": "15.5.2",
        "@next/swc-linux-arm64-musl": "15.5.2",
        "@next/swc-linux-x64-gnu": "15.5.2",
        "@next/swc-linux-x64-musl": "15.5.2",
        "@next/swc-win32-arm64-msvc": "15.5.2",
        "@next/swc-win32-x64-msvc": "15.5.2",
        "sharp": "^0.34.3"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.1.0",
        "@playwright/test": "^1.51.1",
        "babel-plugin-react-compiler": "*",
        "react": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "react-dom": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "sass": "^1.3.0"
      },
      "peerDependenciesMeta": {
        "@opentelemetry/api": {
          "optional": true
        },
        "@playwright/test": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        },
        "sass": {
          "optional": true
        }
      }
    },
    "node_modules/next/node_modules/postcss": {
      "version": "8.4.31",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.31.tgz",
      "integrity": "sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.6",
        "picocolors": "^1.0.0",
        "source-map-js": "^1.0.2"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/node-fetch-native": {
      "version": "1.6.7",
      "resolved": "https://registry.npmjs.org/node-fetch-native/-/node-fetch-native-1.6.7.tgz",
      "integrity": "sha512-g9yhqoedzIUm0nTnTqAQvueMPVOuIY16bqgAJJC8XOOubYFNwz6IER9qs0Gq2Xd0+CecCKFjtdDTMA4u4xG06Q==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/node-releases": {
      "version": "2.0.20",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.20.tgz",
      "integrity": "sha512-7gK6zSXEH6neM212JgfYFXe+GmZQM+fia5SsusuBIUgnPheLFBmIPhtFoAQRj8/7wASYQnbDlHPVwY0BefoFgA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/normalize-path": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/normalize-range": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",
      "integrity": "sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/nypm": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/nypm/-/nypm-0.6.1.tgz",
      "integrity": "sha512-hlacBiRiv1k9hZFiphPUkfSQ/ZfQzZDzC+8z0wL3lvDAOUu/2NnChkKuMoMjNur/9OpKuz2QsIeiPVN0xM5Q0w==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "citty": "^0.1.6",
        "consola": "^3.4.2",
        "pathe": "^2.0.3",
        "pkg-types": "^2.2.0",
        "tinyexec": "^1.0.1"
      },
      "bin": {
        "nypm": "dist/cli.mjs"
      },
      "engines": {
        "node": "^14.16.0 || >=16.10.0"
      }
    },
    "node_modules/ohash": {
      "version": "2.0.11",
      "resolved": "https://registry.npmjs.org/ohash/-/ohash-2.0.11.tgz",
      "integrity": "sha512-RdR9FQrFwNBNXAr4GixM8YaRZRJ5PUWbKYbE5eOsrwAjJW0q2REGcf79oYPsLyskQCZG1PLN+S/K1V00joZAoQ==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/pathe": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/pathe/-/pathe-2.0.3.tgz",
      "integrity": "sha512-WUjGcAqP1gQacoQe+OBJsFA7Ld4DyXuUIjZ5cc75cLHvJ7dtNsTugphxIADwspS+AraAUePCKrSVtPLFj/F88w==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/perfect-debounce": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/perfect-debounce/-/perfect-debounce-1.0.0.tgz",
      "integrity": "sha512-xCy9V055GLEqoFaHoC1SoLIaLmWctgCUaBaWxDZ7/Zx4CTyX7cJQLJOok/orfjZAh9kEYpjJa4d0KcJmCbctZA==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/pkg-types": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/pkg-types/-/pkg-types-2.3.0.tgz",
      "integrity": "sha512-SIqCzDRg0s9npO5XQ3tNZioRY1uK06lA41ynBC1YmFTmnY6FjUjVt6s4LoADmwoig1qqD0oK8h1p/8mlMx8Oig==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "confbox": "^0.2.2",
        "exsolve": "^1.0.7",
        "pathe": "^2.0.3"
      }
    },
    "node_modules/playwright": {
      "version": "1.55.0",
      "resolved": "https://registry.npmjs.org/playwright/-/playwright-1.55.0.tgz",
      "integrity": "sha512-sdCWStblvV1YU909Xqx0DhOjPZE4/5lJsIS84IfN9dAZfcl/CIZ5O8l3o0j7hPMjDvqoTF8ZUcc+i/GL5erstA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "playwright-core": "1.55.0"
      },
      "bin": {
        "playwright": "cli.js"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "fsevents": "2.3.2"
      }
    },
    "node_modules/playwright-core": {
      "version": "1.55.0",
      "resolved": "https://registry.npmjs.org/playwright-core/-/playwright-core-1.55.0.tgz",
      "integrity": "sha512-GvZs4vU3U5ro2nZpeiwyb0zuFaqb9sUiAJuyrWpcGouD8y9/HLgGbNRjIph7zU9D3hnPaisMl9zG9CgFi/biIg==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "playwright-core": "cli.js"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/playwright/node_modules/fsevents": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
      "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.6",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.6.tgz",
      "integrity": "sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/prisma": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/prisma/-/prisma-6.15.0.tgz",
      "integrity": "sha512-E6RCgOt+kUVtjtZgLQDBJ6md2tDItLJNExwI0XJeBc1FKL+Vwb+ovxXxuok9r8oBgsOXBA33fGDuE/0qDdCWqQ==",
      "devOptional": true,
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@prisma/config": "6.15.0",
        "@prisma/engines": "6.15.0"
      },
      "bin": {
        "prisma": "build/index.js"
      },
      "engines": {
        "node": ">=18.18"
      },
      "peerDependencies": {
        "typescript": ">=5.1.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/pure-rand": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/pure-rand/-/pure-rand-6.1.0.tgz",
      "integrity": "sha512-bVWawvoZoBYpp6yIoQtQXHZjmz35RSVHnUOTefl8Vcjr8snTPY1wnpSPMWekcFwbxI6gtmT7rSYPFvz71ldiOA==",
      "devOptional": true,
      "funding": [
        {
          "type": "individual",
          "url": "https://github.com/sponsors/dubzzz"
        },
        {
          "type": "opencollective",
          "url": "https://opencollective.com/fast-check"
        }
      ],
      "license": "MIT"
    },
    "node_modules/rc9": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/rc9/-/rc9-2.1.2.tgz",
      "integrity": "sha512-btXCnMmRIBINM2LDZoEmOogIZU7Qe7zn4BpomSKZ/ykbLObuBdvG+mFq11DL6fjH1DRwHhrlgtYWG96bJiC7Cg==",
      "devOptional": true,
      "license": "MIT",
      "dependencies": {
        "defu": "^6.1.4",
        "destr": "^2.0.3"
      }
    },
    "node_modules/react": {
      "version": "19.1.0",
      "resolved": "https://registry.npmjs.org/react/-/react-19.1.0.tgz",
      "integrity": "sha512-FS+XFBNvn3GTAWq26joslQgWNoFu08F4kl0J4CgdNKADkdSGXQyTCnKteIAJy96Br6YbpEU1LSzV5dYtjMkMDg==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.1.0",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.1.0.tgz",
      "integrity": "sha512-Xs1hdnE+DyKgeHJeJznQmYMIBG3TKIHJJT95Q58nHLSrElKlGQqDTR2HQ9fx5CN/Gk6Vh/kupBTDLU11/nDk/g==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.26.0"
      },
      "peerDependencies": {
        "react": "^19.1.0"
      }
    },
    "node_modules/readdirp": {
      "version": "3.6.0",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz",
      "integrity": "sha512-hOS089on8RduqdbhvQ5Z37A0ESjsqz6qnRcffsMU3495FuTdqSm+7bhJ29JvIOsBDEEnan5DPu9t3To9VRlMzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "picomatch": "^2.2.1"
      },
      "engines": {
        "node": ">=8.10.0"
      }
    },
    "node_modules/resolve-pkg-maps": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
      "integrity": "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
      }
    },
    "node_modules/scheduler": {
      "version": "0.26.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.26.0.tgz",
      "integrity": "sha512-NlHwttCI/l5gCPR3D1nNXtWABUmBwvZpEQiD4IXSbIDq8BzLIK/7Ir5gTFSGZDUu37K5cMNp0hFtzO38sC7gWA==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "7.7.2",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.7.2.tgz",
      "integrity": "sha512-RF0Fw+rO5AMf9MAyaRXI4AV0Ulj5lMHqVxxdSgiVbixSCXoEmmX/jk0CuJw4+3SqroYO9VoUh+HcuJivvtJemA==",
      "license": "ISC",
      "optional": true,
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/sharp": {
      "version": "0.34.3",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.34.3.tgz",
      "integrity": "sha512-eX2IQ6nFohW4DbvHIOLRB3MHFpYqaqvXd3Tp5e/T/dSH83fxaNJQRvDMhASmkNTsNTVF2/OOopzRCt7xokgPfg==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "color": "^4.2.3",
        "detect-libc": "^2.0.4",
        "semver": "^7.7.2"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.34.3",
        "@img/sharp-darwin-x64": "0.34.3",
        "@img/sharp-libvips-darwin-arm64": "1.2.0",
        "@img/sharp-libvips-darwin-x64": "1.2.0",
        "@img/sharp-libvips-linux-arm": "1.2.0",
        "@img/sharp-libvips-linux-arm64": "1.2.0",
        "@img/sharp-libvips-linux-ppc64": "1.2.0",
        "@img/sharp-libvips-linux-s390x": "1.2.0",
        "@img/sharp-libvips-linux-x64": "1.2.0",
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.0",
        "@img/sharp-libvips-linuxmusl-x64": "1.2.0",
        "@img/sharp-linux-arm": "0.34.3",
        "@img/sharp-linux-arm64": "0.34.3",
        "@img/sharp-linux-ppc64": "0.34.3",
        "@img/sharp-linux-s390x": "0.34.3",
        "@img/sharp-linux-x64": "0.34.3",
        "@img/sharp-linuxmusl-arm64": "0.34.3",
        "@img/sharp-linuxmusl-x64": "0.34.3",
        "@img/sharp-wasm32": "0.34.3",
        "@img/sharp-win32-arm64": "0.34.3",
        "@img/sharp-win32-ia32": "0.34.3",
        "@img/sharp-win32-x64": "0.34.3"
      }
    },
    "node_modules/simple-swizzle": {
      "version": "0.2.2",
      "resolved": "https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.2.tgz",
      "integrity": "sha512-JA//kQgZtbuY83m+xT+tXJkmJncGMTFT+C+g2h2R9uxkYIrE2yy9sgmcLhCnw57/WSD+Eh3J97FPEDFnbXnDUg==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "is-arrayish": "^0.3.1"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/styled-jsx": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.6.tgz",
      "integrity": "sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==",
      "license": "MIT",
      "dependencies": {
        "client-only": "0.0.1"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "peerDependencies": {
        "react": ">= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        },
        "babel-plugin-macros": {
          "optional": true
        }
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.1.13",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.1.13.tgz",
      "integrity": "sha512-i+zidfmTqtwquj4hMEwdjshYYgMbOrPzb9a0M3ZgNa0JMoZeFC6bxZvO8yr8ozS6ix2SDz0+mvryPeBs2TFE+w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.2.3.tgz",
      "integrity": "sha512-ZL6DDuAlRlLGghwcfmSn9sK3Hr6ArtyudlSAiCqQ6IfE+b+HHbydbYDIG15IfS5do+7XQQBdBiubF/cV2dnDzg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tar": {
      "version": "7.4.3",
      "resolved": "https://registry.npmjs.org/tar/-/tar-7.4.3.tgz",
      "integrity": "sha512-5S7Va8hKfV7W5U6g3aYxXmlPoZVAwUMy9AOKyF2fVuZa2UD3qZjg578OrLRt8PcNN1PleVaL/5/yYATNL0ICUw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@isaacs/fs-minipass": "^4.0.0",
        "chownr": "^3.0.0",
        "minipass": "^7.1.2",
        "minizlib": "^3.0.1",
        "mkdirp": "^3.0.1",
        "yallist": "^5.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/tinyexec": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/tinyexec/-/tinyexec-1.0.1.tgz",
      "integrity": "sha512-5uC6DDlmeqiOwCPmK9jMSdOuZTh8bU39Ys6yidB+UTt5hfZUPGAypSgFRiEp+jbi9qH40BLDvy85jIU88wKSqw==",
      "devOptional": true,
      "license": "MIT"
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/tsx": {
      "version": "4.20.5",
      "resolved": "https://registry.npmjs.org/tsx/-/tsx-4.20.5.tgz",
      "integrity": "sha512-+wKjMNU9w/EaQayHXb7WA7ZaHY6hN8WgfvHNQ3t1PnU91/7O8TcTnIhCDYTZwnt8JsO9IBqZ30Ln1r7pPF52Aw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "~0.25.0",
        "get-tsconfig": "^4.7.5"
      },
      "bin": {
        "tsx": "dist/cli.mjs"
      },
      "engines": {
        "node": ">=18.0.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.2",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.2.tgz",
      "integrity": "sha512-CWBzXQrc/qOkhidw1OzBTQuYRbfyxDXJMVJ1XNwUHGROVmuaeiEm3OslpZ1RV96d7SKKjZKrSJu3+t/xlw3R9A==",
      "devOptional": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/update-browserslist-db": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.3.tgz",
      "integrity": "sha512-UxhIZQ+QInVdunkDAaiazvvT/+fXL5Osr0JZlJulepYu6Jd7qJtDZjlur0emRlT71EN3ScPoE7gvsuIKKNavKw==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/yallist": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-5.0.0.tgz",
      "integrity": "sha512-YgvUTfwqyc7UXVMrB+SImsVYSmTS8X/tSrtdNZMImM+n7+QTriRXyXim0mBrTXNeqzVF0KWGgHPeiyViFFrNDw==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "engines": {
        "node": ">=18"
      }
    }
  }
}

```

---

## package.json

```json
{
  "name": "inventory-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "biome check",
    "format": "biome format --write",
    "build:summary": "node src/scripts/build-summary.mjs",
    "watch:summary": "node src/scripts/build-summary.mjs --watch",
    "prepare": "husky"
  },
  "dependencies": {
    "@prisma/client": "^6.15.0",
    "next": "15.5.2",
    "react": "19.1.0",
    "react-dom": "19.1.0"
  },
  "devDependencies": {
    "@biomejs/biome": "2.2.0",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20.19.13",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "autoprefixer": "^10.4.21",
    "chokidar": "^3.6.0",
    "husky": "^9.1.7",
    "playwright": "^1.55.0",
    "postcss": "^8.5.6",
    "prisma": "^6.15.0",
    "tailwindcss": "^4.1.13",
    "tsx": "^4.20.5",
    "typescript": "^5"
  },
  "prisma": {
    "seed": "tsx prisma/seed.ts"
  }
}

```

---

## postcss.config.mjs

```js
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;

```

---

## prisma/migrations/20250902053732_init/migration.sql

```sql
-- CreateTable
CREATE TABLE "public"."Package" (
    "id" TEXT NOT NULL,
    "packageNumber" TEXT,
    "proxyName" TEXT,
    "proxyPageUrl" TEXT,
    "purchaseDate" TIMESTAMP(3),
    "currency" TEXT NOT NULL DEFAULT 'JPY',
    "proxyFeeTotal" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "intlShippingTotal" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "domesticShippingTotal" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "customsTotal" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "trackingNumber" TEXT,
    "trackingCarrier" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Package_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SubPackage" (
    "id" TEXT NOT NULL,
    "packageId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "weightG" INTEGER,
    "notes" TEXT,

    CONSTRAINT "SubPackage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Type" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Brand" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Platform" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Item" (
    "id" TEXT NOT NULL,
    "packageId" TEXT NOT NULL,
    "subPackageId" TEXT NOT NULL,
    "title" TEXT,
    "photoUrl" TEXT,
    "priceWeight" DECIMAL(12,4) NOT NULL DEFAULT 0,
    "categoryId" TEXT,
    "typeId" TEXT,
    "brandId" TEXT,
    "platformId" TEXT,
    "quantityIndex" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Package_packageNumber_idx" ON "public"."Package"("packageNumber");

-- CreateIndex
CREATE INDEX "SubPackage_packageId_idx" ON "public"."SubPackage"("packageId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "public"."Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Type_name_key" ON "public"."Type"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Brand_name_key" ON "public"."Brand"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Platform_name_key" ON "public"."Platform"("name");

-- CreateIndex
CREATE INDEX "Item_packageId_idx" ON "public"."Item"("packageId");

-- CreateIndex
CREATE INDEX "Item_subPackageId_idx" ON "public"."Item"("subPackageId");

-- CreateIndex
CREATE INDEX "Item_categoryId_idx" ON "public"."Item"("categoryId");

-- CreateIndex
CREATE INDEX "Item_typeId_idx" ON "public"."Item"("typeId");

-- CreateIndex
CREATE INDEX "Item_brandId_idx" ON "public"."Item"("brandId");

-- CreateIndex
CREATE INDEX "Item_platformId_idx" ON "public"."Item"("platformId");

-- AddForeignKey
ALTER TABLE "public"."SubPackage" ADD CONSTRAINT "SubPackage_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "public"."Package"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "public"."Package"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_subPackageId_fkey" FOREIGN KEY ("subPackageId") REFERENCES "public"."SubPackage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "public"."Type"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "public"."Brand"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Item" ADD CONSTRAINT "Item_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "public"."Platform"("id") ON DELETE SET NULL ON UPDATE CASCADE;

```

---

## prisma/migrations/20250908132734_scrape_pkg_unique_pkgnum_and_titles/migration.sql

```sql
-- CreateTable
CREATE TABLE "public"."ScrapedPackage" (
    "id" TEXT NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'buyee',
    "pageUrl" TEXT NOT NULL,
    "dateShipped" TIMESTAMP(3),
    "packageNumber" TEXT NOT NULL,
    "intlTrackingNumber" TEXT,
    "intlTrackingUrl" TEXT,
    "internationalShippingFeeYen" DECIMAL(12,2),
    "domesticShippingFeeYen" DECIMAL(12,2),
    "raw" JSONB,
    "firstSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ScrapedPackage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ScrapedItem" (
    "id" TEXT NOT NULL,
    "scrapedPackageId" TEXT NOT NULL,
    "orderNumber" TEXT,
    "titleJa" TEXT,
    "titleEn" TEXT,
    "itemUrl" TEXT,
    "listingId" TEXT,
    "priceYen" DECIMAL(12,2),

    CONSTRAINT "ScrapedItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ScrapedPackage_packageNumber_key" ON "public"."ScrapedPackage"("packageNumber");

-- CreateIndex
CREATE INDEX "ScrapedPackage_dateShipped_idx" ON "public"."ScrapedPackage"("dateShipped");

-- CreateIndex
CREATE INDEX "ScrapedPackage_intlTrackingNumber_idx" ON "public"."ScrapedPackage"("intlTrackingNumber");

-- CreateIndex
CREATE INDEX "ScrapedItem_scrapedPackageId_idx" ON "public"."ScrapedItem"("scrapedPackageId");

-- CreateIndex
CREATE INDEX "ScrapedItem_listingId_idx" ON "public"."ScrapedItem"("listingId");

-- AddForeignKey
ALTER TABLE "public"."ScrapedItem" ADD CONSTRAINT "ScrapedItem_scrapedPackageId_fkey" FOREIGN KEY ("scrapedPackageId") REFERENCES "public"."ScrapedPackage"("id") ON DELETE CASCADE ON UPDATE CASCADE;

```

---

## prisma/migrations/20250909225431_add_listing_image_cache/migration.sql

```sql
-- CreateTable
CREATE TABLE "public"."ListingImageCache" (
    "listingId" TEXT NOT NULL,
    "source" TEXT,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ListingImageCache_pkey" PRIMARY KEY ("listingId")
);

```

---

## prisma/migrations/20250910175013_add_status_to_scrapedpackage/migration.sql

```sql
-- CreateEnum
CREATE TYPE "public"."PackageStatus" AS ENUM ('Todo', 'Processed', 'Blacklist');

-- AlterTable
ALTER TABLE "public"."ScrapedPackage" ADD COLUMN     "status" "public"."PackageStatus" NOT NULL DEFAULT 'Todo';

```

---

## prisma/migrations/20250913114748_add_tags/migration.sql

```sql
/*
  Warnings:

  - You are about to drop the column `brandId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `photoUrl` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `platformId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `quantityIndex` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `weightG` on the `SubPackage` table. All the data in the column will be lost.
  - You are about to drop the `Brand` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Platform` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Type` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Item" DROP CONSTRAINT "Item_brandId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Item" DROP CONSTRAINT "Item_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Item" DROP CONSTRAINT "Item_platformId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Item" DROP CONSTRAINT "Item_typeId_fkey";

-- DropIndex
DROP INDEX "public"."Item_brandId_idx";

-- DropIndex
DROP INDEX "public"."Item_categoryId_idx";

-- DropIndex
DROP INDEX "public"."Item_platformId_idx";

-- DropIndex
DROP INDEX "public"."Item_typeId_idx";

-- AlterTable
ALTER TABLE "public"."Item" DROP COLUMN "brandId",
DROP COLUMN "categoryId",
DROP COLUMN "createdAt",
DROP COLUMN "photoUrl",
DROP COLUMN "platformId",
DROP COLUMN "quantityIndex",
DROP COLUMN "title",
DROP COLUMN "typeId";

-- AlterTable
ALTER TABLE "public"."Package" ADD COLUMN     "priceYen" DECIMAL(12,2);

-- AlterTable
ALTER TABLE "public"."SubPackage" DROP COLUMN "weightG",
ADD COLUMN     "priceWeight" INTEGER;

-- DropTable
DROP TABLE "public"."Brand";

-- DropTable
DROP TABLE "public"."Category";

-- DropTable
DROP TABLE "public"."Platform";

-- DropTable
DROP TABLE "public"."Type";

-- CreateTable
CREATE TABLE "public"."Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "parentId" TEXT,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ItemTag" (
    "itemId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "ItemTag_pkey" PRIMARY KEY ("itemId","tagId")
);

-- CreateTable
CREATE TABLE "public"."TagClosure" (
    "ancestorId" TEXT NOT NULL,
    "descendantId" TEXT NOT NULL,
    "depth" INTEGER NOT NULL,

    CONSTRAINT "TagClosure_pkey" PRIMARY KEY ("ancestorId","descendantId")
);

-- CreateIndex
CREATE INDEX "Tag_name_idx" ON "public"."Tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_parentId_name_key" ON "public"."Tag"("parentId", "name");

-- CreateIndex
CREATE INDEX "ItemTag_tagId_idx" ON "public"."ItemTag"("tagId");

-- CreateIndex
CREATE INDEX "TagClosure_descendantId_depth_idx" ON "public"."TagClosure"("descendantId", "depth");

-- CreateIndex
CREATE INDEX "TagClosure_ancestorId_depth_idx" ON "public"."TagClosure"("ancestorId", "depth");

-- AddForeignKey
ALTER TABLE "public"."Tag" ADD CONSTRAINT "Tag_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."Tag"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemTag" ADD CONSTRAINT "ItemTag_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "public"."Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ItemTag" ADD CONSTRAINT "ItemTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "public"."Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TagClosure" ADD CONSTRAINT "TagClosure_ancestorId_fkey" FOREIGN KEY ("ancestorId") REFERENCES "public"."Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TagClosure" ADD CONSTRAINT "TagClosure_descendantId_fkey" FOREIGN KEY ("descendantId") REFERENCES "public"."Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

```

---

## prisma/migrations/20250913115552_add_tags/migration.sql

```sql
-- DropForeignKey
ALTER TABLE "public"."TagClosure" DROP CONSTRAINT "TagClosure_ancestorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TagClosure" DROP CONSTRAINT "TagClosure_descendantId_fkey";

-- AddForeignKey
ALTER TABLE "public"."TagClosure" ADD CONSTRAINT "TagClosure_ancestorId_fkey" FOREIGN KEY ("ancestorId") REFERENCES "public"."Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TagClosure" ADD CONSTRAINT "TagClosure_descendantId_fkey" FOREIGN KEY ("descendantId") REFERENCES "public"."Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

```

---

## prisma/migrations/20250913121932_tag_dag_relations/migration.sql

```sql
/*
  Warnings:

  - You are about to drop the column `parentId` on the `Tag` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Tag` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "public"."Tag" DROP CONSTRAINT "Tag_parentId_fkey";

-- DropIndex
DROP INDEX "public"."Tag_parentId_name_key";

-- AlterTable
ALTER TABLE "public"."Tag" DROP COLUMN "parentId";

-- CreateTable
CREATE TABLE "public"."TagRelation" (
    "parentId" TEXT NOT NULL,
    "childId" TEXT NOT NULL,

    CONSTRAINT "TagRelation_pkey" PRIMARY KEY ("parentId","childId")
);

-- CreateIndex
CREATE INDEX "TagRelation_childId_idx" ON "public"."TagRelation"("childId");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "public"."Tag"("name");

-- AddForeignKey
ALTER TABLE "public"."TagRelation" ADD CONSTRAINT "TagRelation_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "public"."Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TagRelation" ADD CONSTRAINT "TagRelation_childId_fkey" FOREIGN KEY ("childId") REFERENCES "public"."Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

```

---

## prisma/migrations/20250913153940_add_tag_placements/migration.sql

```sql
-- CreateTable
CREATE TABLE "public"."TagPlacement" (
    "id" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,
    "parentPlacementId" TEXT,

    CONSTRAINT "TagPlacement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PlacementClosure" (
    "ancestorPlacementId" TEXT NOT NULL,
    "descendantPlacementId" TEXT NOT NULL,
    "depth" INTEGER NOT NULL,

    CONSTRAINT "PlacementClosure_pkey" PRIMARY KEY ("ancestorPlacementId","descendantPlacementId")
);

-- CreateIndex
CREATE INDEX "TagPlacement_tagId_idx" ON "public"."TagPlacement"("tagId");

-- CreateIndex
CREATE UNIQUE INDEX "TagPlacement_parentPlacementId_tagId_key" ON "public"."TagPlacement"("parentPlacementId", "tagId");

-- CreateIndex
CREATE INDEX "PlacementClosure_descendantPlacementId_depth_idx" ON "public"."PlacementClosure"("descendantPlacementId", "depth");

-- CreateIndex
CREATE INDEX "PlacementClosure_ancestorPlacementId_depth_idx" ON "public"."PlacementClosure"("ancestorPlacementId", "depth");

-- AddForeignKey
ALTER TABLE "public"."TagPlacement" ADD CONSTRAINT "TagPlacement_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "public"."Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TagPlacement" ADD CONSTRAINT "TagPlacement_parentPlacementId_fkey" FOREIGN KEY ("parentPlacementId") REFERENCES "public"."TagPlacement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PlacementClosure" ADD CONSTRAINT "PlacementClosure_ancestorPlacementId_fkey" FOREIGN KEY ("ancestorPlacementId") REFERENCES "public"."TagPlacement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PlacementClosure" ADD CONSTRAINT "PlacementClosure_descendantPlacementId_fkey" FOREIGN KEY ("descendantPlacementId") REFERENCES "public"."TagPlacement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

```

---

## prisma/migrations/20250913164559_inventory_filler_models/migration.sql

```sql
/*
  Warnings:

  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ItemTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Package` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubPackage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagClosure` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagRelation` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "public"."InventoryOriginType" AS ENUM ('Scraped', 'Manual');

-- CreateEnum
CREATE TYPE "public"."FillSourceType" AS ENUM ('ScrapedPackage', 'Manual');

-- DropForeignKey
ALTER TABLE "public"."Item" DROP CONSTRAINT "Item_packageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Item" DROP CONSTRAINT "Item_subPackageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ItemTag" DROP CONSTRAINT "ItemTag_itemId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ItemTag" DROP CONSTRAINT "ItemTag_tagId_fkey";

-- DropForeignKey
ALTER TABLE "public"."SubPackage" DROP CONSTRAINT "SubPackage_packageId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TagClosure" DROP CONSTRAINT "TagClosure_ancestorId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TagClosure" DROP CONSTRAINT "TagClosure_descendantId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TagRelation" DROP CONSTRAINT "TagRelation_childId_fkey";

-- DropForeignKey
ALTER TABLE "public"."TagRelation" DROP CONSTRAINT "TagRelation_parentId_fkey";

-- DropTable
DROP TABLE "public"."Item";

-- DropTable
DROP TABLE "public"."ItemTag";

-- DropTable
DROP TABLE "public"."Package";

-- DropTable
DROP TABLE "public"."SubPackage";

-- DropTable
DROP TABLE "public"."TagClosure";

-- DropTable
DROP TABLE "public"."TagRelation";

-- CreateTable
CREATE TABLE "public"."InventoryItem" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "originType" "public"."InventoryOriginType" NOT NULL,
    "scrapedItemId" TEXT,
    "manualLineId" TEXT,
    "fillEntryId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InventoryItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."InventoryItemTag" (
    "itemId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "InventoryItemTag_pkey" PRIMARY KEY ("itemId","tagId")
);

-- CreateTable
CREATE TABLE "public"."ManualPurchase" (
    "id" TEXT NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'JPY',
    "intlShippingTotalYen" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "domesticShippingTotalYen" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "customsTotalYen" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "subtotalYen" DECIMAL(12,2),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ManualPurchase_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ManualLine" (
    "id" TEXT NOT NULL,
    "manualPurchaseId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "priceYen" DECIMAL(12,2) NOT NULL,

    CONSTRAINT "ManualLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."InventoryFillSession" (
    "id" TEXT NOT NULL,
    "sourceType" "public"."FillSourceType" NOT NULL,
    "scrapedPackageId" TEXT,
    "manualPurchaseId" TEXT,
    "customsTotalYen" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "InventoryFillSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."InventoryFillSourceItem" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "scrapedItemId" TEXT,
    "manualLineId" TEXT,
    "shippingWeightPpm" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "InventoryFillSourceItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."InventoryFillEntry" (
    "id" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "sourceItemId" TEXT NOT NULL,
    "nameOverride" TEXT,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "priceWeightPpm" INTEGER NOT NULL DEFAULT 0,
    "shippingWeightPpm" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "InventoryFillEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."InventoryFillEntryTag" (
    "entryId" TEXT NOT NULL,
    "tagId" TEXT NOT NULL,

    CONSTRAINT "InventoryFillEntryTag_pkey" PRIMARY KEY ("entryId","tagId")
);

-- CreateIndex
CREATE INDEX "InventoryItem_scrapedItemId_idx" ON "public"."InventoryItem"("scrapedItemId");

-- CreateIndex
CREATE INDEX "InventoryItem_manualLineId_idx" ON "public"."InventoryItem"("manualLineId");

-- CreateIndex
CREATE INDEX "InventoryItem_fillEntryId_idx" ON "public"."InventoryItem"("fillEntryId");

-- CreateIndex
CREATE INDEX "InventoryItemTag_tagId_idx" ON "public"."InventoryItemTag"("tagId");

-- CreateIndex
CREATE INDEX "ManualLine_manualPurchaseId_idx" ON "public"."ManualLine"("manualPurchaseId");

-- CreateIndex
CREATE INDEX "InventoryFillSession_scrapedPackageId_idx" ON "public"."InventoryFillSession"("scrapedPackageId");

-- CreateIndex
CREATE INDEX "InventoryFillSession_manualPurchaseId_idx" ON "public"."InventoryFillSession"("manualPurchaseId");

-- CreateIndex
CREATE INDEX "InventoryFillSourceItem_sessionId_idx" ON "public"."InventoryFillSourceItem"("sessionId");

-- CreateIndex
CREATE INDEX "InventoryFillSourceItem_scrapedItemId_idx" ON "public"."InventoryFillSourceItem"("scrapedItemId");

-- CreateIndex
CREATE INDEX "InventoryFillSourceItem_manualLineId_idx" ON "public"."InventoryFillSourceItem"("manualLineId");

-- CreateIndex
CREATE INDEX "InventoryFillEntry_sessionId_idx" ON "public"."InventoryFillEntry"("sessionId");

-- CreateIndex
CREATE INDEX "InventoryFillEntry_sourceItemId_idx" ON "public"."InventoryFillEntry"("sourceItemId");

-- CreateIndex
CREATE INDEX "InventoryFillEntryTag_tagId_idx" ON "public"."InventoryFillEntryTag"("tagId");

-- AddForeignKey
ALTER TABLE "public"."InventoryItemTag" ADD CONSTRAINT "InventoryItemTag_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "public"."InventoryItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InventoryItemTag" ADD CONSTRAINT "InventoryItemTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "public"."Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ManualLine" ADD CONSTRAINT "ManualLine_manualPurchaseId_fkey" FOREIGN KEY ("manualPurchaseId") REFERENCES "public"."ManualPurchase"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InventoryFillSourceItem" ADD CONSTRAINT "InventoryFillSourceItem_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "public"."InventoryFillSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InventoryFillEntry" ADD CONSTRAINT "InventoryFillEntry_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "public"."InventoryFillSession"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InventoryFillEntry" ADD CONSTRAINT "InventoryFillEntry_sourceItemId_fkey" FOREIGN KEY ("sourceItemId") REFERENCES "public"."InventoryFillSourceItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InventoryFillEntryTag" ADD CONSTRAINT "InventoryFillEntryTag_entryId_fkey" FOREIGN KEY ("entryId") REFERENCES "public"."InventoryFillEntry"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InventoryFillEntryTag" ADD CONSTRAINT "InventoryFillEntryTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "public"."Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

```

---

## prisma/migrations/20250913175233_filler_idempotency/migration.sql

```sql
/*
  Warnings:

  - A unique constraint covering the columns `[fillEntryId,ordinal]` on the table `InventoryItem` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "public"."InventoryFillSession" ADD COLUMN     "finalizedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "public"."InventoryItem" ADD COLUMN     "ordinal" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "InventoryItem_fillEntryId_ordinal_key" ON "public"."InventoryItem"("fillEntryId", "ordinal");

```

---

## prisma/migrations/20250913212928_add_tag_placement_refs/migration.sql

```sql
-- AlterTable
ALTER TABLE "public"."InventoryFillEntryTag" ADD COLUMN     "placementId" TEXT;

-- AlterTable
ALTER TABLE "public"."InventoryItemTag" ADD COLUMN     "placementId" TEXT;

```

---

## prisma/migrations/20250917211750_add_fx_rate_cache/migration.sql

```sql
-- CreateTable
CREATE TABLE "public"."FxRate" (
    "date" TIMESTAMP(3) NOT NULL,
    "base" TEXT NOT NULL,
    "quote" TEXT NOT NULL,
    "rate" DECIMAL(20,10) NOT NULL,
    "source" TEXT NOT NULL DEFAULT 'frankfurter',
    "fetchedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FxRate_pkey" PRIMARY KEY ("date","base","quote")
);

-- CreateIndex
CREATE INDEX "FxRate_base_quote_idx" ON "public"."FxRate"("base", "quote");

```

---

## prisma/migrations/20250924092120_add_inventory_condition/migration.sql

```sql
-- CreateEnum
CREATE TYPE "public"."InventoryCondition" AS ENUM ('Loose', 'Boxed', 'CIB', 'NIB');

-- AlterTable
ALTER TABLE "public"."InventoryFillEntry" ADD COLUMN     "condition" "public"."InventoryCondition" NOT NULL DEFAULT 'Loose';

-- AlterTable
ALTER TABLE "public"."InventoryItem" ADD COLUMN     "condition" "public"."InventoryCondition" NOT NULL DEFAULT 'Loose';

```

---

## prisma/migrations/migration_lock.toml

```toml
# Please do not edit this file manually
# It should be added in your version-control system (e.g., Git)
provider = "postgresql"

```

---

## prisma/schema.prisma

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model FxRate {
  date     DateTime
  base     String
  quote    String
  rate     Decimal    @db.Decimal(20, 10)
  source   String     @default("frankfurter")
  fetchedAt DateTime  @default(now())

  @@id([date, base, quote])
  @@index([base, quote])
}

model ListingImageCache {
  listingId String   @id
  source    String?
  url       String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

/// =====================
/// NEW INVENTORY MODELS
/// =====================

enum InventoryOriginType {
  Scraped
  Manual
}

enum InventoryCondition {
  Loose
  Boxed
  CIB
  NIB
}

model InventoryItem {
  id            String               @id @default(uuid())
  name          String
  originType    InventoryOriginType
  scrapedItemId String?
  manualLineId  String?
  fillEntryId   String?
  ordinal       Int?
  createdAt     DateTime             @default(now())

  condition     InventoryCondition   @default(Loose)

  tags          InventoryItemTag[]

  @@index([scrapedItemId])
  @@index([manualLineId])
  @@index([fillEntryId])
  @@unique([fillEntryId, ordinal])
}

model InventoryItemTag {
  itemId String
  tagId  String
  placementId String?

  item   InventoryItem @relation(fields: [itemId], references: [id], onDelete: Cascade)
  tag    Tag           @relation(fields: [tagId], references: [id], onDelete: Cascade)

  @@id([itemId, tagId])
  @@index([tagId])
}

/// =====================
/// MANUAL PURCHASE INPUT
/// =====================

model ManualPurchase {
  id                        String   @id @default(uuid())
  currency                  String   @default("JPY")
  intlShippingTotalYen      Decimal  @default(0) @db.Decimal(12, 2)
  domesticShippingTotalYen  Decimal  @default(0) @db.Decimal(12, 2)
  customsTotalYen           Decimal  @default(0) @db.Decimal(12, 2)
  subtotalYen               Decimal? @db.Decimal(12, 2)
  notes                     String?
  createdAt                 DateTime @default(now())

  lines                     ManualLine[]
}

model ManualLine {
  id               String   @id @default(uuid())
  manualPurchaseId String
  title            String
  priceYen         Decimal  @db.Decimal(12, 2)

  purchase         ManualPurchase @relation(fields: [manualPurchaseId], references: [id], onDelete: Cascade)

  @@index([manualPurchaseId])
}

/// =====================
/// FILL SESSION + INPUTS
/// =====================

enum FillSourceType {
  ScrapedPackage
  Manual
}

model InventoryFillSession {
  id               String         @id @default(uuid())
  sourceType       FillSourceType
  scrapedPackageId String?
  manualPurchaseId String?
  customsTotalYen  Decimal        @default(0) @db.Decimal(12, 2)
  createdAt        DateTime       @default(now())
  finalizedAt      DateTime?

  sourceItems      InventoryFillSourceItem[]
  entries          InventoryFillEntry[]

  @@index([scrapedPackageId])
  @@index([manualPurchaseId])
}

model InventoryFillSourceItem {
  id            String   @id @default(uuid())
  sessionId     String
  scrapedItemId String?
  manualLineId  String?

  shippingWeightPpm Int  @default(0)

  session       InventoryFillSession @relation(fields: [sessionId], references: [id], onDelete: Cascade)
  entries       InventoryFillEntry[]

  @@index([sessionId])
  @@index([scrapedItemId])
  @@index([manualLineId])
}

model InventoryFillEntry {
  id                String   @id @default(uuid())
  sessionId         String
  sourceItemId      String
  nameOverride      String?
  quantity          Int      @default(1)

  priceWeightPpm    Int      @default(0)
  shippingWeightPpm Int      @default(0)

  // NEW: condition chosen at fill-time, copied to InventoryItem(s)
  condition         InventoryCondition @default(Loose)

  entryTags         InventoryFillEntryTag[]

  session           InventoryFillSession    @relation(fields: [sessionId], references: [id], onDelete: Cascade)
  sourceItem        InventoryFillSourceItem @relation(fields: [sourceItemId], references: [id], onDelete: Cascade)

  @@index([sessionId])
  @@index([sourceItemId])
}

model InventoryFillEntryTag {
  entryId String
  tagId   String
  placementId String?

  entry   InventoryFillEntry @relation(fields: [entryId], references: [id], onDelete: Cascade)
  tag     Tag                @relation(fields: [tagId], references: [id], onDelete: Cascade)

  @@id([entryId, tagId])
  @@index([tagId])
}

model Tag {
  id          String  @id @default(uuid())
  name        String
  description String?

  placements      TagPlacement[]
  itemTags        InventoryItemTag[]
  fillEntryTags   InventoryFillEntryTag[]

  @@unique([name])
  @@index([name])
}

model TagPlacement {
  id                String  @id @default(uuid())
  tagId             String
  parentPlacementId String?

  tag      Tag            @relation(fields: [tagId], references: [id], onDelete: Restrict)
  parent   TagPlacement?  @relation("TP_Children", fields: [parentPlacementId], references: [id])
  children TagPlacement[] @relation("TP_Children")

  asAncestor   PlacementClosure[] @relation("PC_Ancestor")
  asDescendant PlacementClosure[] @relation("PC_Descendant")

  @@unique([parentPlacementId, tagId])
  @@index([tagId])
}

model PlacementClosure {
  ancestorPlacementId   String
  descendantPlacementId String
  depth                 Int

  ancestor   TagPlacement @relation("PC_Ancestor", fields: [ancestorPlacementId], references: [id], onDelete: Cascade)
  descendant TagPlacement @relation("PC_Descendant", fields: [descendantPlacementId], references: [id], onDelete: Cascade)

  @@id([ancestorPlacementId, descendantPlacementId])
  @@index([descendantPlacementId, depth])
  @@index([ancestorPlacementId, depth])
}

enum PackageStatus {
  Todo
  Processed
  Blacklist
}

model ScrapedPackage {
  id      String @id @default(uuid())
  source  String @default("buyee")
  pageUrl String

  dateShipped        DateTime?
  packageNumber      String    @unique
  intlTrackingNumber String?
  intlTrackingUrl    String?

  internationalShippingFeeYen Decimal? @db.Decimal(12, 2)
  domesticShippingFeeYen      Decimal? @db.Decimal(12, 2)

  raw         Json?
  firstSeenAt DateTime @default(now())
  lastSeenAt  DateTime @default(now())

  status PackageStatus @default(Todo)

  items ScrapedItem[]

  @@index([dateShipped])
  @@index([intlTrackingNumber])
}

model ScrapedItem {
  id               String   @id @default(uuid())
  scrapedPackageId String
  orderNumber      String?
  titleJa          String?
  titleEn          String?
  itemUrl          String?
  listingId        String?
  priceYen         Decimal? @db.Decimal(12, 2)

  scrapedPackage ScrapedPackage @relation(fields: [scrapedPackageId], references: [id], onDelete: Cascade)

  @@index([scrapedPackageId])
  @@index([listingId])
}

```

---

## prisma/seed.ts

```ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  await prisma.category.createMany({
    data: ["Video game","Arcade"].map(name => ({ name })), skipDuplicates: true
  });
  await prisma.type.createMany({
    data: ["Console","Game","Controller","PCB"].map(name => ({ name })), skipDuplicates: true
  });
  await prisma.brand.createMany({
    data: ["Nintendo","Konami","SEGA","Sony","Taito","SNK","NEC"].map(name => ({ name })), skipDuplicates: true
  });
  await prisma.platform.createMany({
    data: ["Famicom", "Super Famicom","N64","GameBoy","GameBoy Advance", "Gamecube", "Wii", "Wii U", "DS", "3DS","PS1","PS2", "PS3", "PSP", "PSVita", "Mark3", "MegaDrive", "Saturn","Dreamcast", "GameGear", "Neo Geo", "NEC PC Engine"].map(name => ({ name })), skipDuplicates: true
  });
}
main().finally(()=>prisma.$disconnect());
```

---

## src/app/api/fill-sessions/[id]/finalize/route.ts

```ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { PPM_DENOM } from '@/lib/weights';
import { Prisma } from '@prisma/client';

export async function POST(
  _req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;

  const result = await prisma.$transaction(async (db) => {
    const setFinal = await db.inventoryFillSession.updateMany({
      where: { id, finalizedAt: null },
      data: { finalizedAt: new Date() },
    });
    if (setFinal.count === 0) {
      return { created: 0, alreadyFinalized: true };
    }

    const session = await db.inventoryFillSession.findUnique({
      where: { id },
      include: {
        sourceItems: { include: { entries: { include: { entryTags: true } } } },
      },
    });
    if (!session) throw new Error('Session not found after lock');

    const isScraped = session.sourceType === 'ScrapedPackage';

    let intlShip = 0, domShip = 0, customs = Number(session.customsTotalYen ?? 0);
    if (isScraped) {
      const pkg = await db.scrapedPackage.findUnique({ where: { id: session.scrapedPackageId! } });
      intlShip = Number(pkg?.internationalShippingFeeYen ?? 0);
      domShip = Number(pkg?.domesticShippingFeeYen ?? 0);
      // ✅ keep existing status update to Processed
      await db.scrapedPackage.update({
        where: { id: session.scrapedPackageId! },
        data: { status: Prisma.PackageStatus.Processed },
      });
    } else {
      const mp = await db.manualPurchase.findUnique({ where: { id: session.manualPurchaseId! } });
      intlShip = Number(mp?.intlShippingTotalYen ?? 0);
      domShip = Number(mp?.domesticShippingTotalYen ?? 0);
    }
    const pkgShippingTotal = intlShip + domShip;

    const priceByKey: Record<string, number> = {};
    const titleByKey: Record<string, string> = {};
    if (isScraped) {
      const sitems = await db.scrapedItem.findMany({
        where: { scrapedPackageId: session.scrapedPackageId! },
        select: { id: true, priceYen: true, titleEn: true, titleJa: true },
      });
      for (const s of sitems) {
        priceByKey[s.id] = Number(s.priceYen ?? 0);
        titleByKey[s.id] = s.titleEn ?? s.titleJa ?? '(untitled)';
      }
    } else {
      const lines = await db.manualLine.findMany({
        where: { manualPurchaseId: session.manualPurchaseId! },
        select: { id: true, priceYen: true, title: true },
      });
      for (const l of lines) {
        priceByKey[l.id] = Number(l.priceYen ?? 0);
        titleByKey[l.id] = l.title;
      }
    }

    const pkgSubtotal = session.sourceItems.reduce((a, si) => {
      const key = si.scrapedItemId ?? si.manualLineId!;
      return a + (priceByKey[key] ?? 0);
    }, 0);

    let created = 0;

    for (const si of session.sourceItems) {
      const key = si.scrapedItemId ?? si.manualLineId!;
      const sourcePrice = priceByKey[key] ?? 0;
      const sourceShip = Math.round((pkgShippingTotal * si.shippingWeightPpm) / PPM_DENOM);

      for (const e of si.entries) {
        const qty = e.quantity;
        const baseName = e.nameOverride ?? titleByKey[key] ?? '(untitled)';
        const originType = isScraped ? 'Scraped' : 'Manual';

        const rows = Array.from({ length: qty }, (_, i) => ({
          name: baseName,
          originType: originType as any,
          scrapedItemId: si.scrapedItemId ?? null,
          manualLineId: si.manualLineId ?? null,
          fillEntryId: e.id,
          ordinal: i + 1,
          condition: (e as any).condition ?? 'Loose', // ✅ NEW
        }));

        await db.inventoryItem.createMany({ data: rows, skipDuplicates: true });

        const items = await db.inventoryItem.findMany({
          where: { fillEntryId: e.id },
          select: { id: true, ordinal: true },
        });

        const t = e.entryTags[0];
        if (t && items.length) {
          await db.inventoryItemTag.createMany({
            data: items.map(it => ({
              itemId: it.id,
              tagId: t.tagId,
              placementId: t.placementId ?? null,
            })),
            skipDuplicates: true,
          });
        }

        const have = items.length;
        if (have < qty) created += (qty - have);
      }
    }

    return { created, alreadyFinalized: false };
  });

  return NextResponse.json({ ok: true, ...result });
}

```

---

## src/app/api/fill-sessions/[id]/route.ts

```ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { PPM_DENOM } from '@/lib/weights';

function toNum(d: any) {
  if (d == null) return 0;
  if (typeof d === 'number') return d;
  if (typeof d === 'string') return Number(d);
  if (typeof d.toNumber === 'function') return d.toNumber();
  return Number(d);
}

// ===================
// GET /api/fill-sessions/:id
// ===================
export async function GET(
  _req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;

  const session = await prisma.inventoryFillSession.findUnique({
    where: { id },
    include: {
      sourceItems: { include: { entries: { include: { entryTags: true } } } },
    },
  });
  if (!session) return NextResponse.json({ error: 'Session not found' }, { status: 404 });

  const isScraped = session.sourceType === 'ScrapedPackage';

  type Meta = { title: string; priceYen: number; listingId?: string | null };
  const metaByKey: Record<string, Meta> = {};

  let intlShip = 0;
  let domShip = 0;
  let fxDateISO: string | null = null;

  if (isScraped) {
    const pkg = await prisma.scrapedPackage.findUnique({
      where: { id: session.scrapedPackageId! },
      include: { items: true },
    });
    if (!pkg) return NextResponse.json({ error: 'Scraped package not found' }, { status: 404 });

    for (const it of pkg.items) {
      metaByKey[it.id] = {
        title: it.titleEn ?? it.titleJa ?? '(untitled)',
        priceYen: toNum(it.priceYen ?? 0),
        listingId: it.listingId ?? null,
      };
    }

    intlShip = toNum(pkg.internationalShippingFeeYen ?? 0);
    domShip = toNum(pkg.domesticShippingFeeYen ?? 0);
    fxDateISO = pkg.dateShipped ? pkg.dateShipped.toISOString().slice(0, 10) : null;
  } else {
    const mp = await prisma.manualPurchase.findUnique({
      where: { id: session.manualPurchaseId! },
      include: { lines: true },
    });
    if (!mp) return NextResponse.json({ error: 'Manual purchase not found' }, { status: 404 });

    for (const ln of mp.lines) {
      metaByKey[ln.id] = {
        title: ln.title ?? '(untitled)',
        priceYen: toNum(ln.priceYen ?? 0),
        listingId: null,
      };
    }

    // keeping your manual totals field names
    intlShip = toNum((mp as any).intlShippingTotalYen ?? 0);
    domShip = toNum((mp as any).domShippingTotalYen ?? 0);
  }

  return NextResponse.json({
    session: {
      id: session.id,
      sourceType: session.sourceType,
      customsTotalYen: toNum(session.customsTotalYen ?? 0),
      finalizedAt: session.finalizedAt,
    },
    packageTotals: {
      intlShip,
      domShip,
      packageShippingTotal: intlShip + domShip,
    },
    fxDateISO,
    sourceItems: session.sourceItems.map((si) => {
      const key = si.scrapedItemId ?? si.manualLineId!;
      const meta = metaByKey[key] || { title: '(missing)', priceYen: 0, listingId: null };
      return {
        id: si.id,
        scrapedItemId: si.scrapedItemId,
        manualLineId: si.manualLineId,
        listingId: meta.listingId ?? null, // ✅ keep thumbs working
        title: meta.title,
        priceYen: meta.priceYen,
        shippingWeightPpm: si.shippingWeightPpm,
        entries: si.entries.map(e => ({
          id: e.id,
          nameOverride: e.nameOverride,
          quantity: e.quantity,
          priceWeightPpm: e.priceWeightPpm,
          shippingWeightPpm: e.shippingWeightPpm,
          tagId: e.entryTags[0]?.tagId ?? null,
          tagPlacementId: e.entryTags[0]?.placementId ?? null,
          condition: e.condition, // ✅ NEW
        })),
      };
    }),
  }, { status: 200 });
}

// ===================
// PATCH /api/fill-sessions/:id
// ===================
//
// body:
// {
//   customsTotalYen: number,
//   sourceItems: [{ id, shippingWeightPpm }],
//   entriesUpsert: [{
//     id?, sourceItemId, nameOverride, quantity, priceWeightPpm, shippingWeightPpm,
//     tagId, tagPlacementId, condition
//   }]
// }
export async function PATCH(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;
  const body = await req.json();

  await prisma.$transaction(async (db) => {
    if (typeof body.customsTotalYen === 'number' && Number.isFinite(body.customsTotalYen)) {
      await db.inventoryFillSession.update({
        where: { id },
        data: { customsTotalYen: body.customsTotalYen },
      });
    }

    if (Array.isArray(body.sourceItems)) {
      for (const si of body.sourceItems) {
        const ppm = Math.max(0, Math.min(PPM_DENOM, (si.shippingWeightPpm | 0)));
        await db.inventoryFillSourceItem.update({
          where: { id: si.id },
          data: { shippingWeightPpm: ppm },
        });
      }
    }

    const keepIds = new Set<string>();
    if (Array.isArray(body.entriesUpsert)) {
      for (const e of body.entriesUpsert) {
        const data = {
          sessionId: id,
          sourceItemId: e.sourceItemId,
          nameOverride: e.nameOverride ?? null,
          quantity: Math.max(1, Number(e.quantity || 1)) | 0,
          priceWeightPpm: Math.max(0, Math.min(PPM_DENOM, (e.priceWeightPpm | 0))),
          shippingWeightPpm: Math.max(0, Math.min(PPM_DENOM, (e.shippingWeightPpm | 0))),
          condition: e.condition ?? 'Loose', // ✅ NEW
        } as const;

        let entryId: string;
        if (e.id) {
          entryId = String(e.id);
          await db.inventoryFillEntry.update({ where: { id: entryId }, data });
          await db.inventoryFillEntryTag.deleteMany({ where: { entryId } });
        } else {
          const created = await db.inventoryFillEntry.create({ data });
          entryId = created.id;
        }
        keepIds.add(entryId);

        if (e.tagId) {
          await db.inventoryFillEntryTag.create({
            data: {
              entryId,
              tagId: e.tagId,
              placementId: e.tagPlacementId ?? null,
            },
          });
        }
      }

      const existing = await db.inventoryFillEntry.findMany({
        where: { sessionId: id },
        select: { id: true },
      });
      const toDelete = existing.map(x => x.id).filter(dbId => !keepIds.has(dbId));
      if (toDelete.length) {
        await db.inventoryFillEntry.deleteMany({ where: { id: { in: toDelete } } });
      }
    }
  });

  return NextResponse.json({ ok: true });
}

```

---

## src/app/api/fill-sessions/by-package/route.ts

```ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const scrapedPackageId = searchParams.get('scrapedPackageId');
  const manualPurchaseId = searchParams.get('manualPurchaseId');

  if (!scrapedPackageId && !manualPurchaseId) {
    return NextResponse.json({ error: 'Provide scrapedPackageId or manualPurchaseId' }, { status: 400 });
  }

  const where = scrapedPackageId ? { scrapedPackageId } : { manualPurchaseId };

  // Prefer most recently finalized; otherwise most recent by id as a fallback.
  const session = await prisma.inventoryFillSession.findFirst({
    where,
    orderBy: [
      { finalizedAt: 'desc' },
      { id: 'desc' }, // fallback ordering if finalizedAt is null/identical
    ],
    select: { id: true, finalizedAt: true },
  });

  return NextResponse.json({
    sessionId: session?.id ?? null,
    finalizedAt: session?.finalizedAt ?? null,
  });
}

```

---

## src/app/api/fill-sessions/route.ts

```ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { PPM_DENOM } from '@/lib/weights';

// POST /api/fill-sessions
// body: { sourceType: 'ScrapedPackage'|'Manual', scrapedPackageId?, manualPurchaseId?, customsTotalYen? }
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { sourceType, scrapedPackageId, manualPurchaseId, customsTotalYen } = body || {};

  if (sourceType === 'ScrapedPackage') {
    if (!scrapedPackageId) return NextResponse.json({ error: 'scrapedPackageId required' }, { status: 400 });

    // ✅ Reuse existing non-finalized session
    const existing = await prisma.inventoryFillSession.findFirst({
      where: { sourceType: 'ScrapedPackage', scrapedPackageId, finalizedAt: null },
      select: { id: true },
    });
    if (existing) return NextResponse.json({ sessionId: existing.id }, { status: 200 });

    const pkg = await prisma.scrapedPackage.findUnique({
      where: { id: scrapedPackageId },
      include: { items: true },
    });
    if (!pkg) return NextResponse.json({ error: 'ScrapedPackage not found' }, { status: 404 });

    const session = await prisma.inventoryFillSession.create({
      data: {
        sourceType: 'ScrapedPackage',
        scrapedPackageId,
        customsTotalYen: customsTotalYen ?? 0,
      },
    });

    // Default shipping split proportional to price (fallback equal)
    const total = pkg.items.reduce((a, s) => a + Number(s.priceYen ?? 0), 0);
    for (const s of pkg.items) {
      let ppm = 0;
      const v = Number(s.priceYen ?? 0);
      if (total > 0) ppm = Math.round((v / total) * PPM_DENOM);
      await prisma.inventoryFillSourceItem.create({
        data: { sessionId: session.id, scrapedItemId: s.id, shippingWeightPpm: ppm },
      });
    }

    return NextResponse.json({ sessionId: session.id }, { status: 201 });
  }

  if (sourceType === 'Manual') {
    if (!manualPurchaseId) return NextResponse.json({ error: 'manualPurchaseId required' }, { status: 400 });

    // ✅ Reuse existing non-finalized session
    const existing = await prisma.inventoryFillSession.findFirst({
      where: { sourceType: 'Manual', manualPurchaseId, finalizedAt: null },
      select: { id: true },
    });
    if (existing) return NextResponse.json({ sessionId: existing.id }, { status: 200 });

    const mp = await prisma.manualPurchase.findUnique({
      where: { id: manualPurchaseId },
      include: { lines: true },
    });
    if (!mp) return NextResponse.json({ error: 'ManualPurchase not found' }, { status: 404 });

    const session = await prisma.inventoryFillSession.create({
      data: {
        sourceType: 'Manual',
        manualPurchaseId,
        customsTotalYen: customsTotalYen ?? mp.customsTotalYen,
      },
    });

    const total = mp.lines.reduce((a, s) => a + Number(s.priceYen ?? 0), 0);
    for (const line of mp.lines) {
      let ppm = 0;
      const v = Number(line.priceYen ?? 0);
      if (total > 0) ppm = Math.round((v / total) * PPM_DENOM);
      await prisma.inventoryFillSourceItem.create({
        data: { sessionId: session.id, manualLineId: line.id, shippingWeightPpm: ppm },
      });
    }

    return NextResponse.json({ sessionId: session.id }, { status: 201 });
  }

  return NextResponse.json({ error: 'Invalid sourceType' }, { status: 400 });
}

```

---

## src/app/api/fx/route.ts

```ts
// src/app/api/fx/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Normalize "YYYY-MM-DD" -> Date at 00:00:00 UTC
function toUtcDate(d: string) {
  const [y, m, day] = d.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, day, 0, 0, 0, 0));
}

// Fetch from Frankfurter and return numeric rate JPY->EUR for a given date
async function fetchFrankfurter(dateStr: string): Promise<{ date: string; rate: number } | null> {
  // Frankfurter: https://api.frankfurter.dev/2020-01-01?from=JPY&to=EUR
  const url = `https://api.frankfurter.app/${dateStr}?from=JPY&to=EUR`;
  try {
    const r = await fetch(url, { next: { revalidate: 60 * 60 * 24 } }); // cache at edge for a day
    if (!r.ok) return null;
    const j = await r.json();
    const rate = j?.rates?.EUR;
    const date = j?.date || dateStr;
    if (typeof rate !== 'number' || !Number.isFinite(rate)) return null;
    return { date, rate };
  } catch {
    return null;
  }
}

function toNum(d: any) {
  if (d == null) return 0;
  if (typeof d === 'number') return d;
  if (typeof d === 'string') return Number(d);
  if (typeof d.toNumber === 'function') return d.toNumber();
  return Number(d);
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const dateParam = (searchParams.get('date') || '').slice(0, 10); // "YYYY-MM-DD"
    const base = (searchParams.get('base') || '').toUpperCase();
    const quote = (searchParams.get('quote') || '').toUpperCase();

    if (!dateParam || !/^\d{4}-\d{2}-\d{2}$/.test(dateParam)) {
      return NextResponse.json({ error: 'Invalid date' }, { status: 400 });
    }
    if (base !== 'JPY' || quote !== 'EUR') {
      // You can lift this restriction later; for now we only support JPY->EUR
      return NextResponse.json({ error: 'Only JPY->EUR supported' }, { status: 400 });
    }

    const dateUTC = toUtcDate(dateParam);

    // 1) Try DB cache for exact day
    const cached = await prisma.fxRate.findUnique({
      where: { date_base_quote: { date: dateUTC, base, quote } },
    });
    if (cached) {
      return NextResponse.json({
        base,
        quote,
        date: dateParam,
        rate: toNum(cached.rate),
        source: cached.source || 'cache',
        cached: true,
      });
    }

    // 2) Try Frankfurter (will auto-shift to nearest business day)
    const remote = await fetchFrankfurter(dateParam);
    if (remote) {
      await prisma.fxRate.upsert({
        where: { date_base_quote: { date: toUtcDate(remote.date), base, quote } },
        update: { rate: remote.rate, source: 'frankfurter' },
        create: {
          date: toUtcDate(remote.date),
          base,
          quote,
          rate: remote.rate,
          source: 'frankfurter',
        },
      });
      return NextResponse.json({
        base,
        quote,
        date: dateParam,
        rate: remote.rate,
        source: 'frankfurter',
        cached: false,
        note: remote.date !== dateParam ? `using nearest business day ${remote.date}` : undefined,
      });
    }

    // 3) Fallback: use most recent cached rate for base/quote (if any)
    const latest = await prisma.fxRate.findFirst({
      where: { base, quote },
      orderBy: { date: 'desc' },
    });
    if (latest) {
      return NextResponse.json({
        base,
        quote,
        date: dateParam,
        rate: toNum(latest.rate),
        source: latest.source || 'cache',
        cached: true,
        note: `fallback to latest cached rate from ${latest.date.toISOString().slice(0,10)}`,
      });
    }

    // 4) Emergency fallback for fully-offline dev environments
    const emergency = 0.0062; // conservative placeholder; replace if you prefer
    return NextResponse.json({
      base,
      quote,
      date: dateParam,
      rate: emergency,
      source: 'emergency-fallback',
      cached: false,
      note: 'remote FX fetch failed and no cache exists; using placeholder',
    });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Server error' }, { status: 500 });
  }
}

```

---

## src/app/api/inventory/route.ts

```ts
// src/app/api/inventory/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { PPM_DENOM } from '@/lib/weights';

function toNum(d: any) {
  if (d == null) return 0;
  if (typeof d === 'number') return d;
  if (typeof d === 'string') return Number(d);
  if (typeof (d as any).toNumber === 'function') return (d as any).toNumber();
  return Number(d);
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const limit = Math.max(1, Math.min(100, Number(searchParams.get('limit') ?? '50')));
  const cursor = searchParams.get('cursor') || undefined;

  // Support stacked filters: multiple ?q= values -> AND across terms
  const terms = searchParams.getAll('q').map(s => s.trim()).filter(Boolean);
  const singleQ = (searchParams.get('q') || '').trim();
  if (!terms.length && singleQ) terms.push(singleQ);

  // Helper to build a where-clause for ONE term
  async function buildWhereForTerm(q: string) {
    // Package number -> entryIds
    let entryIdsFromPackageQuery: string[] = [];
    {
      const pkgs = await prisma.scrapedPackage.findMany({
        where: { packageNumber: { contains: q, mode: 'insensitive' } },
        select: { id: true },
      });
      if (pkgs.length) {
        const sess = await prisma.inventoryFillSession.findMany({
          where: { scrapedPackageId: { in: pkgs.map(p => p.id) } },
          select: { id: true },
        });
        if (sess.length) {
          const entryIds = await prisma.inventoryFillEntry.findMany({
            where: { sessionId: { in: sess.map(s => s.id) } },
            select: { id: true },
          });
          entryIdsFromPackageQuery = entryIds.map(e => e.id);
        }
      }
    }

    // Match any segment in placement chain
    // tags (name ~ q) -> placements -> closure descendants -> InventoryItemTag.placementId
    let itemIdsFromPlacementQuery: string[] = [];
    {
      const tagHits = await prisma.tag.findMany({
        where: { name: { contains: q, mode: 'insensitive' } },
        select: { id: true },
      });
      const tagIds = tagHits.map(t => t.id);

      if (tagIds.length) {
        const ancPlacements = await prisma.tagPlacement.findMany({
          where: { tagId: { in: tagIds } },
          select: { id: true },
        });
        const ancIds = ancPlacements.map(p => p.id);

        let descIds: string[] = [];
        if (ancIds.length) {
          const closures = await prisma.placementClosure.findMany({
            where: { ancestorPlacementId: { in: ancIds } },
            select: { descendantPlacementId: true },
          });
          descIds = Array.from(new Set(closures.map(c => c.descendantPlacementId)));
        }

        const invTags = await prisma.inventoryItemTag.findMany({
          where: {
            OR: [
              { tagId: { in: tagIds } },
              ...(descIds.length ? [{ placementId: { in: descIds } }] as const : []),
            ],
          },
          select: { itemId: true },
        });
        itemIdsFromPlacementQuery = Array.from(new Set(invTags.map(it => it.itemId)));
      }
    }

    // OR group for this term; the final WHERE will AND these groups for all terms
    const clause: any = {
      OR: [
        { name: { contains: q, mode: 'insensitive' } },
        { tags: { some: { tag: { name: { contains: q, mode: 'insensitive' } } } } },
        ...(itemIdsFromPlacementQuery.length ? [{ id: { in: itemIdsFromPlacementQuery } }] : []),
        ...(entryIdsFromPackageQuery.length ? [{ fillEntryId: { in: entryIdsFromPackageQuery } }] : []),
      ],
    };
    return clause;
  }

  // Compose WHERE across terms (AND)
  let where: any = undefined;
  if (terms.length) {
    const clauses = [];
    for (const t of terms) {
      clauses.push(await buildWhereForTerm(t));
    }
    where = { AND: clauses };
  }

  // 1) Page of items
  const items = await prisma.inventoryItem.findMany({
    take: limit,
    ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
    orderBy: { id: 'desc' },
    where,
    select: {
      id: true,
      name: true,
      ordinal: true,
      scrapedItemId: true,
      manualLineId: true,
      fillEntryId: true,
      createdAt: true,
      condition: true, // ✅ added
      tags: {
        select: {
          tag: { select: { id: true, name: true } },
          placementId: true,
        },
      },
    },
  });

  // 2) Batch lookups for allocations (same logic as before)
  const fillEntryIds = Array.from(new Set(items.map(i => i.fillEntryId).filter(Boolean) as string[]));
  const entries = fillEntryIds.length
    ? await prisma.inventoryFillEntry.findMany({
        where: { id: { in: fillEntryIds } },
        select: {
          id: true,
          quantity: true,
          priceWeightPpm: true,
          shippingWeightPpm: true,
          sourceItemId: true,
          sessionId: true,
        },
      })
    : [];
  const entriesById = new Map(entries.map(e => [e.id, e]));

  const sourceItemIds = Array.from(new Set(entries.map(e => e.sourceItemId)));
  const sourceItems = sourceItemIds.length
    ? await prisma.inventoryFillSourceItem.findMany({
        where: { id: { in: sourceItemIds } },
        select: {
          id: true,
          sessionId: true,
          shippingWeightPpm: true,
          scrapedItemId: true,
          manualLineId: true,
        },
      })
    : [];
  const sourceItemsById = new Map(sourceItems.map(s => [s.id, s]));

  const sessionIds = Array.from(new Set(entries.map(e => e.sessionId)));
  const sessions = sessionIds.length
    ? await prisma.inventoryFillSession.findMany({
        where: { id: { in: sessionIds } },
        select: {
          id: true,
          sourceType: true,
          customsTotalYen: true,
          scrapedPackageId: true,
          manualPurchaseId: true,
        },
      })
    : [];
  const sessionsById = new Map(sessions.map(s => [s.id, s]));

  const allSessSourceItems = sessionIds.length
    ? await prisma.inventoryFillSourceItem.findMany({
        where: { sessionId: { in: sessionIds } },
        select: { sessionId: true, scrapedItemId: true, manualLineId: true },
      })
    : [];
  const sessToSourceItems = new Map<
    string,
    { scrapedItemId: string | null; manualLineId: string | null }[]
  >();
  for (const si of allSessSourceItems) {
    const arr = sessToSourceItems.get(si.sessionId) ?? [];
    arr.push({ scrapedItemId: si.scrapedItemId ?? null, manualLineId: si.manualLineId ?? null });
    sessToSourceItems.set(si.sessionId, arr);
  }

  // Prices
  const scrapedIds = Array.from(new Set(allSessSourceItems.map(si => si.scrapedItemId).filter(Boolean) as string[]));
  const manualIds = Array.from(new Set(allSessSourceItems.map(si => si.manualLineId).filter(Boolean) as string[]));
  const scrapedItems = scrapedIds.length
    ? await prisma.scrapedItem.findMany({
        where: { id: { in: scrapedIds } },
        select: { id: true, priceYen: true, scrapedPackageId: true },
      })
    : [];
  const manualLines = manualIds.length
    ? await prisma.manualLine.findMany({
        where: { id: { in: manualIds } },
        select: { id: true, priceYen: true },
      })
    : [];
  const scrapedPriceById = new Map(scrapedItems.map(si => [si.id, toNum(si.priceYen)]));
  const manualPriceById = new Map(manualLines.map(ml => [ml.id, toNum(ml.priceYen)]));

  // Shipping & dates
  const scrapedPkgIds = Array.from(new Set(sessions.map(s => s.scrapedPackageId).filter(Boolean) as string[]));
  const manualPurchaseIds = Array.from(new Set(sessions.map(s => s.manualPurchaseId).filter(Boolean) as string[]));
  const scrapedPkgs = scrapedPkgIds.length
    ? await prisma.scrapedPackage.findMany({
        where: { id: { in: scrapedPkgIds } },
        select: {
          id: true,
          packageNumber: true,
          dateShipped: true,
          internationalShippingFeeYen: true,
          domesticShippingFeeYen: true,
        },
      })
    : [];
  const scrapedPkgById = new Map(scrapedPkgs.map(p => [p.id, p]));

  const manualPurchases = manualPurchaseIds.length
    ? await prisma.manualPurchase.findMany({
        where: { id: { in: manualPurchaseIds } },
        select: {
          id: true,
          datePurchased: true,
          intlShippingTotalYen: true,
          domesticShippingTotalYen: true,
        },
      })
    : [];
  const manualById = new Map(manualPurchases.map(m => [m.id, m]));

  // Build placement labels (Root > ... > Leaf) with leaf last
  const placementIds = Array.from(
    new Set(items.flatMap(i => i.tags?.map(t => t.placementId).filter(Boolean) as string[] ?? [])),
  );
  const placementLabels = new Map<string, string>();
  if (placementIds.length) {
    const closures = await prisma.placementClosure.findMany({
      where: { descendantPlacementId: { in: placementIds } },
      select: {
        descendantPlacementId: true,
        depth: true,
        ancestor: { select: { tag: { select: { name: true } } } },
      },
    });

    const byDesc = new Map<string, { depth: number; name: string }[]>();
    for (const c of closures) {
      const nm = (c as any).ancestor.tag?.name ?? '';
      if (!nm) continue;
      const arr = byDesc.get(c.descendantPlacementId) ?? [];
      arr.push({ depth: c.depth, name: nm });
      byDesc.set(c.descendantPlacementId, arr);
    }
    for (const [desc, arr] of byDesc) {
      // depth: 0=leaf, >0 ancestors. For root → ... → leaf order, sort DESC by depth.
      arr.sort((a, b) => b.depth - a.depth);
      placementLabels.set(desc, arr.map(x => x.name).join(' > '));
    }
  }

  // 3) Rows
  const rows: any[] = [];
  for (const it of items) {
    const entry = it.fillEntryId ? entriesById.get(it.fillEntryId) : null;

    // even if no entry (should be rare), still render tags & minimal fields
    if (!entry) {
      const tagParts = (it.tags || []).map(tp => {
        const t = tp.tag?.name ?? '';
        const pname = tp.placementId ? (placementLabels.get(tp.placementId) || '') : '';
        return pname ? `${t} (${pname})` : t;
      });
      rows.push({
        id: it.id,
        name: it.name,
        condition: it.condition, // ✅ added
        tagChain: tagParts.join(' • '),
        fxDateISO: null,
        packageNumber: null,
        purchaseDateISO: null,
        jpy: { basePerUnit: 0, shipPerUnit: 0, customsPerUnit: 0, totalPerUnit: 0 },
      });
      continue;
    }

    const qty = Math.max(1, toNum(entry.quantity));
    const entryPricePPM = toNum(entry.priceWeightPpm);
    const entryShipPPM = toNum(entry.shippingWeightPpm);

    const src = sourceItemsById.get(entry.sourceItemId)!;
    const sourceItemShipPPM = toNum(src.shippingWeightPpm);

    // Source price (JPY)
    let sourcePriceYen = 0;
    if (src.scrapedItemId) sourcePriceYen = scrapedPriceById.get(src.scrapedItemId) ?? 0;
    else if (src.manualLineId) sourcePriceYen = manualPriceById.get(src.manualLineId) ?? 0;

    // Package subtotal (JPY)
    let packageSubtotal = 0;
    for (const s of (sessToSourceItems.get(entry.sessionId) ?? [])) {
      if (s.scrapedItemId) packageSubtotal += scrapedPriceById.get(s.scrapedItemId) ?? 0;
      else if (s.manualLineId) packageSubtotal += manualPriceById.get(s.manualLineId) ?? 0;
    }

    // Session meta
    const sess = sessionsById.get(entry.sessionId)!;
    let pkgShipTotal = 0;
    let fxDateISO: string | null = null;
    let packageNumber: string | null = null;
    let purchaseDateISO: string | null = null;

    if (sess.sourceType === 'ScrapedPackage' && sess.scrapedPackageId) {
      const pkg = scrapedPkgById.get(sess.scrapedPackageId) || null;
      const intl = toNum(pkg?.internationalShippingFeeYen ?? 0);
      const dom = toNum(pkg?.domesticShippingFeeYen ?? 0);
      pkgShipTotal = intl + dom;
      fxDateISO = pkg?.dateShipped ? pkg.dateShipped.toISOString().slice(0, 10) : null;
      packageNumber = (pkg as any)?.packageNumber ?? null;
      purchaseDateISO = fxDateISO;
    } else if (sess.sourceType === 'Manual' && sess.manualPurchaseId) {
      const mp = manualById.get(sess.manualPurchaseId) || null;
      const intl = toNum((mp as any)?.intlShippingTotalYen ?? 0);
      const dom = toNum((mp as any)?.domesticShippingTotalYen ?? 0);
      pkgShipTotal = intl + dom;
      purchaseDateISO = (mp as any)?.datePurchased
        ? new Date((mp as any).datePurchased).toISOString().slice(0, 10)
        : null;
      fxDateISO = purchaseDateISO;
    }

    // Allocations (same as filler)
    const baseAllocJPY = Math.round(sourcePriceYen * (entryPricePPM / PPM_DENOM));
    const sourceShipAllocJPY = Math.round(pkgShipTotal * (sourceItemShipPPM / PPM_DENOM));
    const entryShipAllocJPY = Math.round(sourceShipAllocJPY * (entryShipPPM / PPM_DENOM));

    let entryCustomsJPY = 0;
    if (packageSubtotal > 0) {
      const customsTotal = toNum(sess.customsTotalYen ?? 0);
      const sourceShare = sourcePriceYen / packageSubtotal;
      entryCustomsJPY = Math.round(customsTotal * sourceShare * (entryPricePPM / PPM_DENOM));
    }

    const basePerUnitJPY = Math.round(baseAllocJPY / qty);
    const shipPerUnitJPY = Math.round(entryShipAllocJPY / qty);
    const customsPerUnitJPY = Math.round(entryCustomsJPY / qty);
    const totalPerUnitJPY = basePerUnitJPY + shipPerUnitJPY + customsPerUnitJPY;

    const tagParts = (it.tags || []).map(tp => {
      const t = tp.tag?.name ?? '';
      const pname = tp.placementId ? (placementLabels.get(tp.placementId) || '') : '';
      return pname ? `${t} (${pname})` : t;
    });

    rows.push({
      id: it.id,
      name: it.name,
      condition: it.condition, // ✅ added
      tagChain: tagParts.join(' • '),
      fxDateISO,
      packageNumber,
      purchaseDateISO,
      jpy: {
        basePerUnit: basePerUnitJPY,
        shipPerUnit: shipPerUnitJPY,
        customsPerUnit: customsPerUnitJPY,
        totalPerUnit: totalPerUnitJPY,
      },
    });
  }

  const nextCursor = items.length === limit ? items[items.length - 1].id : null;
  return NextResponse.json({ items: rows, nextCursor });
}

```

---

## src/app/api/manual-purchase/route.ts

```ts
// src/app/api/manual-purchases/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// POST: { currency?, intlShippingTotalYen?, domesticShippingTotalYen?, customsTotalYen?, subtotalYen?, notes?, lines: [{ title, priceYen }] }
export async function POST(req: NextRequest) {
  const b = await req.json();
  if (!Array.isArray(b.lines) || b.lines.length === 0) {
    return NextResponse.json({ error: 'lines required' }, { status: 400 });
  }
  const mp = await prisma.manualPurchase.create({
    data: {
      currency: b.currency ?? 'JPY',
      intlShippingTotalYen: b.intlShippingTotalYen ?? 0,
      domesticShippingTotalYen: b.domesticShippingTotalYen ?? 0,
      customsTotalYen: b.customsTotalYen ?? 0,
      subtotalYen: b.subtotalYen ?? null,
      notes: b.notes ?? null,
      lines: {
        create: b.lines.map((l: any) => ({ title: l.title, priceYen: l.priceYen })),
      },
    },
  });

  return NextResponse.json({ manualPurchaseId: mp.id }, { status: 201 });
}

```

---

## src/app/api/profile/refresh/confirm/route.ts

```ts
// src/app/api/profile/refresh/confirm/route.ts
import { NextResponse } from 'next/server';
import { confirmRefresh, getRunning } from '@/lib/refresh-runner';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const source = String(body?.source || '').toLowerCase();
  if (!['buyee','zenmarket','fromjapan'].includes(source)) {
    return NextResponse.json({ ok: false, error: 'invalid_source' }, { status: 400 });
  }
  if (!getRunning(source)) {
    return NextResponse.json({ ok: false, error: 'no_process' }, { status: 409 });
  }
  const out = await confirmRefresh(source);
  return NextResponse.json(out);
}

```

---

## src/app/api/profile/refresh/start/route.ts

```ts
// src/app/api/profile/refresh/start/route.ts
import { NextResponse } from 'next/server';
import { startRefresh, getRunning } from '@/lib/refresh-runner';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const source = String(body?.source || '').toLowerCase();
  if (!['buyee','zenmarket','fromjapan'].includes(source)) {
    return NextResponse.json({ ok: false, error: 'invalid_source' }, { status: 400 });
  }
  if (getRunning(source)) {
    return NextResponse.json({ ok: true, alreadyRunning: true });
  }
  const { pid } = startRefresh(source);
  // tiny delay so the singleton map is definitely populated before a fast Confirm
  await new Promise(r => setTimeout(r, 100));
  return NextResponse.json({ ok: true, pid });
}

```

---

## src/app/api/scrape/buyee-crawl/route.ts

```ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { scrapeBuyeeShippedList } from '@/scrapers/buyee';
import { translateJaToEn } from '@/lib/translate';

function buildPageUrl(page: number): string {
  // fixed path; vary ?page=
  return `https://buyee.jp/mybaggages/shipped/1?term=0&page=${page}`;
}

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const { startPage = 1, maxPages = 10 } = await req.json().catch(() => ({}));
  let pagesCrawled = 0, inserted = 0, updated = 0, stopReason = '';

  try {
    for (let pageNum = Number(startPage); pageNum < Number(startPage) + Number(maxPages); pageNum++) {
      const url = buildPageUrl(pageNum);
      const { packages } = await scrapeBuyeeShippedList(url);
      pagesCrawled++;

      // keep only entries with a packageNumber (should be all)
      const pagePkgs = packages.filter(p => p.packageNumber);
      if (!pagePkgs.length) { stopReason = 'empty_or_invalid_page'; break; }

      // === STOP CONDITION ===
      // Only stop if:
      //  (1) page has 10 entries
      //  (2) every entry has dateShipped (i.e., shipped)
      //  (3) every entry is already in DB (seen)
      const isFullPage = pagePkgs.length === 10;
      const allHaveDate = pagePkgs.every(p => !!p.dateShipped);
      let allSeen = false;
      if (isFullPage && allHaveDate) {
        const keys = pagePkgs.map(p => p.packageNumber!);
        const already = await prisma.scrapedPackage.findMany({
          where: { packageNumber: { in: keys } },
          select: { packageNumber: true, dateShipped: true },
        });
        allSeen = already.length === pagePkgs.length;
        const allSeenWithDate = allSeen && already.every(row => row.dateShipped != null);
        if (allSeenWithDate) { stopReason = 'all_10_shipped_on_page_already_seen'; break; }
      }
      // ======================

      // Upsert every entry (shipped or not)
      for (const p of pagePkgs) {
        const ja = (p.items || []).map(i => i.title || '');
        const en = await translateJaToEn(ja);

        const existing = await prisma.scrapedPackage.findUnique({
          where: { packageNumber: p.packageNumber! },
          select: { id: true, packageNumber: true }
        });

        const up = await prisma.scrapedPackage.upsert({
          where: { packageNumber: p.packageNumber! },
          update: {
            pageUrl: url,
            dateShipped: p.dateShipped ? new Date(p.dateShipped) : null,
            intlTrackingNumber: p.intlTrackingNumber || null,
            intlTrackingUrl: p.intlTrackingUrl || null,
            internationalShippingFeeYen: p.internationalShippingFeeYen ?? null,
            domesticShippingFeeYen: p.domesticShippingFeeYen ?? null,
            raw: p,
            lastSeenAt: new Date(),
          },
          create: {
            source: 'buyee',
            pageUrl: url,
            packageNumber: p.packageNumber!, // unique
            dateShipped: p.dateShipped ? new Date(p.dateShipped) : null,
            intlTrackingNumber: p.intlTrackingNumber || null,
            intlTrackingUrl: p.intlTrackingUrl || null,
            internationalShippingFeeYen: p.internationalShippingFeeYen ?? null,
            domesticShippingFeeYen: p.domesticShippingFeeYen ?? null,
            raw: p,
          },
          select: { id: true, packageNumber: true },
        });

        // Replace items
        await prisma.scrapedItem.deleteMany({ where: { scrapedPackageId: up.id } });
        if (p.items?.length) {
          await prisma.scrapedItem.createMany({
            data: p.items.map((it, idx) => ({
              scrapedPackageId: up.id,
              orderNumber: it.orderNumber || null,
              titleJa: it.title || null,
              titleEn: en[idx] || it.title || null,
              itemUrl: it.itemUrl || null,
              listingId: it.listingId || null,
              priceYen: typeof it.priceYen === 'number' ? it.priceYen : null,
            })),
            skipDuplicates: true,
          });
        }

        if (existing) updated++; else inserted++;
      }
    }

    return NextResponse.json({ pagesCrawled, inserted, updated, stopReason }, { status: 200 });
  } catch (e: any) {
    console.error('CRAWL_ERROR', e);
    return NextResponse.json({ error: e?.message || 'crawl failed', pagesCrawled, inserted, updated }, { status: 500 });
  }
}
```

---

## src/app/api/scrape/fromjapan-crawl/route.ts

```ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { scrapeFromJapanShippedList } from '@/scrapers/fromjapan';
import { translateJaToEn } from '@/lib/translate';

function buildPageUrl(page: number): string {
  // FromJapan shipped history page; page param TBD later.
  // We keep the builder so it's trivial to add pagination later.
  if (page <= 1) return 'https://www.fromjapan.co.jp/japan/en/member/history/ship/list';
  return `https://www.fromjapan.co.jp/japan/en/member/history/ship/list?page=${page}`;
}

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const { startPage = 1, maxPages = 1 } = await req.json().catch(() => ({})); // default: just page 1
  let pagesCrawled = 0, inserted = 0, updated = 0, stopReason = '';

  try {
    for (let pageNum = Number(startPage); pageNum < Number(startPage) + Number(maxPages); pageNum++) {
      const url = buildPageUrl(pageNum);
      const { packages } = await scrapeFromJapanShippedList(url);
      pagesCrawled++;

      if (!packages.length) { stopReason = 'empty_page'; break; }

      // Stop when EVERYTHING on the page is already in DB (they are all shipped pages)
      const keys = packages.map(p => p.packageNumber);
      const already = await prisma.scrapedPackage.findMany({
        where: { packageNumber: { in: keys } },
        select: { packageNumber: true },
      });
      if (already.length === packages.length) { stopReason = 'all_seen_on_page'; break; }

      for (const p of packages) {
        // Translate item titles
        const ja = (p.items || []).map(i => i.title || '');
        const en = await translateJaToEn(ja);

        const existing = await prisma.scrapedPackage.findUnique({
          where: { packageNumber: p.packageNumber },
          select: { id: true, packageNumber: true }
        });

        const up = await prisma.scrapedPackage.upsert({
          where: { packageNumber: p.packageNumber },
          update: {
            pageUrl: url,
            dateShipped: p.dateShipped ? new Date(p.dateShipped) : null,
            intlTrackingNumber: p.trackingNumbers?.[0] || null,   // single tracking per package entry
            intlTrackingUrl: null, // FJ detail URL not required here; can add later
            internationalShippingFeeYen: p.internationalShippingFeeYen ?? null,
            domesticShippingFeeYen: p.domesticShippingFeeYen ?? null,
            raw: p,
            lastSeenAt: new Date(),
          },
          create: {
            source: 'fromjapan',
            pageUrl: url,
            packageNumber: p.packageNumber, // unique (includes #1/#2 for multi-pack)
            dateShipped: p.dateShipped ? new Date(p.dateShipped) : null,
            intlTrackingNumber: p.trackingNumbers?.[0] || null,
            intlTrackingUrl: null,
            internationalShippingFeeYen: p.internationalShippingFeeYen ?? null,
            domesticShippingFeeYen: p.domesticShippingFeeYen ?? null,
            raw: p,
          },
          select: { id: true, packageNumber: true },
        });

        // Replace items for this package
        await prisma.scrapedItem.deleteMany({ where: { scrapedPackageId: up.id } });
        if (p.items?.length) {
          await prisma.scrapedItem.createMany({
            data: p.items.map((it, idx) => ({
              scrapedPackageId: up.id,
              orderNumber: it.orderNumber || null,
              titleJa: it.title || null,
              titleEn: en[idx] || it.title || null,
              itemUrl: it.itemUrl || null,
              listingId: it.listingId || null,
              priceYen: typeof it.priceYen === 'number' ? it.priceYen : null,
            })),
            skipDuplicates: true,
          });
        }

        if (existing) updated++; else inserted++;
      }
    }

    return NextResponse.json({ pagesCrawled, inserted, updated, stopReason }, { status: 200 });
  } catch (e: any) {
    console.error('FJ_CRAWL_ERROR', e);
    return NextResponse.json({ error: e?.message || 'crawl failed', pagesCrawled, inserted, updated }, { status: 500 });
  }
}
```

---

## src/app/api/scrape/route.ts

```ts
import { NextResponse } from 'next/server';
import { scrapeBuyeeShippedList } from '@/scrapers/buyee';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const { url } = await request.json();
  if (!url || typeof url !== 'string') {
    return NextResponse.json({ error: 'Missing url' }, { status: 400 });
  }

  try {
    const data = await scrapeBuyeeShippedList(url);
    return NextResponse.json(data);
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Scrape failed' }, { status: 500 });
  }
}
```

---

## src/app/api/scrape/zenmarket-crawl/route.ts

```ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { scrapeZenMarketParcels } from '@/scrapers/zenmarket';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { pageUrl } = await req.json().catch(() => ({}));
    const url = pageUrl || 'https://zenmarket.jp/en/profile/parcel.aspx?state=5';

    const pkgs = await scrapeZenMarketParcels(url);

    let inserted = 0;
    let updated = 0;

    for (const p of pkgs) {
      const now = new Date();
      const existing = await prisma.scrapedPackage.findUnique({
        where: { packageNumber: p.packageNumber },
      });

      const payload = {
        source: 'zenmarket' as const,
        pageUrl: p.pageUrl,
        dateShipped: p.dateShipped ? new Date(p.dateShipped) : null,
        packageNumber: p.packageNumber,
        intlTrackingNumber: p.trackingNumber ?? null,
        intlTrackingUrl: p.trackingUrl ?? null,
        internationalShippingFeeYen: p.internationalShippingFeeYen ?? 0,
        domesticShippingFeeYen: p.domesticShippingFeeYen ?? 0,
        items: p.items,
        raw: p.raw,
        lastSeenAt: now,
        ...(existing ? {} : { firstSeenAt: now }),
      };

      if (existing) {
        await prisma.scrapedPackage.update({
          where: { packageNumber: p.packageNumber },
          data: payload,
        });
        updated++;
      } else {
        await prisma.scrapedPackage.create({ data: payload });
        inserted++;
      }
    }

    return NextResponse.json({
      pagesCrawled: 1,
      inserted,
      updated,
      stopReason: '',
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: String(err?.message || err) || 'unknown error', pagesCrawled: 0, inserted: 0, updated: 0 },
      { status: 500 }
    );
  }
}
```

---

## src/app/api/scraped-packages/[id]/status/route.ts

```ts
// src/app/api/scraped-packages/[id]/status/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type Status = 'Todo' | 'Processed' | 'Blacklist';

export async function POST(
  req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const { id } = await ctx.params;
  const { status } = await req.json().catch(() => ({})) as { status?: Status };

  if (!id || !status || !['Todo','Processed','Blacklist'].includes(status)) {
    return NextResponse.json({ ok: false, error: 'invalid_input' }, { status: 400 });
  }

  try {
    const row = await prisma.scrapedPackage.update({
      where: { id },
      data: { status },
      select: { id: true, status: true },
    });
    return NextResponse.json({ ok: true, id: row.id, status: row.status });
  } catch (e:any) {
    return NextResponse.json({ ok: false, error: e?.message || 'update_failed' }, { status: 500 });
  }
}

```

---

## src/app/api/scraped-packages/route.ts

```ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

function toNum(d: any) {
  if (!d) return 0;
  if (typeof d === 'number') return d;
  if (typeof d === 'string') return Number(d);
  if (typeof (d as any).toNumber === 'function') return (d as any).toNumber();
  return Number(d);
}

// Accept UI labels or enum strings and normalize to Prisma enum
function normalizeStatus(raw: string | null): 'Todo' | 'Processed' | 'Blacklist' | null {
  if (!raw) return null;
  const s = raw.trim().toLowerCase();
  if (s === 'todo' || s === 'to process' || s === 'to_process' || s === 'to-process' || s === 'toprocess') return 'Todo';
  if (s === 'processed') return 'Processed';
  if (s === 'blacklist' || s === 'blacklisted') return 'Blacklist';
  return null;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const q = searchParams.get('q')?.trim() || '';
  const sort = (searchParams.get('sort') || 'date_desc') as
    | 'date_desc'
    | 'date_asc'
    | 'intl_desc'
    | 'intl_asc'
    | 'dom_desc'
    | 'dom_asc'
    | 'items_desc'
    | 'items_asc';
  const source = searchParams.get('source') || '';
  const statusParam = searchParams.get('status') || '';

  const where: any = {};

  if (q) {
    where.OR = [
      { packageNumber: { contains: q, mode: 'insensitive' } },
      { intlTrackingNumber: { contains: q, mode: 'insensitive' } },
      { pageUrl: { contains: q, mode: 'insensitive' } },
      {
        items: {
          some: {
            OR: [
              { titleJa: { contains: q, mode: 'insensitive' } },
              { titleEn: { contains: q, mode: 'insensitive' } },
              { listingId: { contains: q, mode: 'insensitive' } },
            ],
          },
        },
      },
    ];
  }

  if (source) where.source = source;

  // ✅ status filter (supports UI labels or enum string)
  const status = normalizeStatus(statusParam);
  if (status) where.status = status;

  const orderBy =
    sort === 'date_asc' ? [{ dateShipped: 'asc' }] :
    sort === 'intl_desc' ? [{ internationalShippingFeeYen: 'desc' }] :
    sort === 'intl_asc' ? [{ internationalShippingFeeYen: 'asc' }] :
    sort === 'dom_desc' ? [{ domesticShippingFeeYen: 'desc' }] :
    sort === 'dom_asc' ? [{ domesticShippingFeeYen: 'asc' }] :
    sort === 'items_desc' ? [{ _count: { items: 'desc' } }] :
    sort === 'items_asc' ? [{ _count: { items: 'asc' } }] :
    // default
    [{ dateShipped: 'desc' as const }, { lastSeenAt: 'desc' as const }];

  const data = await prisma.scrapedPackage.findMany({
    where,
    orderBy,
    include: {
      items: {
        select: {
          id: true,
          titleJa: true,
          titleEn: true,
          itemUrl: true,
          listingId: true,
          priceYen: true,
        },
        take: 20,
      },
      _count: { select: { items: true } },
    },
    take: 9999,
  });

  return NextResponse.json(
    data.map((p) => ({
      id: p.id,
      source: p.source,
      pageUrl: p.pageUrl,
      dateShipped: p.dateShipped?.toISOString().slice(0, 10) ?? null,
      packageNumber: p.packageNumber,
      intlTrackingNumber: p.intlTrackingNumber,
      intlTrackingUrl: p.intlTrackingUrl,
      internationalShippingFeeYen: toNum(p.internationalShippingFeeYen),
      domesticShippingFeeYen: toNum(p.domesticShippingFeeYen),
      itemsCount: (p as any)._count.items,
      items: p.items.map((it) => ({
        id: it.id,
        title: it.titleEn || it.titleJa,
        listingId: it.listingId,
        itemUrl: it.itemUrl,
        priceYen: it.priceYen ? toNum(it.priceYen) : null,
      })),
      status: p.status, // 'Todo' | 'Processed' | 'Blacklist'
    }))
  );
}

```

---

## src/app/api/tags/route.ts

```ts
// src/app/api/tags/route.ts
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

type PlacementRow = {
  id: string;
  tagId: string;
  parentPlacementId: string | null;
  tag: { id: string; name: string; description: string | null };
};

function buildTree(rows: PlacementRow[]) {
  const byParent = new Map<string | null, PlacementRow[]>();
  for (const r of rows) {
    const k = r.parentPlacementId;
    const arr = byParent.get(k);
    if (arr) arr.push(r);
    else byParent.set(k, [r]);
  }
  const makeNode = (r: PlacementRow): any => ({
    placementId: r.id,
    tagId: r.tagId,
    name: r.tag.name,
    description: r.tag.description,
    parentPlacementId: r.parentPlacementId,
    children: (byParent.get(r.id) || [])
      .sort((a, b) => a.tag.name.localeCompare(b.tag.name))
      .map(makeNode),
  });
  const roots = (byParent.get(null) || []).sort((a, b) => a.tag.name.localeCompare(b.tag.name)).map(makeNode);
  return roots;
}

async function rebuildPlacementClosureAll() {
  await prisma.placementClosure.deleteMany({});
  const placements = await prisma.tagPlacement.findMany({ select: { id: true, parentPlacementId: true } });

  // self links
  if (placements.length) {
    await prisma.placementClosure.createMany({
      data: placements.map(p => ({ ancestorPlacementId: p.id, descendantPlacementId: p.id, depth: 0 })),
      skipDuplicates: true,
    });
  }

  // adjacency
  const childrenByParent = new Map<string, string[]>();
  for (const p of placements) {
    if (p.parentPlacementId) {
      const arr = childrenByParent.get(p.parentPlacementId);
      if (arr) arr.push(p.id);
      else childrenByParent.set(p.parentPlacementId, [p.id]);
    }
  }

  // BFS from every node as ancestor (small datasets → simple + correct)
  const pairs: { ancestorPlacementId: string; descendantPlacementId: string; depth: number }[] = [];
  for (const anc of placements) {
    const q: Array<{ id: string; depth: number }> = [{ id: anc.id, depth: 0 }];
    const seen = new Set<string>([anc.id]);
    while (q.length) {
      const { id, depth } = q.shift()!;
      const kids = childrenByParent.get(id) ?? [];
      for (const child of kids) {
        if (!seen.has(child)) {
          seen.add(child);
          pairs.push({ ancestorPlacementId: anc.id, descendantPlacementId: child, depth: depth + 1 });
          q.push({ id: child, depth: depth + 1 });
        }
      }
    }
  }
  if (pairs.length) {
    await prisma.placementClosure.createMany({ data: pairs, skipDuplicates: true });
  }
}

export async function GET(req: NextRequest) {
  const rows = await prisma.tagPlacement.findMany({
    select: {
      id: true,
      tagId: true,
      parentPlacementId: true,
      tag: { select: { id: true, name: true, description: true } },
    },
  });

  const tree = buildTree(rows);

  // parentCounts = how many placements each tag has (for 🔗 icon logic)
  const parentCounts: Record<string, number> = {};
  for (const r of rows) {
    parentCounts[r.tagId] = (parentCounts[r.tagId] || 0) + 1;
  }

  // tags list for client-side name lookup (case-insensitive)
  const tags = await prisma.tag.findMany({ select: { id: true, name: true, description: true } });

  return NextResponse.json({ tree, parentCounts, tags });
}

export async function POST(req: NextRequest) {
  try {
    const { name, description, parentPlacementId } = await req.json();
    if (!name || typeof name !== 'string') {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }

    // find tag by name (case-insensitive)
    let tag = await prisma.tag.findFirst({
      where: { name: { equals: name, mode: 'insensitive' } },
      select: { id: true, name: true },
    });

    if (!tag) {
      tag = await prisma.tag.create({ data: { name, description } });
    }

    // create placement under given parent (or root)
    const placement = await prisma.tagPlacement.create({
      data: { tagId: tag.id, parentPlacementId: parentPlacementId ?? null },
      select: {
        id: true,
        tagId: true,
        parentPlacementId: true,
        tag: { select: { id: true, name: true, description: true } },
      },
    });

    await rebuildPlacementClosureAll();
    return NextResponse.json({ placement }, { status: 201 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed to create/link placement.' }, { status: 400 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const { tagId, name, description } = await req.json();
    if (!tagId) return NextResponse.json({ error: 'tagId is required.' }, { status: 400 });

    const tag = await prisma.tag.update({
      where: { id: tagId },
      data: { name: name ?? undefined, description: description ?? undefined },
      select: { id: true, name: true, description: true },
    });

    return NextResponse.json({ tag });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed to update tag.' }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { placementId } = await req.json();
    if (!placementId) return NextResponse.json({ error: 'placementId is required.' }, { status: 400 });

    // get tagId of placement
    const placement = await prisma.tagPlacement.findUnique({
      where: { id: placementId },
      select: { id: true, tagId: true, parentPlacementId: true },
    });
    if (!placement) return NextResponse.json({ error: 'Placement not found.' }, { status: 404 });

    // delete this placement
    await prisma.tagPlacement.delete({ where: { id: placementId } });

    // if tag has no more placements and is unused by items, delete the tag too
    const [remainingPlacements, inUse] = await Promise.all([
      prisma.tagPlacement.findFirst({ where: { tagId: placement.tagId }, select: { id: true } }),
      prisma.itemTag.findFirst({ where: { tagId: placement.tagId }, select: { itemId: true } }),
    ]);

    let deletedTag = false;
    if (!remainingPlacements && !inUse) {
      await prisma.tag.delete({ where: { id: placement.tagId } });
      deletedTag = true;
    }

    await rebuildPlacementClosureAll();
    return NextResponse.json({ ok: true, deletedPlacement: true, deletedTag });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed to delete placement.' }, { status: 400 });
  }
}

```

---

## src/app/api/thumb/[listingId]/route.ts

```ts
// app/api/thumb/[listingId]/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function buyeeAuctionUrl(listingId: string) {
  return `https://buyee.jp/item/jdirectitems/auction/${listingId}`;
}
function rakutenDetailUrl(listingIdRaw: string) {
  // Next params may decode %3A to ':' — ensure it's encoded for the URL path segment
  const encoded = listingIdRaw.includes(':') ? encodeURIComponent(listingIdRaw) : listingIdRaw;
  return `https://buyee.jp/rakuten/detail/${encoded}`;
}
function abs(url: string, base: string) {
  try { return new URL(url, base).toString(); } catch { return url; }
}

// Buyee (Yahoo) extractor
function extractBuyeeImage(html: string, pageUrl: string): string | null {
  const i = html.indexOf('id="itemPhoto_sec"');
  if (i === -1) return null;
  const slice = html.slice(i, i + 120_000); // wider window

  let m = slice.match(/<li[^>]*\sdata-thumb\s*=\s*["']([^"']+)["'][^>]*>/i);
  if (m?.[1]) return abs(m[1], pageUrl);

  m = slice.match(/<a[^>]*\shref\s*=\s*["']([^"']+\.(?:jpg|jpeg|png))(?:\?[^"']*)?["']/i);
  if (m?.[1]) return abs(m[1], pageUrl);

  m = slice.match(/<img[^>]*\sdata-src\s*=\s*["']([^"']+\.(?:jpg|jpeg|png))(?:\?[^"']*)?["']/i);
  if (m?.[1]) return abs(m[1], pageUrl);

  return null;
}

// Rakuten extractor (more forgiving)
function extractRakutenImage(html: string, pageUrl: string): string | null {
  const i = html.indexOf('id="shopping_item_main_image"');
  if (i !== -1) {
    const slice = html.slice(i, i + 120_000);
    // Prefer data-src
    let m = slice.match(/<img[^>]*\sdata-src\s*=\s*["']([^"']+\.(?:jpg|jpeg|png)(?:\?[^"']*)?)["']/i);
    if (m?.[1]) return abs(m[1], pageUrl);
    // Fallback to src
    m = slice.match(/<img[^>]*\ssrc\s*=\s*["']([^"']+\.(?:jpg|jpeg|png)(?:\?[^"']*)?)["'][^>]*>/i);
    if (m?.[1]) {
      const url = m[1];
      // Skip obvious placeholders
      if (!/loading-spacer\.gif/i.test(url)) return abs(url, pageUrl);
    }
  }
  // Last resort: first cdnrakuten image anywhere on page
  const any = html.match(/https?:\/\/[^"'<>]+cdnrakuten\.buyee\.jp[^"'<>]+?\.(?:jpg|jpeg|png)(?:\?[^"'<>]*)?/i);
  if (any?.[0]) return abs(any[0], pageUrl);
  return null;
}

async function fetchText(url: string) {
  const res = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
      'Accept-Language': 'en-US,en;q=0.9,ja;q=0.8',
    },
    cache: 'no-store',
  });
  if (!res.ok) throw new Error(`html_fetch_${res.status}`);
  return res.text();
}
async function fetchImage(url: string) {
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error(`img_fetch_${res.status}`);
  const contentType = res.headers.get('content-type') || 'image/jpeg';
  const buf = Buffer.from(await res.arrayBuffer());
  return { buf, contentType };
}

const MERCARI_RE = /^m\d{11}$/i;

export async function GET(
  req: Request,
  ctx: { params: Promise<{ listingId: string }> }
) {
  const { listingId } = await ctx.params;
  const origin = new URL(req.url).origin;

  const servePlaceholder = async () => {
    const ph = await fetch(new URL('/placeholder-item.png', origin));
    const b = await ph.arrayBuffer();
    return new NextResponse(b, {
      status: 200,
      headers: { 'Content-Type': 'image/png', 'Cache-Control': 'no-store' },
    });
  };

  if (!/^[A-Za-z0-9_%:.-]+$/.test(listingId)) return servePlaceholder();

  // DB cache
  let cachedUrl: string | null = null;
  try {
    const cached = await prisma.listingImageCache.findUnique({ where: { listingId } });
    if (cached?.url) cachedUrl = cached.url;
  } catch {}

  // Resolve if not cached
  if (!cachedUrl) {
    try {
      if (MERCARI_RE.test(listingId)) {
        // Mercari -> direct CDN
        cachedUrl = `https://static.mercdn.net/item/detail/orig/photos/${listingId}_1.jpg`;
        await prisma.listingImageCache.upsert({
          where: { listingId },
          update: { url: cachedUrl, source: 'mercari' },
          create: { listingId, url: cachedUrl, source: 'mercari' },
        });
      } else if (listingId.includes('%3A') || listingId.includes(':')) {
        // Rakuten
        const detailUrl = rakutenDetailUrl(listingId);
        const html = await fetchText(detailUrl);
        cachedUrl = extractRakutenImage(html, detailUrl);
        await prisma.listingImageCache.upsert({
          where: { listingId },
          update: { url: cachedUrl, source: 'rakuten' },
          create: { listingId, url: cachedUrl, source: 'rakuten' },
        });
      } else {
        // Buyee (Yahoo Auctions)
        const pageUrl = buyeeAuctionUrl(listingId);
        const html = await fetchText(pageUrl);
        cachedUrl = extractBuyeeImage(html, pageUrl);
        await prisma.listingImageCache.upsert({
          where: { listingId },
          update: { url: cachedUrl, source: 'buyee' },
          create: { listingId, url: cachedUrl, source: 'buyee' },
        });
      }
    } catch {
      // ignore, fallback below
    }
  }

  // Stream image or placeholder
  try {
    if (cachedUrl) {
      const { buf, contentType } = await fetchImage(cachedUrl);
      return new NextResponse(buf, {
        status: 200,
        headers: { 'Content-Type': contentType, 'Cache-Control': 'no-store' },
      });
    }
  } catch {}

  return servePlaceholder();
}

```

---

## src/app/dashboard/page.tsx

```tsx
export default function DashboardPage() {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-950 p-6">
      <div className="text-gray-400">Dashboard coming soon…</div>
    </div>
  );
}
```

---

## src/app/globals.css

```css
@import "tailwindcss";

@theme {
  --color-bg:        #0b0f16;
  --color-surface:   color-mix(in oklab, white 6%, var(--color-bg));
  --color-border:    color-mix(in oklab, white 8%, var(--color-bg));
  --color-muted:     #8b9bb3;
  --color-text:      #e6ebf1;
  --color-accent:    #3b82f6;  /* blue-500 */
  --color-success:   #10b981;  /* emerald-500 */
  --radius:          12px;
}

:root { color-scheme: dark; }

body {
  background: var(--color-bg);
  color: var(--color-text);
}

/* nice low-contrast containers */
.card {
  @apply rounded-xl border;
  background: var(--color-surface);
  border-color: color-mix(in oklab, var(--color-border) 100%, transparent);
  box-shadow: 0 10px 30px -20px rgba(0,0,0,.6), inset 0 1px 0 0 rgba(255,255,255,.03);
}

/* inputs */
.field {
  @apply rounded-lg px-3 py-2 text-sm;
  background: color-mix(in oklab, white 5%, var(--color-bg));
  border: 1px solid var(--color-border);
}
.field:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px color-mix(in oklab, var(--color-accent) 40%, transparent);
}

/* buttons */
.btn {
  @apply rounded-md px-3 py-1.5 text-sm font-medium;
}
.btn-outline {
  @apply border;
  border-color: var(--color-border);
  background: color-mix(in oklab, white 4%, var(--color-bg));
}
.btn-outline:hover { background: color-mix(in oklab, white 7%, var(--color-bg)); }
.btn-primary { background: var(--color-accent); color: white; }
.btn-primary:hover { filter: brightness(1.05); }
.btn-success { background: var(--color-success); color: white; }
.btn-success:hover { filter: brightness(1.05); }

/* subtle separator */
.hr { border-top: 1px solid var(--color-border); }

/* scrollbar */
::-webkit-scrollbar { width: 10px; height: 10px; }
::-webkit-scrollbar-thumb { background: #1f2733; border-radius: 8px; }
::-webkit-scrollbar-track { background: var(--color-bg); }

/* Responsive cards grid: never let a card go below 320px wide */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.25rem; /* ~= gap-5 */
}

/* somewhere global (e.g., globals.css) */
.btn { cursor: pointer; }

```

---

## src/app/inventory-filler/page.tsx

```tsx
// src/app/inventory-filler/page.tsx
'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import WeightSliders, { type WeightRow } from '@/components/WeightSliders';
import { ppmToPercent, PPM_DENOM } from '@/lib/weights';
import { getJpyToEurRate, yenToEuro } from '@/lib/fx.client';
import SingleTagPicker from '@/components/SingleTagPicker';

type Condition = 'Loose' | 'Boxed' | 'CIB' | 'NIB';

type SourceEntry = {
  id?: string;
  nameOverride: string | null;
  quantity: number;
  priceWeightPpm: number;
  shippingWeightPpm: number;
  tagId: string | null;
  tagPlacementId: string | null;
  condition: Condition; // ✅ NEW
};

type SourceItem = {
  id: string;
  scrapedItemId?: string | null;
  manualLineId?: string | null;
  listingId?: string | null;
  title: string;
  priceYen: number;
  shippingWeightPpm: number;
  entries: SourceEntry[];
};

type SessionPayload = {
  session: {
    id: string;
    sourceType: 'ScrapedPackage' | 'Manual';
    customsTotalYen: number;
    finalizedAt?: string | null;
    dateShipped?: string | null;
  };
  fxDateISO?: string | null;
  packageTotals: { intlShip: number; domShip: number; packageShippingTotal: number };
  sourceItems: SourceItem[];
};

type TagFlat = { id: string; name: string; description: string | null };

function thumbUrlFor(item: SourceItem): string | null {
  const lid = (item as any)?.listingId;
  if (lid && typeof lid === 'string' && lid.length > 0) {
    return `/api/thumb/${encodeURIComponent(lid)}`;
  }
  return null;
}

function fmtEUR(v: number | null | undefined) {
  if (v == null || !isFinite(v)) return '€0.00';
  return v.toLocaleString(undefined, { style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function fmtJPY(v: number | null | undefined) {
  if (v == null || !isFinite(v)) return '¥0';
  return `¥${Math.round(v).toLocaleString()}`;
}

async function fetchTags(): Promise<TagFlat[]> {
  const r = await fetch('/api/tags?format=flat', { cache: 'no-store' });
  const j = await r.json();
  return (j.tags || []) as TagFlat[];
}

export default function InventoryFillerPage() {
  const sp = useSearchParams();
  const router = useRouter();

  const [data, setData] = useState<SessionPayload | null>(null);
  const [tags, setTags] = useState<TagFlat[]>([]);
  const [busy, setBusy] = useState(false);

  const [fxRate, setFxRate] = useState<number | null>(null);
  const [fxDateISO, setFxDateISO] = useState<string>('');

  const [customsEuro, setCustomsEuro] = useState<string>('');
  const [customsDirty, setCustomsDirty] = useState<boolean>(false);

  const sessionId = sp.get('sessionId');
  const packageId = sp.get('packageId');

  useEffect(() => {
    (async () => {
      if (!sessionId && packageId) {
        const res = await fetch('/api/fill-sessions', {
          method: 'POST',
          body: JSON.stringify({ sourceType: 'ScrapedPackage', scrapedPackageId: packageId }),
        });
        const j = await res.json();
        if (res.ok) {
          router.replace(`/inventory-filler?sessionId=${j.sessionId}`);
        } else {
          alert(j.error || 'Failed to start session');
        }
      }
    })();
  }, [sessionId, packageId, router]);

  useEffect(() => {
    (async () => {
      if (!sessionId) return;
      const res = await fetch(`/api/fill-sessions/${sessionId}`, { cache: 'no-store' });
      const j = await res.json();
      if (!res.ok) {
        alert(j.error || 'Failed to load');
        return;
      }
      setData(j);
      setTags(await fetchTags());

      const shippedISO =
        (j?.fxDateISO && String(j.fxDateISO)) ||
        (j?.scrapedPackage?.dateShipped && new Date(j.scrapedPackage.dateShipped).toISOString().slice(0,10)) ||
        (j?.package?.dateShipped && new Date(j.package.dateShipped).toISOString().slice(0,10)) ||
        (j?.session?.dateShipped && new Date(j.session.dateShipped).toISOString().slice(0,10)) ||
        new Date().toISOString().slice(0, 10);

      setFxDateISO(shippedISO);
      const rate = await getJpyToEurRate(shippedISO);
      setFxRate(rate);
    })();
  }, [sessionId]);

  const packageSubtotal = useMemo(() => {
    if (!data) return 0;
    return data.sourceItems.reduce((a, s) => a + s.priceYen, 0);
  }, [data]);

  const shippingSumOK = useMemo(() => {
    if (!data) return true;
    const sum = data.sourceItems.reduce((a, s) => a + s.shippingWeightPpm, 0);
    return sum === PPM_DENOM;
  }, [data]);

  const finalized = !!data?.session.finalizedAt;

  useEffect(() => {
    if (!data || !fxRate) return;
    if (customsDirty) return;
    const jpy = Number(data.session.customsTotalYen || 0);
    const eur = yenToEuro(jpy, fxRate);
    setCustomsEuro(Number.isFinite(eur) ? eur.toFixed(2) : '');
  }, [data, fxRate, customsDirty]);

  const customsTotalJPYPreview = useMemo(() => {
    const savedJPY = Number(data?.session.customsTotalYen || 0);
    if (fxRate && isFinite(fxRate)) {
      const eur = Number(customsEuro || '0');
      if (Number.isFinite(eur)) {
        return Math.round((eur / fxRate) * 100) / 100;
      }
    }
    return savedJPY;
  }, [customsEuro, fxRate, data?.session.customsTotalYen]);

  const onSave = async () => {
    if (!data || finalized) return;
    setBusy(true);
    try {
      const eur = Number(customsEuro || '0');
      const customsJPY = fxRate ? Math.round((eur / (fxRate || 1)) * 100) / 100 : 0;

      const body = {
        customsTotalYen: customsJPY,
        sourceItems: data.sourceItems.map(s => ({ id: s.id, shippingWeightPpm: s.shippingWeightPpm })),
        entriesUpsert: data.sourceItems.flatMap(s =>
          s.entries.map(e => ({
            ...(e.id ? { id: e.id } : {}),
            sourceItemId: s.id,
            nameOverride: e.nameOverride,
            quantity: e.quantity,
            priceWeightPpm: e.priceWeightPpm,
            shippingWeightPpm: e.shippingWeightPpm,
            tagId: e.tagId,
            tagPlacementId: e.tagPlacementId,
            condition: e.condition, // ✅ NEW
          }))
        ),
      };

      const res = await fetch(`/api/fill-sessions/${data.session.id}`, {
        method: 'PATCH',
        body: JSON.stringify(body),
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Save failed');

      setData(d => d ? { ...d, session: { ...d.session, customsTotalYen: customsJPY } } as SessionPayload : d);
    } catch (e: any) {
      alert(e.message || 'Save failed');
    } finally {
      setBusy(false);
    }
  };

  const onFinalize = async () => {
    if (!data || finalized) return;
    const sourceOK = data.sourceItems.reduce((a, s) => a + s.shippingWeightPpm, 0) === PPM_DENOM;
    const entrySplitsOK = data.sourceItems.every(s => {
      const priceSum = s.entries.reduce((a, e) => a + e.priceWeightPpm, 0);
      const shipSum = s.entries.reduce((a, e) => a + e.shippingWeightPpm, 0);
      return priceSum === PPM_DENOM && shipSum === PPM_DENOM;
    });
    if (!sourceOK || !entrySplitsOK) {
      alert('Weights must sum to 100% at each level.');
      return;
    }
    setBusy(true);
    try {
      const res = await fetch(`/api/fill-sessions/${data.session.id}/finalize`, { method: 'POST' });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || 'Finalize failed');
      alert(j.alreadyFinalized ? 'Already finalized (no changes).' : `Created ${j.created} InventoryItems`);
      const res2 = await fetch(`/api/fill-sessions/${data.session.id}`, { cache: 'no-store' });
      setData(await res2.json());
    } catch (e: any) {
      alert(e.message || 'Finalize failed');
    } finally {
      setBusy(false);
    }
  };

  if (!sessionId) {
    return (
      <div className="card p-5">
        Open via a Scraped Package’s “Proceed” (it will take you here with <code>?packageId=…</code>),
        or pass <code>?sessionId=…</code> to continue an existing session.
      </div>
    );
  }
  if (!data) return <div className="card p-6">Loading…</div>;

  return (
    <div className="space-y-5">
      {finalized && (
        <div className="card p-3 bg-emerald-900/20 border border-emerald-700/30 text-emerald-200">
          This session was finalized on <span className="font-mono">{new Date(data.session.finalizedAt!).toLocaleString()}</span>. Editing is disabled.
        </div>
      )}

      {/* Header / package totals */}
      <div className="card p-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div>
            <div className="text-xs text-gray-400">Session</div>
            <div className="font-medium">{data.session.id}</div>
            <div className="text-xs text-gray-500">{data.session.sourceType}</div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Package subtotal</div>
            <div className="font-medium">
              {fmtEUR(yenToEuro(packageSubtotal, fxRate ?? 0))}{' '}
              <span className="text-gray-500">({fmtJPY(packageSubtotal)})</span>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-400">Shipping total (intl+dom)</div>
            <div className="font-medium">
              {fmtEUR(yenToEuro(data.packageTotals.packageShippingTotal, fxRate ?? 0))}{' '}
              <span className="text-gray-500">({fmtJPY(data.packageTotals.packageShippingTotal)})</span>
            </div>
          </div>
          <div>
            <label className="text-xs text-gray-400">Customs (EUR)</label>
            <div className="flex items-center gap-2 mt-1">
              <input
                className="field w-full"
                type="number"
                step="0.01"
                inputMode="decimal"
                placeholder="0.00"
                value={customsEuro}
                onChange={e => { setCustomsDirty(true); setCustomsEuro(e.target.value); }}
                disabled={finalized}
              />
              <span className="text-xs text-gray-500">
                ({fmtJPY(customsTotalJPYPreview)})
              </span>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-4 flex justify-end text-xs">
            <div className="rounded-lg border border-white/10 px-2 py-1">
              FX JPY→EUR {fxDateISO ? `@ ${fxDateISO}` : ''}: <span className="font-medium">{fxRate ? fxRate.toFixed(6) : '—'}</span>
            </div>
          </div>
        </div>

        <div className="mt-3 text-xs">
          Source shipping weights sum:{' '}
          <span className={shippingSumOK ? 'text-emerald-400' : 'text-amber-400'}>
            {ppmToPercent(data.sourceItems.reduce((a, s) => a + s.shippingWeightPpm, 0)).toFixed(1)}%
          </span>
        </div>
      </div>

      {/* Top-level shipping split across source items */}
      <div className="card p-4">
        <WeightSliders
          title="Package → source items shipping split"
          help="Distribute the total package shipping (intl + domestic) across items. Locks keep a row fixed while others redistribute."
          rows={data.sourceItems.map(s => ({
            id: s.id,
            label: s.title,
            ppm: s.shippingWeightPpm,
            rightHint: (
              <span>
                {fmtEUR(yenToEuro(data.packageTotals.packageShippingTotal * (s.shippingWeightPpm / PPM_DENOM), fxRate ?? 0))}{' '}
                <span className="text-gray-500">
                  ({fmtJPY(data.packageTotals.packageShippingTotal * (s.shippingWeightPpm / PPM_DENOM))})
                </span>
              </span>
            ),
          }))}
          onChange={(rows) => {
            if (finalized) return;
            setData(d => !d ? d : ({
              ...d,
              sourceItems: d.sourceItems.map(s => {
                const r = rows.find(x => x.id === s.id)!;
                return { ...s, shippingWeightPpm: r.ppm };
              }),
            }));
          }}
        />
      </div>

      {/* Source items */}
      {data.sourceItems.map((s) => (
        <SourceItemCard
          key={s.id}
          item={s}
          onChange={(next) => {
            if (finalized) return;
            setData(d => !d ? d : ({ ...d, sourceItems: d.sourceItems.map(x => x.id === s.id ? next : x) }));
          }}
          packageShippingTotal={data.packageTotals.packageShippingTotal}
          customsTotalPreview={customsTotalJPYPreview}
          packageSubtotal={packageSubtotal}
          allTags={tags}
          disabled={finalized}
          fxRate={fxRate ?? 0}
        />
      ))}

      <div className="flex gap-3">
        <button className="btn btn-outline" onClick={onSave} disabled={busy || finalized}>
          {busy ? 'Saving…' : 'Save'}
        </button>
        <button className="btn btn-outline" onClick={onFinalize} disabled={busy || finalized}>
          Finalize → Inventory
        </button>
      </div>
    </div>
  );
}

function SourceItemCard(props: {
  item: SourceItem;
  onChange: (next: SourceItem) => void;
  packageShippingTotal: number;
  customsTotalPreview: number;
  packageSubtotal: number;
  allTags: TagFlat[];
  disabled?: boolean;
  fxRate: number;
}) {
  const { item, onChange, packageShippingTotal, customsTotalPreview, packageSubtotal, allTags, disabled, fxRate } = props;

  const sourceShipAlloc = Math.round(packageShippingTotal * (item.shippingWeightPpm / PPM_DENOM));

  const priceRows: WeightRow[] =
    item.entries.length > 0
      ? item.entries.map((e, i) => ({
          id: e.id ?? `new-${i}`,
          label: e.nameOverride || `Entry ${i + 1}`,
          ppm: e.priceWeightPpm,
          rightHint: (
            <span>
              {fmtEUR(yenToEuro(item.priceYen * (e.priceWeightPpm / PPM_DENOM), fxRate))}{' '}
              <span className="text-gray-500">({fmtJPY(item.priceYen * (e.priceWeightPpm / PPM_DENOM))})</span>
            </span>
          ),
        }))
      : [];

  const shipRows: WeightRow[] =
    item.entries.length > 0
      ? item.entries.map((e, i) => ({
          id: e.id ?? `new-${i}`,
          label: e.nameOverride || `Entry ${i + 1}`,
          ppm: e.shippingWeightPpm,
          rightHint: (
            <span>
              {fmtEUR(yenToEuro(sourceShipAlloc * (e.shippingWeightPpm / PPM_DENOM), fxRate))}{' '}
              <span className="text-gray-500">({fmtJPY(sourceShipAlloc * (e.shippingWeightPpm / PPM_DENOM))})</span>
            </span>
          ),
        }))
      : [];

  const entryCustomsPreview = (e: SourceEntry) => {
    if (packageSubtotal <= 0 || customsTotalPreview <= 0) return 0;
    const sourceShare = item.priceYen / packageSubtotal;
    return Math.round(customsTotalPreview * sourceShare * (e.priceWeightPpm / PPM_DENOM));
  };

  const conditionOptions: Condition[] = ['Loose', 'Boxed', 'CIB', 'NIB'];

  return (
    <div className="card p-4 space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          {(() => {
            const url = thumbUrlFor(item);
            return url ? (
              <img
                src={url}
                alt={item.title || 'thumbnail'}
                className="w-16 h-16 rounded-md object-cover border border-white/10"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            ) : (
              <div className="w-16 h-16 rounded-md border border-white/10 bg-white/5 grid place-items-center text-[10px] text-gray-500">
                no img
              </div>
            );
          })()}
          <div>
            <div className="font-semibold">{item.title}</div>
            <div className="text-xs text-gray-400">
              {fmtEUR(yenToEuro(item.priceYen, fxRate))}{' '}
              <span className="text-gray-500">({fmtJPY(item.priceYen)})</span>
            </div>
            <div className="text-xs text-gray-400">
              This item’s shipping pool:{' '}
              {fmtEUR(yenToEuro(sourceShipAlloc, fxRate))}{' '}
              <span className="text-gray-500">({fmtJPY(sourceShipAlloc)})</span>
            </div>
          </div>
        </div>
        <div>
          <button
            className="btn btn-outline text-xs"
            onClick={() => {
              if (disabled) return;
              const newEntry: SourceEntry = {
                id: undefined,
                nameOverride: null,
                quantity: 1,
                priceWeightPpm: 0,
                shippingWeightPpm: 0,
                tagId: null,
                tagPlacementId: null,
                condition: 'Loose', // ✅ default
              };
              onChange({ ...item, entries: [...item.entries, newEntry] });
            }}
            disabled={disabled}
          >
            + Add entry
          </button>
        </div>
      </div>

      {priceRows.length > 0 ? (
        <WeightSliders
          title="Entries → price split"
          help="Split this source item’s base price across its entries. Locks keep an entry fixed while the others redistribute."
          rows={priceRows}
          onChange={(rows) => {
            if (disabled) return;
            onChange({
              ...item,
              entries: item.entries.map(e => {
                const rid = e.id ?? rows.find(r => r.label === (e.nameOverride || ''))?.id;
                const r = rows.find(x => x.id === (e.id ?? rid));
                if (!r) return e;
                return { ...e, priceWeightPpm: r.ppm };
              }),
            });
          }}
        />
      ) : (
        <div className="rounded-xl border border-white/10 p-3 text-xs text-gray-400">Add entries to split price and shipping.</div>
      )}

      {shipRows.length > 0 && (
        <WeightSliders
          title="Entries → shipping split"
          help="Split this source item’s shipping share across its entries. Locks keep an entry fixed while the others redistribute."
          rows={shipRows}
          onChange={(rows) => {
            if (disabled) return;
            onChange({
              ...item,
              entries: item.entries.map(e => {
                const rid = e.id ?? rows.find(r => r.label === (e.nameOverride || ''))?.id;
                const r = rows.find(x => x.id === (e.id ?? rid));
                if (!r) return e;
                return { ...e, shippingWeightPpm: r.ppm };
              }),
            });
          }}
        />
      )}

      {/* Entries editor */}
      <div className="rounded-lg border border-white/10 divide-y divide-white/10">
        {item.entries.map((e, i) => (
          <div key={e.id || i} className="p-3 grid md:grid-cols-7 gap-3 items-center">
            <div className="md:col-span-2">
              <input
                className="field w-full"
                placeholder="Name (optional override)"
                value={e.nameOverride ?? ''}
                onChange={ev => onChange({ ...item, entries: item.entries.map(x => x === e ? { ...e, nameOverride: ev.target.value } : x) })}
                disabled={disabled}
              />
              <div className="mt-2 flex flex-wrap gap-1">
                <SingleTagPicker
                  value={e.tagId ?? null}
                  onChange={(sel) => {
                    const tagId = sel?.tagId ?? null;
                    const placementId = sel?.placementId ?? null;
                    let nextName = e.nameOverride ?? '';
                    const isBlank = !nextName || nextName.trim().length === 0;
                    if (isBlank && tagId) {
                      const t = props.allTags.find(t => t.id === tagId);
                      const candidate = (t?.description?.trim() || t?.name || '').trim();
                      if (candidate) nextName = candidate;
                    }
                    onChange({
                      ...item,
                      entries: item.entries.map(x =>
                        x === e ? { ...e, tagId, tagPlacementId: placementId, nameOverride: nextName } : x
                      ),
                    });
                  }}
                />
              </div>
            </div>

            {/* NEW: Condition */}
            <div>
              <label className="block text-xs text-gray-400">Condition</label>
              <select
                className="field"
                value={e.condition}
                onChange={ev => onChange({
                  ...item,
                  entries: item.entries.map(x => x === e ? { ...e, condition: ev.target.value as Condition } : x),
                })}
                disabled={disabled}
              >
                {conditionOptions.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs text-gray-400">Qty</label>
              <input
                type="number"
                className="field w-20"
                min={1}
                value={e.quantity}
                onChange={ev => onChange({
                  ...item,
                  entries: item.entries.map(x => x === e ? { ...e, quantity: Math.max(1, parseInt(ev.target.value || '1', 10)) } : x),
                })}
                disabled={disabled}
              />
            </div>

            <div>
              <div className="text-xs text-gray-400">Base preview</div>
              <div className="text-sm">
                {fmtEUR(yenToEuro(item.priceYen * (e.priceWeightPpm / PPM_DENOM), fxRate))}
                <div className="text-xs text-gray-500">
                  {fmtJPY(item.priceYen * (e.priceWeightPpm / PPM_DENOM))}
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs text-gray-400">Ship + customs preview</div>
              <div className="text-sm">
                {fmtEUR(yenToEuro(sourceShipAlloc * (e.shippingWeightPpm / PPM_DENOM), fxRate))}
                {' + '}
                {fmtEUR(yenToEuro(entryCustomsPreview(e), fxRate))}
                <div className="text-xs text-gray-500">
                  {fmtJPY(sourceShipAlloc * (e.shippingWeightPpm / PPM_DENOM))} + {fmtJPY(entryCustomsPreview(e))}
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs text-gray-400">Est. total / unit</div>
              <div className="text-sm">
                {(() => {
                  const basePartJPY = Math.round(item.priceYen * (e.priceWeightPpm / PPM_DENOM));
                  const shipPartJPY = Math.round(sourceShipAlloc * (e.shippingWeightPpm / PPM_DENOM));
                  const customsPartJPY = entryCustomsPreview(e);
                  const totalJPY = basePartJPY + shipPartJPY + customsPartJPY;
                  const perUnitJPY = Math.round(totalJPY / Math.max(1, e.quantity));
                  return (
                    <div>
                      {fmtEUR(yenToEuro(perUnitJPY, fxRate))}
                      <div className="text-xs text-gray-500">{fmtJPY(perUnitJPY)}</div>
                    </div>
                  );
                })()}
              </div>
            </div>

            <div className="md:col-span-7 flex justify-end">
              <button
                className="btn btn-outline text-xs"
                onClick={() => onChange({ ...item, entries: item.entries.filter(x => x !== e) })}
                disabled={disabled}
              >
                🗑️ Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

```

---

## src/app/inventory/page.tsx

```tsx
// src/app/inventory/page.tsx
'use client';

import { useEffect, useMemo, useState } from 'react';
import { getJpyToEurRate, yenToEuro } from '@/lib/fx.client';

type Row = {
  id: string;
  name: string;
  // ✅ NEW: condition is returned by the API (Loose | Boxed | CIB | NIB)
  condition: string;
  tagChain: string; // e.g. "Foo (Root > Branch > Leaf) • Bar (...)"
  fxDateISO: string | null; // date used for JPY->EUR conversion (YYYY-MM-DD)
  packageNumber: string | null;
  purchaseDateISO: string | null;
  jpy: {
    basePerUnit: number;
    shipPerUnit: number;
    customsPerUnit: number;
    totalPerUnit: number;
  };
};

type ApiResp = { items: Row[]; nextCursor: string | null };

function fmtEUR(v: number | null | undefined) {
  if (v == null || !isFinite(v)) return '€0.00';
  return v.toLocaleString(undefined, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
function fmtJPY(v: number | null | undefined) {
  if (v == null || !isFinite(v)) return '¥0';
  return `¥${Math.round(v).toLocaleString()}`;
}

export default function InventoryPage() {
  // stacked filters (chips)
  const [filters, setFilters] = useState<string[]>([]);
  const [draft, setDraft] = useState('');
  const [rows, setRows] = useState<Row[]>([]);
  const [cursor, setCursor] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  // cache of JPY->EUR rates by date
  const [rates, setRates] = useState<Record<string, number>>({});

  const todayISO = useMemo(() => new Date().toISOString().slice(0, 10), []);

  // URL sync (optional but nice; keeps filters in the address bar)
  useEffect(() => {
    const params = new URLSearchParams();
    for (const f of filters) params.append('q', f);
    const qs = params.toString();
    const url = qs ? `/inventory?${qs}` : '/inventory';
    window.history.replaceState(null, '', url);
  }, [filters]);

  async function ensureRates(dates: (string | null)[]) {
    const unique = Array.from(
      new Set(
        dates.map(d => (d && d.length ? d : todayISO)).filter(Boolean) as string[],
      ),
    ).filter(d => rates[d] == null);

    if (!unique.length) return;

    const fetched = await Promise.all(
      unique.map(async (d) => {
        try {
          const r = await getJpyToEurRate(d);
          return [d, r] as const;
        } catch {
          return [d, NaN] as const; // avoid re-fetch loops; UI will show €0.00
        }
      }),
    );

    setRates(prev => {
      const next = { ...prev };
      for (const [d, r] of fetched) next[d] = r;
      return next;
    });
  }

  async function load(opts: { reset?: boolean; cursor?: string | null } = {}) {
    const { reset = false, cursor: cur = null } = opts;
    setBusy(true);
    try {
      const url = new URL('/api/inventory', window.location.origin);
      url.searchParams.set('limit', '50');
      if (cur) url.searchParams.set('cursor', cur);
      for (const f of filters) url.searchParams.append('q', f);

      const r = await fetch(url.toString(), { cache: 'no-store' });
      const j: ApiResp = await r.json();
      if (!r.ok) throw new Error((j as any)?.error || 'load_failed');

      const page = j.items || [];
      setRows(prev => (reset ? page : [...prev, ...page]));
      setCursor(j.nextCursor ?? null);

      await ensureRates(page.map(x => x.fxDateISO));
    } catch (e: any) {
      alert(e.message || 'Load failed');
    } finally {
      setBusy(false);
    }
  }

  // initial load
  useEffect(() => {
    // hydrate filters from URL (?q=...&q=...)
    const sp = new URLSearchParams(window.location.search);
    const qs = sp.getAll('q').map(s => s.trim()).filter(Boolean);
    if (qs.length) setFilters(qs);

    // then load
    load({ reset: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // reload when filters change
  useEffect(() => {
    // immediate reload
    load({ reset: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.join('\u0001')]);

  function addFilter() {
    const v = draft.trim();
    if (!v) return;
    if (!filters.includes(v)) setFilters(prev => [...prev, v]);
    setDraft('');
  }
  function removeFilter(f: string) {
    setFilters(prev => prev.filter(x => x !== f));
  }

  function eurFor(jpy: number, d: string | null) {
    const key = d && d.length ? d : todayISO;
    const rate = rates[key];
    if (!Number.isFinite(rate)) return 0;
    return yenToEuro(jpy, rate);
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Inventory</h1>
      <p className="text-xs text-gray-400">
        Per-unit prices computed from session splits and FX on package date.
      </p>

      {/* Stacked filters */}
      <div className="rounded-lg border border-white/10 p-2">
        <div className="flex flex-wrap items-center gap-2">
          {filters.map(f => (
            <span
              key={f}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs"
            >
              {f}
              <button
                className="hover:text-red-300"
                onClick={() => removeFilter(f)}
                title="Remove filter"
              >
                ✕
              </button>
            </span>
          ))}

          <input
            className="field min-w-[14rem] flex-1"
            placeholder="Search by name, tag, or package # …"
            value={draft}
            onChange={e => setDraft(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ',') {
                e.preventDefault();
                addFilter();
              }
              if (e.key === 'Escape') setDraft('');
            }}
          />
          <button className="btn btn-outline" onClick={addFilter}>Add</button>
          {filters.length > 0 && (
            <button className="btn btn-outline" onClick={() => setFilters([])}>
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg border border-white/10 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-xs text-gray-400">
            <tr>
              <th className="px-3 py-2 text-left">Name</th>
              <th className="px-3 py-2 text-left">Tags</th>
              {/* ✅ NEW */}
              <th className="px-3 py-2 text-left">Condition</th>
              <th className="px-3 py-2 text-left">Item price</th>
              <th className="px-3 py-2 text-left">Real price</th>
              <th className="px-3 py-2 text-left">Package #</th>
              <th className="px-3 py-2 text-left">Purchase date</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const baseEUR = eurFor(r.jpy.basePerUnit, r.fxDateISO);
              const totalEUR = eurFor(r.jpy.totalPerUnit, r.fxDateISO);
              return (
                <tr key={r.id} className="border-t border-white/10">
                  <td className="px-3 py-2">{r.name || '—'}</td>
                  <td className="px-3 py-2">{r.tagChain || '—'}</td>
                  {/* ✅ NEW */}
                  <td className="px-3 py-2">{r.condition || '—'}</td>

                  <td className="px-3 py-2">
                    <div>{fmtEUR(baseEUR)}</div>
                    <div className="text-xs text-gray-500">{fmtJPY(r.jpy.basePerUnit)}</div>
                  </td>
                  <td className="px-3 py-2">
                    <div>{fmtEUR(totalEUR)}</div>
                    <div className="text-xs text-gray-500">{fmtJPY(r.jpy.totalPerUnit)}</div>
                  </td>
                  <td className="px-3 py-2">{r.packageNumber ?? '—'}</td>
                  <td className="px-3 py-2">{r.purchaseDateISO ?? '—'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {rows.length === 0 && !busy && (
          <div className="p-6 text-center text-sm text-gray-400">No items yet.</div>
        )}

        <div className="flex items-center justify-between px-3 py-2 text-xs text-gray-400">
          <div>{rows.length} items</div>
          <button
            className="btn btn-outline"
            onClick={() => load({ cursor })}
            disabled={!cursor || busy}
          >
            {busy ? 'Loading…' : (cursor ? 'Load more' : 'No more')}
          </button>
        </div>
      </div>
    </div>
  );
}

```

---

## src/app/layout.tsx

```tsx
import './globals.css';
import type { Metadata } from 'next';
import Sidebar from '../components/Sidebar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'Proxy Dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-[#0b0f16] text-gray-100 antialiased`}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1">
            <header className="sticky top-0 z-10 border-b border-white/5 bg-[#0b0f16]/80 backdrop-blur">
              <div className="mx-auto max-w-7xl px-4 py-4">
                <h1 className="text-lg font-semibold tracking-tight">
                  {process.env.NEXT_PUBLIC_APP_NAME || 'Proxy Dashboard'}
                </h1>
              </div>
            </header>
            <div className="mx-auto max-w-7xl px-4 py-6">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}

```

---

## src/app/page.tsx

```tsx
import { redirect } from 'next/navigation';
export default function Home() { redirect('/dashboard'); }
```

---

## src/app/scraped-packages/page.tsx

```tsx
// src/app/scraped-packages/page.tsx
import ScrapedPackagesClient from './scraped-packages.client';

export const dynamic = 'force-dynamic';

export default async function ScrapedPackagesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams; // <-- important

  const initialQuery = Object.fromEntries(
    Object.entries(sp || {}).map(([k, v]) => [k, String(v ?? '')])
  );

  return <ScrapedPackagesClient initialQuery={initialQuery} />;
}

```

---

## src/app/scraped-packages/scraped-packages.client.tsx

```tsx
'use client';
import { useEffect, useMemo, useState, useCallback } from 'react';
import ScrapedPackageCard from './ui/ScrapedPackageCard';
import ScrapedToolbar from './ui/ScrapedToolbar';
import ScrapersBar from './ui/ScrapersBar';

type ScrapedItemPreview = {
  id: string;
  title: string | null;
  listingId: string | null;
  itemUrl: string | null;
  priceYen: number | null;
};

export type ScrapedPackageRow = {
  id: string;
  source: string;
  pageUrl: string;
  dateShipped: string | null;
  packageNumber: string;
  intlTrackingNumber: string | null;
  intlTrackingUrl: string | null;
  internationalShippingFeeYen: number;
  domesticShippingFeeYen: number;
  itemsCount: number;
  items: ScrapedItemPreview[];
  status: 'Todo' | 'Processed' | 'Blacklist';
};

export default function ScrapedPackagesClient({ initialQuery }: { initialQuery: Record<string,string> }) {
  const [q, setQ] = useState(initialQuery.q || '');
  const [source, setSource] = useState(initialQuery.source || '');
  const [sort, setSort] = useState((initialQuery.sort as any) || 'date_desc');
  const [status, setStatus] = useState(initialQuery.status || '');
  const [data, setData] = useState<ScrapedPackageRow[] | null>(null);
  const [loading, setLoading] = useState(false);

  // block refetches while a run is happening
  const [isRunning, setIsRunning] = useState(false);

  const params = useMemo(() => {
    const sp = new URLSearchParams();
    if (q) sp.set('q', q);
    if (source) sp.set('source', source);
    if (status) sp.set('status', status);
    if (sort) sp.set('sort', sort);
    return sp.toString();
  }, [q, source, status, sort]);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const r = await fetch(`/api/scraped-packages?${params}`);
      const j = await r.json();
      setData(j);
    } finally {
      setLoading(false);
    }
  }, [params]);

  // normal refetch on params change, but NOT while a run is happening
  useEffect(() => {
    if (!isRunning) load();
  }, [load, isRunning]);

  const handleRunStart = () => setIsRunning(true);
  const handleRunDone = async () => {
    setIsRunning(false);
    await load(); // single fetch after everything is done
  };

  return (
    <div className="space-y-4">
      <ScrapersBar onRunStart={handleRunStart} onRunDone={handleRunDone} />

      <ScrapedToolbar
        q={q} onQ={setQ}
        source={source} onSource={setSource}
        status={status} onStatus={setStatus}
        sort={sort as any} onSort={setSort as any}
        loading={loading}
      />

      {!data?.length && !loading && (
        <div className="card p-8 text-center text-gray-400">No scraped packages.</div>
      )}

      <div className="cards-grid">
        {data?.map(pkg => (
          <ScrapedPackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}

```

---

## src/app/scraped-packages/ui/ScrapedPackageCard.tsx

```tsx
'use client';
import Link from 'next/link';
import type { ScrapedPackageRow } from '../scraped-packages.client';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

function ItemsHover({ names }: { names: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className="cursor-default underline decoration-dotted underline-offset-4">
        Items: {names.length}
      </span>
      {open && (
        <div
          className="absolute right-0 top-full z-20 mt-2 w-72 max-w-[80vw] rounded-lg border p-2 text-xs shadow-xl"
          style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}
        >
          <ul className="space-y-1">
            {names.map((n, i) => (
              <li key={i} className="text-gray-300 leading-snug">• {n}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function ScrapedPackageCard({ pkg }: { pkg: ScrapedPackageRow }) {
  const itemNames = useMemo(() => pkg.items.map(i => i.title || '').filter(Boolean), [pkg.items]);

  const [status, setStatus] = useState(pkg.status);
  const [saving, setSaving] = useState(false);
  const isBlacklisted = status === 'Blacklist';
  const isProcessed = status === 'Processed';
  const router = useRouter();

  async function toggleBlacklist() {
    if (saving) return;
    setSaving(true);
    const prev = status;
    const next = isBlacklisted ? 'Todo' : 'Blacklist';
    setStatus(next); // optimistic UI

    try {
      const res = await fetch(`/api/scraped-packages/${pkg.id}/status`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: next }),
      });
      if (!res.ok) throw new Error('save_failed');
    } catch {
      setStatus(prev); // rollback on error
    } finally {
      setSaving(false);
    }
  }

  async function viewOrProceed() {
    if (!isProcessed) {
      // Not processed yet → create/reuse and proceed
      router.push(`/inventory-filler?packageId=${pkg.id}`);
      return;
    }

    // Processed → look up existing session id and open it (read-only after finalize)
    try {
      const res = await fetch(`/api/fill-sessions/by-package?scrapedPackageId=${encodeURIComponent(pkg.id)}`, { cache: 'no-store' });
      const j = await res.json();
      if (res.ok && j.sessionId) {
        router.push(`/inventory-filler?sessionId=${j.sessionId}`);
      } else {
        // fallback (shouldn't normally happen)
        router.push(`/inventory-filler?packageId=${pkg.id}`);
      }
    } catch {
      router.push(`/inventory-filler?packageId=${pkg.id}`);
    }
  }

  return (
    <div className="card flex h-full flex-col overflow-hidden">
      {/* header */}
      <div className="flex items-center justify-between border-b px-3 py-2" style={{ borderColor: 'var(--color-border)' }}>
        <div className="text-xs uppercase tracking-wide text-gray-400">{pkg.source}</div>
        <div className="text-xs text-gray-400">{pkg.dateShipped ?? '—'}</div>
      </div>

      {/* body now fills remaining height */}
      <div className="flex flex-1 flex-col space-y-3 p-3">
        <div className="flex items-center justify-between">
          <div className="font-mono text-sm tracking-tight">{pkg.packageNumber}</div>
          <div className="text-xs text-gray-400">
            <ItemsHover names={itemNames} />
          </div>
        </div>

        {pkg.intlTrackingNumber && (
          <div className="truncate text-xs">
            <span className="text-gray-400">Tracking:</span>{' '}
            {pkg.intlTrackingUrl ? (
              <a className="text-blue-400 hover:underline" href={pkg.intlTrackingUrl} target="_blank" rel="noreferrer">
                {pkg.intlTrackingNumber}
              </a>
            ) : (
              <span className="font-mono">{pkg.intlTrackingNumber}</span>
            )}
          </div>
        )}

        {/* thumbnails */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
          {pkg.items.slice(0, 8).map((it, i) => {
            const href = it.listingId ? `https://buyee.jp/item/jdirectitems/auction/${it.listingId}` : undefined;
            const img = it.listingId ? `/api/thumb/${it.listingId}` : '/placeholder-item.png';
            const el = (
              <img
                src={img}
                alt={it.title || ''}
                className="h-full w-full object-cover"
                loading={i > 1 ? 'lazy' : undefined}
              />
            );
            return (
              <div
                key={it.id}
                className="relative aspect-square overflow-hidden rounded-md ring-1"
                style={{ background: '#0f1522', borderColor: 'transparent', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,.04)' }}
              >
                {href ? (
                  <a href={href} target="_blank" rel="noreferrer" title={it.title || ''}>
                    {el}
                  </a>
                ) : el}
              </div>
            );
          })}
        </div>

        {/* footer pinned to bottom */}
        <div className="mt-auto flex items-center justify-end gap-2 pt-1">
          <button
            onClick={toggleBlacklist}
            disabled={saving}
            className={isBlacklisted ? 'btn bg-red-600 hover:bg-red-500 disabled:opacity-50' : 'btn  disabled:opacity-50'}
            title={isBlacklisted ? 'Click to unblacklist (back to To-do)' : 'Blacklist this package'}
          >
            {isBlacklisted ? 'Blacklisted' : 'Blacklist'}
          </button>

          <button onClick={viewOrProceed} className="btn btn-success">
            {isProcessed ? 'View session' : 'Proceed'}
          </button>
        </div>
      </div>
    </div>
  );
}

```

---

## src/app/scraped-packages/ui/ScrapedToolbar.tsx

```tsx
'use client';

export default function ScrapedToolbar({
  q, onQ, source, onSource, status, onStatus, sort, onSort, loading,
}: {
  q: string; onQ: (v: string) => void;
  source: string; onSource: (v: string) => void;
  status: string; onStatus: (v: string) => void;
  sort: 'date_desc'|'date_asc'|'intl_desc'|'intl_asc'|'dom_desc'|'dom_asc'|'items_desc'|'items_asc';
  onSort: (v: any) => void;
  loading: boolean;
}) {
  return (
    <div className="card p-3">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          value={q}
          onChange={e => onQ(e.target.value)}
          placeholder="Search package #, tracking, title, listing id…"
          className="field flex-1"
        />
        <select value={source} onChange={e=>onSource(e.target.value)} className="field">
          <option value="">All proxies</option>
          <option value="zenmarket">zenmarket</option>
          <option value="buyee">buyee</option>
          <option value="fromjapan">fromjapan</option>
        </select>
        <select value={status} onChange={e=>onStatus(e.target.value)} className="field">
          <option value="">All</option>
          <option value="todo">To process</option>
          <option value="processed">Processed</option>
          <option value="blacklisted">Blacklisted</option>
        </select>
        <select value={sort} onChange={e=>onSort(e.target.value as any)} className="field">
          <option value="date_desc">Date ↓</option>
          <option value="date_asc">Date ↑</option>
          <option value="items_desc">Items ↓</option>
          <option value="items_asc">Items ↑</option>
        </select>
        <button disabled={loading} className="btn btn-outline disabled:opacity-50">
          {loading ? 'Loading…' : 'Refresh'}
        </button>
      </div>
    </div>
  );
}

```

---

## src/app/scraped-packages/ui/ScrapersBar.tsx

```tsx
'use client';

import { useState } from 'react';

type Props = {
  onRunStart?: () => void;
  onRunDone?: () => void; // called exactly once after confirm+scrape finishes
};

async function post(url: string, body: any) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body ?? {}),
  });
  const json = await res.json().catch(() => ({}));
  return { ok: res.ok, json };
}

export default function ScrapersBar({ onRunStart, onRunDone }: Props) {
  const [maxPages, setMaxPages] = useState<number>(9999);
  const [zmUrl, setZmUrl] = useState<string>('https://zenmarket.jp/fr/profile/parcel.aspx?state=5');
  const [busy, setBusy] = useState<null | 'buyee' | 'fromjapan' | 'zenmarket'>(null);
  const [phase, setPhase] = useState<'idle'|'waiting'|'running'|'done'>('idle');
  const [current, setCurrent] = useState<null | 'buyee' | 'fromjapan' | 'zenmarket'>(null);
  const [msg, setMsg] = useState('');

  const endpoints = {
    buyee:     '/api/scrape/buyee-crawl',
    fromjapan: '/api/scrape/fromjapan-crawl',
    zenmarket: '/api/scrape/zenmarket-crawl',
  } as const;

  const payloadFor = (src: 'buyee'|'fromjapan'|'zenmarket') =>
    src === 'zenmarket' ? { pageUrl: zmUrl } : { startPage: 1, maxPages: Math.max(1, Number(maxPages) || 1) };

  const start = async (src: 'buyee'|'fromjapan'|'zenmarket') => {
    if (busy) return;
    onRunStart?.();                 // 🔹 mark running (prevents page refetch)
    setBusy(src); setCurrent(src); setMsg('Starting profile refresh…'); setPhase('waiting');

    const s = await post('/api/profile/refresh/start', { source: src });
    if (!s.ok) {
      setMsg(`Failed to start refresh: ${s.json?.error || 'error'}`);
      setBusy(null); setPhase('idle');
      onRunDone?.();                // unblock UI despite failure
      return;
    }
    setMsg('Profile refresh running. Complete login in the opened window, then click Confirm.');
  };

  const confirm = async () => {
    const src = current!;
    setMsg('Confirming refresh…');
    const c = await post('/api/profile/refresh/confirm', { source: src });
    if (!c.ok || !c.json?.ok) {
      setMsg(`Refresh confirm failed${c.json?.code !== undefined ? ` (code ${c.json.code})` : ''}.`);
      setBusy(null); setPhase('idle');
      onRunDone?.();
      return;
    }
    // 2) run scraper
    setPhase('running'); setMsg('Running scraper…');
    const run = await post(endpoints[src], payloadFor(src));

    if (run.ok && (run.json?.ok ?? true)) {
      setMsg('Done.'); setPhase('done');
    } else {
      setMsg(`Scraper failed${run.json?.error ? ` — ${run.json.error}` : ''}.`);
      setPhase('idle');
    }

    setBusy(null);
    onRunDone?.();                  // 🔹 fetch once now that we’re done
  };

  return (
    <div className="card p-3">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
        <div className="flex flex-1 items-center gap-2">
          <label className="text-xs text-gray-400 min-w-[6rem]">ZenMarket URL</label>
          <input className="field w-full" value={zmUrl} onChange={e => setZmUrl(e.target.value)} spellCheck={false}/>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-xs text-gray-400">Max pages</label>
          <input type="number" min={1} className="field w-24"
                 value={maxPages} onChange={e => setMaxPages(Number(e.target.value || 1))}/>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button className="btn btn-outline disabled:opacity-50" disabled={!!busy} onClick={() => start('buyee')}>
            {busy === 'buyee' && phase !== 'idle' ? 'Buyee…' : 'Refresh+Run Buyee'}
          </button>
          <button className="btn btn-outline disabled:opacity-50" disabled={!!busy} onClick={() => start('fromjapan')}>
            {busy === 'fromjapan' && phase !== 'idle' ? 'FromJapan…' : 'Refresh+Run FromJapan'}
          </button>
          <button className="btn btn-outline disabled:opacity-50" disabled={!!busy} onClick={() => start('zenmarket')}>
            {busy === 'zenmarket' && phase !== 'idle' ? 'ZenMarket…' : 'Refresh+Run ZenMarket'}
          </button>
          {phase === 'waiting' && (
            <button className="btn btn-primary" onClick={confirm}>I’ve logged in — Confirm</button>
          )}
        </div>
      </div>
      {msg && <div className="hr mt-3 pt-3 text-xs text-gray-400">{msg}</div>}
    </div>
  );
}

```

---

## src/app/tags/page.tsx

```tsx
// src/app/tags/page.tsx
export const dynamic = 'force-dynamic';

import TagsClient from './tags.client';

export default function TagsPage() {
  return <TagsClient />;
}

```

---

## src/app/tags/tags.client.tsx

```tsx
'use client';

import { useEffect, useMemo, useState } from 'react';

type TagNode = {
  placementId: string;
  tagId: string;
  name: string;
  description: string | null;
  parentPlacementId: string | null;
  children: TagNode[];
};

type TreePayload = {
  tree: TagNode[];
  parentCounts: Record<string, number>; // number of placements per tagId
  tags: Array<{ id: string; name: string; description: string | null }>;
};

async function fetchTreePayload(): Promise<TreePayload> {
  const res = await fetch('/api/tags?format=tree', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to load tags');
  return res.json();
}

async function apiCreate(payload: { name: string; description?: string; parentPlacementId?: string | null }) {
  const res = await fetch('/api/tags', { method: 'POST', body: JSON.stringify(payload) });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Create failed');
  return data.placement as { id: string; tagId: string; parentPlacementId: string | null };
}
async function apiDeletePlacement(placementId: string) {
  const res = await fetch('/api/tags', { method: 'DELETE', body: JSON.stringify({ placementId }) });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Delete failed');
  return data as { ok: true; deletedPlacement: boolean; deletedTag: boolean };
}
async function apiPatchTag(payload: { tagId: string; name?: string; description?: string }) {
  const res = await fetch('/api/tags', { method: 'PATCH', body: JSON.stringify(payload) });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Update failed');
  return data.tag as { id: string; name: string; description: string | null };
}

export default function TagsClient() {
  const [tree, setTree] = useState<TagNode[] | null>(null);
  const [parentCounts, setParentCounts] = useState<Record<string, number>>({});
  const [nameIndex, setNameIndex] = useState<Map<string, string>>(new Map()); // lower(name) -> tagId
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [selectedPlacementId, setSelectedPlacementId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const selected = useMemo(() => {
    if (!tree || !selectedPlacementId) return null;
    const stack = [...tree];
    while (stack.length) {
      const n = stack.pop()!;
      if (n.placementId === selectedPlacementId) return n;
      stack.push(...n.children);
    }
    return null;
  }, [tree, selectedPlacementId]);

  // helpers
  function idsInTree(nodes: TagNode[]): Set<string> {
    const s = new Set<string>();
    const st = [...nodes];
    while (st.length) {
      const n = st.pop()!;
      s.add(n.placementId);
      for (const c of n.children) st.push(c);
    }
    return s;
  }
  function findPath(nodes: TagNode[], targetPid: string): string[] | null {
    const stack: Array<{ node: TagNode; path: string[] }> = nodes.map(n => ({ node: n, path: [n.placementId] }));
    while (stack.length) {
      const { node, path } = stack.pop()!;
      if (node.placementId === targetPid) return path;
      for (const c of node.children) stack.push({ node: c, path: [...path, c.placementId] });
    }
    return null;
  }

  async function load(opts?: { preserveExpanded?: boolean; ensureExpandedPids?: string[]; selectPid?: string | null }) {
    setLoading(true);
    setErr(null);
    try {
      const payload = await fetchTreePayload();
      setTree(payload.tree);
      setParentCounts(payload.parentCounts || {});

      const idx = new Map<string, string>();
      for (const t of payload.tags || []) idx.set(t.name.toLowerCase(), t.id);
      setNameIndex(idx);

      const next: Record<string, boolean> = {};
      const existing = idsInTree(payload.tree);

      if (opts?.preserveExpanded) {
        for (const pid of Object.keys(expanded)) if (expanded[pid] && existing.has(pid)) next[pid] = true;
      } else {
        for (const r of payload.tree) next[r.placementId] = true; // expand roots initially
      }

      if (opts?.ensureExpandedPids) {
        for (const pid of opts.ensureExpandedPids) {
          const path = pid ? findPath(payload.tree, pid) : null;
          if (path) for (const anc of path.slice(0, -1)) next[anc] = true;
        }
      }

      setExpanded(next);

      if (opts?.selectPid !== undefined) {
        setSelectedPlacementId(opts.selectPid);
      } else if (selectedPlacementId && existing.has(selectedPlacementId)) {
        setSelectedPlacementId(selectedPlacementId);
      } else {
        setSelectedPlacementId(null);
      }
    } catch (e: any) {
      setErr(e.message || 'Load failed');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load({ preserveExpanded: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Top + : create root placement (new tag or existing by name warning)
  const addRoot = async () => {
    const raw = prompt('New root tag name:');
    const name = (raw || '').trim();
    if (!name) return;

    // If a tag already exists with this name, we still create a placement at root (link).
    try {
      const placement = await apiCreate({ name, parentPlacementId: null });
      await load({ preserveExpanded: true, ensureExpandedPids: [placement.id], selectPid: placement.id });
    } catch (e: any) {
      alert(e.message || 'Create failed');
    }
  };

  // + on a node: link existing by name or create new tag + placement — scoped to this branch
  const addChild = async (parent: TagNode) => {
    const raw = prompt(`Add under “${parent.name}”:\nEnter tag name (links if it already exists):`);
    const name = (raw || '').trim();
    if (!name) return;

    try {
      const placement = await apiCreate({ name, parentPlacementId: parent.placementId });
      await load({ preserveExpanded: true, ensureExpandedPids: [parent.placementId, placement.id], selectPid: placement.id });
    } catch (e: any) {
      alert(e.message || 'Add failed');
    }
  };

  // Delete placement. If it was the last placement of that tag and it's unused, server deletes the tag as well.
  const deleteNode = async (node: TagNode) => {
    const placementsForTag = parentCounts[node.tagId] ?? 0;
    const msg = placementsForTag > 1
      ? `Unlink “${node.name}” from this branch?`
      : `Delete “${node.name}” entirely? (It is not used elsewhere)`;
    if (!confirm(msg)) return;

    try {
      await apiDeletePlacement(node.placementId);
      const anchor = node.parentPlacementId ?? null;
      await load({ preserveExpanded: true, ensureExpandedPids: anchor ? [anchor] : [], selectPid: anchor });
    } catch (e: any) {
      alert(e.message || 'Delete failed');
    }
  };

  const saveDetails = async (payload: { name?: string; description?: string | null }) => {
    if (!selected) return;
    try {
      await apiPatchTag({ tagId: selected.tagId, ...payload });
      await load({ preserveExpanded: true, ensureExpandedPids: [selected.placementId], selectPid: selected.placementId });
    } catch (e: any) {
      alert(e.message || 'Save failed');
    }
  };

  return (
    <div>
      {/* Toolbar */}
      <div className="card p-3 mb-5">
        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-400 flex-1">
            Add with <span className="font-medium">+</span> (links by name or creates new), delete removes this placement. Actions appear on row hover.
          </div>
          <button onClick={addRoot} className="btn btn-outline" title="Create root tag">+</button>
        </div>
      </div>

      {err && <div className="card p-3 mb-5 text-red-300">{err}</div>}
      {loading && <div className="card p-6 mb-5 text-gray-300">Loading…</div>}

      {!loading && tree && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Tree */}
          <div className="lg:col-span-2 card p-3">
            {tree.length === 0 ? (
              <div className="p-6 text-center text-gray-400">No tags yet. Use the + button to create your first root tag.</div>
            ) : (
              <ul className="space-y-1">
                {tree.map(n => (
                  <TreeNode
                    key={n.placementId}
                    node={n}
                    parentCounts={parentCounts}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    selectedPlacementId={selectedPlacementId}
                    setSelectedPlacementId={setSelectedPlacementId}
                    onAddChild={addChild}
                    onDelete={deleteNode}
                  />
                ))}
              </ul>
            )}
          </div>

          {/* Details */}
          <div className="card p-3">
            <h2 className="text-sm font-semibold mb-3">Details</h2>
            {!selected ? (
              <div className="text-gray-400">Select a tag to view/edit.</div>
            ) : (
              <DetailsForm
                key={selected.placementId}
                node={selected}
                onSave={saveDetails}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function TreeNode(props: {
  node: TagNode;
  parentCounts: Record<string, number>;
  expanded: Record<string, boolean>;
  setExpanded: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  selectedPlacementId: string | null;
  setSelectedPlacementId: (pid: string) => void;
  onAddChild: (node: TagNode) => void;
  onDelete: (node: TagNode) => void;
}) {
  const { node, parentCounts, expanded, setExpanded, selectedPlacementId } = props;
  const isOpen = !!expanded[node.placementId];
  const hasChildren = node.children.length > 0;
  const isLinked = (parentCounts[node.tagId] ?? 0) > 1;

  return (
    <li>
      <div
        className={[
          'relative flex items-center gap-2 px-2 py-1 rounded-lg group/row',
          selectedPlacementId === node.placementId ? 'bg-white/10 border border-white/10' : 'hover:bg-white/5',
        ].join(' ')}
      >
        <button
          onClick={() => hasChildren && setExpanded(e => ({ ...e, [node.placementId]: !isOpen }))}
          className={[
            'h-6 w-6 grid place-items-center rounded-md border',
            hasChildren ? 'opacity-100' : 'opacity-40',
          ].join(' ')}
          style={{ borderColor: 'var(--color-border)' }}
          title={hasChildren ? (isOpen ? 'Collapse' : 'Expand') : 'No children'}
        >
          {hasChildren ? (isOpen ? '–' : '+') : '•'}
        </button>

        <button onClick={() => props.setSelectedPlacementId(node.placementId)} className="flex-1 text-left">
          <div className="font-medium flex items-center gap-1">
            <span>{node.name}</span>
            {isLinked && <span title="Tag appears in multiple branches">🔗</span>}
          </div>
          {node.description && <div className="text-xs text-gray-400">{node.description}</div>}
        </button>

        {/* Row-only hover actions */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 hidden gap-1 group-hover/row:flex">
          <button onClick={() => props.onAddChild(node)} className="btn btn-outline text-xs" title="Add child">+</button>
          <button onClick={() => props.onDelete(node)} className="btn btn-outline text-xs" title="Delete placement">🗑️</button>
        </div>
      </div>

      {hasChildren && isOpen && (
        <ul className="pl-6 mt-1 space-y-1">
          {node.children.map(c => (
            <TreeNode
              key={c.placementId}
              node={c}
              parentCounts={parentCounts}
              expanded={expanded}
              setExpanded={setExpanded}
              selectedPlacementId={selectedPlacementId}
              setSelectedPlacementId={props.setSelectedPlacementId}
              onAddChild={props.onAddChild}
              onDelete={props.onDelete}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function DetailsForm(props: {
  node: TagNode;
  onSave: (payload: { name?: string; description?: string | null }) => Promise<void>;
}) {
  const [name, setName] = useState(props.node.name);
  const [description, setDescription] = useState(props.node.description ?? '');
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    setName(props.node.name);
    setDescription(props.node.description ?? '');
  }, [props.node.tagId, props.node.name, props.node.description]);

  const save = async () => {
    setSaving(true);
    setMsg(null);
    try {
      await props.onSave({ name, description: description || null });
      setMsg('Saved.');
    } catch (e: any) {
      setMsg(e.message || 'Save failed');
    } finally {
      setSaving(false);
      setTimeout(() => setMsg(null), 1500);
    }
  };

  return (
    <div className="space-y-3">
      <div>
        <label className="block text-xs text-gray-400">Name</label>
        <input className="field mt-1 w-full" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label className="block text-xs text-gray-400">Description</label>
        <textarea className="field mt-1 w-full min-h-[96px]" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div className="flex items-center gap-2">
        <button onClick={save} disabled={saving} className="btn btn-outline disabled:opacity-50">
          {saving ? 'Saving…' : 'Save changes'}
        </button>
        {msg && <span className="text-sm text-gray-400">{msg}</span>}
      </div>
      <div className="text-xs text-gray-500">
        Tag ID: <span className="font-mono">{props.node.tagId}</span> · Placement ID: <span className="font-mono">{props.node.placementId}</span>
      </div>
    </div>
  );
}

```

---

## src/components/AppShell.tsx

```tsx
// components/AppShell.tsx
'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    // On desktop we reserve a sidebar column; on mobile it's a single column
    <div className="min-h-screen lg:grid lg:grid-cols-[16rem_1fr]">
      <Sidebar open={open} onClose={() => setOpen(false)} />

      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-20 border-b border-gray-900 bg-gray-950/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 flex items-center gap-3">
            {/* mobile toggle only */}
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-800 bg-gray-900 text-gray-200 hover:bg-gray-800 lg:hidden"
              onClick={() => setOpen(v => !v)}
              aria-label="Toggle navigation"
            >
              ☰
            </button>
            <h1 className="text-lg font-semibold">
              {process.env.NEXT_PUBLIC_APP_NAME || 'Proxy Dashboard'}
            </h1>
          </div>
        </header>

        <main className="mx-auto max-w-7xl flex-1 px-4 py-6 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}

```

---

## src/components/Sidebar.tsx

```tsx
// src/components/Sidebar.tsx
import Link from 'next/link';
// import { usePathname } from 'next/navigation'; // if you later want active states

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-white/5 bg-[#0b0f16] p-3">
      <div className="mb-3 px-2">
        <div className="text-xs uppercase tracking-wide text-gray-500">Navigation</div>
      </div>

      <nav className="space-y-1">
        <Link href="/dashboard" className="block px-2">
          <div className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/5">
            <span>🏠</span><span>Dashboard</span>
          </div>
        </Link>

        <Link href="/scraped-packages" className="block px-2">
          <div className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/5">
            <span>📦</span><span>Scraped Packages</span>
          </div>
        </Link>

        <Link href="/tags" className="block px-2">
          <div className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/5">
            <span>🏷️</span><span>Tags</span>
          </div>
        </Link>
<Link href="/inventory-filler" className="block px-2">
          <div className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/5">
            <span>🧮</span><span>Inventory filler</span>
          </div>
        </Link>
        {/* New: Inventory list */}
        <Link href="/inventory" className="block px-2">
          <div className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-300 hover:bg-white/5">
            <span>📋</span><span>Inventory</span>
          </div>
        </Link>

        {/* Inventory filler (manual entry) — different icon from Scraped Packages */}
        
      </nav>
    </aside>
  );
}

```

---

## src/components/SingleTagPicker.tsx

```tsx
// src/components/SingleTagPicker.tsx
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type TagFlat = { id: string; name: string; description?: string | null };

// Normalized node shape for the tree
type TagNode = {
  tagId: string;               // ALWAYS the tag id
  name: string;
  description?: string | null;
  placementKey: string;        // unique per placement/path (for React keys)
  placementId?: string;        // TagPlacement.id if available
  children?: TagNode[];
};

export default function SingleTagPicker({
  value,
  onChange,
  allTags,
  disabled,
}: {
  value: string | null | undefined;
  onChange: (sel: { tagId: string | null; placementId: string | null }) => void;
  allTags?: TagFlat[]; // optional; will self-fetch if absent
  disabled?: boolean;
}) {
  const [q, setQ] = useState('');
  const [tree, setTree] = useState<TagNode[] | null>(null);
  const [loadingTree, setLoadingTree] = useState(false);
  const [showTree, setShowTree] = useState(false);                   // 👈 restored modal state
  const [expanded, setExpanded] = useState<Record<string, boolean>>({}); // tree expand state

  // Local flat tags if parent didn't provide any
  const [localTags, setLocalTags] = useState<TagFlat[] | null>(null);
  const [loadingTags, setLoadingTags] = useState(false);

  // Remember exact branch chosen
  const [selectedPath, setSelectedPath] = useState<{ tagId: string; labels: string[] } | null>(null);

  // Suggestions dropdown
  const inputWrapRef = useRef<HTMLDivElement>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Branch chooser for ambiguous picks (multiple placements)
  const [branchChoices, setBranchChoices] = useState<{
    tagId: string;
    options: { placementId: string | null; labels: string[] }[];
  } | null>(null);

  // Effective flat tags
  const effectiveTags: TagFlat[] = useMemo(() => {
    if (Array.isArray(allTags) && allTags.length) return allTags;
    return Array.isArray(localTags) ? localTags : [];
  }, [allTags, localTags]);

  // Fetch flat tags if not provided
  useEffect(() => {
    if (Array.isArray(allTags) && allTags.length) return;
    if (localTags !== null) return;
    (async () => {
      try {
        setLoadingTags(true);
        const r = await fetch('/api/tags?format=flat', { cache: 'no-store' });
        const j = await r.json();
        setLocalTags(Array.isArray(j.tags) ? j.tags : []);
      } catch {
        setLocalTags([]);
      } finally {
        setLoadingTags(false);
      }
    })();
  }, [allTags, localTags]);

  // Close suggestions on outside click
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!inputWrapRef.current) return;
      if (!inputWrapRef.current.contains(e.target as Node)) setShowSuggestions(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  // If parent clears value, clear path memory
  useEffect(() => {
    if (!value) setSelectedPath(null);
  }, [value]);

  // Ensure we have the tree (optionally open modal immediately)
  async function ensureTree(openModal = false): Promise<TagNode[] | null> {
    if (tree) {
      if (openModal) setShowTree(true);
      return tree;
    }
    try {
      setLoadingTree(true);
      const res = await fetch('/api/tags?format=tree', { cache: 'no-store' });
      const j = await res.json();
      const raw = (j.tree || j.tags || []) as any[];
      const norm = normalizeTree(raw, 'root');
      setTree(norm);
      if (openModal) setShowTree(true);          // 👈 open modal after load
      return norm;
    } catch {
      return null;
    } finally {
      setLoadingTree(false);
    }
  }

  // Load tree silently when we already have a selected value (for path fallback)
  useEffect(() => {
    if (!value || tree || loadingTree) return;
    void ensureTree(false);
  }, [value, tree, loadingTree]);

  // Fallback path if selection came from outside OR no stored path for this tag
  const fallbackPath = useMemo(() => {
    if (!value || !tree) return null;
    if (selectedPath && selectedPath.tagId === value) return null;
    return findPathLabelsByTagId(tree, value);
  }, [value, tree, selectedPath]);

  const selectedObj = value ? effectiveTags.find(t => t.id === value) : undefined;
  const selectedName = useMemo(() => {
    if (selectedPath && selectedPath.tagId === value) {
      const labels = selectedPath.labels;
      return labels[labels.length - 1];
    }
    if (selectedObj) return selectedObj.name;
    if (fallbackPath?.length) return fallbackPath[fallbackPath.length - 1];
    return value ?? undefined;
  }, [selectedPath, value, selectedObj, fallbackPath]);

  // Suggestions list
  const suggestions = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return [] as TagFlat[];
    return effectiveTags.filter(t => t.name.toLowerCase().includes(s)).slice(0, 20);
  }, [q, effectiveTags]);

  // Pick from suggestions
  async function pickFromSuggestions(tagId: string) {
    const t = await ensureTree(false);
    if (!t) {
      onChange({ tagId, placementId: null });
      setSelectedPath(null);
      setShowSuggestions(false);
      return;
    }
    const placements = collectPlacementsByTagId(t, tagId);
    if (placements.length <= 1) {
      const only = placements[0] ?? { placementId: null, labels: [selectedObj?.name ?? tagId] };
      onChange({ tagId, placementId: only.placementId });
      setSelectedPath({ tagId, labels: only.labels });
      setShowSuggestions(false);
    } else {
      setBranchChoices({ tagId, options: placements });
      setShowSuggestions(false);
    }
  }

  return (
    <div className="w-full">
      {/* Selected pill */}
      <div className="mb-2">
        {value ? (
          <span className="px-2 py-1 rounded bg-white/10 text-xs">
            {selectedName ?? value}
            {!disabled && (
              <button
                className="ml-2 opacity-70 hover:opacity-100"
                onClick={() => { onChange({ tagId: null, placementId: null }); setSelectedPath(null); }}
              >
                ×
              </button>
            )}
          </span>
        ) : (
          <span className="text-xs text-gray-400">No tag selected</span>
        )}
      </div>

      {/* Input + suggestions + browse */}
      <div className="flex gap-2">
        <div className="relative flex-1" ref={inputWrapRef}>
          <input
            className="field w-full"
            placeholder={loadingTags ? 'Loading tags…' : 'Type to search tags…'}
            value={q}
            onChange={e => { setQ(e.target.value); setShowSuggestions(true); }}
            onFocus={() => suggestions.length && setShowSuggestions(true)}
            disabled={disabled || loadingTags}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && suggestions.length > 0) {
                e.preventDefault();
                void pickFromSuggestions(suggestions[0].id);
              }
              if (e.key === 'Escape') setShowSuggestions(false);
            }}
          />
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-full z-50 mt-1 rounded-lg border border-white/10 bg-[#0b0f16] shadow-xl overflow-hidden">
              {suggestions.map((t) => (
                <button
                  key={t.id}
                  className="w-full text-left px-3 py-2 hover:bg-white/5 flex items-center justify-between"
                  onClick={() => void pickFromSuggestions(t.id)}
                  disabled={disabled}
                  title={t.description || ''}
                >
                  <span className="text-sm">{t.name}</span>
                  <span className="text-xs text-gray-400">select</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          className="btn btn-outline"
          onClick={() => void ensureTree(true)}         // 👈 open modal
          disabled={disabled || loadingTree}
          title="Browse full hierarchy"
        >
          {loadingTree ? 'Loading…' : 'Browse tree…'}
        </button>
      </div>

      {/* Selected tag full path */}
      <div className="mt-2 text-xs text-gray-300 min-h-[1.5rem]">
        {value ? (
          selectedPath && selectedPath.tagId === value ? (
            <span>Path: {selectedPath.labels.join(' › ')}</span>
          ) : tree ? (
            fallbackPath?.length ? (
              <span>Path: {fallbackPath.join(' › ')}</span>
            ) : (
              <span className="text-gray-500">This tag may exist in multiple branches. Use the tree to pick an exact branch.</span>
            )
          ) : (
            <span className="text-gray-500">Path will appear once the tree is loaded.</span>
          )
        ) : (
          <span className="text-gray-500">Pick a tag to see its full path.</span>
        )}
      </div>

      {/* Tree modal (restored) */}
      {showTree && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" onClick={() => setShowTree(false)}>
          <div className="card w-full max-w-3xl p-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold">Pick a tag</div>
              <button className="btn btn-outline text-xs" onClick={() => setShowTree(false)}>Close</button>
            </div>
            <div className="max-h-[65vh] overflow-auto">
              {tree ? (
                <Tree
                  nodes={tree}
                  expanded={expanded}
                  onToggle={(k) => setExpanded(e => ({ ...e, [k]: !e[k] }))}
                  onPick={(tagId, pathLabels, placementId) => {
                    setSelectedPath({ tagId, labels: pathLabels });
                    onChange({ tagId, placementId: placementId ?? null });
                    setShowTree(false);
                  }}
                  parentKey="root"
                  parentPathLabels={[]} // start empty
                  query={q} // reuse the input text to filter inside modal
                />
              ) : (
                <div className="text-sm text-gray-400">Loading…</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Branch chooser (if a tag has multiple placements) */}
      {branchChoices && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" onClick={() => setBranchChoices(null)}>
          <div className="card w-full max-w-xl p-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-2">
              <div className="font-semibold">Choose branch</div>
              <button className="btn btn-outline text-xs" onClick={() => setBranchChoices(null)}>Close</button>
            </div>
            <div className="space-y-2 max-h-[60vh] overflow-auto">
              {branchChoices.options.map((opt, i) => (
                <button
                  key={`${opt.placementId ?? 'none'}#${i}`}
                  className="w-full text-left px-3 py-2 hover:bg-white/5 rounded-md border border-white/10"
                  onClick={() => {
                    onChange({ tagId: branchChoices.tagId, placementId: opt.placementId });
                    setSelectedPath({ tagId: branchChoices.tagId, labels: opt.labels });
                    setBranchChoices(null);
                  }}
                >
                  {opt.labels.join(' › ')}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- helpers ---------- */

function normalizeTree(rawNodes: any[], parentKey: string): TagNode[] {
  return (rawNodes || []).map((node, idx) => {
    const tagId: string =
      node.tagId ??
      node.tag?.id ??
      node.tag_id ??
      node.tagID ??
      node.id; // fallback

    const name: string =
      node.name ??
      node.tag?.name ??
      node.title ??
      node.label ??
      '(untitled)';

    const description: string | null | undefined =
      node.description ?? node.tag?.description ?? null;

    const placementId: string | undefined = node.placementId ?? node.id;
    const placementKey: string = String(placementId ?? `${tagId}-${idx}`);

    const children = normalizeTree(node.children || [], `${parentKey}/${placementKey}`);

    return { tagId, name, description, placementKey, placementId, children };
  });
}

// Find first path to tagId (labels only) — fallback only
function findPathLabelsByTagId(nodes: TagNode[], tagId: string): string[] | null {
  for (const n of nodes) {
    if (n.tagId === tagId) return [n.name];
    if (n.children?.length) {
      const down = findPathLabelsByTagId(n.children, tagId);
      if (down) return [n.name, ...down];
    }
  }
  return null;
}

// Collect all placements (paths) for a tag id
function collectPlacementsByTagId(
  nodes: TagNode[],
  tagId: string,
  parentPath: string[] = []
): { placementId: string | null; labels: string[] }[] {
  const out: { placementId: string | null; labels: string[] }[] = [];
  for (const n of nodes) {
    const path = [...parentPath, n.name];
    if (n.tagId === tagId) {
      out.push({ placementId: n.placementId ?? null, labels: path });
    }
    if (n.children?.length) {
      out.push(...collectPlacementsByTagId(n.children, tagId, path));
    }
  }
  return out;
}

/* ---------- Tree (recursive) ---------- */

function Tree({
  nodes,
  expanded,
  onToggle,
  onPick,
  parentKey,
  parentPathLabels,
  query,
}: {
  nodes: TagNode[];
  expanded: Record<string, boolean>;
  onToggle: (nodeKey: string) => void;
  onPick: (tagId: string, pathLabels: string[], placementId?: string) => void;
  parentKey: string;
  parentPathLabels: string[];
  query: string; // filter inside modal
}) {
  const filteredNodes = useMemo(() => {
    const s = query.trim().toLowerCase();
    if (!s) return nodes;
    const match = (n: TagNode): boolean =>
      n.name.toLowerCase().includes(s) || (n.children?.some(match) ?? false);
    return nodes.filter(match);
  }, [nodes, query]);

  return (
    <ul className="space-y-1">
      {filteredNodes.map((n, idx) => {
        const nodeKey = `${parentKey}/${n.placementKey}#${idx}`; // unique key per placement path
        const hasKids = !!(n.children && n.children.length);
        const open = !!expanded[nodeKey];
        const pathLabels = [...parentPathLabels, n.name];

        return (
          <li key={nodeKey}>
            <div className="flex items-center gap-2">
              {hasKids ? (
                <button
                  className="h-6 w-6 grid place-items-center rounded-md border border-white/10"
                  onClick={() => onToggle(nodeKey)}
                  title={open ? 'Collapse' : 'Expand'}
                >
                  {open ? '▾' : '▸'}
                </button>
              ) : (
                <span className="h-6 w-6 grid place-items-center text-gray-500">•</span>
              )}
              <button
                className="btn btn-outline text-xs"
                onClick={() => onPick(n.tagId, pathLabels, n.placementId)}
                title={n.description || ''}
              >
                {n.name}
              </button>
            </div>

            {hasKids && open && (
              <div className="ml-6 mt-1">
                <Tree
                  nodes={n.children!}
                  expanded={expanded}
                  onToggle={onToggle}
                  onPick={onPick}
                  parentKey={nodeKey}
                  parentPathLabels={pathLabels}
                  query={query}
                />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

```

---

## src/components/WeightSliders.tsx

```tsx
// src/components/WeightSliders.tsx
'use client';

import { useMemo, useState } from 'react';
import { equalizeUnlockedPPM, normalizeWithLocksPPM, percentToPpm, ppmToPercent, setWeightAtIndexWithLocksPPM } from '@/lib/weights';

export type WeightRow = {
  id: string;
  label: string;
  ppm: number;
  locked?: boolean;
  rightHint?: React.ReactNode; // optional preview (e.g., ¥ value)
};

export default function WeightSliders(props: {
  title: string;
  rows: WeightRow[];
  onChange: (rows: WeightRow[]) => void;
  help?: string;
}) {
  const { title, help } = props;

  // Keep lock states locally (simple & ergonomic). You can lift this up if you want to persist locks.
  const [locks, setLocks] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(props.rows.map(r => [r.id, !!r.locked]))
  );

  const sumPercent = useMemo(() => {
    const totalPpm = props.rows.reduce((a, r) => a + r.ppm, 0);
    return (totalPpm / 10_000).toFixed(1);
  }, [props.rows]);

  const toggleLock = (id: string) => {
    setLocks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const apply = (nextPpm: number[]) => {
    const next = props.rows.map((r, i) => ({ ...r, ppm: nextPpm[i] }));
    props.onChange(next);
  };

  const onChangeIdx = (idx: number, newPercent: number) => {
    const ppm = props.rows.map(r => r.ppm);
    const locked = props.rows.map(r => !!locks[r.id]);
    const next = setWeightAtIndexWithLocksPPM(ppm, idx, percentToPpm(newPercent), locked);
    apply(next);
  };

  const onNormalize = () => {
    const ppm = props.rows.map(r => r.ppm);
    const locked = props.rows.map(r => !!locks[r.id]);
    apply(normalizeWithLocksPPM(ppm, locked));
  };

  const onEqualize = () => {
    const ppm = props.rows.map(r => r.ppm);
    const locked = props.rows.map(r => !!locks[r.id]);
    apply(equalizeUnlockedPPM(ppm, locked));
  };

  return (
    <div className="rounded-xl border border-white/10 p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="font-semibold">{title}</div>
        <div className="flex items-center gap-2">
          <span className={`text-xs ${sumPercent === '100.0' ? 'text-emerald-400' : 'text-amber-400'}`}>
            Total: {sumPercent}%
          </span>
          <button className="btn btn-outline text-xs" onClick={onEqualize}>Equalize</button>
          <button className="btn btn-outline text-xs" onClick={onNormalize}>Normalize</button>
        </div>
      </div>
      {help && <div className="text-xs text-gray-400 mb-3">{help}</div>}

      <div className="space-y-3">
        {props.rows.map((r, i) => {
          const percent = ppmToPercent(r.ppm);
          const isLocked = !!locks[r.id];
          return (
            <div key={r.id} className="grid grid-cols-12 gap-3 items-center">
              <div className="col-span-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleLock(r.id)}
                    className={`h-6 w-6 grid place-items-center rounded-md border ${isLocked ? 'bg-white/10' : ''}`}
                    title={isLocked ? 'Unlock' : 'Lock'}
                    style={{ borderColor: 'var(--color-border)' }}
                  >
                    {isLocked ? '🔒' : '🔓'}
                  </button>
                  <div className="font-medium truncate" title={r.label}>{r.label}</div>
                </div>
              </div>

              <div className="col-span-6">
                <input
                  type="range"
                  min={0}
                  max={1000} // 0.1% steps
                  step={1}
                  value={Math.round(percent * 10)}
                  onChange={(e) => onChangeIdx(i, Number(e.target.value) / 10)}
                  disabled={isLocked}
                  className="w-full"
                />
              </div>

              <div className="col-span-2">
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    step={0.1}
                    className="field w-20"
                    value={percent.toFixed(1)}
                    onChange={(e) => onChangeIdx(i, parseFloat(e.target.value || '0'))}
                    disabled={isLocked}
                  />
                  <span className="text-xs">% </span>
                </div>
              </div>

              {r.rightHint && <div className="col-span-12 text-right text-xs text-gray-400">{r.rightHint}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

```

---

## src/lib/fx.client.ts

```ts
export async function getJpyToEurRate(dateISO: string): Promise<number | null> {
  try {
    const r = await fetch(`/api/fx?date=${encodeURIComponent(dateISO)}&base=JPY&quote=EUR`, { cache: 'no-store' });
    const j = await r.json();
    if (!r.ok) {
      console.error('FX API error', j);
      return null;
    }
    const rate = typeof j.rate === 'string' ? parseFloat(j.rate) : j.rate;
    if (!isFinite(rate)) {
      console.error('FX API returned invalid rate', j);
      return null;
    }
    return rate;
  } catch (e) {
    console.error('FX fetch failed', e);
    return null;
  }
}

// Safe multiply using integers to dodge FP noise where it matters in UI
// yen is Decimal(12,2) in backend; in UI we usually have a JS number
export function yenToEuro(yen: number, rate: number | null): number {
  if (!rate || !isFinite(rate)) return 0;
  const eur = yen * rate;
  // Round to 2 decimals for display
  return Math.round(eur * 100) / 100;
}

```

---

## src/lib/prisma.ts

```ts
import { PrismaClient } from '@prisma/client';

// Prevent creating many clients in dev (Next.js hot reload)
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['warn', 'error'], // add 'query' if you want verbose logs
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
```

---

## src/lib/refresh-runner.ts

```ts
import { spawn, ChildProcessWithoutNullStreams } from 'node:child_process';

type Source = 'buyee' | 'zenmarket' | 'fromjapan';

type ProcMap = Map<Source, ChildProcessWithoutNullStreams>;
declare global {
  // eslint-disable-next-line no-var
  var __refreshProcs__: ProcMap | undefined;
}
const procs: ProcMap = globalThis.__refreshProcs__ ?? new Map<Source, ChildProcessWithoutNullStreams>();
globalThis.__refreshProcs__ = procs;

const SCRIPT_BY_SOURCE: Record<Source, string> = {
  buyee:     'src/scripts/save-buyee-auth.ts',
  zenmarket: 'src/scripts/save-zenmarket-auth.ts',
  fromjapan: 'src/scripts/save-fromjapan-auth.ts',
};

function norm(src: string): Source {
  const s = src.toLowerCase() as Source;
  if (s !== 'buyee' && s !== 'zenmarket' && s !== 'fromjapan') throw new Error('invalid_source');
  return s;
}

export function getRunning(source: string) {
  return procs.get(norm(source));
}

export function startRefresh(source: string) {
  const s = norm(source);
  const prev = procs.get(s);
  if (prev && !prev.killed) {
    try { prev.kill('SIGTERM'); } catch {}
  }

  const script = SCRIPT_BY_SOURCE[s];
  const cmd = process.platform === 'win32' ? 'npx.cmd' : 'npx';

  const child = spawn(cmd, ['tsx', script], {
    cwd: process.cwd(),
    env: { ...process.env, FORCE_COLOR: '1' },
    stdio: ['pipe', 'pipe', 'pipe'],
    shell: true,
  });

  procs.set(s, child);

  // Optional: helpful logs in server console
  child.stdout.on('data', d => process.stdout.write(`[auth:${s}] ${d}`));
  child.stderr.on('data', d => process.stderr.write(`[auth:${s}:ERR] ${d}`));

  const cleanup = () => { if (procs.get(s) === child) procs.delete(s); };
  child.on('exit', cleanup);
  child.on('close', cleanup);

  return { pid: child.pid ?? 0 };
}

export async function confirmRefresh(source: string) {
  const s = norm(source);
  const p = procs.get(s);
  if (!p) return { ok: false, error: 'no_process' };
  try { p.stdin.write('\n'); } catch {}
  const code: number = await new Promise((resolve) => {
    const done = (c: number | null) => resolve(c ?? 0);
    p.once('exit', done);
    p.once('close', done);
  });
  return { ok: code === 0, code };
}

export function abortRefresh(source: string) {
  const s = norm(source);
  const p = procs.get(s);
  if (!p) return { ok: false };
  try { p.kill('SIGTERM'); } catch {}
  procs.delete(s);
  return { ok: true };
}

```

---

## src/lib/scrape.ts

```ts
export type BuyeeItem = {
  orderNumber: string;
  title: string;
  itemUrl: string;
  listingId?: string;
  priceYen?: number;            // from Invoice Information → Subtotal
};

export type BuyeePackage = {
  dateShipped?: string;         // YYYY-MM-DD
  intlTrackingNumber?: string;  // e.g., CL072455942JP
  intlTrackingUrl?: string;
  packageNumber?: string;       // e.g., G2505289472
  items: BuyeeItem[];
  internationalShippingFeeYen?: number;
  domesticShippingFeeYen?: number;
};

export type BuyeeShippedResult = {
  proxyName: 'buyee';
  pageUrl: string;
  packages: BuyeePackage[];
};

export function yenToNumber(txt?: string): number | undefined {
  if (!txt) return;
  const cleaned = txt
    .replace(/[^\d.,-]/g, '')
    .replace(/,(?=\d{3}(\D|$))/g, '')        // remove thousands commas
    .replace(/(\d),(?=\d{1,2}$)/, '$1.');    // 1,23 => 1.23 (safety)
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : undefined;
}
```

---

## src/lib/translate.ts

```ts
type Provider = 'deepl' | 'libre' | undefined;

export async function translateJaToEn(texts: string[]): Promise<string[]> {
  const cleaned = texts.map(t => (t || '').trim());
  if (!cleaned.length) return [];

  const provider: Provider = (process.env.TRANSLATE_PROVIDER as Provider) || undefined;
  if (!provider) return cleaned; // no-op if not configured

  if (provider === 'deepl') return deeplTranslate(cleaned);
  if (provider === 'libre') return libreTranslate(cleaned);

  return cleaned;
}

async function deeplTranslate(texts: string[]): Promise<string[]> {
  const key = process.env.DEEPL_API_KEY;
  if (!key) return texts;

  const body = new URLSearchParams();
  texts.forEach(t => body.append('text', t));
  body.append('source_lang', 'JA');
  body.append('target_lang', 'EN');

  const resp = await fetch('https://api-free.deepl.com/v2/translate', {
    method: 'POST',
    headers: {
      'Authorization': `DeepL-Auth-Key ${key}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: body.toString(),
  });
  if (!resp.ok) return texts;

  const data: any = await resp.json();
  return (data.translations || []).map((r: any) => r.text ?? '');
}

async function libreTranslate(texts: string[]): Promise<string[]> {
  const base = process.env.LIBRE_TRANSLATE_URL || 'http://localhost:5000';
  const out: string[] = [];
  for (const t of texts) {
    const resp = await fetch(`${base}/translate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ q: t, source: 'ja', target: 'en', format: 'text' }),
    });
    if (!resp.ok) { out.push(t); continue; }
    const data: any = await resp.json();
    out.push(data.translatedText || t);
  }
  return out;
}
```

---

## src/lib/weights.ts

```ts
// src/lib/weights.ts
export const PPM_DENOM = 1_000_000; // 100%

export function percentToPpm(percent: number): number {
  if (!isFinite(percent)) return 0;
  return Math.max(0, Math.min(PPM_DENOM, Math.round(percent * 10_000)));
}

export function ppmToPercent(ppm: number): number {
  return ppm / 10_000;
}

/** Linked sliders without locks: redistribute proportionally to keep total == DENOM */
export function setWeightAtIndexPPM(ppm: number[], idx: number, newValue: number): number[] {
  return setWeightAtIndexWithLocksPPM(ppm, idx, newValue, new Array(ppm.length).fill(false));
}

/** Lock-aware redistribution (true = locked). Keeps exact sum == DENOM. */
export function setWeightAtIndexWithLocksPPM(
  ppm: number[],
  idx: number,
  newValue: number,
  locked: boolean[]
): number[] {
  const n = ppm.length;
  const clamp = (x: number) => Math.max(0, Math.min(PPM_DENOM, x | 0));

  // Treat edited row as unlocked (editing implicitly unlocks it)
  const effLocked = locked.slice();
  effLocked[idx] = false;

  const current = ppm.slice();
  const sumLocked = current.reduce((a, v, j) => a + (effLocked[j] ? v : 0), 0);

  // Available budget for unlocked rows
  const budget = PPM_DENOM - sumLocked;
  const newI = clamp(Math.min(newValue, budget)); // cannot exceed the free budget

  const unlockedOthers = [];
  let oldUnlockedOthersSum = 0;
  for (let j = 0; j < n; j++) {
    if (!effLocked[j] && j !== idx) {
      unlockedOthers.push(j);
      oldUnlockedOthersSum += current[j];
    }
  }

  const next = current.slice();
  next[idx] = newI;

  const newRema = budget - newI;

  if (unlockedOthers.length === 0) {
    // No degrees of freedom; everything else locked. Force the edited value to consume all budget.
    next[idx] = budget;
    // Sum is exact by construction.
    return next;
  }

  // Proportional scale unlocked others to fill newRema
  if (oldUnlockedOthersSum === 0) {
    // Split equally among unlocked others
    const each = Math.floor(newRema / unlockedOthers.length);
    for (const j of unlockedOthers) next[j] = each;
    // fix residue
    let diff = newRema - each * unlockedOthers.length;
    for (let k = 0; diff > 0; k = (k + 1) % unlockedOthers.length) {
      next[unlockedOthers[k]]++;
      diff--;
    }
  } else {
    for (const j of unlockedOthers) {
      next[j] = Math.floor(current[j] * (newRema / oldUnlockedOthersSum));
    }
    // fix rounding residue across unlocked others
    const diff = budget - next.reduce((a, b, j) => a + (effLocked[j] ? 0 : b), 0);
    if (diff !== 0) {
      const order = unlockedOthers
        .slice()
        .sort((a, b) => current[b] - current[a]); // bias bigger buckets
      let k = 0, remain = Math.abs(diff);
      while (remain--) {
        next[order[k]] += Math.sign(diff);
        k = (k + 1) % order.length;
      }
    }
  }
  return next;
}

/** Normalize unlocked rows so total == DENOM (respect locks, keep proportions) */
export function normalizeWithLocksPPM(ppm: number[], locked: boolean[]): number[] {
  const n = ppm.length;
  const sumLocked = ppm.reduce((a, v, j) => a + (locked[j] ? v : 0), 0);
  const budget = PPM_DENOM - sumLocked;

  const unlockedIdxs = [];
  let sumUnlocked = 0;
  for (let j = 0; j < n; j++) if (!locked[j]) { unlockedIdxs.push(j); sumUnlocked += ppm[j]; }

  const next = ppm.slice();
  if (unlockedIdxs.length === 0) return next;
  if (sumUnlocked === 0) {
    const each = Math.floor(budget / unlockedIdxs.length);
    for (const j of unlockedIdxs) next[j] = each;
    let diff = budget - each * unlockedIdxs.length;
    for (let k = 0; diff > 0; k = (k + 1) % unlockedIdxs.length) { next[unlockedIdxs[k]]++; diff--; }
    return next;
  }

  for (const j of unlockedIdxs) next[j] = Math.floor(ppm[j] * (budget / sumUnlocked));
  const diff = budget - unlockedIdxs.reduce((a, j) => a + next[j], 0);
  let k = 0, remain = Math.abs(diff);
  while (remain--) {
    next[unlockedIdxs[k]] += Math.sign(diff);
    k = (k + 1) % unlockedIdxs.length;
  }
  return next;
}

/** Equal split across unlocked rows (respect locks) */
export function equalizeUnlockedPPM(ppm: number[], locked: boolean[]): number[] {
  const n = ppm.length;
  const sumLocked = ppm.reduce((a, v, j) => a + (locked[j] ? v : 0), 0);
  const budget = PPM_DENOM - sumLocked;

  const unlockedIdxs = [];
  for (let j = 0; j < n; j++) if (!locked[j]) unlockedIdxs.push(j);

  const next = ppm.slice();
  if (unlockedIdxs.length === 0) return next;

  const each = Math.floor(budget / unlockedIdxs.length);
  for (const j of unlockedIdxs) next[j] = each;
  let diff = budget - each * unlockedIdxs.length;
  for (let k = 0; diff > 0; k = (k + 1) % unlockedIdxs.length) { next[unlockedIdxs[k]]++; diff--; }
  return next;
}

```

---

## src/scrapers/buyee.ts

```ts
import fs from 'fs';
import path from 'path';
import { chromium, type Page } from 'playwright';
import { BuyeeShippedResult, BuyeePackage, yenToNumber } from '@/lib/scrape';

const PROFILE_DIR = process.env.BUYEY_PROFILE_DIR || '.secrets/buyee-profile';
const DEBUG = process.env.DEBUG_SCRAPER === '1';

export async function scrapeBuyeeShippedList(url: string): Promise<BuyeeShippedResult> {
      const absProfile = path.resolve(PROFILE_DIR);
if (!fs.existsSync(absProfile)) {
    throw new Error(`Buyee profile not found at ${absProfile}. Run the profile initializer first.`);
  }
 const context = await chromium.launchPersistentContext(absProfile, {
    channel: 'chrome',        // IMPORTANT: use real Chrome
    headless: false,          // start visible first; switch to true later if it still works
    viewport: { width: 1366, height: 900 },
    locale: 'en-US',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    extraHTTPHeaders: { 'Accept-Language': 'en-US,en;q=0.9,ja;q=0.8' },
  });
  const page = await context.newPage();
  try {
    // Prime a buyee tab so cookies attach to the correct domain
    await page.goto('https://buyee.jp/', { waitUntil: 'domcontentloaded' });
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Detect not-logged-in redirect
    const currentUrl = page.url();
    if (/\/login\b/i.test(currentUrl)) {
      await page.screenshot({ path: '/tmp/buyee-login.png', fullPage: true }).catch(()=>{});
      throw new Error('Not logged in (redirected to /login). Check cookies file. Screenshot: /tmp/buyee-login.png');
    }

    // Try to locate shipped entries
    const entries = await page.locator('li.luggageInfo.shipped').count();
    if (DEBUG) console.log(`[scraper] found ${entries} shipped entries on ${currentUrl}`);

    if (entries === 0) {
      await page.screenshot({ path: '/tmp/buyee-empty.png', fullPage: true }).catch(()=>{});
      throw new Error('No shipped entries found. Selectors may need adjustment or cookies invalid. Screenshot: /tmp/buyee-empty.png');
    }

    // ... (leave the rest of the extraction code as we wrote before)
    const packages: BuyeePackage[] = await page.locator('li.luggageInfo.shipped').evaluateAll((nodes) => {
      const parseYen = (s?: string) => {
        if (!s) return undefined;
        const cleaned = s.replace(/[^\d.,-]/g, '').replace(/,(?=\d{3}(\D|$))/g, '').replace(/(\d),(?=\d{1,2}$)/, '$1.');
        const n = Number(cleaned);
        return Number.isFinite(n) ? n : undefined;
      };

      return nodes.map((li) => {
        const pick = (sel: string) => (li.querySelector(sel)?.textContent || '').trim();

        const dateRaw = pick('.luggageInfo_header .date_shipped');
        const dateShipped = (dateRaw.match(/\d{4}-\d{2}-\d{2}/) || [])[0];

        const intlA = li.querySelector('.luggageInfo_header .i18n_shipping_number a') as HTMLAnchorElement | null;
        const intlTrackingNumber = intlA?.textContent?.trim();
        const intlTrackingUrl = intlA?.href || undefined;

        const pkgRaw = pick('.luggageInfo_header .package_number');
        const packageNumber = pkgRaw.replace(/^Package number/i, '').trim() || undefined;

        const items: any[] = [];
        li.querySelectorAll('.luggageInfo_order tr').forEach((tr, idx) => {
          if (idx === 0) return;
          const tds = tr.querySelectorAll('td');
          if (tds.length < 3) return;
          const orderNumber = (tds[1]?.textContent || '').trim();
          const a = tds[2]?.querySelector('a') as HTMLAnchorElement | null;
          const title = (a?.textContent || '').trim();
          const itemUrl = a?.href || '';
          const listingId = itemUrl ? itemUrl.split('/').filter(Boolean).pop() : undefined;
          if (orderNumber || title) items.push({ orderNumber, title, itemUrl, listingId });
        });

        let internationalShippingFeeYen: number | undefined;
        let domesticShippingFeeYen: number | undefined;
        const fee = li.querySelector('.amount_info_container');
        if (fee) {
          const dts = Array.from(fee.querySelectorAll('dt'));
          const dds = Array.from(fee.querySelectorAll('dd'));
          for (let i = 0; i < dts.length; i++) {
            const label = (dts[i].textContent || '').replace(/\s+/g, ' ').trim();
            const value = (dds[i]?.textContent || '').trim();
            if (/^International Shipping Fee/i.test(label)) internationalShippingFeeYen = parseYen(value);
            if (/^Domestic Shipping Fee/i.test(label)) domesticShippingFeeYen = parseYen(value);
          }
        }

        const invoice = li.querySelector('.delivery_info_container .invoice_info table')
                      || li.querySelector('.invoice_info table');
        if (invoice) {
          const subtotals: number[] = [];
          invoice.querySelectorAll('tr').forEach((tr, idx) => {
            if (idx === 0) return;
            const tds = tr.querySelectorAll('td');
            if (tds.length >= 3) {
              const subTxt = (tds[2]?.textContent || '').trim();
              const n = parseYen(subTxt);
              if (typeof n === 'number') subtotals.push(n);
            }
          });
          for (let i = 0; i < items.length && i < subtotals.length; i++) {
            items[i].priceYen = subtotals[i];
          }
        }

        return {
          dateShipped,
          intlTrackingNumber,
          intlTrackingUrl,
          packageNumber,
          items,
          internationalShippingFeeYen,
          domesticShippingFeeYen,
        };
      });
    });

    const result: BuyeeShippedResult = { proxyName: 'buyee', pageUrl: url, packages };
    if (DEBUG) console.log('[scraper] result sample:', JSON.stringify(result.packages[0], null, 2));
    return result;
  } finally {
    await page.close();
    await context.close();
  }
}
```

---

## src/scrapers/fromjapan.ts

```ts
import path from 'path';
import fs from 'fs';
import { chromium } from 'playwright';

export type FJItem = {
  listingId?: string;     // auction ID / item_id
  orderNumber?: string;   // not exposed in JSON; leave undefined for now
  title: string;
  itemUrl: string;
  priceYen?: number;      // Charge 1 (c1_total)
};

export type FJPackage = {
  packageNumber: string;            // unique per physical package (shipmentNo#i if multi)
  baseShipmentNumber: string;       // original Shipment No. (or iid fallback)
  dateShipped?: string;             // shipped_date (YYYY-MM-DD part)
  trackingNumbers: string[];        // one or more tracking numbers
  items: FJItem[];
  internationalShippingFeeYen?: number; // Charge 2 (c2_total) split evenly across packages
  domesticShippingFeeYen?: number;      // always 0 per spec
};

export type FJShippedResult = {
  proxyName: 'fromjapan';
  pageUrl: string;
  packages: FJPackage[];
};

const PROFILE_DIR = process.env.FJ_PROFILE_DIR || '.secrets/fj-profile';
const DEBUG = process.env.DEBUG_SCRAPER === '1';

function decodeUrlMaybe(u?: string): string {
  if (!u) return '';
  try {
    return decodeURIComponent(u);
  } catch {
    return u;
  }
}

export async function scrapeFromJapanShippedList(url: string): Promise<FJShippedResult> {
  const absProfile = path.resolve(PROFILE_DIR);
  if (!fs.existsSync(absProfile)) {
    throw new Error(`FromJapan profile not found at ${absProfile}. Run the profile initializer to login first.`);
  }

  const context = await chromium.launchPersistentContext(absProfile, {
    channel: 'chrome',
    headless: false, // keep visible while stabilizing; try true later if it still works
    viewport: { width: 1366, height: 900 },
    locale: 'en-US',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    extraHTTPHeaders: { 'Accept-Language': 'en-US,en;q=0.9,ja;q=0.8' },
  });

  const page = await context.newPage();
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Wait for the embedded data blob to exist (it's a hidden script tag)
    await page.waitForSelector('script#bData', { state: 'attached', timeout: 20000 });

    // Pull and parse the JSON embedded in #bData
    const shipments = await page.evaluate(() => {
      const script = document.querySelector<HTMLScriptElement>('script#bData');
      if (!script) return [];

      let data: any = {};
      try {
        // The content is base64 JSON
        const b64 = script.textContent || '';
        const decoded = atob(b64);
        data = JSON.parse(decoded);
      } catch (e) {
        return [];
      }

      // Each entry in data.list is a shipment
      const list: any[] = Array.isArray(data.list) ? data.list : [];
      const result: any[] = [];

      for (const shp of list) {
        // Prefer shipment_no; fallback to iid (numeric stable id)
        const shipmentNo: string | undefined =
          (shp.shipment_no_str as string) ||
          (shp.shipment_no as string) ||
          (shp.iid != null ? String(shp.iid) : undefined);

        if (!shipmentNo) continue;

        // Date shipped (YYYY-MM-DD from shipped_date)
        let dateShipped: string | undefined;
        if (typeof shp.shipped_date === 'string') {
          const m = shp.shipped_date.match(/\d{4}-\d{2}-\d{2}/);
          if (m) dateShipped = m[0];
        }

        // Tracking numbers: keys of ship_no object
        const trackingNumbers: string[] = [];
        if (shp.ship_no && typeof shp.ship_no === 'object') {
          for (const key of Object.keys(shp.ship_no)) {
            if (key && typeof key === 'string') trackingNumbers.push(key.trim());
          }
        }

        // Shipment-level shipping cost (Charge 2)
        const charge2Total: number = typeof shp.c2_total === 'number' ? shp.c2_total : 0;

        // Items
        const itemsRaw: any[] = Array.isArray(shp.items) ? shp.items : [];
        const items = itemsRaw.map((it) => {
          const title = (it.item_name as string) || '';
          const itemUrl = decodeURIComponent((it.item_url as string) || '');
          const listingId = (it.item_id as string) || undefined; // Yahoo auction ID, etc.
          const priceYen = typeof it.c1_total === 'number' ? it.c1_total : undefined; // Charge 1

          return {
            listingId,
            orderNumber: undefined, // not available in the JSON
            title,
            itemUrl,
            priceYen,
          };
        });

        result.push({
          dateShipped,
          shipmentNo,
          trackingNumbers,
          items,
          charge2Total,
        });
      }

      return result;
    });

    // Expand multi-package:
    // - Split Charge 2 evenly per package
    // - DISTRIBUTE ITEMS across packages (no duplication, no price division)
    const packages: FJPackage[] = [];
    for (const s of shipments as any[]) {
      if (!s.shipmentNo) continue;

      const nPkgs = Math.max(1, s.trackingNumbers?.length || 1);
      const perPkgShip = s.charge2Total ? s.charge2Total / nPkgs : 0;

      // copy items and KEEP their full prices
      const allItems: FJItem[] = (s.items || []).map((it: any) => ({
        listingId: it.listingId,
        orderNumber: it.orderNumber,
        title: it.title,
        itemUrl: it.itemUrl,
        priceYen: typeof it.priceYen === 'number' ? it.priceYen : undefined,
      }));

      // Even block distribution: first packages get the extra items
      const m = allItems.length;
      const base = Math.floor(m / nPkgs);
      const extra = m % nPkgs;
      let cursor = 0;

      for (let i = 0; i < nPkgs; i++) {
        const pkgCount = base + (i < extra ? 1 : 0);
        const pkgItems = allItems.slice(cursor, cursor + pkgCount);
        cursor += pkgCount;

        const pkgSuffix = nPkgs > 1 ? `#${i + 1}` : '';
        const packageNumber = `${s.shipmentNo}${pkgSuffix}`;
        const tracking = s.trackingNumbers?.[i] ? [s.trackingNumbers[i]] : (s.trackingNumbers || []);

        packages.push({
          packageNumber,
          baseShipmentNumber: s.shipmentNo,
          dateShipped: s.dateShipped,
          trackingNumbers: tracking,
          items: pkgItems,
          internationalShippingFeeYen: perPkgShip,
          domesticShippingFeeYen: 0,
        });
      }
    }

    if (DEBUG) console.log(`[FJ] scraped shipments=${shipments.length}, packages=${packages.length}`);
    return { proxyName: 'fromjapan', pageUrl: url, packages };
  } finally {
    await page.close();
    await context.close();
  }
}
```

---

## src/scrapers/zenmarket.ts

```ts
import path from 'path';
import fs from 'fs';
import { chromium } from 'playwright';

type ZMItemRow = {
  titleJa: string;
  itemUrl: string;
  listingId?: string | null;
  priceYen?: number;
  // used only to compute domestic total; not persisted per item
  localShipYen?: number;
};

type ZMItemsNested = {
  create: Array<{
    orderNumber?: string | null;
    titleJa?: string | null;
    titleEn?: string | null;
    itemUrl?: string | null;
    listingId?: string | null;
    priceYen?: number | null;
  }>;
};

export type ZMPackage = {
  proxyName: 'zenmarket';
  pageUrl: string;

  packageNumber: string;          // pid (unique)
  displayNumber?: string;         // e.g. "#2"

  dateShipped?: string;           // YYYY-MM-DD
  trackingNumber?: string | null;
  trackingUrl?: string | null;

  internationalShippingFeeYen?: number;
  domesticShippingFeeYen?: number;

  items?: ZMItemsNested;          // Prisma nested create
  raw?: any;
};

const PROFILE_DIR = process.env.ZM_PROFILE_DIR || '.secrets/zm-profile';
const DEBUG = process.env.DEBUG_SCRAPER === '1';

function yenToNumber(txt: string | null | undefined): number {
  if (!txt) return 0;
  const n = txt.replace(/[^0-9.-]/g, '');
  const v = Number(n);
  return Number.isFinite(v) ? v : 0;
}

// supports auction.aspx?itemCode=XXXX and pretty “/auction/XXXX”
function parseListingIdFromUrl(url: string): string | null {
  try {
    const m0 = url.match(/[?&]itemCode=([A-Za-z0-9]+)/i);
    if (m0) return m0[1];
    const m = url.match(/auction\/([A-Za-z0-9]+)/i);
    if (m) return m[1];
    const m2 = url.match(/mercari\.com\/.*\/item\/([A-Za-z0-9]+)/i);
    if (m2) return m2[1];
  } catch {}
  return null;
}

export async function scrapeZenMarketParcels(
  url = 'https://zenmarket.jp/fr/profile/parcel.aspx?state=5'
): Promise<ZMPackage[]> {
  const absProfile = path.resolve(PROFILE_DIR);
  if (!fs.existsSync(absProfile)) {
    throw new Error(`ZenMarket profile not found at ${absProfile}. Log in once with a persistent context.`);
  }

  const context = await chromium.launchPersistentContext(absProfile, {
    channel: 'chrome',
    headless: false,
    viewport: { width: 1366, height: 900 },
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    locale: 'fr-FR',
    extraHTTPHeaders: { 'Accept-Language': 'fr-FR,fr;q=0.9,en;q=0.8,ja;q=0.7' },
  });

  const page = await context.newPage();
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('div.parcel', { timeout: 20000 });

    // -------- Discover parcels by walking .parcel cards --------
    const parcels = await page.evaluate(() => {
      const toNum = (s?: string | null) => {
        if (!s) return 0;
        const n = s.replace(/[^0-9.-]/g, '');
        const v = Number(n);
        return Number.isFinite(v) ? v : 0;
      };

      const normDate = (t: string): string | undefined => {
        const a = t.match(/\b(\d{4}-\d{2}-\d{2})\b/);
        if (a) return a[1];
        const b = t.match(/\b(\d{2}\/\d{2}\/\d{4})\b/);
        if (b) {
          const [dd, mm, yyyy] = b[1].split('/');
          return `${yyyy}-${mm}-${dd}`;
        }
        return undefined;
      };

      // Pull number from the parent <div> that contains `<span>Envoi:</span>` or `<span>Shipping:</span>`
      const extractIntlShipping = (card: HTMLElement): number => {
        const labelSpan = Array.from(card.querySelectorAll('span')).find(sp => {
          const t = (sp.textContent || '').trim();
          return t.startsWith('Envoi:') || t.startsWith('Shipping:');
        });
        if (!labelSpan) return 0;

        const container = labelSpan.parentElement as HTMLElement | null;
        if (!container) return 0;

        // The amount is the remaining text in the same container after removing the label text.
        let txt = (container.textContent || '').replace(labelSpan.textContent || '', '').trim();
        // e.g. "¥6,100"
        return toNum(txt);
      };

      const results: Array<{
        pid: string;
        displayNumber?: string;
        dateShipped?: string;
        trackingNumber?: string | null;
        trackingUrl?: string | null;
        intlShipping?: number;
      }> = [];

      document.querySelectorAll<HTMLDivElement>('div.parcel').forEach(card => {
        const link = card.querySelector<HTMLAnchorElement>('a[data-parcelid]');
        if (!link) return;
        const pid = link.getAttribute('data-parcelid');
        if (!pid) return;

        // e.g. "#2"
        const displayNumber =
          card.innerText.split('\n').map(s => s.trim()).find(s => /^#\d+\b/.test(s)) || undefined;

        const dateShipped = normDate(card.innerText);

        // Tracking (JP Post example in snippet)
        let trackingNumber: string | null = null;
        let trackingUrl: string | null = null;
        const links = Array.from(card.querySelectorAll('a[href]')) as HTMLAnchorElement[];
        const tlink = links.find(x => /[A-Z]{2}\d{9}[A-Z]{2}|\b\d{10,14}\b|JJD/i.test(x.textContent || ''));
        if (tlink) {
          trackingNumber = (tlink.textContent || '').trim() || null;
          trackingUrl = tlink.href || null;
        }

        const intlShipping = extractIntlShipping(card);

        results.push({ pid, displayNumber, dateShipped, trackingNumber, trackingUrl, intlShipping });
      });

      return results;
    });

    if (DEBUG) console.log('[ZM] found pids:', parcels.map((p: any) => p.pid));

    const packages: ZMPackage[] = [];

    for (const p of parcels) {
      if (!p.pid) continue;

      // Fetch parcel items
      const payload = { pid: Number(p.pid) };
      const resp = await page.evaluate(async (body) => {
        const r = await fetch('/profile/parcel.aspx/getParcelContent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest',
          },
          body: JSON.stringify(body),
          credentials: 'same-origin',
        });
        return await r.json();
      }, payload);

      // JSON-first parse into ZMItemRow[]
      let rows: ZMItemRow[] = [];
      try {
        const raw = typeof resp?.d === 'string' ? resp.d : (resp?.d ? JSON.stringify(resp.d) : '[]');
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) {
          rows = arr.map((it: any) => ({
            titleJa: String(it?.ProductName ?? '').trim(),
            itemUrl: String(it?.ProductURL ?? '').trim(),
            priceYen: yenToNumber(it?.Price) + yenToNumber(it?.Tax),
            localShipYen: yenToNumber(it?.LocalShippingPrice),
            listingId: null, // fill below outside evaluate()
          }));
        }
      } catch {}

      // Fill listingId client-side and compute domestic total
      let domesticTotal = 0;
      const rawItemsReady: ZMItemRow[] = rows.map(r => {
        const listingId = parseListingIdFromUrl(r.itemUrl || '') ?? null;
        domesticTotal += (r.localShipYen || 0);
        return { ...r, listingId };
      });

      // Convert to Prisma nested create shape (duplicate titleEn from titleJa)
      const itemsNested: ZMItemsNested | undefined =
        rawItemsReady.length > 0
          ? {
              create: rawItemsReady.map(r => ({
                orderNumber: null,
                titleJa: r.titleJa ?? null,
                titleEn: r.titleJa ?? null,  // duplicate JP into EN
                itemUrl: r.itemUrl ?? null,
                listingId: r.listingId ?? null,
                priceYen: (r.priceYen ?? 0),
              })),
            }
          : undefined;

      const pkg: ZMPackage = {
        proxyName: 'zenmarket',
        pageUrl: url,
        packageNumber: String(p.pid),
        displayNumber: p.displayNumber,
        dateShipped: p.dateShipped,
        trackingNumber: p.trackingNumber ?? null,
        trackingUrl: p.trackingUrl ?? null,
        internationalShippingFeeYen: p.intlShipping ?? 0,
        domesticShippingFeeYen: domesticTotal || 0,
        items: itemsNested,
        raw: { parcelMeta: p, response: resp },
      };

      packages.push(pkg);
    }

    if (DEBUG) console.log(`[ZM] scraped packages=${packages.length}`);
    return packages;
  } finally {
    await page.close();
    await context.close();
  }
}

```

---

## src/scripts/build-summary.mjs

```js
// scripts/build-summary.mjs
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import url from 'node:url';

const repoRoot = process.cwd();
const OUT_FILE = (process.argv.includes('--out')
  ? process.argv[process.argv.indexOf('--out') + 1]
  : 'docs/codebase-summary.md');

const WATCH = process.argv.includes('--watch');

// allow-list of file extensions we’ll include in the summary
const TEXT_EXTS = new Set([
  // code
  '.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs',
  '.css', '.scss', '.sass',
  '.html', '.htm',
  '.json', '.md', '.mdx',
  '.yml', '.yaml', '.toml', '.ini', '.conf',
  '.sql', '.prisma',
  '.sh', '.bash', '.zsh',
  '.py', '.rb', '.go', '.rs', '.kt', '.java',
  '.m', '.mm', '.swift',
  '.txt',
  // project config
  '.env.example', '.gitignore', '.gitattributes', '.editorconfig',
  '.tsconfig', '.eslintrc', '.prettierrc', '.npmrc',
]);

// soft size cap (skip huge text files)
const MAX_FILE_BYTES = 512 * 1024; // 512 KB

function languageFromExt(p) {
  const ext = path.extname(p).toLowerCase();
  switch (ext) {
    case '.ts': return 'ts';
    case '.tsx': return 'tsx';
    case '.js': case '.mjs': case '.cjs': return 'js';
    case '.jsx': return 'jsx';
    case '.css': return 'css';
    case '.scss': case '.sass': return 'scss';
    case '.html': case '.htm': return 'html';
    case '.json': return 'json';
    case '.yml': case '.yaml': return 'yaml';
    case '.toml': return 'toml';
    case '.sql': return 'sql';
    case '.prisma': return 'prisma';
    case '.md': case '.mdx': return 'md';
    case '.sh': case '.bash': case '.zsh': return 'bash';
    case '.py': return 'python';
    case '.rb': return 'ruby';
    case '.go': return 'go';
    case '.rs': return 'rust';
    case '.kt': return 'kotlin';
    case '.java': return 'java';
    case '.swift': return 'swift';
    default: return ''; // plain fence
  }
}

function getGitFiles() {
  // includes tracked + staged + untracked (but not ignored) files
  const out = execSync('git ls-files --cached --others --exclude-standard -z', { cwd: repoRoot });
  return out.toString('utf8').split('\0').filter(Boolean);
}

function getRepoMeta() {
  let commit = '';
  let when = '';
  let origin = '';
  try { commit = execSync('git rev-parse HEAD', { cwd: repoRoot }).toString('utf8').trim(); } catch {}
  try { when = execSync('git show -s --format=%ci HEAD', { cwd: repoRoot }).toString('utf8').trim(); } catch {}
  try { origin = execSync('git config --get remote.origin.url', { cwd: repoRoot }).toString('utf8').trim(); } catch {}
  return { commit, when, origin };
}

function isTextFile(p) {
  const ext = path.extname(p).toLowerCase();
  if (!TEXT_EXTS.has(ext)) return false;
  try {
    const st = fs.statSync(path.join(repoRoot, p));
    if (st.size > MAX_FILE_BYTES) return false;
    return true;
  } catch {
    return false;
  }
}

function buildOnce() {
  const files = getGitFiles().filter(isTextFile);

  const { commit, when, origin } = getRepoMeta();
  const header =
`# Codebase Summary

> Generated: ${new Date().toISOString()}
> Commit: ${commit || 'n/a'}
> Date: ${when || 'n/a'}
> Remote: ${origin || 'n/a'}

This file concatenates important text/code files in the repo so a single raw URL can be shared.

---

`;

  let out = header;

  for (const rel of files.sort()) {
    const abs = path.join(repoRoot, rel);
    let content = '';
    try {
      content = fs.readFileSync(abs, 'utf8');
    } catch {
      continue;
    }
    const lang = languageFromExt(rel);
    out += `\n---\n\n## ${rel}\n\n\`\`\`${lang}\n${content.replace(/\`\`\`/g, '```')}\n\`\`\`\n`;
  }

  const outAbs = path.join(repoRoot, OUT_FILE);
  fs.mkdirSync(path.dirname(outAbs), { recursive: true });
  fs.writeFileSync(outAbs, out, 'utf8');

  const relOut = path.relative(repoRoot, outAbs);
  console.log(`[summary] Wrote ${relOut} (${files.length} files)`);
}

async function main() {
  if (!WATCH) {
    buildOnce();
    return;
  }

  // Watch mode (uses chokidar if available; else falls back to periodic rebuild)
  try {
    const chokidar = (await import('chokidar')).default;
    const watcher = chokidar.watch(['**/*'], {
      ignored: [
        '**/.git/**',
        '**/node_modules/**',
        '**/.next/**',
        '**/dist/**',
        '**/build/**',
        '**/coverage/**',
        '**/.turbo/**',
        '**/.vercel/**',
        '**/.idea/**',
        '**/.vscode/**',
        OUT_FILE,
      ],
      ignoreInitial: true,
    });

    let timer = null;
    const schedule = () => {
      clearTimeout(timer);
      timer = setTimeout(buildOnce, 200);
    };

    buildOnce();
    watcher.on('add', schedule).on('change', schedule).on('unlink', schedule);
    console.log('[summary] Watching for changes… (Ctrl+C to stop)');
  } catch (e) {
    console.warn('[summary] chokidar not installed. Run: npm i -D chokidar');
    // fallback: rebuild once
    buildOnce();
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

```

---

## src/scripts/migrate-tags-to-placement.ts

```ts
/* scripts/migrate-tags-to-placements.ts
   Migrates from TagRelation (DAG) to TagPlacement (branch-local tree),
   and builds PlacementClosure. Safe to re-run (idempotent).
*/
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type Relation = { parentId: string; childId: string };
type Placement = { id: string; tagId: string; parentPlacementId: string | null };

async function main() {
  console.log('--- Migration: TagRelation -> TagPlacement ---');

  // 1) Read tags and relations
  const [tags, rels] = await Promise.all([
    prisma.tag.findMany({ select: { id: true } }),
    prisma.tagRelation.findMany({ select: { parentId: true, childId: true } }),
  ]);
  console.log(`Tags: ${tags.length}, Relations: ${rels.length}`);

  // Build adjacency + reverse adjacency
  const childrenByTag = new Map<string, string[]>();
  const parentsByTag = new Map<string, string[]>();
  for (const r of rels) {
    (childrenByTag.get(r.parentId) ?? childrenByTag.set(r.parentId, []).get(r.parentId)!).push(r.childId);
    (parentsByTag.get(r.childId) ?? parentsByTag.set(r.childId, []).get(r.childId)!).push(r.parentId);
  }

  // 2) Ensure root placements for tags with no parents OR isolated tags
  const tagIds = new Set(tags.map(t => t.id));
  const childSet = new Set(rels.map(r => r.childId));
  const parentSet = new Set(rels.map(r => r.parentId));

  const roots: string[] = [];
  for (const tid of tagIds) {
    if (!parentsByTag.has(tid)) roots.push(tid);
  }
  console.log(`Root tags detected: ${roots.length}`);

  // Helper: ensure placement exists under given parentPlacementId
  async function ensurePlacement(tagId: string, parentPlacementId: string | null): Promise<Placement> {
    const existing = await prisma.tagPlacement.findFirst({
      where: { tagId, parentPlacementId },
      select: { id: true, tagId: true, parentPlacementId: true },
    });
    if (existing) return existing as Placement;

    const created = await prisma.tagPlacement.create({
      data: { tagId, parentPlacementId },
      select: { id: true, tagId: true, parentPlacementId: true },
    });
    return created as Placement;
  }

  // Create root placements
  const rootPlacements: Placement[] = [];
  for (const rootTagId of roots) {
    const p = await ensurePlacement(rootTagId, null);
    rootPlacements.push(p);
  }
  console.log(`Root placements created/verified: ${rootPlacements.length}`);

  // 3) Expand placements down the DAG: for each placement of a parent tag,
  //    create a child placement per TagRelation edge (parentTag -> childTag) under that *placement*.
  // We'll BFS over placements.
  const queue: Placement[] = [...rootPlacements];
  let createdCount = 0;

  // Build quick lookup for children
  function getChildren(tagId: string): string[] {
    return childrenByTag.get(tagId) ?? [];
  }

  while (queue.length) {
    const p = queue.shift()!;
    const parentTagId = p.tagId;
    const childTagIds = getChildren(parentTagId);
    if (childTagIds.length === 0) continue;

    for (const childTagId of childTagIds) {
      const childPlacement = await ensurePlacement(childTagId, p.id);
      // If it was newly created in this run, we have no way to know except by trying to find it first.
      // We still push to queue so deeper descendants get created.
      queue.push(childPlacement);
      createdCount++;
    }
  }
  console.log(`Placement expansion completed. (Created/verified edges: ${createdCount})`);

  // 4) Rebuild PlacementClosure from TagPlacement parent links
  console.log('Rebuilding PlacementClosure…');
  await prisma.placementClosure.deleteMany({});

  const allPlacements = await prisma.tagPlacement.findMany({
    select: { id: true, parentPlacementId: true },
  });

  // Self links
  if (allPlacements.length) {
    await prisma.placementClosure.createMany({
      data: allPlacements.map(p => ({
        ancestorPlacementId: p.id,
        descendantPlacementId: p.id,
        depth: 0,
      })),
      skipDuplicates: true,
    });
  }

  // Build adjacency for placements
  const childrenByPlacement = new Map<string, string[]>();
  for (const p of allPlacements) {
    if (p.parentPlacementId) {
      const arr = childrenByPlacement.get(p.parentPlacementId);
      if (arr) arr.push(p.id);
      else childrenByPlacement.set(p.parentPlacementId, [p.id]);
    }
  }

  // BFS from each placement as ancestor
  const pairs: { ancestorPlacementId: string; descendantPlacementId: string; depth: number }[] = [];
  for (const anc of allPlacements) {
    const seen = new Set<string>([anc.id]);
    const q: Array<{ id: string; depth: number }> = [{ id: anc.id, depth: 0 }];
    while (q.length) {
      const { id, depth } = q.shift()!;
      const kids = childrenByPlacement.get(id) ?? [];
      for (const kid of kids) {
        if (!seen.has(kid)) {
          seen.add(kid);
          pairs.push({
            ancestorPlacementId: anc.id,
            descendantPlacementId: kid,
            depth: depth + 1,
          });
          q.push({ id: kid, depth: depth + 1 });
        }
      }
    }
  }

  // Insert closure in manageable chunks
  const chunkSize = 5000;
  for (let i = 0; i < pairs.length; i += chunkSize) {
    const chunk = pairs.slice(i, i + chunkSize);
    await prisma.placementClosure.createMany({ data: chunk, skipDuplicates: true });
    if ((i / chunkSize) % 20 === 0) console.log(`…closure progress ${i + chunk.length}/${pairs.length}`);
  }

  console.log('PlacementClosure rebuild done.');
  console.log('--- Migration complete ---');
}

main()
  .catch((e) => {
    console.error('Migration failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

```

---

## src/scripts/pruneorphan.ts

```ts
// scripts/prune-orphan-tags.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.$executeRawUnsafe(`
    DELETE FROM "Tag" t
    WHERE NOT EXISTS (SELECT 1 FROM "TagPlacement" p WHERE p."tagId" = t."id")
      AND NOT EXISTS (SELECT 1 FROM "ItemTag" it WHERE it."tagId" = t."id");
  `);
  console.log('Pruned orphan tags.');
}
main().finally(() => prisma.$disconnect());
```

---

## src/scripts/reset-tags.ts

```ts
import { prisma } from '@/lib/prisma';

async function main() {
  console.log('Wiping ItemTag, TagClosure, TagRelation, Tag …');
  await prisma.$transaction([
    prisma.itemTag.deleteMany({}),
    prisma.tagClosure.deleteMany({}),
    // If you’re on the new DAG schema, keep this; otherwise it’s harmless if the table doesn’t exist:
    prisma.$executeRawUnsafe(`DO $$ BEGIN
      IF to_regclass('public."TagRelation"') IS NOT NULL THEN
        DELETE FROM "TagRelation";
      END IF;
    END $$;`),
    prisma.tag.deleteMany({}),
  ]);
  console.log('Done.');
}

main().catch(e => {
  console.error(e);
  process.exit(1);
}).finally(async () => prisma.$disconnect());
```

---

## src/scripts/save-buyee-auth.ts

```ts
import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

(async () => {
  const profileDir = path.resolve('/home/oulette/.proxy-profiles/buyee-profile'); // persisted session directory
  fs.mkdirSync(profileDir, { recursive: true });

  const context = await chromium.launchPersistentContext(profileDir, {
    channel: 'chrome',         // use your real Chrome, not bundled Chromium
    headless: false,           // visible window so you can log in
    viewport: { width: 1280, height: 900 },
    locale: 'en-US',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    acceptDownloads: false,
    permissions: [],
    extraHTTPHeaders: { 'Accept-Language': 'en-US,en;q=0.9,ja;q=0.8' },
  });

  const page = await context.newPage();
  console.log('Opening Buyee. Please log in, then press ENTER here to save profile…');
  await page.goto('https://buyee.jp/', { waitUntil: 'domcontentloaded' });

  process.stdin.resume();
  process.stdin.on('data', async () => {
    await context.close(); // this writes state into the profile dir
    console.log('Profile saved at', profileDir);
    process.exit(0);
  });
})();
```

---

## src/scripts/save-fromjapan-auth.ts

```ts
import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

(async () => {
  const profileDir = path.resolve('/home/oulette/.proxy-profiles/fj-profile');
  fs.mkdirSync(profileDir, { recursive: true });

  const ctx = await chromium.launchPersistentContext(profileDir, {
    channel: 'chrome',
    headless: false,
    viewport: { width: 1280, height: 900 },
  });
  const page = await ctx.newPage();
  console.log('Opening FromJapan. Log in, then press ENTER here to save profile…');
  await page.goto('https://www.fromjapan.co.jp/japan/en/member/history/ship/list', { waitUntil: 'domcontentloaded' });

  process.stdin.resume();
  process.stdin.on('data', async () => {
    await ctx.close();
    console.log('Saved profile at', profileDir);
    process.exit(0);
  });
})();
```

---

## src/scripts/save-zenmarket-auth.ts

```ts
import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

(async () => {
  const profileDir = path.resolve('/home/oulette/.proxy-profiles/zm-profile');
  fs.mkdirSync(profileDir, { recursive: true });

  const ctx = await chromium.launchPersistentContext(profileDir, {
    channel: 'chrome',
    headless: false,
    viewport: { width: 1280, height: 900 },
  });
  const page = await ctx.newPage();
  console.log('Opening FromJapan. Log in, then press ENTER here to save profile…');
  await page.goto('https://zenmarket.jp', { waitUntil: 'domcontentloaded' });

  process.stdin.resume();
  process.stdin.on('data', async () => {
    await ctx.close();
    console.log('Saved profile at', profileDir);
    process.exit(0);
  });
})();
```

---

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```
