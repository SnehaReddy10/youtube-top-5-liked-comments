import axios from 'axios';

let data = JSON.stringify({
  context: {
    client: {
      hl: 'en-GB',
      gl: 'IN',
      remoteHost: '106.203.205.173',
      deviceMake: '',
      deviceModel: '',
      visitorData: 'CgtJSzAwaUJWOWJLbyiSuPS0BjIKCgJJThIEGgAgUQ%3D%3D',
      userAgent:
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36,gzip(gfe)',
      clientName: 'WEB',
      clientVersion: '2.20240719.00.00',
      osName: 'Windows',
      osVersion: '10.0',
      originalUrl: 'https://www.youtube.com/watch?v=r9Y35xwNPiI',
      screenPixelDensity: 1,
      platform: 'DESKTOP',
      clientFormFactor: 'UNKNOWN_FORM_FACTOR',
      configInfo: {
        appInstallData:
          'CJK49LQGEI-UsQUQsO6wBRC-irAFEKXC_hIQ65OuBRCO2rAFEKrYsAUQ37z_EhCJ6K4FEMSMsQUQ49GwBRDY3bAFENS9_xIQzN-uBRCigbAFEOX0sAUQ4tSuBRCokrEFENbdsAUQo-2wBRDN17AFEI2UsQUQsdywBRDxjrEFEN3o_hIQndCwBRCLz7AFEMr5sAUQ6-j-EhDf9bAFEJSJsQUQ2ISxBRCVlbEFELeTsQUQ1o-xBRC3768FEOrDrwUQvZmwBRDuoq8FEP-IsQUQ26-vBRDT4a8FEIO5_xIQlP6wBRCdprAFEParsAUQjcywBRCIh7AFEKWSsQUQ0I2wBRDJ17AFENWIsAUQ97H_EhC9tq4FEPyFsAUQiOOvBRCXg7EFEOuZsQUQ0PqwBRDVi7EFEKaasAUQtbH_EhDvzbAFEKGdsQUQ1bD_EhCQkrEFELaysAUQ1-mvBRCPxLAFEMSSsQUQj8awBRD68LAFENShrwUQt-r-EhCAi7EFENyOsQUQpZOxBRComrAFEM-osAUQ4eywBRDJ5rAFENv-tyIQ2cmvBRCok7EFEJaVsAUQpZaxBRCa8K8FEPSrsAUQyfevBRCbk7EFENWUsQUqJENBTVNGUlVXb0wyd0ROSGtCdlB0OFF2MjdRYVRnZ0lkQnc9PQ%3D%3D',
      },
      screenDensityFloat: 1.2150001525878906,
      userInterfaceTheme: 'USER_INTERFACE_THEME_LIGHT',
      timeZone: 'Asia/Calcutta',
      browserName: 'Chrome',
      browserVersion: '126.0.0.0',
      acceptHeader:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      deviceExperimentId:
        'ChxOek01TkRBNU56QXlOemcyTkRrMU5qZ3hNUT09EJK49LQGGJK49LQG',
      screenWidthPoints: 1582,
      screenHeightPoints: 715,
      utcOffsetMinutes: 330,
      connectionType: 'CONN_CELLULAR_4G',
      memoryTotalKbytes: '8000000',
      mainAppWebInfo: {
        graftUrl: 'https://www.youtube.com/watch?v=r9Y35xwNPiI',
        pwaInstallabilityStatus: 'PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED',
        webDisplayMode: 'WEB_DISPLAY_MODE_BROWSER',
        isWebNativeShareAvailable: true,
      },
    },
    user: {
      lockedSafetyMode: false,
    },
    request: {
      useSsl: true,
      internalExperimentFlags: [],
      consistencyTokenJars: [],
    },
    clickTracking: {
      clickTrackingParams: 'CJUEELsvGAMiEwjP683srLiHAxXw5nMBHeDnB7o=',
    },
    adSignalsInfo: {
      params: [
        {
          key: 'dt',
          value: '1721572371844',
        },
        {
          key: 'flash',
          value: '0',
        },
        {
          key: 'frm',
          value: '0',
        },
        {
          key: 'u_tz',
          value: '330',
        },
        {
          key: 'u_his',
          value: '2',
        },
        {
          key: 'u_h',
          value: '667',
        },
        {
          key: 'u_w',
          value: '1186',
        },
        {
          key: 'u_ah',
          value: '623',
        },
        {
          key: 'u_aw',
          value: '1186',
        },
        {
          key: 'u_cd',
          value: '24',
        },
        {
          key: 'bc',
          value: '31',
        },
        {
          key: 'bih',
          value: '715',
        },
        {
          key: 'biw',
          value: '1560',
        },
        {
          key: 'brdim',
          value: '0,0,0,0,1186,0,1186,623,1582,715',
        },
        {
          key: 'vis',
          value: '1',
        },
        {
          key: 'wgl',
          value: 'true',
        },
        {
          key: 'ca_type',
          value: 'image',
        },
      ],
      bid: 'ANyPxKo19ewNyTvvHx3kecXRST8S7ZZ3MKSsfv95GmHpzIPfhu3AUtjVmIvikYTV-ifLn2qTJbOKcNhKY3GTYl9HW9cNu5HhYw',
    },
  },
  continuation:
    'Eg0SCzBlbHV4a2xPWlZvGAYyJSIRIgswZWx1eGtsT1pWbzAAeAJCEGNvbW1lbnRzLXNlY3Rpb24%3D',
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://www.youtube.com/youtubei/v1/next?prettyPrint=false',
  headers: {
    accept: '*/*',
    'accept-language': 'en-US,en;q=0.9',
    authorization:
      'SAPISIDHASH 1721572458_8a526ae60c9238cb61f12a1ad5aa815547b1c0f6 SAPISID1PHASH 1721572458_8a526ae60c9238cb61f12a1ad5aa815547b1c0f6 SAPISID3PHASH 1721572458_8a526ae60c9238cb61f12a1ad5aa815547b1c0f6',
    'content-type': 'application/json',
    cookie:
      'VISITOR_INFO1_LIVE=IK00iBV9bKo; VISITOR_PRIVACY_METADATA=CgJJThIEGgAgUQ%3D%3D; LOGIN_INFO=AFmmF2swRAIgYTo_u4Z1OrBFqDEvHaWEJFE9QgyhOsSJHPXPZwUIqr8CIHQTDuRkSIgY0oBcnrKxBlI8X-ssUXiyFKCZHg1Xzkt7:QUQ3MjNmeHlFODJFX2ZLQzhJWG4tUXhCRmVHcEVRNHk2RWpsdjVNdUYzNUQyWXNrSTh3SU13anVCQl9UNUdvdWhQNGVUWk9IRHd1dlRlaHZ2ZDFjWUtMd1ZtSkhUQktfRzVDNVpiYlVVMHNxRzh5UTFBSkNXMmFIQ05ReVJsYUg3OGFEVmFzNWFVYUpHemJMOWFTNkRDX3ktUVVMWjVROUd3; HSID=AdyzR-rj0wq7Ev78_; SSID=AIQMnwhY79VaGRW8C; APISID=yP65YQWmbLRFDikN/AGY9Uy9iFwT8lh_3l; SAPISID=fcljjvePMWbjsx6k/AEmk7CFauYz1JppFV; __Secure-1PAPISID=fcljjvePMWbjsx6k/AEmk7CFauYz1JppFV; __Secure-3PAPISID=fcljjvePMWbjsx6k/AEmk7CFauYz1JppFV; PREF=f7=4100&tz=Asia.Calcutta&f4=4000000&f5=20000; SID=g.a000mAhFqZEpltzwoeUtXNot84FJhu5VjykHJZdmjgN8SlGCjN0ARXLUCFYXnNN_ab1lK84_xAACgYKAUISARQSFQHGX2Mi39-M3gubvIN17s_TcUopdhoVAUF8yKplprfH06BgWezthr61Uko50076; __Secure-1PSID=g.a000mAhFqZEpltzwoeUtXNot84FJhu5VjykHJZdmjgN8SlGCjN0AV8XVRoiylsRnfRDyWfRRPQACgYKAe4SARQSFQHGX2MigHBMY8hnbMz-iGe3who3eBoVAUF8yKocPWaOtBy5T_f3CHOUqaOg0076; __Secure-3PSID=g.a000mAhFqZEpltzwoeUtXNot84FJhu5VjykHJZdmjgN8SlGCjN0AX9PuvPNxloi2nHwHVqyP7QACgYKAXESARQSFQHGX2Mieixl3kg6yrzGbDyDKAnh7hoVAUF8yKr-ItVBdg-OT4-KCX1Tixwc0076; YSC=HxvXYTCUc8I; __Secure-1PSIDTS=sidts-CjIB4E2dkfylcb8Qoaz6Qhv2ZXPjvCt-o6nLD2FVYYhgkqowhwWvo_BH4y_2_NorLGmDOxAA; __Secure-3PSIDTS=sidts-CjIB4E2dkfylcb8Qoaz6Qhv2ZXPjvCt-o6nLD2FVYYhgkqowhwWvo_BH4y_2_NorLGmDOxAA; SIDCC=AKEyXzVfM6aRZ-wUhoS4agVfLCU0UAXzDIjRAtUVgIR2uUx6KmAC97GovS30bKNzNkwkYYERpA; __Secure-1PSIDCC=AKEyXzUJduCaCh9lb5C47KIoUi5m0Yj0qa2-rfbMBgrTQLzzRuoo6T912QSemkI3LgGgzAGceLY; __Secure-3PSIDCC=AKEyXzUlUBmq_3lVg7TENKkLRRa5ZOVmPjx7iartF3aLDu0r66MyTMLfg1zKxPh786Ljip8OILc; ST-amrb2j=session_logininfo=AFmmF2swRAIgYTo_u4Z1OrBFqDEvHaWEJFE9QgyhOsSJHPXPZwUIqr8CIHQTDuRkSIgY0oBcnrKxBlI8X-ssUXiyFKCZHg1Xzkt7%3AQUQ3MjNmeHlFODJFX2ZLQzhJWG4tUXhCRmVHcEVRNHk2RWpsdjVNdUYzNUQyWXNrSTh3SU13anVCQl9UNUdvdWhQNGVUWk9IRHd1dlRlaHZ2ZDFjWUtMd1ZtSkhUQktfRzVDNVpiYlVVMHNxRzh5UTFBSkNXMmFIQ05ReVJsYUg3OGFEVmFzNWFVYUpHemJMOWFTNkRDX3ktUVVMWjVROUd3; SIDCC=AKEyXzWdaf1dc5eJg_wjltjDy0uykoBqVTuYcXRSYuVW4iuzMfJyiTvzkCtH1EQU62kqh7j4GQ; __Secure-1PSIDCC=AKEyXzXKezdfXYdPd8D-XjdrYD-Z125vDZx7Es3ckm_aK8_uBKbUv_qIJBTzDZ-1FmMuyb5ViKY; __Secure-3PSIDCC=AKEyXzV9MPxUuBceJ6W1JkZ9x7quHHAN56BiGxuhnw0knyfqvoUU3F3f1Db_W6LKqqXhoHh-KM8',
    origin: 'https://www.youtube.com',
    priority: 'u=1, i',
    referer: 'https://www.youtube.com/watch?v=r9Y35xwNPiI',
    'sec-ch-ua':
      '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    'sec-ch-ua-arch': '"x86"',
    'sec-ch-ua-bitness': '"64"',
    'sec-ch-ua-form-factors': '"Desktop"',
    'sec-ch-ua-full-version': '"126.0.6478.182"',
    'sec-ch-ua-full-version-list':
      '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.182", "Google Chrome";v="126.0.6478.182"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-model': '""',
    'sec-ch-ua-platform': '"Windows"',
    'sec-ch-ua-platform-version': '"15.0.0"',
    'sec-ch-ua-wow64': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'same-origin',
    'sec-fetch-site': 'same-origin',
    'user-agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    'x-client-data':
      'CIy2yQEIorbJAQipncoBCLLyygEIkqHLAQiFoM0BCJKHzgEI26fOAQiErM4BCNaszgEImK3OAQihrs4BCOSvzgEYj87NARihnc4BGLquzgE=',
    'x-goog-authuser': '0',
    'x-goog-visitor-id': 'CgtJSzAwaUJWOWJLbyiSuPS0BjIKCgJJThIEGgAgUQ%3D%3D',
    'x-origin': 'https://www.youtube.com',
    'x-youtube-bootstrap-logged-in': 'true',
    'x-youtube-client-name': '1',
    'x-youtube-client-version': '2.20240719.00.00',
  },
  data: data,
};

axios
  .request(config)
  .then((response: any) => {
    const mutations =
      response.data.frameworkUpdates?.entityBatchUpdate?.mutations;
    const comments: any = [];

    mutations.map((x: any) => {
      const comment =
        x.payload?.commentEntityPayload?.properties?.content?.content;
      if (comment) {
        const likes = x.payload?.commentEntityPayload?.toolbar?.likeCountA11y;
        const numOfLikes = parseInt(likes.replace(' likes', ''));
        comments.push({
          comment,
          likes: numOfLikes,
        });
      }
      comments.sort((a: any, b: any) => b.likes - a.likes);
    });
    console.log('comments', comments.slice(0, 5));
  })
  .catch((error: any) => {
    console.log(error);
  });
