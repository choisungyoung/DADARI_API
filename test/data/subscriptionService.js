const subscriptionServices = [
    // OTT
    {
        id: 1,
        nameEng: 'netflex',
        nameKr: '넷플렉스',
        defaultLogoPath: '/images/logo/default/netflix.png',
        detailLogoPath: '/images/logo/detail/netflix.png',
        listLogoPath: '/images/logo/list/netflix.png',
        mainUrl: 'https://www.netflix.com/browse',
        policyUrl: 'https://help.netflix.com/ko/node/24926?ui_action=kb-article-popular-categories',
        description:
            '넷플릭스는 TV 프로그램과 영화를 인터넷 연결 지원 디바이스에서 광고 없이 시청할 수 있는 멤버십 기반 스트리밍 서비스입니다.',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 1,
    },
    {
        id: 2,
        nameEng: 'youtube',
        nameKr: '유튜브',
        defaultLogoPath: '/images/logo/default/youtube.png',
        detailLogoPath: '/images/logo/detail/youtube.png',
        listLogoPath: '/images/logo/list/youtube.png',
        mainUrl: 'https://www.youtube.com',
        policyUrl: 'https://www.youtube.com/premium',
        description: 'YouTube⁠를 광⁠고 없⁠이 즐⁠겨 보⁠세⁠요',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 1,
    },
    {
        id: 3,
        nameEng: 'disney plus',
        nameKr: '디즈니플러스',
        defaultLogoPath: '/images/logo/default/disneyplus.png',
        detailLogoPath: '/images/logo/detail/disneyplus.png',
        listLogoPath: '/images/logo/list/disneyplus.png',
        mainUrl: 'https://www.disneyplus.com/ko-kr',
        policyUrl:
            'https://www.disneyplus.com/ko-kr/legal/%EB%94%94%EC%A6%88%EB%8B%88%2B-%EC%9D%B4%EC%9A%A9%EC%95%BD%EA%B4%80',
        description: '디즈니, 픽사, 마블, 스타워즈의 최고 인기 영화도 마음껏 즐길 수 있습니다',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 1,
    },

    {
        id: 4,
        nameEng: 'apple TV plus',
        nameKr: '애플TV+',
        defaultLogoPath: '/images/logo/default/apple-tv-plus.png',
        detailLogoPath: '/images/logo/detail/apple-tv-plus.png',
        listLogoPath: '/images/logo/list/apple-tv-plus.png',
        mainUrl: 'https://www.apple.com/kr/apple-tv-plus/',
        policyUrl: 'https://www.apple.com/kr/promo/',
        description: 'Apple Original 콘텐츠는 오직 Apple TV+에서만.',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 1,
    },

    {
        id: 5,
        nameEng: 'coupang play',
        nameKr: '쿠팡플레이',
        defaultLogoPath: '/images/logo/default/coupang.png',
        detailLogoPath: '/images/logo/detail/coupang.png',
        listLogoPath: '/images/logo/list/coupang.png',
        mainUrl: 'https://www.coupangplay.com/promotion/coupangplayseries/',
        policyUrl: 'https://www.coupangplay.com/tac',
        description: '올 여름, 다시 없을 최고의 경기들을 쿠팡플레이에서 만나보세요.',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 1,
    },

    // 음악 1000
    {
        id: 1001,
        nameEng: 'melon',
        nameKr: '멜론',
        defaultLogoPath: '/images/logo/default/melon.png',
        detailLogoPath: '/images/logo/detail/melon.png',
        listLogoPath: '/images/logo/list/melon.png',
        mainUrl: 'https://www.melon.com/',
        policyUrl: 'https://www.melon.com/commerce/pamphlet/web/sale_listMainView.htm',
        description: '세계 최초의 상용 음원 서비스입니다.',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 2,
    },
    {
        id: 1002,
        nameEng: 'bugs',
        nameKr: '벅스',
        defaultLogoPath: '/images/logo/default/bugs.png',
        detailLogoPath: '/images/logo/detail/bugs.png',
        listLogoPath: '/images/logo/list/bugs.png',
        mainUrl: 'https://music.bugs.co.kr/',
        policyUrl: 'https://pay.bugs.co.kr/web/event/payco2021',
        description: '벅스 4천만곡 음악서비스입니다.',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 2,
    },

    // 도서 2000
    {
        id: 2001,
        nameEng: 'millie',
        nameKr: '밀리의 서재',
        defaultLogoPath: '/images/logo/default/millie.png',
        detailLogoPath: '/images/logo/detail/millie.png',
        listLogoPath: '/images/logo/list/millie.png',
        mainUrl: 'https://www.millie.co.kr/',
        policyUrl: 'https://www.millie.co.kr/event/introduction/product.html',
        description:
            '내 취향에 맞을까 고민했던 책, 사지말고 침대에서 완결까지 정주행! 읽고 싶을 때, 언제 어디서든 밀리의 서재로 마음껏 독서. 지금 가입 시 첫 달 무료. 해지회원이라면 다시 시작!',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 3,
    },
    {
        id: 2002,
        nameEng: 'ridi',
        nameKr: '리디북스',
        defaultLogoPath: '/images/logo/default/ridi.png',
        detailLogoPath: '/images/logo/detail/ridi.png',
        listLogoPath: '/images/logo/list/ridi.png',
        mainUrl: 'https://ridibooks.com/webtoon/recommendation',
        policyUrl: 'https://help.ridibooks.com/hc/ko/articles/360001632928',
        description: '웹툰, 웹소설, 전자책 모두 여기에! 이야기를 즐기는 나만의 공간, RIDI.',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 3,
    },
    {
        id: 2003,
        nameEng: 'yes24',
        nameKr: '예스24',
        defaultLogoPath: '/images/logo/default/yes-24.png',
        detailLogoPath: '/images/logo/detail/yes-24.png',
        listLogoPath: '/images/logo/list/yes-24.png',
        mainUrl: 'https://www.yes24.com/Main/default.aspx',
        policyUrl: 'https://bookclub.yes24.com/BookClub/SubscribePlans',
        description:
            'YES24는 대한민국 1위 인터넷 온라인서점입니다. 국내 최대의 도서정보를 보유하고 있으며 음반, DVD, 공연까지 다양한 문화콘텐츠 및 서비스를 제공합니다.',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 3,
    },
    {
        id: 2004,
        nameEng: 'kyobo',
        nameKr: '교보문고',
        defaultLogoPath: '/images/logo/default/kyobo.png',
        detailLogoPath: '/images/logo/detail/kyobo.png',
        listLogoPath: '/images/logo/list/kyobo.png',
        mainUrl: 'http://www.kyobobook.co.kr/',
        policyUrl: 'https://sam.kyobobook.co.kr/sbweb/payment/useBuyMain.ink',
        description: '믿고 보는 교보문고, 단 하나의 전자도서관',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 3,
    },

    // 의류 3000
    {
        id: 3001,
        nameEng: 'faav',
        nameKr: '패브',
        defaultLogoPath: '/images/logo/default/faav.png',
        detailLogoPath: '/images/logo/detail/faav.png',
        listLogoPath: '/images/logo/list/faav.png',
        mainUrl: 'https://faav.co.kr/?kind=home',
        policyUrl:
            'https://faav.co.kr/landing/membership?utm_source=instagram&utm_medium=instagram_profile&utm_campaign=impression&utm_content=link_membership',
        description:
            '경험이 취향이 되는 곳, 패브 | 디자이너 브랜드, 의류대여, 할인구매, 무료배송, 무료반납, 신규가입 20% 쿠폰, 멤버십 첫달 20%',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 4,
    },
    {
        id: 3002,
        nameEng: 'inthewear',
        nameKr: '인더웨어',
        defaultLogoPath: '/images/logo/default/inthewear.png',
        detailLogoPath: '/images/logo/detail/inthewear.png',
        listLogoPath: '/images/logo/list/inthewear.png',
        mainUrl: 'https://store.inthewear.com/',
        policyUrl: 'https://store.inthewear.com/subscription',
        description: '30만 구독자의 선택, 국내 유일 속옷 정기구독 서비스',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 4,
    },
    {
        id: 3003,
        nameEng: 'mehisox',
        nameKr: '미하이삭스',
        defaultLogoPath: '/images/logo/default/mehisox.png',
        detailLogoPath: '/images/logo/detail/mehisox.png',
        listLogoPath: '/images/logo/list/mehisox.png',
        mainUrl: 'https://www.mehisox.com/',
        policyUrl: 'https://www.mehisox.com/product-category/socks-subscription/',
        description: '국내최초 #양말 정기배송서비스',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 4,
    },
    {
        id: 3004,
        nameEng: 'closet-share',
        nameKr: '클로젯셰어',
        defaultLogoPath: '/images/logo/default/closet-share.png',
        detailLogoPath: '/images/logo/detail/closet-share.png',
        listLogoPath: '/images/logo/list/closet-share.png',
        mainUrl: 'https://www.closetshare.com/',
        policyUrl: 'https://www.closetshare.com/theclozet/front/membership/membershipList',
        description: '필요한 옷은 마음껏 빌리고, 안입는 옷은 수익내는 No.1 패션셰어링 플랫폼',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 4,
    },

    // 이커머스 4000
    {
        id: 4001,
        nameEng: 'kurly',
        nameKr: '마켓컬리',
        defaultLogoPath: '/images/logo/default/kurly.png',
        detailLogoPath: '/images/logo/detail/kurly.png',
        listLogoPath: '/images/logo/list/kurly.png',
        mainUrl: 'https://www.kurly.com/main',
        policyUrl: 'https://www.kurly.com/goods/5026337',
        description:
            '샛별배송 지역 고객님에 한해 15,000원 이상 주문 시 무제한으로 무료배송 받으실 수 있는 혜택입니다.',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 5,
    },
    {
        id: 4002,
        nameEng: 'coupang',
        nameKr: '쿠팡',
        defaultLogoPath: '/images/logo/default/coupang.png',
        detailLogoPath: '/images/logo/detail/coupang.png',
        listLogoPath: '/images/logo/list/coupang.png',
        mainUrl: 'https://www.coupang.com/',
        policyUrl: 'https://loyalty.coupang.com/loyalty/sign-up/home',
        description:
            '로켓상품 100%무료배송, 신선식품 새벽배송, 30일 무료반품, 30일 무료체험. 정기배송 추가할인! 로켓와우멤버 무료배송',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 5,
    },
    {
        id: 4003,
        nameEng: 'naver',
        nameKr: '네이버',
        defaultLogoPath: '/images/logo/default/naver.png',
        detailLogoPath: '/images/logo/detail/naver.png',
        listLogoPath: '/images/logo/list/naver.png',
        mainUrl: 'https://nid.naver.com/membership/join',
        policyUrl: 'https://help.naver.com/service/23168/category/5709?lang=ko',
        description:
            '가족, 친구 3명까지 무료, 매월 찾아오는 멤버십 데이까지! 멤버십이 드리는 강력한 혜택으로 더욱 똑똑하게 쇼핑하세요.로켓상품 100%무료배송, 신선식품 새벽배송, 30일 무료반품, 30일 무료체험. 정기배송 추가할인! 로켓와우멤버 무료배송',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 5,
    },
    {
        id: 4004,
        nameEng: 'smileclub',
        nameKr: '스마일클럽',
        defaultLogoPath: '/images/logo/default/smileclub.png',
        detailLogoPath: '/images/logo/detail/smileclub.png',
        listLogoPath: '/images/logo/list/smileclub.png',
        mainUrl: 'https://club.auction.co.kr/',
        policyUrl: 'https://club.auction.co.kr/',
        description: '스마일클럽만 가능한 스타벅스 혜택, 지금 시작하세요',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 5,
    },

    // 음식 5000
    {
        id: 5001,
        nameEng: 'yogipass',
        nameKr: '요기요',
        defaultLogoPath: '/images/logo/default/yogipass.png',
        detailLogoPath: '/images/logo/detail/yogipass.png',
        listLogoPath: '/images/logo/list/yogipass.png',
        mainUrl: 'https://www.yogiyo.co.kr/mobile/',
        policyUrl: 'https://yogiyo.onelink.me/BlI7/wllhlh99',
        description:
            '끝이 없는 할인구독 서비스. 몇 번이든! 뭐든지! 다- 할인되는 패스. 두 번만 주문해도 구독비보다 더 큰 혜택. 차원이 다른 혜택 요기패스, 지금 바로 시작하세요!',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 6,
    },
    {
        id: 5002,
        nameEng: 'slimcook',
        nameKr: '슬림쿡',
        defaultLogoPath: '/images/logo/default/slimcook.png',
        detailLogoPath: '/images/logo/detail/slimcook.png',
        listLogoPath: '/images/logo/list/slimcook.png',
        mainUrl: 'http://www.slimcook.co.kr/',
        policyUrl: 'http://slimcook.co.kr/shop/shopbrand.html?xcode=023&type=P',
        description:
            '연예인 컴백식단, 단기 몸매관리 식단 프로그램, 매일 생산 샐러드, 새벽 배송&전국 매일 배송 전문.',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 6,
    },
    {
        id: 5003,
        nameEng: 'snack24',
        nameKr: '스낵24',
        defaultLogoPath: '/images/logo/default/snack24.png',
        detailLogoPath: '/images/logo/detail/snack24.png',
        listLogoPath: '/images/logo/list/snack24.png',
        mainUrl: 'https://www.wefuncorp.com/snack',
        policyUrl: 'https://www.wefuncorp.com/snack',
        description:
            '일할 맛 나는 회사의 시작. 사무실 간식 정기관리 서비스 스낵24. 편의점 대비 5~30% 저렴한 금액',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 6,
    },
    {
        id: 5004,
        nameEng: 'realfruit',
        nameKr: '리얼후르츠',
        defaultLogoPath: '/images/logo/default/realfruit.png',
        detailLogoPath: '/images/logo/detail/realfruit.png',
        listLogoPath: '/images/logo/list/realfruit.png',
        mainUrl: 'https://realfruit.co.kr/',
        policyUrl: 'https://realfruit.co.kr/shop/subscription-request/',
        description:
            '집앞까지 찾아가는 과일 정기배송. 고객이 선택한 1:1 맞춤형 과일. 과일마스터가 엄선한 제철과일을 정성스럽게 포장하여, 정기적으로 배송해 드립니다.',
        updateBy: 'admin',
        createBy: 'admin',
        categoryId: 6,
    },
];

module.exports = subscriptionServices;
