if(!self.define){let e,i={};const r=(r,a)=>(r=new URL(r+".js",a).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let d={};const f=e=>r(e,s),o={module:{uri:s},exports:d,require:f};i[s]=Promise.all(a.map((e=>o[e]||f(e)))).then((e=>(c(...e),d)))}}define(["./workbox-72a83b64"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"js/app.min.js",revision:"006152a89f0c9501ee992b1bdd483f7f"},{url:"js/extensions.min.js",revision:"3136b7d82b8c01e65b72a389b313a058"},{url:"js/orgchart.min.js",revision:"619d8c4dab47b81868916df31f55478b"},{url:"js/stencils.min.js",revision:"fb7151e9f9c7fe11447d36774985b644"},{url:"js/shapes-14-6-5.min.js",revision:"d61ee16aa1c1e928e7e8050d28ece5b3"},{url:"js/math-print.js",revision:"cf64f6a493a8cb5079f2b70813e478d7"},{url:"index.html",revision:"782203b0acbf2f702f7598cc36d1b598"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"styles/fonts/ArchitectsDaughter-Regular.ttf",revision:"31c2153c0530e32553b31a49b3d70736"},{url:"styles/grapheditor.css",revision:"4939a477256da188b8ce9f69c0bd8206"},{url:"styles/atlas.css",revision:"d627cfef208f13a9cff1670f143c6348"},{url:"styles/dark.css",revision:"fd2878ff29a6b68cb8dbfab17e32d649"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"4f3899e40747c8eacf6b89c550b56973"},{url:"connect/jira/editor-1-3-3.html",revision:"a583c5c1dac9945f6f4087c880e26854"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"801fc4ef821f5a3986902998da85b53a"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"b20590b5ba995880eb6778e092a3fd50"},{url:"connect/jira/viewerPanel.js",revision:"3def6121aa291841a38320ebffc51457"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"b30113797d4498d3fbaad45ecded7a60"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"94804f65483a6e7eb51dee97d0ae9d88"},{url:"connect/jira/fullscreen-viewer.js",revision:"8eceb2fe587296dd11f9c8f6eae34c20"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"ee6764429bf47a8545aa1cedacee718e"},{url:"plugins/cConf-1-4-8.js",revision:"4de7dc22da6baba1cdd1480809bd0ee5"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"a628ad7e8ba67daf335db36d2f023a38"},{url:"connect/new_common/cac.js",revision:"cf63bf9103bafb9f34cf3ff624b918e8"},{url:"connect/gdrive_common/gac.js",revision:"78f85e79f15f56b8b8d83c90f4a15679"},{url:"connect/onedrive_common/ac.js",revision:"5fb6ff1a73f54a9086b7a7e1f613b8ed"},{url:"connect/confluence/viewer-init.js",revision:"84b1f6758f3c1a723b019c58af377027"},{url:"connect/confluence/viewer.js",revision:"22b42ad751a1d75ac7af89e3902b4ef9"},{url:"connect/confluence/viewer-1-4-42.html",revision:"4a9a11f6de154cbd7a2df9e45790daf1"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"b2908e71f755a069fe6487e1e705736c"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"90d1612e10c3ed94f3b355fbaf262a95"},{url:"connect/confluence/includeDiagram.html",revision:"4df629a5bfba840368ab8185ce27f439"},{url:"connect/confluence/macro-editor.js",revision:"51e513c65251b215aa78420c84623a18"},{url:"math/es5/startup.js",revision:"dc7130cdc866593293dbb5dde11ceb40"},{url:"math/es5/core.js",revision:"f71bc0bfb7d2ac8261747f97a5d47dd4"},{url:"math/es5/ui/safe.js",revision:"8c1fcfee7c879588ad409edcdd9cce53"},{url:"math/es5/output/svg.js",revision:"4f55967d16197ebb01b86356d8ab179a"},{url:"math/es5/input/tex.js",revision:"5c4f470da2ccb1acf85041fcecd6fff6"},{url:"math/es5/input/asciimath.js",revision:"c2d4076dd8e26d509bfe3a378e71cfa7"},{url:"math/es5/output/svg/fonts/tex.js",revision:"6eab785a3788ea805bd2b552d1f0aab8"},{url:"resources/dia.txt",revision:"d321012e1056c41f1e7b22e47ad62d61"},{url:"resources/dia_am.txt",revision:"213525ef8fcd9dfe2bbd0c9c3ce1d42c"},{url:"resources/dia_ar.txt",revision:"acf5faf39924e129bb1592129652386b"},{url:"resources/dia_bg.txt",revision:"8af3710c9c6182ee76cdb1950decada6"},{url:"resources/dia_bn.txt",revision:"537c5b5b925a78d80d2fa60029c56758"},{url:"resources/dia_bs.txt",revision:"00861472d2c0c21eb9b8570abad23b0b"},{url:"resources/dia_ca.txt",revision:"57548dd636433d335b0098ad6d7e086f"},{url:"resources/dia_cs.txt",revision:"116adace1e36bb0e98391829fb6350f9"},{url:"resources/dia_da.txt",revision:"ca52cf879ec86c214b3f48741d8585cc"},{url:"resources/dia_de.txt",revision:"8e284b6a03f973b648207edfb6dc42c4"},{url:"resources/dia_el.txt",revision:"d6ab32f967b96e92cb0b6e28a5776dea"},{url:"resources/dia_eo.txt",revision:"263dcbd2a691e1220ffea1da65b41564"},{url:"resources/dia_es.txt",revision:"b284e77d3def337b8759f97dfd79f00f"},{url:"resources/dia_et.txt",revision:"66cd53fb17bae47bd97f24db4735bf6f"},{url:"resources/dia_eu.txt",revision:"c1c685c09fe50bacec4ef935383f5779"},{url:"resources/dia_fa.txt",revision:"7376863e7ea228d96453b093dfb6dc6f"},{url:"resources/dia_fi.txt",revision:"efdd0d39a5640914a15acbe6ae6dd206"},{url:"resources/dia_fil.txt",revision:"48bcfc483ee18f31abf009100400162e"},{url:"resources/dia_fr.txt",revision:"903589c5776aa042d535c72cde95483e"},{url:"resources/dia_gl.txt",revision:"9e177e40efef6dfdeaf709858fa289a6"},{url:"resources/dia_gu.txt",revision:"bb113f63c853871050f7539499818f1d"},{url:"resources/dia_he.txt",revision:"ba35b0568b60cb06fc730c3b460c7dc0"},{url:"resources/dia_hi.txt",revision:"e7872e2bdc378957e3434f75030a310b"},{url:"resources/dia_hr.txt",revision:"06eef2cc434a7808728b714be192dfb2"},{url:"resources/dia_hu.txt",revision:"3dbfedae54f8480399e1431a41c20b82"},{url:"resources/dia_id.txt",revision:"9bbad28ba0eab330e27a15db4ff704c4"},{url:"resources/dia_it.txt",revision:"711ab9fea81dc6eab7e031225c3070a1"},{url:"resources/dia_ja.txt",revision:"c7902011a1f935a9e3ab83e72e58fb97"},{url:"resources/dia_kn.txt",revision:"16c268ae7a4fcea6be475d951a60bb78"},{url:"resources/dia_ko.txt",revision:"f07549204c3ee15c05ad9e9b5751f0e4"},{url:"resources/dia_lt.txt",revision:"55bea9cbbfcd6764ee22601d0610ef85"},{url:"resources/dia_lv.txt",revision:"e5a9f2a7919626295c6abd4749db423f"},{url:"resources/dia_ml.txt",revision:"255ac00bfd766baceb871aa16f1fdf9c"},{url:"resources/dia_mr.txt",revision:"124a4b81ea95d58b4882333e239e51ea"},{url:"resources/dia_ms.txt",revision:"cba2d04e1ea934de4cb4f3f8db3859a4"},{url:"resources/dia_my.txt",revision:"d321012e1056c41f1e7b22e47ad62d61"},{url:"resources/dia_nl.txt",revision:"a862c491ea7dcceb9feb32a2d08235fb"},{url:"resources/dia_no.txt",revision:"2634909d53814d1f9ceeb6c9c70efaea"},{url:"resources/dia_pl.txt",revision:"ef2666fe67e34bf8f5bb17aa28dd7e8f"},{url:"resources/dia_pt-br.txt",revision:"6446b47542b3441de598b4dbc8007d63"},{url:"resources/dia_pt.txt",revision:"55f3a32cf14b6056cbbc440ec16421e3"},{url:"resources/dia_ro.txt",revision:"8a2f9c7312fe2febd1b6e47417af4ffc"},{url:"resources/dia_ru.txt",revision:"db34e0a3b6f1c8f76e1734e9401dc088"},{url:"resources/dia_si.txt",revision:"d321012e1056c41f1e7b22e47ad62d61"},{url:"resources/dia_sk.txt",revision:"a5dc590fc880cc80483b7ce9d5669d1f"},{url:"resources/dia_sl.txt",revision:"5c43f1e8d006fda3c65ff49fb2c125f7"},{url:"resources/dia_sr.txt",revision:"08f52d43b9f203e3628498c4986dd7d7"},{url:"resources/dia_sv.txt",revision:"2c3f1994de5c2e926f020d754f28fba5"},{url:"resources/dia_sw.txt",revision:"2f9dc6bbc93eecd3deaefe2d0254f82c"},{url:"resources/dia_ta.txt",revision:"0fb6ad26a92004825c6c29da032bd62a"},{url:"resources/dia_te.txt",revision:"44a6c4ce2bab7bcb978471c7808dadf3"},{url:"resources/dia_th.txt",revision:"4e93707e2c5ee37077e66d080fdf7bfe"},{url:"resources/dia_tr.txt",revision:"96b21ae462f9b4fa864100af7d8b0c76"},{url:"resources/dia_uk.txt",revision:"e3eaddfd4eaf2f6c4a8b10580b961257"},{url:"resources/dia_vi.txt",revision:"47a055cec84006cb9a243091e28d4f15"},{url:"resources/dia_zh-tw.txt",revision:"6e069445807241af3af642d76f45855d"},{url:"resources/dia_zh.txt",revision:"d5509a9361e5ad24d94b835f41cd7ba0"},{url:"favicon.ico",revision:"83014b0f32b6c7b15b66cf3c6d6d7c16"},{url:"images/manifest.json",revision:"e77092f9f5912c39cd34024443c2299b"},{url:"images/logo.png",revision:"e4e0d092abdb1e668b5ec41a7fe0713c"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"732c29e21332a926318a7005d21ec450"},{url:"images/icon-192-maskable.png",revision:"47e006d0ce4a35eb5beaa97f0c2bfed0"},{url:"images/icon-192.png",revision:"d022403d52435d76afec82c4e24a17ef"},{url:"images/icon-512-maskable.png",revision:"cf152feeb01fb21f3148a71a3540266e"},{url:"images/icon-512.png",revision:"a3a0df7e7a385244b74073f81ecc45de"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"618b42f0bde0c7685e04811c25dc2b3e"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map