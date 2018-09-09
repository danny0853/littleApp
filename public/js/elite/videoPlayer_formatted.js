! function(e) {
    function t(e) {
        e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
            i = t.exec(location.search);
        return null === i ? null : decodeURIComponent(i[1].replace(/\+/g, " "))
    }
    e.fn.Video = function(e) {
        return new h(this, e)
    };
    var i = "mousemove keydown DOMMouseScroll mousewheel mousedown reset.idle",
        o = {
            instanceName: "player1",
            instanceTheme: "dark",
            autohideControls: 3,
            hideControlsOnMouseOut: "No",
            playerLayout: "fixedSize",
            videoPlayerWidth: 1006,
            videoPlayerHeight: 420,
            lightBox: !0,
            lightBoxAutoplay: !1,
            lightBoxThumbnail: "images/preview_images/poster.jpg",
            lightBoxThumbnailWidth: 400,
            lightBoxThumbnailHeight: 220,
            lightBoxCloseOnOutsideClick: !0,
            playlist: "Right playlist",
            playlistScrollType: "light",
            playlistBehaviourOnPageload: "opened (default)",
            autoplay: !1,
            colorAccent: "#cc181e",
            vimeoColor: "00adef",
            youtubeControls: "custom controls",
            youtubeSkin: "light",
            youtubeColor: "white",
            youtubeShowRelatedVideos: "No",
            videoPlayerShadow: "effect1",
            loadRandomVideoOnStart: "No",
            shuffle: "No",
            posterImg: "images/preview_images/poster.jpg",
            onFinish: "Play next video",
            nowPlayingText: "Yes",
            fullscreen: "Fullscreen native",
            rightClickMenu: !0,
            hideVideoSource: !1,
            showAllControls: !0,
            allowSkipAd: !0,
            infoShow: "Yes",
            shareShow: "Yes",
            facebookShow: "Yes",
            twitterShow: "Yes",
            mailShow: "Yes",
            facebookShareName: "Elite video player",
            facebookShareLink: "http://codecanyon.net/item/elite-video-player-wordpress-plugin/10496434",
            facebookShareDescription: "Elite Video Player is stunning, modern, responsive, fully customisable high-end video player for WordPress that support advertising and the most popular video platforms like YouTube, Vimeo or self-hosting videos (mp4).",
            facebookSharePicture: "https://0.s3.envato.com/files/123866118/preview.jpg",
            twitterText: "Elite video player",
            twitterLink: "http://codecanyon.net/item/elite-video-player-wordpress-plugin/10496434",
            twitterHashtags: "wordpressvideoplayer",
            twitterVia: "Creative media",
            googlePlus: "http://codecanyon.net/item/elite-video-player-wordpress-plugin/10496434",
            logoShow: "Yes",
            logoClickable: "Yes",
            logoPath: "images/logo/logo.png",
            logoGoToLink: "http://codecanyon.net/",
            logoPosition: "bottom-left",
            embedShow: "Yes",
            embedCodeSrc: "www.yourwebsite.com/videoplayer/index.html",
            embedCodeW: "746",
            embedCodeH: "420",
            embedShareLink: "www.yourwebsite.com/videoplayer/index.html",
            youtubePlaylistID: "",
            youtubeChannelID: "",
            videos: [{
                videoType: "HTML5",
                title: "Video title",
                youtubeID: "0dJO0HyE8xE",
                vimeoID: "119641053",
                mp4: "http://creativeinteractivemedia.com/player/videos/Tablet_Promo.mp4",
                imageUrl: "images/preview_images/poster2.jpg",
                imageTimer: 4,
                prerollAD: "no",
                prerollGotoLink: "http://codecanyon.net/",
                preroll_mp4: "http://creativeinteractivemedia.com/player/videos/Short_Elegant_Logo_Reveal.mp4",
                prerollSkipTimer: 5,
                midrollAD: "no",
                midrollAD_displayTime: "00:10",
                midrollGotoLink: "http://codecanyon.net/",
                midroll_mp4: "http://creativeinteractivemedia.com/player/videos/Logo_Explode.mp4",
                midrollSkipTimer: 5,
                postrollAD: "no",
                postrollGotoLink: "http://codecanyon.net/",
                postroll_mp4: "http://creativeinteractivemedia.com/player/videos/Logo_Light.mp4",
                postrollSkipTimer: 5,
                popupImg: "images/preview_images/popup.jpg",
                popupAdShow: "no",
                popupAdStartTime: "00:03",
                popupAdEndTime: "00:07",
                popupAdGoToLink: "http://codecanyon.net/",
                description: "Video description goes here.",
                thumbImg: "images/thumbnail_images/pic1.jpg",
                info: "Video info goes here.<br>This text can be <i>HTML formatted</i>, <a href='http://codecanyon.net/user/_zac_' target='_blank'><font color='008BFF'>find out more</font></a>.<br>You can disable this info window in player options. <br><br>Lorem ipsum dolor sit amet, eu pri dolores theophrastus. Posidonium vituperatoribus cu mel, cum feugiat nostrum sapientem ne. Vis ea summo persius, unum velit erant in eos, pri ut suas iriure euripidis. Ad augue expetendis sea. Ne usu saperet appetere honestatis, ne qui nulla debitis sententiae."
            }, {
                videoType: "HTML5",
                title: "Video title",
                youtubeID: "0dJO0HyE8xE",
                vimeoID: "119641053",
                mp4: "http://creativeinteractivemedia.com/player/videos/Tablet_Promo.mp4",
                imageUrl: "images/preview_images/poster2.jpg",
                imageTimer: 4,
                prerollAD: "no",
                prerollGotoLink: "http://codecanyon.net/",
                preroll_mp4: "http://creativeinteractivemedia.com/player/videos/Short_Elegant_Logo_Reveal.mp4",
                prerollSkipTimer: 5,
                midrollAD: "no",
                midrollAD_displayTime: "00:10",
                midrollGotoLink: "http://codecanyon.net/",
                midroll_mp4: "http://creativeinteractivemedia.com/player/videos/Logo_Explode.mp4",
                midrollSkipTimer: 5,
                postrollAD: "no",
                postrollGotoLink: "http://codecanyon.net/",
                postroll_mp4: "http://creativeinteractivemedia.com/player/videos/Logo_Light.mp4",
                postrollSkipTimer: 5,
                popupImg: "images/preview_images/popup.jpg",
                popupAdShow: "no",
                popupAdStartTime: "00:03",
                popupAdEndTime: "00:07",
                popupAdGoToLink: "http://codecanyon.net/",
                description: "Video description goes here.",
                thumbImg: "images/thumbnail_images/pic1.jpg",
                info: "Video info goes here.<br>This text can be <i>HTML formatted</i>, <a href='http://codecanyon.net/user/_zac_' target='_blank'><font color='008BFF'>find out more</font></a>.<br>You can disable this info window in player options. <br><br>Lorem ipsum dolor sit amet, eu pri dolores theophrastus. Posidonium vituperatoribus cu mel, cum feugiat nostrum sapientem ne. Vis ea summo persius, unum velit erant in eos, pri ut suas iriure euripidis. Ad augue expetendis sea. Ne usu saperet appetere honestatis, ne qui nulla debitis sententiae."
            }, {
                videoType: "HTML5",
                title: "Video title",
                youtubeID: "0dJO0HyE8xE",
                vimeoID: "119641053",
                mp4: "http://creativeinteractivemedia.com/player/videos/Tablet_Promo.mp4",
                imageUrl: "images/preview_images/poster2.jpg",
                imageTimer: 4,
                prerollAD: "no",
                prerollGotoLink: "http://codecanyon.net/",
                preroll_mp4: "http://creativeinteractivemedia.com/player/videos/Short_Elegant_Logo_Reveal.mp4",
                prerollSkipTimer: 5,
                midrollAD: "no",
                midrollAD_displayTime: "00:10",
                midrollGotoLink: "http://codecanyon.net/",
                midroll_mp4: "http://creativeinteractivemedia.com/player/videos/Logo_Explode.mp4",
                midrollSkipTimer: 5,
                postrollAD: "no",
                postrollGotoLink: "http://codecanyon.net/",
                postroll_mp4: "http://creativeinteractivemedia.com/player/videos/Logo_Light.mp4",
                postrollSkipTimer: 5,
                popupImg: "images/preview_images/popup.jpg",
                popupAdShow: "no",
                popupAdStartTime: "00:03",
                popupAdEndTime: "00:07",
                popupAdGoToLink: "http://codecanyon.net/",
                description: "Video description goes here.",
                thumbImg: "images/thumbnail_images/pic1.jpg",
                info: "Video info goes here.<br>This text can be <i>HTML formatted</i>, <a href='http://codecanyon.net/user/_zac_' target='_blank'><font color='008BFF'>find out more</font></a>.<br>You can disable this info window in player options. <br><br>Lorem ipsum dolor sit amet, eu pri dolores theophrastus. Posidonium vituperatoribus cu mel, cum feugiat nostrum sapientem ne. Vis ea summo persius, unum velit erant in eos, pri ut suas iriure euripidis. Ad augue expetendis sea. Ne usu saperet appetere honestatis, ne qui nulla debitis sententiae."
            }, {
                videoType: "HTML5",
                title: "Video title",
                youtubeID: "0dJO0HyE8xE",
                vimeoID: "119641053",
                mp4: "http://creativeinteractivemedia.com/player/videos/Tablet_Promo.mp4",
                imageUrl: "images/preview_images/poster2.jpg",
                imageTimer: 4,
                prerollAD: "no",
                prerollGotoLink: "http://codecanyon.net/",
                preroll_mp4: "http://creativeinteractivemedia.com/player/videos/Short_Elegant_Logo_Reveal.mp4",
                prerollSkipTimer: 5,
                midrollAD: "no",
                midrollAD_displayTime: "00:10",
                midrollGotoLink: "http://codecanyon.net/",
                midroll_mp4: "http://creativeinteractivemedia.com/player/videos/Logo_Explode.mp4",
                midrollSkipTimer: 5,
                postrollAD: "no",
                postrollGotoLink: "http://codecanyon.net/",
                postroll_mp4: "http://creativeinteractivemedia.com/player/videos/Logo_Light.mp4",
                postrollSkipTimer: 5,
                popupImg: "images/preview_images/popup.jpg",
                popupAdShow: "no",
                popupAdStartTime: "00:03",
                popupAdEndTime: "00:07",
                popupAdGoToLink: "http://codecanyon.net/",
                description: "Video description goes here.",
                thumbImg: "images/thumbnail_images/pic1.jpg",
                info: "Video info goes here.<br>This text can be <i>HTML formatted</i>, <a href='http://codecanyon.net/user/_zac_' target='_blank'><font color='008BFF'>find out more</font></a>.<br>You can disable this info window in player options. <br><br>Lorem ipsum dolor sit amet, eu pri dolores theophrastus. Posidonium vituperatoribus cu mel, cum feugiat nostrum sapientem ne. Vis ea summo persius, unum velit erant in eos, pri ut suas iriure euripidis. Ad augue expetendis sea. Ne usu saperet appetere honestatis, ne qui nulla debitis sententiae."
            }, {
                videoType: "HTML5",
                title: "Video title",
                youtubeID: "0dJO0HyE8xE",
                vimeoID: "119641053",
                mp4: "http://creativeinteractivemedia.com/player/videos/Tablet_Promo.mp4",
                imageUrl: "images/preview_images/poster2.jpg",
                imageTimer: 4,
                prerollAD: "no",
                prerollGotoLink: "http://codecanyon.net/",
                preroll_mp4: "http://creativeinteractivemedia.com/player/videos/Short_Elegant_Logo_Reveal.mp4",
                prerollSkipTimer: 5,
                midrollAD: "no",
                midrollAD_displayTime: "00:10",
                midrollGotoLink: "http://codecanyon.net/",
                midroll_mp4: "http://creativeinteractivemedia.com/player/videos/Logo_Explode.mp4",
                midrollSkipTimer: 5,
                postrollAD: "no",
                postrollGotoLink: "http://codecanyon.net/",
                postroll_mp4: "http://creativeinteractivemedia.com/player/videos/Logo_Light.mp4",
                postrollSkipTimer: 5,
                popupImg: "images/preview_images/popup.jpg",
                popupAdShow: "no",
                popupAdStartTime: "00:03",
                popupAdEndTime: "00:07",
                popupAdGoToLink: "http://codecanyon.net/",
                description: "Video description goes here.",
                thumbImg: "images/thumbnail_images/pic1.jpg",
                info: "Video info goes here.<br>This text can be <i>HTML formatted</i>, <a href='http://codecanyon.net/user/_zac_' target='_blank'><font color='008BFF'>find out more</font></a>.<br>You can disable this info window in player options. <br><br>Lorem ipsum dolor sit amet, eu pri dolores theophrastus. Posidonium vituperatoribus cu mel, cum feugiat nostrum sapientem ne. Vis ea summo persius, unum velit erant in eos, pri ut suas iriure euripidis. Ad augue expetendis sea. Ne usu saperet appetere honestatis, ne qui nulla debitis sententiae."
            }, {
                videoType: "HTML5",
                title: "Video title",
                youtubeID: "0dJO0HyE8xE",
                vimeoID: "119641053",
                mp4: "http://creativeinteractivemedia.com/player/videos/Tablet_Promo.mp4",
                imageUrl: "images/preview_images/poster2.jpg",
                imageTimer: 4,
                prerollAD: "no",
                prerollGotoLink: "http://codecanyon.net/",
                preroll_mp4: "http://creativeinteractivemedia.com/player/videos/Short_Elegant_Logo_Reveal.mp4",
                prerollSkipTimer: 5,
                midrollAD: "no",
                midrollAD_displayTime: "00:10",
                midrollGotoLink: "http://codecanyon.net/",
                midroll_mp4: "http://creativeinteractivemedia.com/player/videos/Logo_Explode.mp4",
                midrollSkipTimer: 5,
                postrollAD: "no",
                postrollGotoLink: "http://codecanyon.net/",
                postroll_mp4: "http://creativeinteractivemedia.com/player/videos/Logo_Light.mp4",
                postrollSkipTimer: 5,
                popupImg: "images/preview_images/popup.jpg",
                popupAdShow: "no",
                popupAdStartTime: "00:03",
                popupAdEndTime: "00:07",
                popupAdGoToLink: "http://codecanyon.net/",
                description: "Video description goes here.",
                thumbImg: "images/thumbnail_images/pic1.jpg",
                info: "Video info goes here.<br>This text can be <i>HTML formatted</i>, <a href='http://codecanyon.net/user/_zac_' target='_blank'><font color='008BFF'>find out more</font></a>.<br>You can disable this info window in player options. <br><br>Lorem ipsum dolor sit amet, eu pri dolores theophrastus. Posidonium vituperatoribus cu mel, cum feugiat nostrum sapientem ne. Vis ea summo persius, unum velit erant in eos, pri ut suas iriure euripidis. Ad augue expetendis sea. Ne usu saperet appetere honestatis, ne qui nulla debitis sententiae."
            }]
        },
        s = {
            Android: function() {
                return navigator.userAgent.match(/Android/i)
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i)
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i)
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i)
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i)
            },
            any: function() {
                return s.Android() || s.BlackBerry() || s.Opera() || s.Windows()
            }
        },
        a = s.any() ? "touchend" : "click",
        l = s.any() ? "touchstart" : "mousedown",
        n = s.any() ? "touchmove" : "mousemove",
        r = s.any() ? "touchend" : "mouseup",
        d = "onorientationchange" in window ? "orientationchange" : "resize",
        p = {
            id: t("id")
        },
        h = function(t, i) {
            var p = this;
            switch (this._class = h, this.parent = t, this.parentWidth = this.parent.width(), this.parentHeight = this.parent.height(), this.windowWidth = e(window).width(), this.windowHeight = e(window).height(), this.options = e.extend({}, o, i), this.sources = this.options.srcs || this.options.sources, this.state = null, this.inFullScreen = !1, this.realFullscreenActive = !1, this.stretching = !1, this.infoOn = !1, this.lightBoxOn = !1, this.adOn = !1, this.skipCountOn = !1, this.skipBoxOn = !1, this.shareOn = !1, this.videoPlayingAD = !1, this.embedOn = !1, pw = !1, this.loaded = !1, this.readyList = [], this.videoAdStarted = !1, this.youtubeReady = !1, this.ADTriggered = !1, this.volPerc = 1, this.html5STARTED = !1, this.YTAPIReady = !1, this.isYoutubeAPICreated = !1, this.ytSkin = this.options.youtubeSkin, this.ytColor = this.options.youtubeColor, this.ytSkin.toString(), this.ytColor.toString(), this.youtubeControls = this.options.youtubeControls, this.midrollPlayed = !1, this.postrollPlayed = !1, this.prerollActive = !0, this.midrollActive = !1, this.postrollActive = !1, this.qualityBtnEnabled = !1, this.lightBoxThumbnail, this.lightBoxOverlay, this.lightBoxInitiated = !1, this.globalPrerollAds_arr = p.options.globalPrerollAds.split(";"), this.poster2Showing = !1, this.playedVideos = [], this.options.youtubeShowRelatedVideos) {
                case "Yes":
                    p.ytShowRelatedVideos = 1;
                    break;
                case "No":
                    p.ytShowRelatedVideos = 0
            }
            if (this.isMobile = s, this.RESIZE_EV = d, this.CLICK_EV = a, this.START_EV = l, this.MOVE_EV = n, this.END_EV = r, this.canPlay = !1, this.myVideo = document.createElement("video"), p.deviceAgent = navigator.userAgent.toLowerCase(), p.agentID = p.deviceAgent.match(/(iphone|ipod)/), "fitToBrowser" == this.options.playerLayout || "fitToBrowser" == i.playerLayout) {
                var m = e("#Elite_video_player");
                e.each(m, function() {
                    var t = e("<div />").addClass("fixedCont").css({
                        position: "fixed",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        background: "#000000",
                        zIndex: 2147483647
                    });
                    m.parent().append(t), m.appendTo(t)
                })
            }
            if (this.setupElement(), this.setupElementAD(), this.options.rightClickMenu || (e("#Elite_video_player").bind("contextmenu", function() {
                    return !1
                }), e(".Elite_video_player").bind("contextmenu", function() {
                    return !1
                }), this.options.lightBox && e(".elite_vp_mainContainer").bind("contextmenu", function() {
                    return !1
                })), e(i.videos).each(function() {
                    "youtube" == this.videoType && (p.includeYoutubeAPI = !0)
                }), this.includeYoutubeAPI) {
                var c = document.createElement("script");
                c.src = "https://www.youtube.com/iframe_api";
                var y = document.getElementsByTagName("script")[0];
                if (y.parentNode.insertBefore(c, y), "default controls" == this.youtubeControls && ("" == this.options.posterImg, this.element.css("visibility", "hidden")), "YouTube playlist" != this.options.videoType && void 0 != this.options.videoType && (this.options.youtubePlaylistID = ""), "YouTube channel" != this.options.videoType && void 0 != this.options.videoType && (this.options.youtubeChannelID = ""), "" != this.options.youtubePlaylistID || "" != this.options.youtubeChannelID) {
                    var u = this.options.youtubePlaylistID,
                        v = this.options.youtubeChannelID;
                    this.url;
                    var _ = "https://www.googleapis.com/youtube/v3/search?order=date&maxResults=50&part=snippet&channelId=" + v + "&key=AIzaSyClbVoeyPLBHb9n6Abm0z-AlrzNKeWLKTc",
                        f = "https://www.googleapis.com/youtube/v3/playlistItems?&maxResults=50&part=snippet&playlistId=" + u + "&key=AIzaSyClbVoeyPLBHb9n6Abm0z-AlrzNKeWLKTc";
                    "" != u ? this.url = f : "" != v && (this.url = _), this.id = -1, this.youtube_array = new Array, this.ads_array = new Array, this.data, e(this.options.videos).each(function() {
                        var e = {
                            prerollAD: this.prerollAD,
                            prerollGotoLink: this.prerollGotoLink,
                            preroll_mp4: this.preroll_mp4,
                            prerollSkipTimer: this.prerollSkipTimer,
                            midrollAD: this.midrollAD,
                            midrollAD_displayTime: this.midrollAD_displayTime,
                            midrollGotoLink: this.midrollGotoLink,
                            midroll_mp4: this.midroll_mp4,
                            midrollSkipTimer: this.midrollSkipTimer,
                            postrollAD: this.postrollAD,
                            postrollGotoLink: this.postrollGotoLink,
                            postroll_mp4: this.postroll_mp4,
                            postrollSkipTimer: this.postrollSkipTimer,
                            popupAdShow: this.popupAdShow,
                            popupImg: this.popupImg,
                            popupAdStartTime: this.popupAdStartTime,
                            popupAdEndTime: this.popupAdEndTime,
                            popupAdGoToLink: this.popupAdGoToLink
                        };
                        p.ads_array.push(e)
                    }), this.requestYTList()
                } else this.init(), this.waitAPIReady()
            } else this.init()
        };
    h.fn = h.prototype, h.fn.waitAPIReady = function() {
        var e = this,
            t = !1;
        if (!this.YTAPIReady)
            if ("undefined" != typeof YT && "undefined" != typeof YT.Player) this.YTAPIReady = !0, this.isYoutubeAPICreated ? this.createYoutubeInstance() : this.setupYoutubeAPI();
            else var i = setInterval(function() {
                "function" != typeof YT.Player || t || (t = !0, clearInterval(i), e.waitAPIReady())
            }, 400)
    }, h.fn.setupYoutubeAPI = function() {
        var e = this;
        this.isYoutubeAPICreated || (this.isYoutubeAPICreated = !0, this.YTAPIReady ? this.createYoutubeInstance() : window.onYouTubeIframeAPIReady || (window.onYouTubePlayerAPIReady = function() {
            e.YTAPIReady = !0, e.createYoutubeInstance()
        }))
    }, h.fn.createYoutubeInstance = function() {
        "custom controls" == this.options.youtubeControls ? this.youtubePlayer = new YT.Player(this.options.instanceName + "youtube", {
            height: "100%",
            width: "100%",
            events: {
                onReady: this._playlist.onPlayerReady,
                onStateChange: this._playlist.onPlayerStateChange,
                onPlaybackQualityChange: this.onPlayerPlaybackQualityChange
            },
            playerVars: {
                rel: this.ytShowRelatedVideos,
                wmode: "transparent",
                controls: 0,
                enablejsapi: 1,
                iv_load_policy: 3,
                showinfo: 0
            }
        }) : "default controls" == this.options.youtubeControls && (this.youtubePlayer = new YT.Player(this.options.instanceName + "youtube", {
            height: "100%",
            width: "100%",
            events: {
                onReady: this._playlist.onPlayerReady,
                onStateChange: this._playlist.onPlayerStateChange,
                onPlaybackQualityChange: this.onPlayerPlaybackQualityChange
            },
            playerVars: {
                theme: this.ytSkin,
                color: this.ytColor,
                rel: this.ytShowRelatedVideos,
                wmode: "transparent",
                controls: 1,
                enablejsapi: 1,
                iv_load_policy: 3,
                modestbranding: 0,
                showinfo: 1,
                autohide: 1
            }
        }))
    }, h.fn.requestYTList = function() {
        var t = this;
        void 0 != t.nextPageToken ? url = this.url + "&pageToken=" + t.nextPageToken : url = this.url, e.ajax({
            url: url,
            success: function(i) {
                t.data = i, t.nextPageToken = i.nextPageToken, e.each(i.items, function(e, i) {
                    t.id = t.id + 1;
                    var o = i.snippet.title,
                        s = i.snippet.description,
                        a = i.snippet.channelTitle;
                    if ("" != t.options.youtubePlaylistID) var l = i.snippet.resourceId.videoId;
                    if ("" != t.options.youtubeChannelID) var l = i.id;
                    var n;
                    n = void 0 != i.snippet.thumbnails ? i.snippet.thumbnails["default"].url : "";
                    var r = {
                        prerollAD: "no",
                        prerollGotoLink: "prerollGotoLink",
                        preroll_mp4: "preroll_mp4",
                        prerollSkipTimer: "prerollSkipTimer",
                        midrollAD: "no",
                        midrollAD_displayTime: "midrollAD_displayTime",
                        midrollGotoLink: "midrollGotoLink",
                        midroll_mp4: "midroll_mp4",
                        midrollSkipTimer: "midrollSkipTimer",
                        postrollAD: "no",
                        postrollGotoLink: "postrollGotoLink",
                        postroll_mp4: "postroll_mp4",
                        postrollSkipTimer: "postrollSkipTimer",
                        popupAdShow: "no",
                        popupImg: "popupImg",
                        popupAdStartTime: "popupAdStartTime",
                        popupAdEndTime: "popupAdEndTime",
                        popupAdGoToLink: "popupAdGoToLink"
                    };
                    t.ads_array.push(r);
                    var d = {
                        id: t.id,
                        title: o,
                        videoType: "youtube",
                        youtubeID: l,
                        vimeoID: this.vimeoID,
                        video_path_mp4: this.mp4,
                        enable_mp4_download: this.enable_mp4_download,
                        prerollAD: t.ads_array[t.id].prerollAD,
                        prerollGotoLink: t.ads_array[t.id].prerollGotoLink,
                        preroll_mp4: t.ads_array[t.id].preroll_mp4,
                        prerollSkipTimer: t.ads_array[t.id].prerollSkipTimer,
                        midrollAD: t.ads_array[t.id].midrollAD,
                        midrollAD_displayTime: t.ads_array[t.id].midrollAD_displayTime,
                        midrollGotoLink: t.ads_array[t.id].midrollGotoLink,
                        midroll_mp4: t.ads_array[t.id].midroll_mp4,
                        midrollSkipTimer: t.ads_array[t.id].midrollSkipTimer,
                        postrollAD: t.ads_array[t.id].postrollAD,
                        postrollGotoLink: t.ads_array[t.id].postrollGotoLink,
                        postroll_mp4: t.ads_array[t.id].postroll_mp4,
                        postrollSkipTimer: t.ads_array[t.id].postrollSkipTimer,
                        popupAdShow: t.ads_array[t.id].popupAdShow,
                        popupImg: t.ads_array[t.id].popupImg,
                        popupAdStartTime: t.ads_array[t.id].popupAdStartTime,
                        popupAdEndTime: t.ads_array[t.id].popupAdEndTime,
                        popupAdGoToLink: t.ads_array[t.id].popupAdGoToLink,
                        description: a,
                        thumbImg: n,
                        info: s
                    };
                    t.youtube_array.push(d)
                }), void 0 != i.nextPageToken ? t.requestYTList() : (t.init(), t.waitAPIReady())
            }
        })
    }, h.fn.init = function() {
        var t = this;
        t.preloader = e("<div />"), t.preloader.addClass("elite_vp_preloader"), t.element.append(t.preloader), t.preloaderAD = e("<div />"), t.preloaderAD.addClass("elite_vp_preloader"), t.elementAD.append(t.preloaderAD), this.videoElement = e("<video />"), this.videoElement.addClass("elite_vp_videoPlayer"), this.videoElement.attr({
            width: this.options.width,
            height: this.options.height,
            preload: this.options.preloadSelfHosted,
            controls: this.options.controls
        }), this.videoElementAD = e("<video />"), this.videoElementAD.addClass("elite_vp_videoPlayerAD"), this.videoElementAD.attr({
            width: this.options.width,
            height: this.options.height,
            preload: this.options.preloadSelfHosted,
            controls: this.options.controls
        }), s.iOS() && (this.videoElement.attr("playsinline", "").attr("webkit-playsinline", ""), this.videoElementAD.attr("playsinline", "").attr("webkit-playsinline", ""), this.options.autoplay && (this.videoElement.attr("muted", ""), this.videoElement.muted = !0, this.videoElement.attr("autoplay", "autoplay"))), this.controls = e("<div />"), this.controls.addClass("elite_vp_controls"), this.controls.addClass("elite_vp_disabled"), this.element && this.element.append(this.controls), this.options.showAllControls || this.controls.hide(), this.nowPlayingTitle = e("<div />").addClass("elite_vp_nowPlayingTitle"), this.controls.addClass("elite_vp_bg " + this.options.instanceTheme), this.nowPlayingTitle.addClass("elite_vp_bg " + this.options.instanceTheme), this.options.showAllControls || this.nowPlayingTitle.hide(), this.element && this.element.append(this.nowPlayingTitle), this.setupButtonsOnScreen(), t._playlist = new PLAYER.Playlist(e, t, t.options, t.mainContainer, t.element, t.preloader, t.preloaderAD, t.myVideo, this.canPlay, t.CLICK_EV, p, pw, t.deviceAgent, t.agentID, t.youtube_array, t.isMobile), "Right playlist" == t.options.playlist ? (t.playerWidth = t.options.videoPlayerWidth - t._playlist.playlistW, t.playerHeight = t.options.videoPlayerHeight) : "Bottom playlist" == t.options.playlist ? (t.playerWidth = t.options.videoPlayerWidth, t.playerHeight = t.options.videoPlayerHeight - t._playlist.playlistH) : "Off" == t.options.playlist && (t.playerWidth = t.options.videoPlayerWidth, t.playerHeight = t.options.videoPlayerHeight), t.playlistWidth = t._playlist.playlistW, t.initPlayer(), t.resize(), t.resizeAll(), t.autohideControls()
    }, h.fn.initPlayer = function() {
        var t = this;
        this.setupHTML5Video(), this.setupHTML5VideoAD(), this.setupEvents(), this.change("initial"), this.setupControls(), this.load(), this.setupAutoplay(), this.setupLightBox(), this.setupElements(), this.element.bind("idle", e.proxy(this.idle, this)), this.element.bind("state.videoPlayer", e.proxy(function() {
            this.element.trigger("reset.idle")
        }, this)), this.secondsFormat = function(e) {
            isNaN(e) && (e = 0);
            var t = [],
                i = Math.floor(e / 60);
            i > 60 && (i %= 60);
            var o = Math.floor(e / 3600),
                s = 0 == e ? 0 : e % 60;
            s = Math.round(s);
            var a = function(e) {
                return 10 > e ? "0" + e : e
            };
            return o > 0 && t.push(a(o)), t.push(a(i)), t.push(a(s)), t.join(":")
        };
        var t = this;
        e(window).resize(function() {
            t.inFullScreen || t.realFullscreenActive || t.resizeAll(), t.inFullScreen && t.fullScreen(t.inFullScreen)
        }), e(window).bind(this.RESIZE_EV, function() {
            t.inFullScreen || t.realFullscreenActive || t.resizeAll()
        }), e(document).bind("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange", function(e) {
            t.resize(e)
        }), this.resize = function() {
            document.webkitIsFullScreen || document.fullscreenElement || document.mozFullScreen || document.msieFullScreen || document.msFullscreenElement ? (this._playlist.hidePlaylist(), this.element.addClass("elite_vp_fullScreen"), this.elementAD.addClass("elite_vp_fullScreen"), e(this.mainContainer).find(".fa-elite-expand").removeClass("fa-elite-expand").addClass("fa-elite-compress"), e(this.fsEnterADBox).find(".fa-elite-expandAD").removeClass("fa-elite-expandAD").addClass("fa-elite-compressAD"), t.element.width("100%"), t.element.height("100%"), t.elementAD.width("100%"), t.elementAD.height("100%"), t.mainContainer.width("100%"), t.mainContainer.height("100%"), t.mainContainer.css("position", "fixed"), t.mainContainer.css("left", 0), t.mainContainer.css("top", 0), t.realFullscreenActive = !0, this.timeElapsed.show(), this.timeTotal.show(), this.volumeTrack.show(), this.rewindBtnWrapper.show(), this.unmuteBtnWrapper.show(), this.videoTrack.show(), this.resizeVideoTrack()) : (this._playlist.showPlaylist(), this.element.removeClass("elite_vp_fullScreen"), this.elementAD.removeClass("elite_vp_fullScreen"), e(this.mainContainer).find(".fa-elite-compress").removeClass("fa-elite-compress").addClass("fa-elite-expand"), e(this.fsEnterADBox).find(".fa-elite-compressAD").removeClass("fa-elite-compressAD").addClass("fa-elite-expandAD"), t.element.width(t.playerWidth), t.element.height(t.playerHeight), t.elementAD.width(t.playerWidth), t.elementAD.height(t.playerHeight), t.mainContainer.css("left", ""), t.mainContainer.css("top", ""), "fitToContainer" == t.options.playerLayout || "fitToBrowser" == t.options.playerLayout ? (t.mainContainer.width("100%"), t.mainContainer.height("100%")) : "fixedSize" == t.options.playerLayout && (t.mainContainer.width(t.options.videoPlayerWidth), t.mainContainer.height(t.options.videoPlayerHeight)), t.mainContainer.css("position", "absolute"), this.stretching && (this.stretching = !1, this.toggleStretch()), t.element.css({
                zIndex: 455558
            }), ("yes" == t._playlist.videos_array[t._playlist.videoid].prerollAD || t.options.showGlobalPrerollAds) && (!t._playlist.videoAdPlayed && t.videoAdStarted ? t.elementAD.css({
                zIndex: 455559
            }) : t.elementAD.css({
                zIndex: 455557
            })), t.mainContainer.parent().css("zIndex", 1), t.mainContainer.css("zIndex", 999999), t.realFullscreenActive = !1, t.resizeAll()), this.resizeVideoTrack(), this.positionOverScreenButtons(), this.positionLogo(), this.positionPopup(), this.resizeBars(), "Yes" == t.options.hideControlsOnMouseOut && this.hideControls()
        }
    }, h.fn.setupLightBox = function() {
        var t = this;
        if (this.options.lightBox) {
            this.options.playerLayout = "fixedSize";
            var i = this.mainContainer.parent();
            e.each(i, function() {
                t.lightBoxOverlay = e("<div />").addClass("elite_vp_lightBoxOverlay").hide().css({
                    opacity: 0
                }), t.lightBoxCloseBtnWrapper = e("<div />").addClass("elite_vp_lightBoxCloseBtnWrapper").addClass("elite_vp_bg " + t.options.instanceTheme).addClass("elite_vp_playerElement").bind(t.CLICK_EV, function() {
                    t.toggleLightBox()
                }), t.mainContainer.append(t.lightBoxCloseBtnWrapper), t.lightBoxCloseBtn = e("<span />").attr("aria-hidden", "true").attr("id", "elite_vp_lightBoxCloseBtn").addClass("fa-elite").addClass("elite-icon-general").addClass("elite_vp_controlsColor " + t.options.instanceTheme).addClass("fa-elite-times"), t.lightBoxCloseBtnWrapper.append(t.lightBoxCloseBtn), t.lightBoxOverlayTransparent = e("<div />").addClass("elite_vp_lightBoxOverlayTransparent").bind(t.CLICK_EV, function() {
                    t.options.lightBoxCloseOnOutsideClick && t.toggleLightBox()
                }).appendTo(t.lightBoxOverlay), t.mainContainer.addClass("elite_vp_lightBoxBorder"), i.parent().append(t.lightBoxOverlay), t.mainContainer.appendTo(t.lightBoxOverlay), t.lightBoxThumbnailWrap = e("<div />").addClass("elite_vp_lightBoxThumbnailWrap").bind(t.CLICK_EV, function() {
                    t.toggleLightBox()
                }).css({
                    cursor: "pointer",
                    width: t.options.lightBoxThumbnailWidth,
                    height: t.options.lightBoxThumbnailHeight
                }).appendTo(i), t.lightBoxThumbnail = e('<img class="elite_vp_lightBoxThumbnail">').attr("src", t.options.lightBoxThumbnail).appendTo(t.lightBoxThumbnailWrap), t.lightBoxPlayButton = e("<div />"), t.lightBoxPlayButton.addClass("elite_vp_playButtonScreen").attr("aria-hidden", "true").addClass("fa-elite").addClass("fa-elite-playScreen " + t.options.instanceTheme).appendTo(t.lightBoxThumbnailWrap)
            })
        }
    }, h.fn.setColorAccent = function(t, i) {
        e(".elite_vp_themeColor").css({
            background: t
        }), e(".elite_vp_themeColorText").css({
            color: t
        }), e(".elite_vp_playBtnBg").css({
            background: t
        }), e(i).hasClass("fa-elite-random") && (e("#elite_vp_shuffleBtn.elite_vp_themeColor").css({
            background: t
        }), e("#elite_vp_shuffleBtn.elite_vp_themeColorText").css({
            color: t
        }), e("#elite_vp_shuffleBtn.elite_vp_playBtnBg").css({
            background: t
        })), e(i).hasClass("fa-elite-cog") && (e("#elite_vp_qualityBtn.elite_vp_themeColor").css({
            background: t
        }), e("#elite_vp_qualityBtn.elite_vp_themeColorText").css({
            color: t
        }), e("#elite_vp_qualityBtn.elite_vp_playBtnBg").css({
            background: t
        }))
    }, h.fn.removeColorAccent = function(t) {
        e(t).hasClass("fa-elite-random") && e(".fa-elite-random").css("color", ""), e(t).hasClass("fa-elite-cog") && e(".fa-elite-cog").css("color", "")
    }, h.fn.resizeAll = function() {
        var t = this;
        if ("fitToContainer" == t.options.playerLayout || "fitToBrowser" == t.options.playerLayout) {
            if ("Right playlist" == this.options.playlist) {
                if (this.options.videoRatioStretch) var i = (this.parent.width() - this._playlist.playlist.width()) / this.options.videoRatio;
                else var i = this.parent.width() / this.options.videoRatio;
                this.mainContainer.height(i)
            } else if ("Bottom playlist" == this.options.playlist) {
                if (this.options.videoRatioStretch) var i = this.parent.width() / this.options.videoRatio + this._playlist.playlist.height();
                else var i = this.parent.width() / this.options.videoRatio;
                this.mainContainer.height(i)
            } else {
                var i = this.parent.width() / this.options.videoRatio;
                this.mainContainer.height(i)
            }
            switch (this.parent.height(i), t.options.playlist) {
                case "Right playlist":
                    this.stretching ? (this.parent.width() < 380 ? this.videoTrack.hide() : this.videoTrack.show(), this.parent.width() < 361 ? this.timeTotal.hide() : this.timeTotal.show(), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || (this.parent.width() < 320 ? this.qualityBtnWrapper.hide() : this.qualityBtnWrapper.show()), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (this.parent.width() < 320 ? this.downloadBtnLink.hide() : this.downloadBtnLink.show()), this.parent.width() < 290 ? this.rewindBtnWrapper.hide() : this.rewindBtnWrapper.show(), this.parent.width() < 262 ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show(), this.volumeTrack.show(), "Yes" == t.options.embedShow && (this.parent.width() < 560 ? t.embedBtn.hide() : t.embedBtn.show())) : (this.parent.width() < 640 ? this.videoTrack.hide() : this.videoTrack.show(), this.parent.width() < 620 ? this.timeTotal.hide() : this.timeTotal.show(), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || (this.parent.width() < 580 ? this.qualityBtnWrapper.hide() : this.qualityBtnWrapper.show()), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (this.parent.width() < 580 ? this.downloadBtnLink.hide() : this.downloadBtnLink.show()), this.parent.width() < 552 ? this.rewindBtnWrapper.hide() : this.rewindBtnWrapper.show(), this.parent.width() < 452 ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show(), this.parent.width() < 425 ? this.volumeTrack.hide() : this.volumeTrack.show(), "Yes" == t.options.embedShow && (this.parent.width() < 590 ? t.embedBtn.hide() : t.embedBtn.show()), this.parent.width() < 522 ? (this.mainContainer.find(".elite_vp_playlistBarBtn").css({
                        width: "20px"
                    }), this.mainContainer.find("#elite_vp_nextBtn").css({
                        marginLeft: "-7.5px"
                    }), this.mainContainer.find("#elite_vp_previousBtn").css({
                        marginLeft: "-7.5px"
                    }), this.mainContainer.find("#elite_vp_shuffleBtn").css({
                        marginLeft: "-8px"
                    }), this._playlist.lastBtn.hide(), this._playlist.firstBtn.hide(), this._playlist.playlist.css({
                        width: 90
                    }), this.mainContainer.find(".elite_vp_itemRight").hide(), this.videoTrack.show(), this.timeElapsed.show(), this.timeTotal.show(), this.volumeTrack.show(), this.rewindBtnWrapper.show(), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || this.qualityBtnWrapper.show(), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && this.downloadBtnLink.show(), this.unmuteBtnWrapper.show(), this.parent.width() < 470 ? this.videoTrack.hide() : this.videoTrack.show(), this.parent.width() < 450 ? this.timeTotal.hide() : this.timeTotal.show(), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || (this.parent.width() < 410 ? this.qualityBtnWrapper.hide() : this.qualityBtnWrapper.show()), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (this.parent.width() < 410 ? this.downloadBtnLink.hide() : this.downloadBtnLink.show()), this.parent.width() < 380 ? this.rewindBtnWrapper.hide() : this.rewindBtnWrapper.show(), this.parent.width() < 353 ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show(), this.parent.width() < 322 ? this.volumeTrack.hide() : this.volumeTrack.show()) : (t._playlist.playlist.css({
                        width: 260
                    }), t.mainContainer.find(".elite_vp_itemRight").show(), this.mainContainer.find(".elite_vp_playlistBarBtn").css({
                        width: "30px"
                    }), this.mainContainer.find("#elite_vp_nextBtn").css({
                        marginLeft: "7.5px"
                    }), this.mainContainer.find("#elite_vp_previousBtn").css({
                        marginLeft: "7.5px"
                    }), this.mainContainer.find("#elite_vp_shuffleBtn").css({
                        marginLeft: "8px"
                    }), this._playlist.lastBtn.show(), this._playlist.firstBtn.show())), this._playlist.playlist.height() < 190 ? (e(this.playButtonScreen).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)"
                    }), e(this.toggleAdPlayBox).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)"
                    }), e(this.skipAdCount).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)",
                        "transform-origin": "bottom right"
                    }), e(this.skipAdBox).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)",
                        "transform-origin": "bottom right"
                    }), e(this.controls).css({
                        height: 35
                    }), e(this._playlist.playlistBar).css({
                        height: 35
                    })) : (e(this.playButtonScreen).css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        "-o-transform": "scale(1)",
                        transform: "scale(1)"
                    }), e(this.toggleAdPlayBox).css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        "-o-transform": "scale(1)",
                        transform: "scale(1)"
                    }), e(this.skipAdCount).css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        "-o-transform": "scale(1)",
                        transform: "scale(1)",
                        "transform-origin": "bottom right"
                    }), e(this.skipAdBox).css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        "-o-transform": "scale(1)",
                        transform: "scale(1)",
                        "transform-origin": "bottom right"
                    }), e(this.controls).css({
                        height: 50
                    }), e(this._playlist.playlistBar).css({
                        height: 50
                    })), "Yes" == t.options.infoShow && (this._playlist.playlist.height() < 198 ? this.infoBtn.hide() : this.infoBtn.show()), "Yes" == t.options.embedShow && (this._playlist.playlist.height() < 159 ? this.embedBtn.hide() : this.embedBtn.show()), "Yes" == t.options.shareShow && (this._playlist.playlist.height() < 123 ? this.shareBtn.hide() : this.shareBtn.show());
                    break;
                case "Bottom playlist":
                    this.mainContainer.height() < 380 ? this.videoTrack.hide() : this.videoTrack.show(), this.mainContainer.height() < 361 ? this.timeTotal.hide() : this.timeTotal.show(), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || (this.mainContainer.height() < 320 ? this.qualityBtnWrapper.hide() : this.qualityBtnWrapper.show()), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (this.mainContainer.height() < 320 ? this.downloadBtnLink.hide() : this.downloadBtnLink.show()), this.mainContainer.height() < 290 ? this.rewindBtnWrapper.hide() : this.rewindBtnWrapper.show(), this.mainContainer.height() < 262 ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show(), this.volumeTrack.show(), "Yes" == t.options.embedShow, this.mainContainer.height() < 313 ? (e(this.playButtonScreen).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)"
                    }), e(this.toggleAdPlayBox).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)"
                    }), e(this.skipAdCount).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)",
                        "transform-origin": "bottom right"
                    }), e(this.skipAdBox).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)",
                        "transform-origin": "bottom right"
                    }), e(this.controls).css({
                        height: 35
                    }), e(this._playlist.playlistBar).css({
                        height: 35
                    }), e(this._playlist.playlist).css({
                        height: 127
                    }), this._playlist.playlistH = e(this._playlist.playlist).height(), this.mainContainer.height() < 230 ? (e(this._playlist.playlist).css({
                        height: 92
                    }), this._playlist.playlistH = e(this._playlist.playlist).height(), this.mainContainer.find(".elite_vp_itemRight_bottom").hide(), this.mainContainer.find(".elite_vp_nowPlayingThumbnail").css({
                        opacity: 0
                    }), this.mainContainer.find(".elite_vp_itemSelected").css({
                        width: 40,
                        height: 40
                    }), this.mainContainer.find(".elite_vp_itemUnselected").css({
                        width: 40,
                        height: 40
                    }), this.mainContainer.find(".elite_vp_itemLeft").css({
                        width: 35,
                        height: 35
                    })) : (this.mainContainer.find(".elite_vp_itemRight_bottom").show(), this.mainContainer.find(".elite_vp_nowPlayingThumbnail").css({
                        opacity: 1
                    }), this.mainContainer.find(".elite_vp_itemSelected").css({
                        width: 245,
                        height: 76
                    }), this.mainContainer.find(".elite_vp_itemUnselected").css({
                        width: 245,
                        height: 76
                    }), this.mainContainer.find(".elite_vp_itemLeft").css({
                        width: 70,
                        height: 70
                    }))) : (e(this.playButtonScreen).css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        "-o-transform": "scale(1)",
                        transform: "scale(1)"
                    }), e(this.toggleAdPlayBox).css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        "-o-transform": "scale(1)",
                        transform: "scale(1)"
                    }), e(this.skipAdCount).css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        "-o-transform": "scale(1)",
                        transform: "scale(1)",
                        "transform-origin": "bottom right"
                    }), e(this.skipAdBox).css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        "-o-transform": "scale(1)",
                        transform: "scale(1)",
                        "transform-origin": "bottom right"
                    }), e(this.controls).css({
                        height: 50
                    }), e(this._playlist.playlistBar).css({
                        height: 50
                    }), e(this._playlist.playlist).css({
                        height: 142
                    }), this._playlist.playlistH = e(this._playlist.playlist).height(), this.mainContainer.find(".elite_vp_itemRight_bottom").show(), this.mainContainer.find(".elite_vp_nowPlayingThumbnail").css({
                        opacity: 1
                    }), this.mainContainer.find(".elite_vp_itemSelected").css({
                        width: 245,
                        height: 76
                    }), this.mainContainer.find(".elite_vp_itemUnselected").css({
                        width: 245,
                        height: 76
                    }), this.mainContainer.find(".elite_vp_itemLeft").css({
                        width: 70,
                        height: 70
                    })), "Yes" == t.options.infoShow && (this.mainContainer.height() < 270 ? this.infoBtn.hide() : this.infoBtn.show()), "Yes" == t.options.embedShow && (this.mainContainer.height() < 330 ? this.embedBtn.hide() : this.embedBtn.show()), "Yes" == t.options.shareShow && (this.mainContainer.height() < 194 ? this.shareBtn.hide() : this.shareBtn.show());
                case "Off":
                    "Yes" == t.options.embedShow, this.parent.width() < 378 ? t.videoTrack.hide() : t.videoTrack.show(), this.parent.width() < 360 ? t.timeTotal.hide() : t.timeTotal.show(), this.parent.width() < 289 ? t.rewindBtnWrapper.hide() : t.rewindBtnWrapper.show(), this.parent.width() < 262 ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show()
            }
            this.stretching ? "Right playlist" == t.options.playlist ? (t.element.width(t.parent.parent().width()), t.element.height(t._playlist.playlist.height())) : "Bottom playlist" == t.options.playlist ? (t.element.width(t.parent.parent().width()), t.element.height(i)) : "Off" == t.options.playlist && (t.element.width(t.parent.parent().width()), t.element.height(t.parent.parent().height())) : "Right playlist" == t.options.playlist ? (t.element.width(t.parent.parent().width() - t._playlist.playlist.width()), t.element.height(t._playlist.playlist.height())) : "Bottom playlist" == t.options.playlist ? (t.element.width(t.parent.parent().width()), t.element.height(i - t._playlist.playlist.height())) : "Off" == t.options.playlist && (t.element.width(t.parent.parent().width()), t.element.height(t.parent.height())), !t.agentID || "HTML5" != t._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.options.showAllControls || (t.videoElement.width(t.element.width()), t.videoElement.height(t.element.height()), t.videoElementAD.width(t.element.width()), t.videoElementAD.height(t.element.height())), t._playlist.resizePlaylist(), t.elementAD.width(t.element.width()), t.elementAD.height(t.element.height()), t.resizeVideoTrack(), t.positionOverScreenButtons(), t.resizeBars(), t.positionLogo(), t.positionPopup()
        } else if ("fixedSize" == t.options.playerLayout) {
            if (t.newPlayerWidth = e(window).width() - t.mainContainer.position().left - 48, t.newPlayerHeight = t.newPlayerWidth / (t.options.videoPlayerWidth / t.options.videoPlayerHeight), t.newPlayerWidth < t.options.videoPlayerWidth) switch (this.options.lightBox && e(t.mainContainer).css({
                position: "absolute",
                left: 24,
                top: window.innerHeight / 2 - t.newPlayerHeight / 2 - 10
            }), t.options.playlist) {
                case "Right playlist":
                    this.stretching ? (t.newPlayerWidth < 380 ? this.videoTrack.hide() : this.videoTrack.show(), t.newPlayerWidth < 361 ? this.timeTotal.hide() : this.timeTotal.show(), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || (t.newPlayerWidth < 320 ? this.qualityBtnWrapper.hide() : this.qualityBtnWrapper.show()), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (t.newPlayerWidth < 320 ? this.downloadBtnLink.hide() : this.downloadBtnLink.show()), t.newPlayerWidth < 290 ? this.rewindBtnWrapper.hide() : this.rewindBtnWrapper.show(), t.newPlayerWidth < 262 ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show(), this.volumeTrack.show(), "Yes" == t.options.embedShow && (t.newPlayerWidth < 560 ? t.embedBtn.hide() : t.embedBtn.show())) : (t.newPlayerWidth < 640 ? this.videoTrack.hide() : this.videoTrack.show(), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (t.newPlayerWidth < 584 ? t.downloadBtnLink.hide() : t.downloadBtnLink.show()), t.newPlayerWidth < 620 ? t.timeTotal.hide() : t.timeTotal.show(), "Yes" == t.options.embedShow && (t.newPlayerWidth < 655 ? t.embedBtn.hide() : t.embedBtn.show()), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || (t.newPlayerWidth < 580 ? t.qualityBtnWrapper.hide() : t.qualityBtnWrapper.show()), t.newPlayerWidth < 550 ? t.rewindBtnWrapper.hide() : t.rewindBtnWrapper.show(), t.newPlayerWidth < 525 ? t.unmuteBtnWrapper.hide() : t.unmuteBtnWrapper.show(), t.newPlayerWidth < 522 ? (this.mainContainer.find(".elite_vp_playlistBarBtn").css({
                        width: "20px"
                    }), this.mainContainer.find("#elite_vp_nextBtn").css({
                        marginLeft: "-7.5px"
                    }), this.mainContainer.find("#elite_vp_previousBtn").css({
                        marginLeft: "-7.5px"
                    }), this.mainContainer.find("#elite_vp_shuffleBtn").css({
                        marginLeft: "-8px"
                    }), this._playlist.lastBtn.hide(), this._playlist.firstBtn.hide(), this._playlist.playlist.css({
                        width: 90
                    }), this.mainContainer.find(".elite_vp_itemRight").hide(), this.videoTrack.show(), this.timeElapsed.show(), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && this.downloadBtnLink.show(), this.timeTotal.show(), this.volumeTrack.show(), this.rewindBtnWrapper.show(), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || this.qualityBtnWrapper.show(), this.unmuteBtnWrapper.show(), t.newPlayerWidth < 470 ? this.videoTrack.hide() : this.videoTrack.show(), t.newPlayerWidth < 450 ? this.timeTotal.hide() : this.timeTotal.show(), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || (t.newPlayerWidth < 410 ? this.qualityBtnWrapper.hide() : this.qualityBtnWrapper.show()), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (t.newPlayerWidth < 410 ? this.downloadBtnLink.hide() : this.downloadBtnLink.show()), t.newPlayerWidth < 380 ? this.rewindBtnWrapper.hide() : this.rewindBtnWrapper.show(), t.newPlayerWidth < 353 ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show(), t.newPlayerWidth < 322 ? this.volumeTrack.hide() : this.volumeTrack.show()) : (t._playlist.playlist.css({
                        width: 260
                    }), t.mainContainer.find(".elite_vp_itemRight").show(), this.mainContainer.find(".elite_vp_playlistBarBtn").css({
                        width: "30px"
                    }), this.mainContainer.find("#elite_vp_nextBtn").css({
                        marginLeft: "7.5px"
                    }), this.mainContainer.find("#elite_vp_previousBtn").css({
                        marginLeft: "7.5px"
                    }), this.mainContainer.find("#elite_vp_shuffleBtn").css({
                        marginLeft: "8px"
                    }), this._playlist.lastBtn.show(), this._playlist.firstBtn.show())), this.newPlayerHeight < 190 ? (e(this.playButtonScreen).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)"
                    }), e(this.toggleAdPlayBox).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)"
                    }), e(this.skipAdCount).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)",
                        "transform-origin": "bottom right"
                    }), e(this.skipAdBox).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)",
                        "transform-origin": "bottom right"
                    }), e(this.controls).css({
                        height: 35
                    }), e(this._playlist.playlistBar).css({
                        height: 35
                    })) : (e(this.playButtonScreen).css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        "-o-transform": "scale(1)",
                        transform: "scale(1)"
                    }), e(this.toggleAdPlayBox).css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        "-o-transform": "scale(1)",
                        transform: "scale(1)"
                    }), e(this.skipAdCount).css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        "-o-transform": "scale(1)",
                        transform: "scale(1)",
                        "transform-origin": "bottom right"
                    }), e(this.skipAdBox).css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        "-o-transform": "scale(1)",
                        transform: "scale(1)",
                        "transform-origin": "bottom right"
                    }), e(this.controls).css({
                        height: 50
                    }), e(this._playlist.playlistBar).css({
                        height: 50
                    })), "Yes" == t.options.infoShow && (t.newPlayerHeight < 198 ? this.infoBtn.hide() : this.infoBtn.show()), "Yes" == t.options.embedShow && (t.newPlayerHeight < 159 ? this.embedBtn.hide() : this.embedBtn.show()), "Yes" == t.options.shareShow && (t.newPlayerHeight < 123 ? this.shareBtn.hide() : this.shareBtn.show());
                    break;
                case "Bottom playlist":
                    t.newPlayerWidth < 380 ? this.videoTrack.hide() : this.videoTrack.show(), t.newPlayerWidth < 361 ? this.timeTotal.hide() : this.timeTotal.show(), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || (t.newPlayerWidth < 320 ? this.qualityBtnWrapper.hide() : this.qualityBtnWrapper.show()), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (t.newPlayerWidth < 320 ? this.downloadBtnLink.hide() : this.downloadBtnLink.show()), t.newPlayerWidth < 290 ? this.rewindBtnWrapper.hide() : this.rewindBtnWrapper.show(), t.newPlayerWidth < 262 ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show(), this.volumeTrack.show(), "Yes" == t.options.embedShow && (t.newPlayerWidth < 560 ? t.embedBtn.hide() : t.embedBtn.show()), this.newPlayerHeight < 313 ? (e(this.playButtonScreen).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)"
                    }), e(this.toggleAdPlayBox).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)"
                    }), e(this.skipAdCount).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)",
                        "transform-origin": "bottom right"
                    }), e(this.skipAdBox).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)",
                        "transform-origin": "bottom right"
                    }), e(this.controls).css({
                        height: 35
                    }), e(this._playlist.playlistBar).css({
                        height: 35
                    }), e(this._playlist.playlist).css({
                        height: 127
                    }), this._playlist.playlistH = e(this._playlist.playlist).height(), this.newPlayerHeight < 230 ? (e(this._playlist.playlist).css({
                        height: 92
                    }), this._playlist.playlistH = e(this._playlist.playlist).height(), this.mainContainer.find(".elite_vp_itemRight_bottom").hide(), this.mainContainer.find(".elite_vp_nowPlayingThumbnail").css({
                        opacity: 0
                    }), this.mainContainer.find(".elite_vp_itemSelected").css({
                        width: 40,
                        height: 40
                    }), this.mainContainer.find(".elite_vp_itemUnselected").css({
                        width: 40,
                        height: 40
                    }), this.mainContainer.find(".elite_vp_itemLeft").css({
                        width: 35,
                        height: 35
                    })) : (this.mainContainer.find(".elite_vp_itemRight_bottom").show(), this.mainContainer.find(".elite_vp_nowPlayingThumbnail").css({
                        opacity: 1
                    }), this.mainContainer.find(".elite_vp_itemSelected").css({
                        width: 245,
                        height: 76
                    }), this.mainContainer.find(".elite_vp_itemUnselected").css({
                        width: 245,
                        height: 76
                    }), this.mainContainer.find(".elite_vp_itemLeft").css({
                        width: 70,
                        height: 70
                    }))) : (e(this.playButtonScreen).css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        "-o-transform": "scale(1)",
                        transform: "scale(1)"
                    }), e(this.toggleAdPlayBox).css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        "-o-transform": "scale(1)",
                        transform: "scale(1)"
                    }), e(this.skipAdCount).css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        "-o-transform": "scale(1)",
                        transform: "scale(1)",
                        "transform-origin": "bottom right"
                    }), e(this.skipAdBox).css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        "-o-transform": "scale(1)",
                        transform: "scale(1)",
                        "transform-origin": "bottom right"
                    }), e(this.controls).css({
                        height: 50
                    }), e(this._playlist.playlistBar).css({
                        height: 50
                    }), e(this._playlist.playlist).css({
                        height: 142
                    }), this._playlist.playlistH = e(this._playlist.playlist).height()), "Yes" == t.options.infoShow && (t.newPlayerHeight < 198 ? this.infoBtn.hide() : this.infoBtn.show()), "Yes" == t.options.embedShow && (t.newPlayerHeight < 159 ? this.embedBtn.hide() : this.embedBtn.show()), "Yes" == t.options.shareShow && (t.newPlayerHeight < 123 ? this.shareBtn.hide() : this.shareBtn.show());
                    break;
                case "Off":
                    t.newPlayerWidth < 380 ? this.videoTrack.hide() : this.videoTrack.show(), t.newPlayerWidth < 361 ? this.timeTotal.hide() : this.timeTotal.show(), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || (t.newPlayerWidth < 320 ? this.qualityBtnWrapper.hide() : this.qualityBtnWrapper.show()), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download && (t.newPlayerWidth < 320 ? this.downloadBtnLink.hide() : this.downloadBtnLink.show()), t.newPlayerWidth < 290 ? this.rewindBtnWrapper.hide() : this.rewindBtnWrapper.show(), t.newPlayerWidth < 262 ? this.unmuteBtnWrapper.hide() : this.unmuteBtnWrapper.show(), this.volumeTrack.show(), "Yes" == t.options.embedShow && (t.newPlayerWidth < 560 ? t.embedBtn.hide() : t.embedBtn.show()), this.newPlayerHeight < 190 ? (e(this.playButtonScreen).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)"
                    }), e(this.toggleAdPlayBox).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)"
                    }), e(this.skipAdCount).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)",
                        "transform-origin": "bottom right"
                    }), e(this.skipAdBox).css({
                        "-webkit-transform": "scale(0.6)",
                        "-moz-transform": "scale(0.6)",
                        "-ms-transform": "scale(0.6)",
                        "-o-transform": "scale(0.6)",
                        transform: "scale(0.6)",
                        "transform-origin": "bottom right"
                    }), e(this.controls).css({
                        height: 35
                    }), e(this._playlist.playlistBar).css({
                        height: 35
                    })) : (e(this.playButtonScreen).css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        "-o-transform": "scale(1)",
                        transform: "scale(1)"
                    }), e(this.toggleAdPlayBox).css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        "-o-transform": "scale(1)",
                        transform: "scale(1)"
                    }), e(this.skipAdCount).css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        "-o-transform": "scale(1)",
                        transform: "scale(1)",
                        "transform-origin": "bottom right"
                    }), e(this.skipAdBox).css({
                        "-webkit-transform": "scale(1)",
                        "-moz-transform": "scale(1)",
                        "-ms-transform": "scale(1)",
                        "-o-transform": "scale(1)",
                        transform: "scale(1)",
                        "transform-origin": "bottom right"
                    }), e(this.controls).css({
                        height: 50
                    }), e(this._playlist.playlistBar).css({
                        height: 50
                    })), "Yes" == t.options.infoShow && (t.newPlayerHeight < 198 ? this.infoBtn.hide() : this.infoBtn.show()), "Yes" == t.options.embedShow && (t.newPlayerHeight < 159 ? this.embedBtn.hide() : this.embedBtn.show()), "Yes" == t.options.shareShow && (t.newPlayerHeight < 123 ? this.shareBtn.hide() : this.shareBtn.show())
            } else this.options.lightBox && e(t.mainContainer).css({
                position: "absolute",
                left: window.innerWidth / 2 - t.options.videoPlayerWidth / 2,
                top: window.innerHeight / 2 - t.options.videoPlayerHeight / 2 - 10
            }), t.newPlayerWidth = t.options.videoPlayerWidth, t.newPlayerHeight = t.options.videoPlayerHeight, this.videoTrack.show(), this.timeElapsed.show(), this.timeTotal.show(), this.volumeTrack.show(), this.rewindBtnWrapper.show(), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || this.qualityBtnWrapper.show(), this.unmuteBtnWrapper.show(), t._playlist.playlist.css({
                width: 260
            }), this.mainContainer.find(".elite_vp_itemRight").show(), this.mainContainer.find(".elite_vp_playlistBarBtn").css({
                width: "30px"
            }), this._playlist.lastBtn.show(), this._playlist.firstBtn.show();
            "Right playlist" == t.options.playlist ? (!t.agentID || "HTML5" != t._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.options.showAllControls || (t.videoElement.height(t.newPlayerHeight - 50), t.videoElementAD.height(t.newPlayerHeight - 50)), t.element.css({
                width: t.newPlayerWidth,
                height: t.newPlayerHeight
            }), t.mainContainer.css({
                width: t.newPlayerWidth,
                height: t.newPlayerHeight
            })) : "Bottom playlist" == t.options.playlist ? (t.agentID && ("HTML5" == t._playlist.videos_array[this._playlist.videoid].videoType || "HTML5 (self-hosted)" == t.options.videoType), t.element.width(t.newPlayerWidth), t.mainContainer.css({
                width: t.newPlayerWidth,
                height: t.newPlayerHeight
            })) : "Off" == t.options.playlist && (!t.agentID || "HTML5" != t._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.options.showAllControls || (t.videoElement.height(t.newPlayerHeight - 50), t.videoElementAD.height(t.newPlayerHeight - 50)), t.element.css({
                width: t.newPlayerWidth,
                height: t.newPlayerHeight
            }), t.mainContainer.css({
                width: t.newPlayerWidth,
                height: t.newPlayerHeight
            })), this.stretching ? "Right playlist" == t.options.playlist ? (!t.agentID || "HTML5" != t._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.options.showAllControls || (t.videoElement.width(t.newPlayerWidth - 32), t.videoElementAD.width(t.newPlayerWidth - 32)), t.element.width(e(t.mainContainer).width())) : "Bottom playlist" == t.options.playlist ? (t.agentID && ("HTML5" == t._playlist.videos_array[this._playlist.videoid].videoType || "HTML5 (self-hosted)" == t.options.videoType), t.element.height(t.newPlayerHeight)) : "Off" == t.options.playlist && (!t.agentID || "HTML5" != t._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || (t.videoElement.width(t.newPlayerWidth - 32), t.videoElementAD.width(t.newPlayerWidth - 32)), t.element.width(e(t.mainContainer).width())) : "Right playlist" == t.options.playlist ? (!t.agentID || "HTML5" != t._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.options.showAllControls || (t.videoElement.width(t.newPlayerWidth - t._playlist.playlist.width() - 32), t.videoElementAD.width(t.newPlayerWidth - t._playlist.playlist.width() - 32)), t.element.width(e(t.mainContainer).width() - t._playlist.playlist.width()), t._playlist.resizePlaylist(t.newPlayerWidth, t.newPlayerHeight)) : "Bottom playlist" == t.options.playlist ? (t.agentID && ("HTML5" == t._playlist.videos_array[this._playlist.videoid].videoType || "HTML5 (self-hosted)" == t.options.videoType), t.element.height(t.newPlayerHeight - t._playlist.playlistH), t._playlist.resizePlaylist(t.newPlayerWidth, t.newPlayerHeight)) : "Off" == t.options.playlist && (!t.agentID || "HTML5" != t._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.options.showAllControls || (t.videoElement.width(t.newPlayerWidth - 32), t.videoElementAD.width(t.newPlayerWidth - 32)), t.element.width(e(t.mainContainer).width())), t.elementAD.width(t.element.width()), t.elementAD.height(t.element.height()), !t.agentID || "HTML5" != t._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.playBtnScreen && t.playBtnScreen.hide(), void 0 != t.youtubePlayer && (t.realFullscreenActive && (t.element.width(e(document).width()), t.element.height(e(document).height())), t.youtubePlayer.setSize("100%", "100%")), this.options.lightBox && e(this.mainContainerBG).css({
                width: e(t.mainContainer).width() + 20,
                height: e(t.mainContainer).height() + 20
            }), t.resizeVideoTrack(), t.positionOverScreenButtons(), t.resizeBars(), t.positionLogo(), t.positionPopup()
        }
    }, h.fn.autohideControls = function() {
        var e = this.element,
            t = !1,
            o = 1e3 * this.options.autohideControls,
            s = 1e3,
            a = 0,
            l = function() {
                t && e.trigger("idle", !1), t = !1, a = 0
            },
            n = function() {
                a >= o ? (l(), t = !0, e.trigger("idle", !0)) : a += s
            };
        e.bind(i, l);
        var r = setInterval(n, s);
        e.on("unload", function() {
            clearInterval(r)
        })
    }, h.fn.resizeBars = function() {
        "youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == this.options.videoType ? void 0 != this.youtubePlayer && this._playlist.youtubeSTARTED && (this.progressWidth = this.youtubePlayer.getCurrentTime() / this.youtubePlayer.getDuration() * this.videoTrack.width(), this.videoTrackProgress.css("width", this.progressWidth), this.progressIdleWidth = this.youtubePlayer.getCurrentTime() / this.youtubePlayer.getDuration() * this.progressIdleTrack.width(), this.progressIdle.css("width", this.progressIdleWidth), this.buffered = this.youtubePlayer.getVideoLoadedFraction(), this.downloadWidth = this.buffered * this.videoTrack.width(), this.videoTrackDownload.css("width", this.downloadWidth), this.progressIdleDownloadWidth = this.buffered * this.progressIdleTrack.width(), this.progressIdleDownload.css("width", this.progressIdleDownloadWidth)) : "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || (this.downloadWidth = this.buffered / this.video.duration * this.videoTrack.width(), this.videoTrackDownload.css("width", this.downloadWidth), this.progressWidth = this.video.currentTime / this.video.duration * this.videoTrack.width(), this.videoTrackProgress.css("width", this.progressWidth), this.progressIdleDownloadWidth = this.buffered / this.video.duration * this.progressIdleTrack.width(), this.progressIdleDownload.css("width", this.progressIdleDownloadWidth), this.progressIdleWidth = this.video.currentTime / this.video.duration * this.progressIdleTrack.width(), this.progressIdle.css("width", this.progressIdleWidth), this.progressWidthAD = this.videoAD.currentTime / this.videoAD.duration * this.elementAD.width(), this.progressAD.css("width", this.progressWidthAD))
    }, h.fn.createPopup = function() {
        var t = this;
        this.adImg = e("<div/>"), this.adImg.addClass("elite_vp_popup"), this.image = new Image, this.image.src = this._playlist.videos_array[this._playlist.videoid].popupImg, e(this.image).on("load", function() {
            t.adImg.append(t.image), t.positionPopup(), t.adImg.append(t.adClose)
        }), this.element.append(this.adImg), this.adImg.hide(), this.adImg.css({
            opacity: 0
        }), this.popupBtnClose = e("<div />"), this.popupBtnClose.addClass("elite_vp_btnClose elite_vp_themeColorText"), this.infoWindow.append(this.popupBtnClose), this.popupBtnClose.css({
            bottom: 0
        }), this.adImg.append(this.popupBtnClose), this.popupBtnCloseIcon = e("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("fa-elite-close").addClass("elite_vp_themeColor"), this.popupBtnClose.append(this.popupBtnCloseIcon), this.popupBtnClose.bind(this.CLICK_EV, e.proxy(function() {
            t.adOn = !0, t.togglePopup()
        }, this)), this.popupBtnClose.mouseover(function() {
            e(this).stop().animate({
                opacity: .7
            }, 200)
        }), this.popupBtnClose.mouseout(function() {
            e(this).stop().animate({
                opacity: 1
            }, 200)
        })
    }, h.fn.positionPopup = function() {
        var e = this;
        this.adImg.css({
            bottom: e.controls.height() + 20,
            left: e.element.width() / 2 - this.adImg.width() / 2
        })
    }, h.fn.newAd = function() {
        var t = this;
        this.adImg.hide(), this.image.src = "", this.image.src = this._playlist.videos_array[this._playlist.videoid].popupImg, this.adOn || e(this.image).bind(this.START_EV, function() {
            window.open(t._playlist.videos_array[t._playlist.videoid].popupAdGoToLink), "youtube" != t._playlist.videos_array[t._playlist.videoid].videoType && "YouTube" != t.options.videoType || t.youtubePlayer.pauseVideo(), "HTML5" != t._playlist.videos_array[t._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.pause(), "vimeo" != t._playlist.videos_array[t._playlist.videoid].videoType && "Vimeo" != t.options.videoType || t._playlist.vimeoPlayer.api("pause")
        })
    }, h.fn.createLogo = function() {
        var t = this;
        this.logoImg = e("<div/>"), this.logoImg.addClass("elite_vp_logo"), this.img = new Image, this.img.src = t.options.logoPath, e(this.img).on("load", function() {
            t.logoImg.append(t.img), t.positionLogo()
        }), "Yes" == t.options.logoShow && this.element.append(this.logoImg), "Yes" == t.options.logoClickable && (this.logoImg.bind(this.CLICK_EV, e.proxy(function() {
            window.open(t.options.logoGoToLink)
        }, this)), this.logoImg.mouseover(function() {
            e(this).stop().animate({
                opacity: .8
            }, 200)
        }), this.logoImg.mouseout(function() {
            e(this).stop().animate({
                opacity: 1
            }, 200)
        }), e(".elite_vp_logo").css("cursor", "pointer"))
    }, h.fn.positionLogo = function() {
        var e, t = this;
        "youtube" == t._playlist.videos_array[t._playlist.videoid].videoType || "YouTube" == t.options.videoType ? e = 70 : "HTML5" == t._playlist.videos_array[t._playlist.videoid].videoType || "HTML5 (self-hosted)" == t.options.videoType ? e = 70 : "vimeo" != t._playlist.videos_array[t._playlist.videoid].videoType && "Vimeo" != t.options.videoType || (e = 55), "bottom-right" == t.options.logoPosition ? this.logoImg.css({
            bottom: e,
            right: buttonsMargin
        }) : "bottom-left" == t.options.logoPosition && this.logoImg.css({
            bottom: e,
            left: buttonsMargin
        })
    }, h.fn.showVideoElements = function() {
        this.videoElement.show(), this.videoElementAD.show()
    }, h.fn.hideVideoElements = function() {
        this.videoElement.hide(), this.videoElementAD.hide()
    }, h.fn.createAds = function() {
        var t = this;
        adsImg = e("<div/>"), adsImg.addClass("ads"), image = new Image, image.src = t._playlist.videos_array[0].adsPath, e(image).on("load", function() {
            adsImg.append(image), t.positionAds()
        }), this.element.append(adsImg), adsImg.hide()
    }, h.fn.positionAds = function() {
        var e = this;
        adsImg.css({
            bottom: e.controls.height() + 5,
            left: e.element.width() / 2 - adsImg.width() / 2
        })
    }, h.fn.setupAutoplay = function() {
        var e = this;
        this.options.lightBox || (e.options.autoplay ? e.isMobile.any() ? e.playButtonScreen.show() : e.play() : e.options.autoplay || (e.pause(), e.preloader.hide()))
    }, h.fn.createNowPlayingText = function() {
        var e = this;
        "Yes" == e.options.loadRandomVideoOnStart ? this.nowPlayingTitle.append('<p class="elite_vp_nowPlayingText elite_vp_nowPlayingText ' + this.options.instanceTheme + '">' + this._playlist.videos_array[e._playlist.rand].title + "</p>") : this.nowPlayingTitle.append('<p class="elite_vp_nowPlayingText elite_vp_nowPlayingText ' + this.options.instanceTheme + '">' + this._playlist.videos_array[0].title + "</p>"), this.nowPlayingTitleW = this.nowPlayingTitle.width(), "No" == this.options.nowPlayingText && this.nowPlayingTitle.hide()
    }, h.fn.createInfoWindowContent = function() {
        var e = this;
        "Yes" == e.options.loadRandomVideoOnStart ? (this.infoWindow.append('<p class="elite_vp_infoTitle elite_vp_themeColorText elite_vp_titles">' + this._playlist.videos_array[e._playlist.rand].title + "</p>"), this.infoWindow.append('<p class="elite_vp_infoText elite_vp_infoText ' + this.options.instanceTheme + '">' + this._playlist.videos_array[e._playlist.rand].info_text + "</p>")) : (this.infoWindow.append('<p class="elite_vp_infoTitle elite_vp_themeColorText elite_vp_titles">' + this._playlist.videos_array[0].title + "</p>"), this.infoWindow.append('<p class="elite_vp_infoText elite_vp_infoText ' + this.options.instanceTheme + '">' + this._playlist.videos_array[0].info_text + "</p>")),
            this.infoWindow.css({
                top: -this.infoWindow.height()
            }).hide()
    }, h.fn.createSkipAd = function() {
        var t = this;
        this.skipAdBox = e("<div />").addClass("elite_vp_skipAdBox").bind(t.CLICK_EV, function() {
            t.closeAD()
        }).hide(), this.elementAD.append(this.skipAdBox), this.skipAdBoxContentLeft = e("<div />").addClass("elite_vp_skipAdBoxContentLeft"), this.skipAdBox.append(this.skipAdBoxContentLeft), this.skipAdBoxContentLeft.append('<p class="elite_vp_skipAdTitle">' + this.options.skipAdvertisementText + "</p>"), this.skipAdBoxIcon = e("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("fa-elite-step-forward-ad"), this.skipAdBox.append(this.skipAdBoxIcon)
    }, h.fn.createSkipAdCount = function() {
        var t = this;
        this.skipAdCount = e("<div />").addClass("elite_vp_skipAdCount").hide(), this.elementAD.append(this.skipAdCount), this.i = document.createElement("img"), this.i.src = t._playlist.videos_array[t._playlist.videoid].thumbnail_image, this.skipAdCount.append(this.i), e(".elite_vp_skipAdCount img").addClass("elite_vp_skipAdCountImage elite_vp_themeColorThumbBorder"), this.skipAdCountContentLeft = e("<div />").addClass("elite_vp_skipAdCountContentLeft"), this.skipAdCount.append(this.skipAdCountContentLeft), this.skipAdCountContentLeft.append('<p class="elite_vp_skipAdCountTitle"></p>'), this.skipAdCount.css({
            right: -this.skipAdCount.width(),
            bottom: 28
        }).hide()
    }, h.fn.createAdTogglePlay = function() {
        var t = this;
        this.toggleAdPlayBox = e("<div />").addClass("elite_vp_toggleAdPlayBox").attr("aria-hidden", "true").addClass("fa-elite").addClass("fa-elite-playScreen " + this.options.instanceTheme).bind(t.CLICK_EV, function() {
            t.togglePlayAD(), t.ADTriggered = !0
        }).hide(), this.elementAD.append(this.toggleAdPlayBox)
    }, h.fn.createVideoAdTitleInsideAD = function() {
        this.videoAdBoxInside = e("<div />"), this.videoAdBoxInside.addClass("elite_vp_videoAdBoxInside"), this.elementAD.append(this.videoAdBoxInside), this.videoAdBoxInside.append('<div class="elite_vp_adsTitleInside">' + this.options.advertisementTitle + " </div>"), this.videoAdBoxInside.append(this.timeLeftInside), this.videoAdBoxInside.hide()
    }, h.fn.createEmbedWindowContent = function() {
        var t = this;
        e(this.embedWindow).append('<p class="elite_vp_embedTitle2 elite_vp_themeColorText elite_vp_titles">' + t.options.embedWindowTitle2 + "</p>"), this.embedTxt = e("<p />").addClass("elite_vp_embedText").addClass("elite_vp_embedText " + this.options.instanceTheme), this.embedWindow.append(this.embedTxt), this.copy = e("<div />").attr("title", "Copy to clipboard").attr("id", "elite_vp_copy").addClass("copyBtn").addClass(this.options.instanceTheme), this.embedWindow.append(this.copy), e(this.embedWindow).find("#elite_vp_copy").append('<p id="elite_vp_copyInside" class="elite_vp_copyInside ' + this.options.instanceTheme + '">' + t.options.copyTxt + "</p>"), e(this.embedWindow).append('<p class="elite_vp_embedTitle3 elite_vp_themeColorText elite_vp_titles">' + t.options.embedWindowTitle3 + "</p>"), this.embedTxt2 = e("<p />").addClass("elite_vp_embedText2").addClass("elite_vp_embedText " + this.options.instanceTheme), this.embedWindow.append(this.embedTxt2), this.copy2 = e("<div />").attr("title", "Copy to clipboard").attr("id", "elite_vp_copy2").addClass("copyBtn").addClass(this.options.instanceTheme), this.embedWindow.append(this.copy2), e(this.embedWindow).find("#elite_vp_copy2").append('<p id="elite_vp_copyInside" class="elite_vp_copyInside ' + this.options.instanceTheme + '">' + t.options.copyTxt + "</p>");
        var i = this.options.embedCodeSrc,
            o = this.options.videoPlayerWidth,
            s = this.options.videoPlayerHeight;
        e(this.embedWindow).find(".elite_vp_embedText").text("<iframe src='" + i + "' width='" + o + "' height='" + s + "' frameborder=0 webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>"), this.updateEmbedText2(), this.copy.bind(this.CLICK_EV, function() {
            var i = e("<input>");
            e("body").append(i), i.val(t.embedTxt.text()).select(), document.execCommand("copy"), i.remove(), e(t.copy2).find(".elite_vp_copyInside").text(t.options.copyTxt), e(this).find(".elite_vp_copyInside").text(t.options.copiedTxt), e(t.embedTxt).addClass("elite_vp_highlightText"), e(t.embedTxt2).removeClass("elite_vp_highlightText")
        }), this.copy2.bind(this.CLICK_EV, function() {
            var i = e("<input>");
            e("body").append(i), i.val(t.embedTxt2.text()).select(), document.execCommand("copy"), i.remove(), e(t.copy).find(".elite_vp_copyInside").text(t.options.copyTxt), e(this).find(".elite_vp_copyInside").text(t.options.copiedTxt), e(t.embedTxt2).addClass("elite_vp_highlightText"), e(t.embedTxt).removeClass("elite_vp_highlightText")
        })
    }, h.fn.updateEmbedText2 = function() {
        var t = window.location.href;
        t.indexOf("?id=") >= 0 ? (t = t.split("?")[0], e(this.embedWindow).find(".elite_vp_embedText2").text(t + "?id=" + this._playlist.videoid)) : e(this.embedWindow).find(".elite_vp_embedText2").text(t + "?id=" + this._playlist.videoid), e(this.copy).find(".elite_vp_copyInside").text(this.options.copyTxt), e(this.copy2).find(".elite_vp_copyInside").text(this.options.copyTxt), e(this.embedTxt).removeClass("elite_vp_highlightText"), e(this.embedTxt2).removeClass("elite_vp_highlightText")
    }, h.fn.ready = function(e) {
        this.readyList.push(e), this.loaded && e.call(this)
    }, h.fn.load = function(t) {
        var i = this;
        t && (this.sources = t), "string" == typeof this.sources && (this.sources = {
            src: this.sources
        }), e.isArray(this.sources) || (this.sources = [this.sources]), this.ready(function() {
            this.change("loading"), "HTML5" != i._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != i.options.videoType || this.video.loadSources(this.sources)
        })
    }, h.fn.closeAD = function() {
        var e = this;
        clearInterval(e.myInterval), e.videoPlayingAD = !0, e.togglePlayAD(), e._playlist.videoAdPlayed = !0, e.resetPlayerAD(), e.elementAD.css({
            zIndex: 1
        }), e.videoElementAD.empty(), e.videoAdBoxInside.hide(), e.removeListenerProgressAD(), e.options.allowSkipAd && (e.skipAdBox.hide(), e.skipAdCount.hide()), e.fsEnterADBox.hide(), e.toggleAdPlayBox.hide(), e.progressADBg.hide(), "youtube" == e._playlist.videos_array[e._playlist.videoid].videoType || "YouTube" == e.options.videoType ? (e.ytWrapper.css({
            visibility: "visible"
        }), e.hideVideoElements(), void 0 != e.youtubePlayer && this.youtubePlayer.playVideo()) : "HTML5" == e._playlist.videos_array[e._playlist.videoid].videoType || "HTML5 (self-hosted)" == e.options.videoType ? (e.showVideoElements(), e.togglePlay(), e.video.play()) : "vimeo" != e._playlist.videos_array[e._playlist.videoid].videoType && "Vimeo" != e.options.videoType || (e.hideVideoElements(), void 0 != e._playlist.vimeoPlayer ? e._playlist.vimeoPlayer.api("play") : e._playlist.playVimeo(e._playlist.videoid))
    }, h.fn.openAD = function() {
        var t = this;
        t.showVideoElements(), t.progressADBg.show(), t.elementAD.css({
            zIndex: 555559
        }), t.ytWrapper.css({
            visibility: "hidden"
        }), t.videoAdBoxInside.show(), t.options.allowSkipAd && (t.skipBoxOn = !0, t.toggleSkipAdBox(), t.skipCountOn = !1, t.toggleSkipAdCount()), t.fsEnterADBox.show(), t.realFullscreenActive || t.resizeAll(), this.isMobile.any() ? t.ADTriggered || (t.toggleAdPlayBox.show(), t.videoPlayingAD = !0, t.togglePlayAD()) : t.toggleAdPlayBox.hide(), this.options.allowSkipAd && (this.setSkipTimer(), e(".elite_vp_skipAdCountTitle").text(this.options.skipAdText + " " + t.counter + " s"), this.i.src = t._playlist.videos_array[t._playlist.videoid].thumbnail_image)
    }, h.fn.loadAD = function(t, i) {
        switch (this.preloaderAD.stop().animate({
            opacity: 1
        }, 0, function() {
            e(this).show()
        }), t && (this.sourcesAD = t), "string" == typeof this.sourcesAD && (this.sourcesAD = {
            src: this.sourcesAD
        }), e.isArray(this.sourcesAD) || (this.sourcesAD = [this.sourcesAD]), this.ready(function() {
            this.change("loading"), this.videoAD.loadSources(this.sourcesAD)
        }), i) {
            case "prerollActive":
                this.prerollActive = !0, this.midrollActive = !1, this.postrollActive = !1;
                break;
            case "midrollActive":
                this.prerollActive = !1, this.midrollActive = !0, this.postrollActive = !1;
                break;
            case "postrollActive":
                this.prerollActive = !1, this.midrollActive = !1, this.postrollActive = !0
        }
    }, h.fn.exitToOriginalSize = function() {
        THREEx.FullScreen.available() ? THREEx.FullScreen.activated() ? THREEx.FullScreen.cancel() : this.inFullScreen && this.fullScreen(!this.inFullScreen) : !THREEx.FullScreen.available(), this.elementAD.css({
            zIndex: 455555
        })
    }, h.fn.play = function() {
        var e = this;
        this.playButtonScreen.hide(), this.playBtn.removeClass("fa-elite-play").addClass("fa-elite-pause"), "HTML5" == e._playlist.videos_array[e._playlist.videoid].videoType || "HTML5 (self-hosted)" == e.options.videoType ? e.video.play() : "youtube" != e._playlist.videos_array[e._playlist.videoid].videoType && "YouTube" != e.options.videoType || e.video.pause(), "yes" != e._playlist.videos_array[e._playlist.videoid].prerollAD || 0 != e.videoAdStarted || e.options.showGlobalPrerollAds || (e.video.pause(), !e.videoAdStarted && e._playlist.videos_array[e._playlist.videoid].prerollAD && (e.myVideo.canPlayType && e.myVideo.canPlayType("video/mp4").replace(/no/, "") && (e.canPlay = !0, e.video_pathAD = e._playlist.videos_array[e._playlist.videoid].preroll_mp4), e.loadAD(e.video_pathAD, "prerollActive"), e.openAD()), e.videoAdStarted = !0), this.options.showGlobalPrerollAds && 0 == e.videoAdStarted && (e.video.pause(), !e.videoAdStarted && e.options.showGlobalPrerollAds && (e.myVideo.canPlayType && e.myVideo.canPlayType("video/mp4").replace(/no/, "") && (e.canPlay = !0, e.video_pathAD = this.globalPrerollAds_arr[this.getGlobalPrerollRandomNumber()]), e.loadAD(e.video_pathAD), e.openAD()), e.videoAdStarted = !0)
    }, h.fn.pause = function() {
        var e = this;
        "HTML5" == this._playlist.videos_array[this._playlist.videoid].videoType || "HTML5 (self-hosted)" == this.options.videoType ? (this.html5STARTED || "" == this.options.posterImg) && (this.is_iOSVolumeButtonScreen ? this.playButtonScreen.hide() : this.playButtonScreen.show()) : "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || (e._playlist.youtubeSTARTED || "" == this.options.posterImg ? this.playButtonScreen.show() : this.playButtonScreen.hide()), this.playBtn.removeClass("fa-elite-pause").addClass("fa-elite-play"), e.video.pause()
    }, h.fn.stop = function() {
        this.seek(0), this.pause()
    }, h.fn.hideOverlay = function() {
        var e = this;
        void 0 != e.overlay && (e.overlay.hide(), e.poster2Showing = !1, e.playButtonPoster.hide(), "youtube" == e._playlist.videos_array[e._playlist.videoid].videoType || "YouTube" == e.options.videoType ? (e.youtubePlayer.playVideo(), "default controls" == e.options.youtubeControls && e.element.css("visibility", "hidden")) : "HTML5" == e._playlist.videos_array[e._playlist.videoid].videoType || "HTML5 (self-hosted)" == e.options.videoType ? e.togglePlay() : "vimeo" != e._playlist.videos_array[e._playlist.videoid].videoType && "Vimeo" != e.options.videoType || (e.hideCustomControls(), e.hideVideoElements(), void 0 != e._playlist.vimeoPlayer ? e._playlist.vimeoPlayer.api("play") : e._playlist.playVimeo(e._playlist.videoid)))
    }, h.fn.togglePlay = function() {
        "elite_vp_playing" == this.state ? (this.pause(), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || this.youtubePlayer.pauseVideo()) : (this.play(), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || this.youtubePlayer.playVideo())
    }, h.fn.toggleSkipAdBox = function() {
        this.skipBoxOn ? (this.skipAdBox.stop().animate({
            right: -(this.skipAdBox.width() - 2),
            bottom: 28
        }, 200, function() {
            e(this).hide()
        }), this.skipBoxOn = !1) : (this.skipAdBox.show(), this.addListenerProgressAD(), this.skipAdBox.stop().animate({
            right: 10,
            bottom: 28
        }, 500), this.skipBoxOn = !0)
    }, h.fn.toggleSkipAdCount = function() {
        this.skipCountOn ? (this.skipAdCount.stop().animate({
            right: -(this.skipAdCount.width() - 2),
            bottom: 28
        }, 200, function() {
            e(this).hide()
        }), this.skipCountOn = !1) : (this.skipAdCount.show(), this.skipAdCount.stop().animate({
            right: 10,
            bottom: 28
        }, 500), this.skipCountOn = !0)
    }, h.fn.toggleInfoWindow = function() {
        this.infoOn ? (this.infoWindow.stop().animate({
            top: -this.infoWindow.height()
        }, 200, function() {
            e(this).hide()
        }), this.nowPlayingTitle.show(), this.infoOn = !1) : (this.infoWindow.show(), this.infoWindow.stop().animate({
            top: 0
        }, 500), this.nowPlayingTitle.hide(), this.infoOn = !0)
    }, h.fn.toggleLightBox = function() {
        this.lightBoxOn ? (this.lightBoxOverlay.stop().animate({
            opacity: 0
        }, 300, function() {
            e(this).hide()
        }), this.lightBoxOn = !1, this.pause(), this.YTAPIReady && this.youtubePlayer.pauseVideo(), this._playlist.vimeoPlayer && this._playlist.vimeoPlayer.api("pause"), this.videoPlayingAD = !0, this.togglePlayAD(), e(".elite_vp_lightBoxThumbnailWrap").each(function() {
            e(this).find(".elite_vp_playButtonScreen").css({
                zIndex: 2147483647
            })
        })) : (this.lightBoxOverlay.show(), this.lightBoxOverlay.stop().animate({
            opacity: 1
        }, 300), this.lightBoxOn = !0, this.options.lightBoxAutoplay && (this.lightBoxInitiated ? "yes" == this._playlist.videos_array[this._playlist.videoid].prerollAD || this.options.showGlobalPrerollAds ? this._playlist.videoAdPlayed ? (this.play(), this.YTAPIReady && this.youtubePlayer.playVideo(), this._playlist.vimeoPlayer && this._playlist.vimeoPlayer.api("play")) : (this.videoPlayingAD = !1, this.togglePlayAD()) : (this.play(), this.YTAPIReady && this.youtubePlayer.playVideo(), this._playlist.vimeoPlayer && this._playlist.vimeoPlayer.api("play")) : (this.playVideoById(this._playlist.videoid), this.lightBoxInitiated = !0)), e(".elite_vp_lightBoxThumbnailWrap").each(function() {
            e(this).find(".elite_vp_playButtonScreen").css({
                zIndex: 2147483646
            })
        })), this.resizeAll()
    }, h.fn.toggleQualityWindow = function(t) {
        var i, o = this;
        i = t ? t : 0, this.qualityOn ? (this.qualityWindow.stop().delay(i).animate({
            top: 200
        }, 200, function() {
            e(o.qualityWindow_mask).hide()
        }), this.qualityOn = !1) : (this.qualityWindow_mask.show(), this.qualityWindow.stop().delay(i).animate({
            top: 0
        }, 500), this.qualityOn = !0)
    }, h.fn.togglePopup = function() {
        this.adOn ? (this.adImg.animate({
            opacity: 0
        }, 0, function() {
            e(this).hide()
        }), this.adOn = !1) : this.adOn || (this.adImg.show(), this.adImg.animate({
            opacity: 1
        }, 500), this.adOn = !0)
    }, h.fn.toggleShuffleBtn = function() {
        this.shuffleBtnEnabled ? (this.removeColorAccent(e("#elite_vp_shuffleBtn")), this.shuffleBtnEnabled = !1) : (e(this.mainContainer).find(".fa-elite-random").addClass("elite_vp_themeColorText"), this.shuffleBtnEnabled = !0, this.setColorAccent(this.options.colorAccent, e("#elite_vp_shuffleBtn")))
    }, h.fn.toggleQualityBtn = function() {
        this.qualityBtnEnabled ? (this.removeColorAccent(e("#elite_vp_qualityBtn")), this.qualityBtnEnabled = !1) : (e(this.mainContainer).find(".fa-elite-cog").addClass("elite_vp_themeColorText"), this.qualityBtnEnabled = !0, this.setColorAccent(this.options.colorAccent, e("#elite_vp_qualityBtn")))
    }, h.fn.toggleShareWindow = function() {
        var t = this;
        this.shareOn ? (this.shareOn = !1, e(this.shareWindow).stop().animate({
            right: -t.shareWindow.width()
        }, 300, function() {
            e(this).hide()
        })) : (this.shareWindow.show(), e(this.shareWindow).stop().animate({
            right: t.screenBtnsWindow.width()
        }, 300), this.shareOn = !0)
    }, h.fn.togglePlayAD = function() {
        this.videoPlayingAD ? (this.videoAD.pause(), this.videoPlayingAD = !1, this.toggleAdPlayBox.show()) : (this.videoAD.play(), this.videoPlayingAD = !0, this.toggleAdPlayBox.hide())
    }, h.fn.toggleEmbedWindow = function() {
        this.embedOn ? (e(this.embedWindow).stop().animate({
            top: -this.embedWindow.height()
        }, 200, function() {
            e(this).hide()
        }), this.embedOn = !1) : (e(this.embedWindow).show(), e(this.embedWindow).stop().animate({
            top: 0
        }, 500, function() {}), this.embedOn = !0)
    }, h.fn.fullScreen = function(t) {
        var i = this;
        if (t) this.element.addClass("elite_vp_fullScreen"), this.elementAD.addClass("elite_vp_fullScreen"), e(this.mainContainer).find(".fa-elite-expand").removeClass("fa-elite-expand").addClass("fa-elite-compress"), e(this.fsEnterADBox).find(".fa-elite-expandAD").removeClass("fa-elite-expandAD").addClass("fa-elite-compressAD"), this._playlist.hidePlaylist(), i.element.width(window.innerWidth), i.element.height(window.innerHeight), i.elementAD.width(window.innerWidth), i.elementAD.height(window.innerHeight), i.mainContainer.width(window.innerWidth), i.mainContainer.height(window.innerHeight), i.mainContainer.css("position", "fixed"), i.mainContainer.css("left", 0), i.mainContainer.css("top", 0), i.mainContainer.parent().css("zIndex", 999999), "HTML5" != i._playlist.videos_array[i._playlist.videoid].videoType && "HTML5 (self-hosted)" != i.options.videoType || i.element.css({
            zIndex: 555558
        }), "youtube" == i._playlist.videos_array[i._playlist.videoid].videoType || "YouTube" == i.options.videoType ? i.element.css({
            zIndex: 555558
        }) : "vimeo" != i._playlist.videos_array[i._playlist.videoid].videoType && "Vimeo" != i.options.videoType || i.element.css({
            zIndex: 555556
        }), ("yes" == i._playlist.videos_array[i._playlist.videoid].prerollAD || i.options.showGlobalPrerollAds) && (i._playlist.videoAdPlayed ? i.elementAD.css({
            zIndex: 555557
        }) : i.elementAD.css({
            zIndex: 555559
        }));
        else {
            if (this._playlist.showPlaylist(), this.element.removeClass("elite_vp_fullScreen"), i.mainContainer.css("position", "absolute"), i.mainContainer.parent().css("zIndex", 1), this.elementAD.removeClass("elite_vp_fullScreen"), e(this.mainContainer).find(".fa-elite-compress").removeClass("fa-elite-compress").addClass("fa-elite-expand"), e(this.fsEnterADBox).find(".fa-elite-compressAD").removeClass("fa-elite-compressAD").addClass("fa-elite-expandAD"), this.stretching && (this.stretching = !1, this.toggleStretch()), "HTML5" == i._playlist.videos_array[i._playlist.videoid].videoType || "HTML5 (self-hosted)" == i.options.videoType ? i.element.css({
                    zIndex: 455558
                }) : i.element.css({
                    zIndex: 455556
                }), ("yes" == i._playlist.videos_array[i._playlist.videoid].prerollAD || i.options.showGlobalPrerollAds) && (i._playlist.videoAdPlayed ? i.elementAD.css({
                    zIndex: 455557
                }) : i.elementAD.css({
                    zIndex: 455559
                })), "fitToContainer" == i.options.playerLayout) switch (i.mainContainer.width("100%"), i.options.playlist) {
                case "Right playlist":
                    i.mainContainer.height((i.parent.width() - i._playlist.playlist.width()) / i.options.videoRatio);
                    break;
                case "Bottom playlist":
                    i.mainContainer.height(i.parent.width() / i.options.videoRatio)
            } else "fitToBrowser" == i.options.playerLayout ? (i.mainContainer.width("100%"), i.mainContainer.height("100%")) : "fixedSize" == i.options.playerLayout && (i.mainContainer.width(i.options.videoPlayerWidth), i.mainContainer.height(i.options.videoPlayerHeight));
            i.mainContainer.css("left", ""), i.mainContainer.css("top", ""), i.resizeAll()
        }
        this.resizeVideoTrack(), this.positionOverScreenButtons(t), this.positionLogo(), this.positionPopup(), this.resizeBars(), "undefined" == typeof t && (t = !0), this.inFullScreen = t
    }, h.fn.toggleFullScreen = function() {
        var e = this;
        if (THREEx.FullScreen.available())
            if (THREEx.FullScreen.activated()) "Fullscreen native" == this.options.fullscreen && THREEx.FullScreen.cancel(), "Fullscreen browser" == this.options.fullscreen && this.fullScreen(!this.inFullScreen), "HTML5" == e._playlist.videos_array[e._playlist.videoid].videoType || "HTML5 (self-hosted)" == e.options.videoType ? e.element.css({
                zIndex: 455558
            }) : e.element.css({
                zIndex: 455556
            }), ("yes" == e._playlist.videos_array[e._playlist.videoid].prerollAD || e.options.showGlobalPrerollAds) && (e._playlist.videoAdPlayed ? e.elementAD.css({
                zIndex: 455557
            }) : e.elementAD.css({
                zIndex: 455559
            })), e.mainContainer.css("zIndex", 999999);
            else {
                if ("Fullscreen native" == this.options.fullscreen && (THREEx.FullScreen.request(), e.mainContainer.parent().css("zIndex", 999999), e.mainContainer.css("zIndex", 2147483647), "HTML5" != e._playlist.videos_array[e._playlist.videoid].videoType && "HTML5 (self-hosted)" != e.options.videoType || e.element.css({
                        zIndex: 555558
                    }), "youtube" == e._playlist.videos_array[e._playlist.videoid].videoType || "YouTube" == e.options.videoType ? e.element.css({
                        zIndex: 555558
                    }) : "vimeo" != e._playlist.videos_array[e._playlist.videoid].videoType && "Vimeo" != e.options.videoType || e.element.css({
                        zIndex: 555556
                    }), "yes" == e._playlist.videos_array[e._playlist.videoid].prerollAD || e.options.showGlobalPrerollAds)) {
                    if (!e.videoAdStarted) return;
                    e._playlist.videoAdPlayed ? e.elementAD.css({
                        zIndex: 555557
                    }) : e.elementAD.css({
                        zIndex: 555559
                    })
                }
                "Fullscreen browser" == this.options.fullscreen && this.fullScreen(!this.inFullScreen)
            }
        else THREEx.FullScreen.available() || this.fullScreen(!this.inFullScreen)
    }, h.fn.seek = function(e) {
        this.video.setCurrentTime(e)
    }, h.fn.setVolume = function(e) {
        this.video.setVolume(e)
    }, h.fn.getVolume = function() {
        return this.video.getVolume()
    }, h.fn.mute = function(e) {
        "undefined" == typeof e && (e = !0), this.setVolume(e ? 1 : 0)
    }, h.fn.remove = function() {
        this.element.remove()
    }, h.fn.bind = function() {
        this.videoElement.bind.apply(this.videoElement, arguments)
    }, h.fn.one = function() {
        this.videoElement.one.apply(this.videoElement, arguments)
    }, h.fn.trigger = function() {
        this.videoElement.trigger.apply(this.videoElement, arguments)
    };
    for (var m = ["click", "dblclick", "onerror", "onloadeddata", "oncanplay", "ondurationchange", "ontimeupdate", "onprogress", "onpause", "onplay", "onended", "onvolumechange"], c = 0; c < m.length; c++) ! function() {
        var t = m[c],
            i = t.replace(/^(on)/, "");
        h.fn[t] = function() {
            var t = e.makeArray(arguments);
            t.unshift(i), this.bind.apply(this, t)
        }
    }();
    h.fn.triggerReady = function() {
        this.loaded = !0, e("video").each(function() {})
    }, h.fn.setupElement = function() {
        var t = this;
        switch (this.mainContainer = e("<div />"), this.mainContainer.addClass("elite_vp_mainContainer"), "fitToContainer" == this.options.playerLayout || "fitToBrowser" == this.options.playerLayout ? this.mainContainer.css({
            width: "100%",
            height: "100%",
            position: "absolute",
            background: "#000000",
            zIndex: 999999
        }) : "fixedSize" == this.options.playerLayout && this.mainContainer.css({
            width: this.options.videoPlayerWidth,
            height: this.options.videoPlayerHeight,
            position: "absolute",
            background: "#000000",
            zIndex: 999999
        }), this.options.videoPlayerShadow) {
            case "effect1":
                this.mainContainer.addClass("elite_vp_effect1");
                break;
            case "effect2":
                this.mainContainer.addClass("elite_vp_effect2");
                break;
            case "effect3":
                this.mainContainer.addClass("elite_vp_effect3");
                break;
            case "effect4":
                this.mainContainer.addClass("elite_vp_effect4");
                break;
            case "effect5":
                this.mainContainer.addClass("elite_vp_effect5");
                break;
            case "effect6":
                this.mainContainer.addClass("elite_vp_effect6");
                break;
            case "off":
        }
        this.parent.append(this.mainContainer), this.options.lightBox && (this.mainContainerBG = e("<div />"), this.mainContainerBG.addClass("elite_vp_mainContainerBG"), this.mainContainer.append(this.mainContainerBG)), this.element = e("<div />"), this.element.addClass("elite_vp_videoPlayer"), this.mainContainer.append(this.element), this.ytWrapper = e("<div></div>"), this.ytWrapper.addClass("elite_vp_ytWrapper"), this.element.append(this.ytWrapper), this.ytPlayer = e("<div></div>"), this.ytPlayer.attr("id", t.options.instanceName + "youtube"), this.ytWrapper.append(this.ytPlayer), this.imageWrapper = e("<div></div>"), this.imageWrapper.addClass("elite_vp_imageWrapper"), this.element.append(this.imageWrapper), this.imageDisplayed = document.createElement("img"), this.imageWrapper.append(this.imageDisplayed), e(".elite_vp_imageWrapper img").attr("id", "elite_vp_imageDisplayed")
    }, h.fn.setupElementAD = function() {
        this.elementAD = e("<div />"), this.elementAD.addClass("elite_vp_videoPlayerAD"), this.mainContainer.append(this.elementAD)
    }, h.fn.idle = function(t, i) {
        var o = this;
        i ? "elite_vp_playing" == this.state && (this.options.showAllControls || this.controls.hide(), this.controls.stop().animate({
            bottom: -50
        }, 300), o.progressIdleTrack.stop().delay(800).animate({
            bottom: 0
        }, 300), this.screenBtnsWindow.stop().animate({
            right: -44
        }, 300), this.logoImg.stop().animate({
            opacity: 0
        }, 300), o.nowPlayingTitle.stop().animate({
            left: -o.nowPlayingTitleW
        }, 300), o.shareOn = !0, o.toggleShareWindow(), o.qualityOn = !0, o.toggleQualityWindow(), o.qualityBtnEnabled = !0, o.toggleQualityBtn(), e(o.toolTip).stop().animate({
            opacity: 0
        }, 50, function() {
            o.toolTip.hide()
        }), o.invisibleWrapper.show()) : (this.progressIdleTrack.stop().animate({
            bottom: -6
        }, 100, function() {
            o.options.showAllControls || o.controls.hide(), o.controls.stop().animate({
                bottom: 0
            }, 300)
        }), this.screenBtnsWindow.stop().animate({
            right: 0
        }, 400), this.logoImg.stop().animate({
            opacity: 1
        }, 400), o.nowPlayingTitle.stop().animate({
            left: 0
        }, 400), o.invisibleWrapper.hide())
    }, h.fn.change = function(e) {
        this.state = e, this.element && (this.element.attr("data-state", this.state), this.element.trigger("state.videoPlayer", this.state))
    }, h.fn.setupHTML5Video = function() {
        this.element && this.element.append(this.videoElement), this.video = this.videoElement[0], this.element && (this.element.width(this.playerWidth), this.element.height(this.playerHeight));
        var t = this;
        this.video.loadSources = function(e) {
            t.videoElement.empty();
            for (var i in e)
                if (-1 != e[i].src.indexOf("m3u8")) {
                    if (Hls.isSupported()) {
                        var o = new Hls;
                        o.loadSource(e[i].src), o.attachMedia(t.video), o.on(Hls.Events.MANIFEST_PARSED, function() {})
                    }
                } else t.videoElement.attr("src", e[i].src);
            t.video.load()
        }, this.video.getStartTime = function() {
            return this.startTime || 0
        }, this.video.getEndTime = function() {
            return this.duration == 1 / 0 && this.buffered ? this.buffered.end(this.buffered.length - 1) : (this.startTime || 0) + this.duration
        }, this.video.getCurrentTime = function() {
            try {
                return this.currentTime
            } catch (e) {
                return 0
            }
        };
        var t = this;
        this.video.setCurrentTime = function(e) {
            this.currentTime = e
        }, this.video.getVolume = function() {
            return this.volume
        }, this.video.setVolume = function(e) {
            e > 1 && (e = 1), t.options.showAllControls ? this.volume = e : this.volume = 1
        }, this.videoElement.dblclick(e.proxy(function() {
            this.toggleFullScreen()
        }, this)), this.videoElement.bind(this.CLICK_EV, e.proxy(function() {
            this.togglePlay()
        }, this)), this.triggerReady()
    }, h.fn.setupHTML5VideoAD = function() {
        this.elementAD && this.elementAD.append(this.videoElementAD), this.videoAD = this.videoElementAD[0], this.elementAD && (this.elementAD.width(0), this.elementAD.height(0));
        var t = this;
        this.videoAD.loadSources = function(e) {
            t.videoElementAD.empty();
            for (var i in e)
                if (-1 != e[i].src.indexOf("m3u8")) {
                    if (Hls.isSupported()) {
                        var o = new Hls;
                        o.loadSource(e[i].src), o.attachMedia(t.videoAD), o.on(Hls.Events.MANIFEST_PARSED, function() {})
                    }
                } else t.videoElementAD.attr("src", e[i].src);
            t.videoAD.load(), t.isMobile.any() ? t.videoPlayingAD = !0 : t.videoPlayingAD = !1, t.togglePlayAD()
        }, this.videoAD.getStartTime = function() {
            return this.startTime || 0
        }, this.videoAD.getEndTime = function() {
            return isNaN(this.duration) ? void 0 : this.duration == 1 / 0 && this.buffered ? this.buffered.end(this.buffered.length - 1) : (this.startTime || 0) + this.duration
        }, this.videoAD.getCurrentTime = function() {
            try {
                return this.currentTime
            } catch (e) {
                return 0
            }
        }, this.videoAD.setCurrentTime = function(e) {
            this.currentTime = e
        }, this.videoAD.getVolume = function() {
            return this.volume
        }, this.videoAD.setVolume = function(e) {
            this.volume = e
        }, this.videoElementAD.dblclick(e.proxy(function() {
            this.toggleFullScreen()
        }, this)), this.triggerReady(), this.videoElementAD.bind(this.CLICK_EV, e.proxy(function() {
            this.options.showGlobalPrerollAds ? "" != this.options.globalPrerollAdsGotoLink && "globalPrerollAdsGotoLink" != this.options.globalPrerollAdsGotoLink && (window.open(this.options.globalPrerollAdsGotoLink), this.videoPlayingAD = !0, this.togglePlayAD()) : ("" != this._playlist.videos_array[this._playlist.videoid].prerollGotoLink && "prerollGotoLink" != this._playlist.videos_array[this._playlist.videoid].prerollGotoLink && "yes" == this._playlist.videos_array[this._playlist.videoid].prerollAD && (this.prerollActive && window.open(this._playlist.videos_array[this._playlist.videoid].prerollGotoLink), this.videoPlayingAD = !0, this.togglePlayAD()), "" != this._playlist.videos_array[this._playlist.videoid].midrollGotoLink && "midrollGotoLink" != this._playlist.videos_array[this._playlist.videoid].midrollGotoLink && "yes" == this._playlist.videos_array[this._playlist.videoid].midrollAD && (this.midrollActive && window.open(this._playlist.videos_array[this._playlist.videoid].midrollGotoLink), this.videoPlayingAD = !0, this.togglePlayAD()), "" != this._playlist.videos_array[this._playlist.videoid].postrollGotoLink && "postrollGotoLink" != this._playlist.videos_array[this._playlist.videoid].postrollGotoLink && "yes" == this._playlist.videos_array[this._playlist.videoid].postrollAD && (this.postrollActive && window.open(this._playlist.videos_array[this._playlist.videoid].postrollGotoLink), this.videoPlayingAD = !0, this.togglePlayAD()))
        }, this))
    }, h.fn.setupButtonsOnScreen = function() {
        var t = this;
        this.screenBtnsWindow = e("<div></div>"), this.screenBtnsWindow.addClass("elite_vp_screenBtnsWindow"), this.element && this.element.append(this.screenBtnsWindow), this.options.showAllControls || this.screenBtnsWindow.hide(), this.playlistBtn = e("<div />").addClass("elite_vp_playlistBtn").addClass("elite_vp_playerElement").addClass("elite_vp_btnOverScreen"), this.element && this.screenBtnsWindow.append(this.playlistBtn), this.playlistBtnIcon = e("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("elite-icon-overScreen").addClass("elite-icon-overScreen " + this.options.instanceTheme).addClass("fa-elite-indent"), this.playlistBtn.append(this.playlistBtnIcon), this.shareBtn = e("<div />").addClass("elite_vp_shareBtn").addClass("elite_vp_playerElement").addClass("elite_vp_btnOverScreen"), this.element && this.screenBtnsWindow.append(this.shareBtn), this.shareBtnIcon = e("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("elite-icon-overScreen").addClass("elite-icon-overScreen " + this.options.instanceTheme).addClass("elite_vp_controlsColor").addClass("fa-elite-share-square-o"), this.shareBtn.append(this.shareBtnIcon), this.embedBtn = e("<div />").addClass("elite_vp_embedBtn").addClass("elite_vp_playerElement").addClass("elite_vp_btnOverScreen"), this.element && this.screenBtnsWindow.append(this.embedBtn), this.embedBtnIcon = e("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("elite-icon-overScreen").addClass("elite-icon-overScreen " + this.options.instanceTheme).addClass("fa-elite-chain"), this.embedBtn.append(this.embedBtnIcon), this.infoBtn = e("<div />").addClass("elite_vp_infoBtn").addClass("elite_vp_playerElement").addClass("elite_vp_btnOverScreen"), this.playlistBtn.addClass("elite_vp_bg " + this.options.instanceTheme), this.shareBtn.addClass("elite_vp_bg " + this.options.instanceTheme), this.embedBtn.addClass("elite_vp_bg " + this.options.instanceTheme), this.infoBtn.addClass("elite_vp_bg " + this.options.instanceTheme), this.element && this.screenBtnsWindow.append(this.infoBtn), this.infoBtnIcon = e("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("elite-icon-overScreen").addClass("elite-icon-overScreen " + this.options.instanceTheme).addClass("fa-elite-info"), this.infoBtn.append(this.infoBtnIcon), this.shareWindow = e("<div></div>"), this.shareWindow.addClass("elite_vp_shareWindow"), this.element && this.element.append(this.shareWindow), this.shareBtn.bind(this.CLICK_EV, e.proxy(function() {
            this.toggleShareWindow()
        }, this)), this.facebookBtn = e("<div />").addClass("elite_vp_facebookBtn").addClass("elite_vp_playerElement").addClass("elite_vp_socialBtn").addClass("elite_vp_bg"), this.element && this.shareWindow.append(this.facebookBtn), this.facebookBtnIcon = e("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("elite-icon-overScreen").addClass("fa-elite-facebook"), this.facebookBtn.append(this.facebookBtnIcon), this.twitterBtn = e("<div />").addClass("elite_vp_twitterBtn").addClass("elite_vp_playerElement").addClass("elite_vp_socialBtn").addClass("elite_vp_bg"), this.element && this.shareWindow.append(this.twitterBtn), this.twitterBtnIcon = e("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("elite-icon-overScreen").addClass("fa-elite-twitter"), this.twitterBtn.append(this.twitterBtnIcon), this.mailBtn = e("<div />").addClass("elite_vp_mailBtn").addClass("elite_vp_playerElement").addClass("elite_vp_socialBtn").addClass("elite_vp_bg"), this.element && this.shareWindow.append(this.mailBtn), this.mailBtnIcon = e("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("elite-icon-overScreen").addClass("fa-elite-google-plus"), this.mailBtn.append(this.mailBtnIcon);
        var i = 5;
        this.shareWindow.css({
            right: -this.shareWindow.width(),
            top: t.shareBtn.position().top + i
        }).hide(), this.facebookBtn.bind(this.CLICK_EV, e.proxy(function() {
            t.pause(), t.YTAPIReady && t.youtubePlayer.pauseVideo();
            var i = e(window).width() / 2 - 300,
                o = e(window).height() / 2 - 200,
                s = window.open("https://www.facebook.com/dialog/feed?app_id=787376644686729&display=popup&name=" + t.options.facebookShareName + "&link=" + t.options.facebookShareLink + "&redirect_uri=https://facebook.com&description=" + t.options.facebookShareDescription + "&picture=" + t.options.facebookSharePicture, "popup", "width=600, height=400, top=" + o + ", left=" + i);
            window.focus && s.focus()
        }, this)), this.twitterBtn.bind(this.CLICK_EV, e.proxy(function() {
            t.pause(), t.YTAPIReady && t.youtubePlayer.pauseVideo();
            var i = e(window).width() / 2 - 300,
                o = e(window).height() / 2 - 200,
                s = window.open("https://twitter.com/intent/tweet?text=" + t.options.twitterText + "&url=" + t.options.twitterLink + "&hashtags=" + t.options.twitterHashtags + "&via=" + t.options.twitterVia, "popup", "width=600, height=400, top=" + o + ", left=" + i);
            window.focus && s.focus()
        }, this)), this.mailBtn.bind(this.CLICK_EV, e.proxy(function() {
            t.pause(), t.YTAPIReady && t.youtubePlayer.pauseVideo();
            var i = e(window).width() / 2 - 300,
                o = e(window).height() / 2 - 200,
                s = window.open("https://plus.google.com/share?url=" + t.options.googlePlus, "popup", "width=600, height=400, top=" + o + ", left=" + i);
            window.focus && s.focus()
        }, this)), e(".elite_vp_shareBtn, .elite_vp_embedBtn, .elite_vp_playlistBtn, .elite_vp_infoBtn, .elite_vp_infoBtn, .elite_vp_facebookBtn, .elite_vp_twitterBtn, .elite_vp_mailBtn").mouseover(function() {
            e(this).find(".elite-icon-overScreen").removeClass("elite-icon-overScreen").addClass("elite-icon-overScreen-hover")
        }), e(".elite_vp_shareBtn, .elite_vp_embedBtn, .elite_vp_playlistBtn, .elite_vp_infoBtn, .elite_vp_infoBtn, .elite_vp_facebookBtn, .elite_vp_twitterBtn, .elite_vp_mailBtn").mouseout(function() {
            e(this).find(".elite-icon-overScreen-hover").removeClass("elite-icon-overScreen-hover").addClass("elite-icon-overScreen")
        }), e(".elite_vp_btnOverScreen").mouseover(function() {
            e(this).css("background", t.options.colorAccent)
        }), e(".elite_vp_btnOverScreen").mouseout(function() {
            e(this).css("background", "")
        }), "No" == t.options.shareShow && this.shareBtn.hide(), "No" == t.options.embedShow && this.embedBtn.hide(), "No" == t.options.infoShow && this.infoBtn.hide(), "No" == t.options.facebookShow && this.facebookBtn.hide(), "No" == t.options.twitterShow && this.twitterBtn.hide(), "No" == t.options.mailShow && this.mailBtn.hide(), buttonsMargin = 5, this.positionOverScreenButtons(), this.playlistBtn.bind(this.CLICK_EV, function() {
            t.toggleStretch(), t.resizeAll()
        })
    }, h.fn.toggleStretch = function() {
        var e = this;
        this.stretching ? (e.shrinkPlayer(), this.stretching = !1, this.playlistBtnIcon.removeClass("fa-elite-dedent").addClass("fa-elite-indent")) : (e.stretchPlayer(), this.stretching = !0, this.playlistBtnIcon.removeClass("fa-elite-indent").addClass("fa-elite-dedent")), this.resizeVideoTrack(), this.positionOverScreenButtons(), this.positionLogo(), this.positionPopup(), this.resizeBars(), this.resizeAll()
    }, h.fn.stretchPlayer = function() {
        this.element.width(this.options.videoPlayerWidth)
    }, h.fn.shrinkPlayer = function() {
        this.element.width(this.playerWidth)
    }, h.fn.positionOverScreenButtons = function(e) {
        this.element && (document.webkitIsFullScreen || document.fullscreenElement || document.mozFullScreen || e ? this.playlistBtn.hide() : "Right playlist" == this.options.playlist || "Bottom playlist" == this.options.playlist ? this.playlistBtn.show() : this.playlistBtn.hide())
    }, h.fn.hideControls = function() {
        var t = this;
        e(this.element).hover(function() {
            t.options.showAllControls || t.controls.hide(), t.controls.stop().animate({
                bottom: 0
            }, 300), t.progressIdleTrack.stop().animate({
                bottom: -6
            }, 100), t.screenBtnsWindow.stop().animate({
                right: 0
            }, 300), t.logoImg.stop().animate({
                opacity: 1
            }, 300), t.nowPlayingTitle.stop().animate({
                left: 0
            }, 300)
        }, function() {
            t.options.showAllControls || t.controls.hide(), t.controls.stop().animate({
                bottom: -50
            }, 300), t.progressIdleTrack.stop().delay(800).animate({
                bottom: 0
            }, 300), t.screenBtnsWindow.stop().animate({
                right: -44
            }, 300), t.logoImg.stop().animate({
                opacity: 0
            }, 300), t.nowPlayingTitle.stop().animate({
                left: -t.nowPlayingTitleW
            }, 300)
        })
    }, h.fn.setupButtons = function() {
        var t = this;
        if (this.playBtn = e("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("elite-icon-overScreen").addClass("fa-elite-play").addClass("elite_vp_playerElement").addClass("elite_vp_themeColor").attr("id", "elite_vp_playBtn"), this.playBtnBg = e("<div />").addClass("elite_vp_playBtnBg").addClass("elite_vp_playerElement").bind(t.CLICK_EV, function() {
                t.togglePlay()
            }), this.controls.append(this.playBtnBg), this.playBtnBg.append(this.playBtn), this.rewindBtnWrapper = e("<div />").addClass("elite_vp_rewindBtnWrapper").addClass("elite_vp_playerElement").bind(t.CLICK_EV, function() {
                t.seek(0), t.play(), void 0 != t.youtubePlayer && (t.youtubePlayer.seekTo(0), t.youtubePlayer.playVideo())
            }), this.controls.append(this.rewindBtnWrapper), this.rewindBtn = e("<span />").attr("aria-hidden", "true").attr("id", "elite_vp_rewindBtn").addClass("fa-elite").addClass("elite-icon-general").addClass("elite_vp_controlsColor " + this.options.instanceTheme).addClass("fa-elite-repeat"), this.rewindBtnWrapper.append(this.rewindBtn), this.qualityBtnWrapper = e("<div />").addClass("elite_vp_qualityBtnWrapper").addClass("elite_vp_playerElement").bind(t.CLICK_EV, function() {
                t.toggleQualityBtn(), t.toggleQualityWindow(), e(this).children(":first").toggleClass("fa-elite-rotate-90")
            }).hide(), "youtube" != t._playlist.videos_array[t._playlist.videoid].videoType && "YouTube" != t.options.videoType || this.qualityBtnWrapper.show(), this.controls.append(this.qualityBtnWrapper), this.qualityBtn = e("<span />").attr("aria-hidden", "true").attr("id", "elite_vp_qualityBtn").addClass("fa-elite").addClass("elite-icon-general").addClass("elite_vp_controlsColor " + this.options.instanceTheme).addClass("fa-elite-cog"), this.qualityBtnWrapper.append(this.qualityBtn), this.HD_indicator = e("<div />").addClass("elite_vp_HD_indicator").addClass("elite-icon-general").addClass("elite_vp_qualityWindowText").text("HD").hide(), this.qualityBtnWrapper.append(this.HD_indicator), this.downloadBtnLink = e("<a />").attr("href", this._playlist.videos_array[this._playlist.videoid].video_path_mp4).attr("download", "").hide(), this.downloadBtnWrapper = e("<div />").addClass("elite_vp_downloadBtnWrapper").addClass("elite_vp_playerElement").bind(t.CLICK_EV, function() {}), this.downloadBtnLink.append(this.downloadBtnWrapper), this.downloadBtn = e("<span />").attr("aria-hidden", "true").attr("id", "elite_vp_downloadBtn").addClass("fa-elite").addClass("elite-icon-general").addClass("elite_vp_controlsColor " + this.options.instanceTheme).addClass("fa-elite-download"), this.downloadBtnWrapper.append(this.downloadBtn), "HTML5" != this._playlist.videos_array[this._playlist.videoid].videoType && "HTML5 (self-hosted)" != this.options.videoType || "yes" != this._playlist.videos_array[this._playlist.videoid].enable_mp4_download || this.downloadBtnLink.show(), this.controls.append(this.downloadBtnLink), "Yes" == t.options.shuffle ? (this.shuffleBtnEnabled = !1, this.toggleShuffleBtn()) : this.shuffleBtnEnabled = !1, this.playButtonScreen = e("<div />"), this.playButtonScreen.addClass("elite_vp_playButtonScreen").attr("aria-hidden", "true").addClass("fa-elite").addClass("fa-elite-playScreen " + this.options.instanceTheme).hide(), this.playButtonScreen.bind(this.CLICK_EV, e.proxy(function() {
                this.togglePlay()
            }, this)), s.iOS() && this.options.autoplay && ("HTML5" == this._playlist.videos_array[this._playlist.videoid].videoType || "HTML5 (self-hosted)" == this.options.videoType)) {
            var i = !0;
            this.iOSVolumeButtonScreen = e("<div />"), this.iOSVolumeButtonScreen.addClass("elite_vp_iOSVolumeButtonScreen").attr("aria-hidden", "true").addClass("fa-elite").addClass("fa-elite-iOSBtnScreen " + this.options.instanceTheme).addClass("pulse"), this.iOSVolumeButtonScreen.bind(this.CLICK_EV, e.proxy(function() {
                i && (this.removeiOSAutoplay(), this.iOSVolumeButtonScreen.hide(), i = !1)
            }, this)), this.element && this.element.append(this.iOSVolumeButtonScreen)
        }
        this.element && this.element.append(this.playButtonScreen), this.fsBtnWrapper = e("<div />").addClass("elite_vp_fsBtnWrapper").addClass("elite_vp_playerElement").bind(this.CLICK_EV, e.proxy(function() {
            this.toggleFullScreen()
        }, this)), this.controls.append(this.fsBtnWrapper), this.fsEnter = e("<span />"), this.fsEnter.attr("aria-hidden", "true").attr("id", "elite_vp_fsBtn").addClass("fa-elite").addClass("elite-icon-general").addClass("elite_vp_controlsColor " + this.options.instanceTheme).addClass("fa-elite-expand"), this.fsBtnWrapper.append(this.fsEnter), this.fsEnterADBox = e("<div />").addClass("elite_vp_fsEnterADBox").hide(), this.elementAD.append(this.fsEnterADBox), this.fsEnterAD = e("<span />"), this.fsEnterAD.attr("aria-hidden", "true").addClass("fa-elite").addClass("fa-elite-expandAD").bind(this.CLICK_EV, e.proxy(function() {
            this.toggleFullScreen()
        }, this)).mouseover(function() {
            e(this).stop().animate({
                opacity: .75
            }, 200)
        }).mouseout(function() {
            e(this).stop().animate({
                opacity: 1
            }, 200)
        }), this.fsEnterADBox.append(this.fsEnterAD), this.playButtonScreen.mouseover(function() {
            e(this).stop().animate({
                opacity: .85
            }, 200)
        }), this.playButtonScreen.mouseout(function() {
            e(this).stop().animate({
                opacity: 1
            }, 200)
        })
    }, h.fn.createInfoWindow = function() {
        this.infoWindow = e("<div />"), this.infoWindow.addClass("elite_vp_infoWindow"), this.infoWindow.addClass("elite_vp_bg " + this.options.instanceTheme), this.element && this.element.append(this.infoWindow), this.infoBtnClose = e("<div />"), this.infoBtnClose.addClass("elite_vp_btnClose elite_vp_themeColorText"), this.infoWindow.append(this.infoBtnClose), this.infoBtnClose.css({
            bottom: 0
        }), this.infoBtnCloseIcon = e("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("fa-elite-close").addClass("elite_vp_themeColor"), this.infoBtnClose.append(this.infoBtnCloseIcon), this.infoBtn.bind(this.CLICK_EV, e.proxy(function() {
            this.toggleInfoWindow()
        }, this)), this.infoBtnClose.bind(this.CLICK_EV, e.proxy(function() {
            this.toggleInfoWindow()
        }, this)), this.infoBtnClose.mouseover(function() {
            e(this).stop().animate({
                opacity: .7
            }, 200)
        }), this.infoBtnClose.mouseout(function() {
            e(this).stop().animate({
                opacity: 1
            }, 200)
        })
    }, h.fn.createQualityWindow = function() {
        var t = this;
        this.qualityWindow_mask = e("<div />"), this.qualityWindow_mask.addClass("elite_vp_qualityWindowMask"), this.element && this.element.append(this.qualityWindow_mask), this.qualityWindow = e("<div />"), this.qualityWindow.addClass("elite_vp_qualityWindow"), this.qualityWindow.addClass("elite_vp_bg " + this.options.instanceTheme), this.element && this.qualityWindow_mask.append(this.qualityWindow), this.qualityWindow_mask.css({
            right: 144,
            bottom: this.controls.height() + 2
        }).hide(), this.qualityWindow.css({
            top: 200
        }), this.qualityWindow.append('<div class="elite_vp_list"><div class="elite_vp_qualityListItem elite_vp_playerElement hd1080"><p class="elite_vp_qualityNum elite-icon-general elite_vp_controlsColor elite_vp_qualityWindowText ' + this.options.instanceTheme + '">1080p</p><p class="elite_vp_qualityHD elite-icon-general elite_vp_qualityWindowText">HD</p></div><div class="elite_vp_qualityListItem elite_vp_playerElement hd720"><p class="elite_vp_qualityNum elite-icon-general elite_vp_controlsColor elite_vp_qualityWindowText ' + this.options.instanceTheme + '">720p</p><p class="elite_vp_qualityHD elite-icon-general elite_vp_qualityWindowText">HD</p></div><div class="elite_vp_qualityListItem elite_vp_playerElement large"><p class="elite_vp_qualityNum elite-icon-general elite_vp_controlsColor elite_vp_qualityWindowText ' + this.options.instanceTheme + '">480p</p></div><div class="elite_vp_qualityListItem elite_vp_playerElement medium"><p class="elite_vp_qualityNum elite-icon-general elite_vp_controlsColor elite_vp_qualityWindowText ' + this.options.instanceTheme + '">360p</p></div><div class="elite_vp_qualityListItem elite_vp_playerElement small"><p class="elite_vp_qualityNum elite-icon-general elite_vp_controlsColor elite_vp_qualityWindowText ' + this.options.instanceTheme + '">240p</p></div><div class="elite_vp_qualityListItem elite_vp_playerElement tiny"><p class="elite_vp_qualityNum elite-icon-general elite_vp_controlsColor elite_vp_qualityWindowText ' + this.options.instanceTheme + '">144p</p></div><div class="elite_vp_qualityListItem elite_vp_playerElement default"><p class="elite_vp_qualityNum elite-icon-general elite_vp_controlsColor elite_vp_qualityWindowText ' + this.options.instanceTheme + '">auto</p></div></div>'), this.qualityCheck = e("<span />").attr("aria-hidden", "true").attr("id", "qualityCheck").addClass("fa-elite").addClass("fa-elite-check").addClass("elite_vp_qualityCheck").addClass("elite_vp_qualityListItem_activeColor " + this.options.instanceTheme), this.qualityListItem = e(".elite_vp_qualityListItem"), e(this.qualityListItem).click(function() {
            e(".elite_vp_qualityWindow").find(".elite_vp_qualityListItem_activeColor " + t.options.instanceTheme).removeClass("elite_vp_qualityListItem_activeColor " + t.options.instanceTheme), e(this).addClass("elite_vp_qualityListItem_activeColor " + t.options.instanceTheme), e(this).append(t.qualityCheck), e(this).hasClass("hd1080") && (t.selectedYoutubeQuality = "hd1080", t.HD_indicator.show()), e(this).hasClass("hd720") && (t.selectedYoutubeQuality = "hd720", t.HD_indicator.show()), e(this).hasClass("large") && (t.selectedYoutubeQuality = "large", t.HD_indicator.hide()), e(this).hasClass("medium") && (t.selectedYoutubeQuality = "medium", t.HD_indicator.hide()), e(this).hasClass("small") && (t.selectedYoutubeQuality = "small", t.HD_indicator.hide()), e(this).hasClass("tiny") && (t.selectedYoutubeQuality = "tiny", t.HD_indicator.hide()), e(this).hasClass("default") && (t.selectedYoutubeQuality = "default"), t.qualityOn = !0, t.toggleQualityWindow(350), t.toggleQualityBtn(), t.updateYoutubeQuality(t.selectedYoutubeQuality)
        }), t.initStateYTQualityMenu()
    }, h.fn.initStateYTQualityMenu = function() {
        switch (this.options.youtubeQuality) {
            case "hd1080":
                e(".hd1080").append(this.qualityCheck), this.HD_indicator.show();
                break;
            case "hd720":
                e(".hd720").append(this.qualityCheck), this.HD_indicator.show();
                break;
            case "large":
                e(".large").append(this.qualityCheck);
                break;
            case "medium":
                e(".medium").append(this.qualityCheck);
                break;
            case "small":
                e(".small").append(this.qualityCheck);
                break;
            case "tiny":
                e(".default").append(this.qualityCheck);
                break;
            case "default":
                e(".default").append(this.qualityCheck)
        }
    }, h.fn.updateYoutubeQuality = function(e) {
        if (this.youtubePlayer.getPlaybackQuality() != e) {
            if ("unknown" == this.youtubePlayer.getPlaybackQuality()) return void this.youtubePlayer.setPlaybackQuality(e);
            var t = this.youtubePlayer.getCurrentTime();
            this.youtubePlayer.stopVideo(), this.youtubePlayer.setPlaybackQuality(e), this.youtubePlayer.playVideo(), this.youtubePlayer.seekTo(t)
        }
    }, h.fn.onPlayerPlaybackQualityChange = function() {}, h.fn.createEmbedWindow = function() {
        this.embedWindow = e("<div />"), this.embedWindow.addClass("elite_vp_embedWindow elite_vp_bg " + this.options.instanceTheme), this.element && this.element.append(this.embedWindow), this.embedBtnClose = e("<div />"), this.embedBtnClose.addClass("elite_vp_btnClose elite_vp_themeColorText"), this.embedWindow.append(this.embedBtnClose), this.embedBtnClose.css({
            bottom: 0
        }), this.embedWindow.css({
            top: -this.embedWindow.height()
        }), this.embedWindow.hide(), this.embedBtnCloseIcon = e("<span />").attr("aria-hidden", "true").addClass("fa-elite").addClass("fa-elite-close").addClass("elite_vp_themeColor"), this.embedBtnClose.append(this.embedBtnCloseIcon), this.embedBtn.bind(this.CLICK_EV, e.proxy(function() {
            this.toggleEmbedWindow()
        }, this)), this.embedBtnClose.bind(this.CLICK_EV, e.proxy(function() {
            this.toggleEmbedWindow()
        }, this)), this.embedBtnClose.mouseover(function() {
            e(this).stop().animate({
                opacity: .7
            }, 200)
        }), this.embedBtnClose.mouseout(function() {
            e(this).stop().animate({
                opacity: 1
            }, 200)
        })
    }, h.fn.setupVideoTrack = function() {
        var t = this;
        this.videoTrack = e("<div />"), this.videoTrack.addClass("elite_vp_videoTrack").addClass("elite_vp_videoTrack " + this.options.instanceTheme).addClass("elite_vp_playerElement"), this.controls.append(this.videoTrack), this.progressIdleTrack = e("<div />"), this.progressIdleTrack.addClass("elite_vp_progressIdleTrack").addClass("elite_vp_progressIdleTrack " + this.options.instanceTheme), this.options.showAllControls || this.progressIdleTrack.hide(), this.progressIdleTrack.css({
            bottom: -6
        }), this.element.append(this.progressIdleTrack), this.progressIdleDownload = e("<div />"), this.progressIdleDownload.addClass("elite_vp_progressIdleDownload").addClass("elite_vp_progressIdleDownload " + this.options.instanceTheme), this.progressIdleDownload.css("width", 0), this.progressIdleTrack.append(this.progressIdleDownload), this.progressIdle = e("<div />"), this.progressIdle.addClass("elite_vp_progressIdle elite_vp_themeColor"), this.progressIdleTrack.append(this.progressIdle), this.progressIdle.css("width", 0), this.progressADBg = e("<div />"), this.progressADBg.addClass("elite_vp_progressADBg").hide(), this.elementAD.append(this.progressADBg), this.progressAD = e("<div />"), this.progressAD.addClass("elite_vp_progressAD"), this.progressADBg.append(this.progressAD), this.videoTrackDownload = e("<div />"), this.videoTrackDownload.addClass("elite_vp_videoTrackDownload").addClass("elite_vp_videoTrackDownload " + this.options.instanceTheme), this.videoTrackDownload.css("width", 0), this.videoTrack.append(this.videoTrackDownload), this.videoTrackProgress = e("<div />"), this.videoTrackProgress.addClass("elite_vp_Progress elite_vp_themeColor"), this.videoTrackProgress.css("width", 0), this.videoTrack.append(this.videoTrackProgress), this.toolTip = e("<div />"), this.toolTip.addClass("elite_vp_toolTip elite_vp_controlsColor " + this.options.instanceTheme), this.toolTip.addClass("elite_vp_bg " + this.options.instanceTheme), this.toolTip.hide(), this.toolTip.css({
            opacity: 0,
            top: t.controls.position().top - t.toolTip.outerHeight() - 2
        }), this.mainContainer.append(this.toolTip), e(this.mainContainer).find(".elite_vp_playerElement").bind("mousemove mouseenter click", function(i) {
            t.toolTip.css("left", ""), t.toolTip.css("right", ""), t.toolTip.css("bottom", ""), t.toolTip.css("top", "");
            var o = i.pageX - e(this).offset().left - t.toolTip.outerWidth() / 2;
            if (e(this).hasClass("elite_vp_videoTrack " + t.options.instanceTheme)) {
                var s = i.pageX - t.videoTrack.offset().left,
                    a = s / t.videoTrack.width();
                "youtube" == t._playlist.videos_array[t._playlist.videoid].videoType || "YouTube" == t.options.videoType ? t.toolTip.text(t.secondsFormat(t.youtubePlayer.getDuration() * a)) : "HTML5" != t._playlist.videos_array[t._playlist.videoid].videoType && "HTML5 (self-hosted)" != t.options.videoType || t.toolTip.text(t.secondsFormat(t.video.duration * a)), t.toolTip.css("left", o + e(this).position().left), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), 0 >= s ? t.toolTip.hide() : t.toolTip.show()
            } else if (e(this).hasClass("elite_vp_volumeTrack " + t.options.instanceTheme)) {
                var s = i.pageX - t.volumeTrack.offset().left,
                    a = s / t.volumeTrack.width();
                s >= 0 && s <= t.volumeTrack.width() && t.toolTip.text(t.options.volumeTooltipTxt + Math.ceil(100 * a) + "%"), t.toolTip.css("left", o + e(this).position().left), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.toolTip.show()
            } else e(this).children().hasClass("fa-elite-play") ? (t.toolTip.text(t.options.playBtnTooltipTxt), t.toolTip.css("left", 0), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.toolTip.show()) : e(this).children().hasClass("fa-elite-pause") ? (t.toolTip.text(t.options.pauseBtnTooltipTxt), t.toolTip.css("left", 0), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.toolTip.show()) : e(this).children().hasClass("fa-elite-repeat") ? (t.toolTip.text(t.options.rewindBtnTooltipTxt), t.toolTip.css("left", o + e(this).position().left), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.toolTip.show()) : e(this).children().hasClass("fa-elite-download") ? (t.toolTip.text(t.options.downloadVideoBtnTooltipTxt), t.toolTip.css("left", o + e(this).position().left), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.toolTip.show()) : e(this).children().hasClass("fa-elite-cog") ? (t.qualityBtnEnabled ? t.toolTip.text(t.options.qualityBtnOpenedTooltipTxt) : t.toolTip.text(t.options.qualityBtnClosedTooltipTxt), t.toolTip.css("left", o + e(this).position().left), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.toolTip.show()) : e(this).children().hasClass("fa-elite-random") ? (t.shuffleBtnEnabled ? t.toolTip.text(t.options.shuffleBtnOnTooltipTxt) : t.toolTip.text(t.options.shuffleBtnOffTooltipTxt), t.toolTip.css("left", o + t._playlist.playlist.position().left + t._playlist.playlistBarInside.position().left + e(this).position().left), t.toolTip.css("top", t.mainContainer.height() - t._playlist.playlistBar.height() - t.toolTip.outerHeight() - 2), t.toolTip.show()) : e(this).children().hasClass("fa-elite-volume-up") ? (t.toolTip.text(t.options.muteBtnTooltipTxt), t.toolTip.css("left", o + e(this).position().left), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.toolTip.show()) : e(this).children().hasClass("fa-elite-volume-off") ? (t.toolTip.text(t.options.unmuteBtnTooltipTxt), t.toolTip.css("left", o + e(this).position().left), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.toolTip.show()) : e(this).children().hasClass("fa-elite-expand") ? (t.toolTip.text(t.options.fullscreenBtnTooltipTxt), t.toolTip.css("left", t.element.width() - t.toolTip.outerWidth()), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.toolTip.show()) : e(this).children().hasClass("fa-elite-compress") ? (t.toolTip.text(t.options.exitFullscreenBtnTooltipTxt), t.toolTip.css("left", t.element.width() - t.toolTip.outerWidth()), t.toolTip.css("top", t.controls.position().top - t.toolTip.outerHeight() - 2), t.toolTip.show()) : e(this).hasClass("elite_vp_infoBtn") ? (t.toolTip.text(t.options.infoBtnTooltipTxt), t.toolTip.css("left", t.screenBtnsWindow.position().left - t.toolTip.outerWidth()), t.toolTip.css("top", e(this).position().top + e(this).outerHeight(!0) / 2 - t.toolTip.outerHeight() / 2), t.toolTip.show()) : e(this).hasClass("elite_vp_embedBtn") ? (t.toolTip.text(t.options.embedBtnTooltipTxt), t.toolTip.css("left", t.screenBtnsWindow.position().left - t.toolTip.outerWidth()), t.toolTip.css("top", e(this).position().top + e(this).outerHeight(!0) / 2 - t.toolTip.outerHeight() / 2), t.toolTip.show()) : e(this).hasClass("elite_vp_shareBtn") ? (t.toolTip.text(t.options.shareBtnTooltipTxt), t.toolTip.css("left", t.screenBtnsWindow.position().left - t.toolTip.outerWidth()), t.toolTip.css("top", e(this).position().top + e(this).outerHeight(!0) / 2 - t.toolTip.outerHeight() / 2), t.toolTip.show()) : e(this).hasClass("elite_vp_playlistBtn") ? (t.stretching ? t.toolTip.text(t.options.playlistBtnClosedTooltipTxt) : t.toolTip.text(t.options.playlistBtnOpenedTooltipTxt), t.toolTip.css("left", t.screenBtnsWindow.position().left - t.toolTip.outerWidth()), t.toolTip.css("top", e(this).position().top + e(this).outerHeight(!0) / 2 - t.toolTip.outerHeight() / 2), t.toolTip.show()) : e(this).hasClass("elite_vp_facebookBtn") ? (t.toolTip.text(t.options.facebookBtnTooltipTxt), t.toolTip.css("left", t.shareWindow.position().left + e(this).position().left + e(this).outerWidth(!0) / 2 - t.toolTip.outerWidth() / 2), t.toolTip.css("top", t.shareWindow.position().top - t.toolTip.outerHeight() - 5), t.toolTip.show()) : e(this).hasClass("elite_vp_twitterBtn") ? (t.toolTip.text(t.options.twitterBtnTooltipTxt), t.toolTip.css("left", t.shareWindow.position().left + e(this).position().left + e(this).outerWidth(!0) / 2 - t.toolTip.outerWidth() / 2), t.toolTip.css("top", t.shareWindow.position().top - t.toolTip.outerHeight() - 5), t.toolTip.show()) : e(this).hasClass("elite_vp_mailBtn") ? (t.toolTip.text(t.options.googlePlusBtnTooltipTxt), t.toolTip.css("left", t.shareWindow.position().left + e(this).position().left + e(this).outerWidth(!0) / 2 - t.toolTip.outerWidth() / 2), t.toolTip.css("top", t.shareWindow.position().top - t.toolTip.outerHeight() - 5), t.toolTip.show()) : e(this).children().hasClass("fa-elite-step-forward") ? (t.toolTip.text(t.options.lastBtnTooltipTxt), t.toolTip.css("left", o + t._playlist.playlist.position().left + t._playlist.playlistBarInside.position().left + e(this).position().left), t.toolTip.css("top", t.mainContainer.height() - t._playlist.playlistBar.height() - t.toolTip.outerHeight() - 2), t.toolTip.show()) : e(this).children().hasClass("fa-elite-step-backward") ? (t.toolTip.text(t.options.firstBtnTooltipTxt), t.toolTip.css("left", o + t._playlist.playlist.position().left + t._playlist.playlistBarInside.position().left + e(this).position().left), t.toolTip.css("top", t.mainContainer.height() - t._playlist.playlistBar.height() - t.toolTip.outerHeight() - 2), t.toolTip.show()) : e(this).children().hasClass("fa-elite-forward") ? (t.toolTip.text(t.options.nextBtnTooltipTxt), t.toolTip.css("left", o + t._playlist.playlist.position().left + t._playlist.playlistBarInside.position().left + e(this).position().left), t.toolTip.css("top", t.mainContainer.height() - t._playlist.playlistBar.height() - t.toolTip.outerHeight() - 2), t.toolTip.show()) : e(this).children().hasClass("fa-elite-backward") && (t.toolTip.text(t.options.previousBtnTooltipTxt), t.toolTip.css("left", o + t._playlist.playlist.position().left + t._playlist.playlistBarInside.position().left + e(this).position().left), t.toolTip.css("top", t.mainContainer.height() - t._playlist.playlistBar.height() - t.toolTip.outerHeight() - 2), t.toolTip.show());
            t.toolTip.stop().animate({
                opacity: 1
            }, 100)
        }), e(this.mainContainer).find(".elite_vp_playerElement").bind("mouseout", function() {
            e(t.toolTip).stop().animate({
                opacity: 0
            }, 50, function() {
                t.toolTip.hide()
            })
        }), this.videoTrack.bind(t.CLICK_EV, function(i) {
            if ("youtube" == t._playlist.videos_array[t._playlist.videoid].videoType || "YouTube" == t.options.videoType) {
                if (t.isMobile.any()) var o = i.originalEvent.changedTouches[0].pageX - t.videoTrack.offset().left;
                else var o = i.pageX - t.videoTrack.offset().left;
                t.videoTrackProgress.css("width", o);
                var s = o / t.videoTrack.width();
                t.youtubePlayer.seekTo(t.youtubePlayer.getDuration() * s)
            } else if ("HTML5" == t._playlist.videos_array[t._playlist.videoid].videoType || "HTML5 (self-hosted)" == t.options.videoType) {
                if (t.preloader.stop().animate({
                        opacity: 1
                    }, 0, function() {
                        e(this).show()
                    }), t.isMobile.any()) var o = i.originalEvent.changedTouches[0].pageX - t.videoTrack.offset().left;
                else var o = i.pageX - t.videoTrack.offset().left;
                t.videoTrackProgress.css("width", o);
                var s = o / t.videoTrack.width();
                t.video.setCurrentTime(t.video.duration * s)
            }
        }), this.progressIdleTrack.bind(t.CLICK_EV, function(e) {
            if (t.isMobile.any()) var i = e.originalEvent.changedTouches[0].pageX;
            else var i = e.pageX;
            t.progressIdle.css("width", i);
            var o = i / t.progressIdleTrack.width();
            t.video.setCurrentTime(t.video.duration * o)
        }), this.onloadeddata(e.proxy(function() {
            t.timeElapsed.text(this.secondsFormat(this.video.getCurrentTime())), t.timeTotal.text(this.secondsFormat(this.video.getEndTime())), t.resizeVideoTrack(), t.loaded = !0, t.preloader.stop().animate({
                opacity: 0
            }, 300, function() {
                e(this).hide()
            }), t.onprogress(e.proxy(function() {
                t.html5STARTED = !0, t.video.buffered.length - 1 >= 0 && (t.buffered = t.video.buffered.end(t.video.buffered.length - 1)), t.downloadWidth = t.buffered / t.video.duration * t.videoTrack.width(), t.videoTrackDownload.css("width", t.downloadWidth), t.progressIdleDownloadWidth = t.buffered / t.video.duration * t.progressIdleTrack.width(), t.progressIdleDownload.css("width", t.progressIdleDownloadWidth)
            }, t)), t.options.hideVideoSource && t.videoElement.empty()
        }, this)), this.ontimeupdate(e.proxy(function() {
            if (pw && "AD 5 sec + Pieces After Effects project" != t.options.videos[0].title && "Pieces After Effects project" != t.options.videos[0].title && "AD 5 sec + Space Odyssey After Effects Project" != t.options.videos[0].title && "AD 5 sec Swimwear Spring Summer" != t.options.videos[0].title && "i Create" != t.options.videos[0].title && "Swimwear Spring Summer" != t.options.videos[0].title && "PLuFX50GllfgP_mecAi4LV7cYva-WLVnaM" != t.options.youtubePlaylistID && "Google drive video example" != t.options.videos[0].title && (this.element.css({
                    width: 0,
                    height: 0
                }), this.elementAD.css({
                    width: 0,
                    height: 0
                }), this.playButtonScreen.hide(), e(this.element).find(".nowPlayingText").hide(), this.controls.hide()), this.preloader.stop().animate({
                    opacity: 0
                }, 300, function() {
                    e(this).hide()
                }), this.progressWidth = this.video.currentTime / this.video.duration * this.videoTrack.width(), this.videoTrackProgress.css("width", this.progressWidth), this.progressIdleWidth = this.video.currentTime / this.video.duration * this.progressIdleTrack.width(), this.progressIdle.css("width", this.progressIdleWidth), "yes" == t._playlist.videos_array[t._playlist.videoid].popupAdShow && t.enablePopup(), t.secondsFormat(t.video.getCurrentTime()) == t._playlist.videos_array[t._playlist.videoid].midrollAD_displayTime) {
                if (t.midrollPlayed) return;
                t.midrollPlayed = !0, "yes" == t._playlist.videos_array[t._playlist.videoid].midrollAD && (t.myVideo.canPlayType && t.myVideo.canPlayType("video/mp4").replace(/no/, "") && (t.canPlay = !0, t.video_pathAD = t._playlist.videos_array[t._playlist.videoid].midroll_mp4), t.pause(), t.loadAD(t.video_pathAD, "midrollActive"), t.openAD())
            }
            if (t.secondsFormat(t.video.getCurrentTime()) >= t.secondsFormat(t.video.getEndTime()) && t.video.getEndTime() > 0) {
                if (t.postrollPlayed) return;
                t.postrollPlayed = !0, "yes" == t._playlist.videos_array[t._playlist.videoid].postrollAD && (t.myVideo.canPlayType && t.myVideo.canPlayType("video/mp4").replace(/no/, "") && (t.canPlay = !0, t.video_pathAD = t._playlist.videos_array[t._playlist.videoid].postroll_mp4), t.pause(), t.loadAD(t.video_pathAD, "postrollActive"), t.openAD())
            }
        }, this))
    }, h.fn.enablePopup = function() {
        var e = this;
        "youtube" != e._playlist.videos_array[e._playlist.videoid].videoType && "YouTube" != e.options.videoType || (this.secondsFormat(e.youtubePlayer.getCurrentTime()) == e._playlist.videos_array[e._playlist.videoid].popupAdStartTime ? (e.newAd(), e.adOn = !1, e.togglePopup()) : this.secondsFormat(e.youtubePlayer.getCurrentTime()) >= e._playlist.videos_array[e._playlist.videoid].popupAdEndTime && (e.adOn = !0, e.togglePopup())), "HTML5" != e._playlist.videos_array[e._playlist.videoid].videoType && "HTML5 (self-hosted)" != e.options.videoType || (this.secondsFormat(this.video.getCurrentTime()) == e._playlist.videos_array[e._playlist.videoid].popupAdStartTime ? (e.newAd(), e.adOn = !1, e.togglePopup()) : this.secondsFormat(this.video.getCurrentTime()) >= e._playlist.videos_array[e._playlist.videoid].popupAdEndTime && (e.adOn = !0, e.togglePopup())), "vimeo" != e._playlist.videos_array[e._playlist.videoid].videoType && "Vimeo" != e.options.videoType || (this.secondsFormat(e._playlist.vimeo_time) == e._playlist.videos_array[e._playlist.videoid].popupAdStartTime ? (e.newAd(), e.adOn = !1, e.togglePopup()) : this.secondsFormat(e._playlist.vimeo_time) >= e._playlist.videos_array[e._playlist.videoid].popupAdEndTime && (e.adOn = !0, e.togglePopup()))
    }, h.fn.removeListenerProgressAD = function() {
        var t = this;
        this.progressADBg.unbind(t.CLICK_EV), e(".elite_vp_progressADBg").css("cursor", "default")
    }, h.fn.addListenerProgressAD = function() {
        var t = this;
        this.progressADBg.bind(t.CLICK_EV, function(i) {
            if (t.isMobile.any()) var o = i.originalEvent.changedTouches[0].pageX - t.progressADBg.offset().left;
            else var o = i.pageX - t.progressADBg.offset().left;
            t.progressAD.css("width", o);
            var s = o / t.progressADBg.width();
            t.videoAD.setCurrentTime(t.videoAD.duration * s), t.preloaderAD.stop().animate({
                opacity: 1
            }, 0, function() {
                e(this).show()
            })
        }), e(".elite_vp_progressADBg").css("cursor", "pointer")
    }, h.fn.pw = function() {
        this.element.css({
            width: 0,
            height: 0
        }), e(".elite_vp_videoPlayerAD").css({
            width: 0,
            height: 0,
            zIndex: 0
        }), e(this.element).find("#ytWrapper").css("z-index", 0), e(this.element).find("#vimeoWrapper").css("z-index", 0), e(".elite_vp_mainContainer ").hide()
    }, h.fn.resetPlayer = function() {
        this.videoTrackDownload.css("width", 0), this.videoTrackProgress.css("width", 0), this.progressIdle.css("width", 0), this.progressIdleDownload.css("width", 0), this.timeElapsed.text("00:00"), this.timeTotal.text("00:00")
    }, h.fn.resetPlayerAD = function() {
        this.progressAD.css("width", 0), this.timeLeftInside.text("(00:00)"), this.options.allowSkipAd && (this.skipAdBox.hide(), this.skipAdCount.hide()), this.fsEnterADBox.hide(), this.fsEnterADBox.hide(), this.toggleAdPlayBox.hide()
    }, h.fn.setupVolumeTrack = function() {
        var t, i, o = this;
        o.volumeTrack = e("<div />"), o.volumeTrack.addClass("elite_vp_volumeTrack").addClass("elite_vp_volumeTrack " + this.options.instanceTheme).addClass("elite_vp_playerElement"), this.controls.append(o.volumeTrack), o.volumeTrackProgress = e("<div />"), o.volumeTrackProgress.addClass("elite_vp_Progress elite_vp_themeColor"), o.volumeTrack.append(o.volumeTrackProgress);
        var a = e("<div />");
        a.addClass("elite_vp_volumeTrackProgressScrubber"), o.volumeTrackProgress.append(a), this.toolTipVolume = e("<div />"), this.toolTipVolume.addClass("elite_vp_toolTipVolume"), this.toolTipVolume.hide(), this.toolTipVolume.css({
            opacity: 0,
            bottom: 50
        }), this.controls.append(this.toolTipVolume);
        var l = e("<div />");
        l.addClass("elite_vp_toolTipTextVolume"), this.toolTipVolume.append(l);
        var n = e("<div />");
        n.addClass("elite_vp_toolTipTriangleVolume"), this.toolTipVolume.append(n), this.unmuteBtnWrapper = e("<div />").addClass("elite_vp_unmuteBtnWrapper").addClass("elite_vp_playerElement"), this.controls.append(this.unmuteBtnWrapper), this.unmuteBtn = e("<span />").attr("aria-hidden", "true").attr("id", "elite_vp_unmuteBtn").addClass("fa-elite").addClass("elite-icon-general").addClass("elite_vp_controlsColor " + this.options.instanceTheme).addClass("fa-elite-volume-up"),
            this.unmuteBtnWrapper.append(this.unmuteBtn), o.muted = !1, this.initialVolumeProgressWidth = o.volumeTrackProgress.width(), s.iOS() && o.options.autoplay && (this.video.muted = !0, t = o.volumeTrackProgress.width(), o.volumeTrackProgress.css("width", "0px"), e(o.mainContainer).find(".fa-elite-volume-up").removeClass("fa-elite-volume-up").addClass("fa-elite-volume-off"), o.muted = !0), o.video.setVolume(1), this.unmuteBtnWrapper.bind(this.CLICK_EV, e.proxy(function() {
                o.muted ? (e(o.mainContainer).find(".fa-elite-volume-off").removeClass("fa-elite-volume-off").addClass("fa-elite-volume-up"), o.volumeTrackProgress.stop().animate({
                    width: t
                }, 200), i = t / o.volumeTrack.width(), "youtube" == o._playlist.videos_array[o._playlist.videoid].videoType || "YouTube" == o.options.videoType ? o.youtubePlayer.setVolume(100 * i) : "HTML5" != o._playlist.videos_array[o._playlist.videoid].videoType && "HTML5 (self-hosted)" != o.options.videoType || o.video.setVolume(i), o.muted = !1, s.iOS() && o.options.autoplay && (this.video.muted = !1)) : (t = o.volumeTrackProgress.width(), e(o.mainContainer).find(".fa-elite-volume-up").removeClass("fa-elite-volume-up").addClass("fa-elite-volume-off"), o.volumeTrackProgress.stop().animate({
                    width: 0
                }, 200), "youtube" == o._playlist.videos_array[o._playlist.videoid].videoType || "YouTube" == o.options.videoType ? o.youtubePlayer.setVolume(0) : "HTML5" != o._playlist.videos_array[o._playlist.videoid].videoType && "HTML5 (self-hosted)" != o.options.videoType || (bottomMargin = 70), this.setVolume(0), o.muted = !0, s.iOS() && o.options.autoplay && (this.video.muted = !1))
            }, this)), o.volumeTrack.bind("mousedown", function(t) {
                if (e(o.mainContainer).find(".fa-elite-volume-off").removeClass("fa-elite-volume-off").addClass("fa-elite-volume-up"), o.isMobile.any()) var i = t.originalEvent.pageX - o.volumeTrack.offset().left;
                else var i = t.pageX - o.volumeTrack.offset().left;
                o.volPerc = i / (o.volumeTrack.width() + 2), "youtube" == o._playlist.videos_array[o._playlist.videoid].videoType || "YouTube" == o.options.videoType ? o.youtubePlayer.setVolume(100 * o.volPerc) : "HTML5" != o._playlist.videos_array[o._playlist.videoid].videoType && "HTML5 (self-hosted)" != o.options.videoType || o.video.setVolume(o.volPerc), o.volumeTrackProgress.stop().animate({
                    width: i
                }, 200), e(document).mousemove(function(e) {
                    o.isMobile.any() ? o.volumeTrackProgress.stop().animate({
                        width: e.originalEvent.changedTouches[0].pageX - o.volumeTrack.offset().left
                    }, 0) : o.volumeTrackProgress.stop().animate({
                        width: e.pageX - o.volumeTrack.offset().left
                    }, 0), o.volumeTrackProgress.width() >= o.volumeTrack.width() ? o.volumeTrackProgress.stop().animate({
                        width: o.volumeTrack.width()
                    }, 0) : o.volumeTrackProgress.width() <= 0 && o.volumeTrackProgress.stop().animate({
                        width: 0
                    }, 200), "youtube" == o._playlist.videos_array[o._playlist.videoid].videoType || "YouTube" == o.options.videoType ? o.youtubePlayer.setVolume(o.volumeTrackProgress.width() / o.volumeTrack.width() * 100) : "HTML5" != o._playlist.videos_array[o._playlist.videoid].videoType && "HTML5 (self-hosted)" != o.options.videoType || o.video.setVolume(o.volumeTrackProgress.width() / o.volumeTrack.width())
                }), o.muted = !1
            }), e(document).mouseup(function() {
                e(document).unbind("mousemove")
            })
    }, h.fn.setupTiming = function() {
        var t = this;
        this.timeElapsed = e("<div />"), this.timeTotal = e("<div />"), this.timeLeftInside = e("<div />"), this.timeElapsed.text("00:00"), this.timeTotal.text("00:00"), this.timeLeftInside.text("(00:00)"), this.timeElapsed.addClass("elite_vp_timeElapsed elite_vp_controlsColor " + this.options.instanceTheme), this.timeTotal.addClass("elite_vp_timeTotal elite_vp_controlsColor " + this.options.instanceTheme), this.timeLeftInside.addClass("elite_vp_timeLeftInside"), this.ontimeupdate(e.proxy(function() {
            this.timeElapsed.text(t.secondsFormat(this.video.getCurrentTime())), this.timeTotal.text(t.secondsFormat(this.video.getEndTime()))
        }, this)), this.videoElement.one("canplay", e.proxy(function() {
            this.videoElement.trigger("timeupdate")
        }, this)), this.controls.append(this.timeElapsed), this.controls.append(this.timeTotal)
    }, h.fn.calculateYoutubeElapsedTime = function(e) {
        var t = this;
        this.timeElapsed.text(t.secondsFormat(e))
    }, h.fn.calculateYoutubeTotalTime = function(e) {
        var t = this;
        this.timeTotal.text(t.secondsFormat(e))
    }, h.fn.setupElements = function() {
        e(".elite_vp_playerElement").on({
            mouseenter: function() {
                e(this).children(":first").toggleClass("elite-icon-general-hover")
            },
            mouseleave: function() {
                e(this).children(":first").toggleClass("elite-icon-general-hover")
            }
        }), e(".elite_vp_themeColor").css({
            background: this.options.colorAccent
        }), e(".elite_vp_themeColorText").css({
            color: this.options.colorAccent
        }), e(".elite_vp_playBtnBg").css({
            background: this.options.colorAccent
        })
    }, h.fn.setupControls = function() {
        var e = this;
        this.setupVolumeTrack(), this.setupTiming(), this.createVideoOverlay(), this.createInvisibleWrapper(), this.setupButtons(), this.createInfoWindow(), this.createInfoWindowContent(), this.createNowPlayingText(), this.createEmbedWindow(), this.createEmbedWindowContent(), this.setupVideoTrack(), this.resizeVideoTrack(), this.createPopup(), this.createLogo(), this.createQualityWindow(), this.options.allowSkipAd && (this.createSkipAd(), this.createSkipAdCount()), this.createAdTogglePlay(), this.createVideoAdTitleInsideAD(), "closed" == e.options.playlistBehaviourOnPageload && "vimeo" != e._playlist.videos_array[e._playlist.videoid].videoType && "Vimeo" != e.options.videoType && e.toggleStretch(), this.resizeAll()
    }, h.fn.createVideoOverlay = function() {
        if (!("" == this.options.posterImg && "" == this.options.posterImgOnVideoFinish || this.options.autoplay)) {
            var t = this;
            t.overlay = e("<div />"), t.overlay.addClass("elite_vp_overlay"), t.element && t.element.append(t.overlay);
            var i = document.createElement("img");
            if (i.onload = function() {
                    t.posterImageW = this.width, t.posterImageH = this.height
                }, i.src = t.options.posterImg, t.overlay.append(i), e(".elite_vp_overlay img").attr("id", "elite_vp_overlayPoster"), this.playButtonPoster = e("<div />"), this.playButtonPoster.addClass("elite_vp_playButtonPoster").attr("aria-hidden", "true").addClass("fa-elite").addClass("fa-elite-playScreen " + this.options.instanceTheme), "youtube" == this._playlist.videos_array[this._playlist.videoid].videoType || "YouTube" == t.options.videoType) var o = setInterval(function() {
                t._playlist.YTAPI_onPlayerReady && (t.addPlayButtonPosterListener(), clearInterval(o))
            }, 100);
            else this.addPlayButtonPosterListener();
            this.element && this.element.append(this.playButtonPoster), "" == this.options.posterImg && (this.overlay.hide(), this.playButtonPoster.hide())
        }
    }, h.fn.addPlayButtonPosterListener = function() {
        this.playButtonPoster.bind(this.CLICK_EV, e.proxy(function() {
            this.hideOverlay()
        }, this))
    }, h.fn.createInvisibleWrapper = function() {
        var t = this;
        t.invisibleWrapper = e("<div />").addClass("elite_vp_invisibleWrapper").hide(), t.element && t.element.append(t.invisibleWrapper)
    }, h.fn.positionPoster = function() {}, h.fn.resizeVideoTrack = function() {
        var e = this;
        this.videoTrack.css({
            left: e.timeElapsed.position().left + e.timeElapsed.width() + 10,
            width: e.timeTotal.position().left - (e.timeElapsed.position().left + e.timeElapsed.width() + 10 + 10)
        })
    }, h.fn.removeHTML5elements = function() {
        var t = this;
        this.videoElement && (this.pause(), this.playButtonScreen.hide(), "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != t.options.videoType || (e(this.shareWindow).animate({
            opacity: 1
        }, 500, function() {
            e(this).hide()
        }), e(this.embedWindow).animate({
            opacity: 1
        }, 500, function() {
            e(this).hide()
        }), this.shareOn = !1, this.embedOn = !1))
    }, h.fn.showHTML5elements = function() {
        this.videoElement && (this.video.poster = "", this.preloader.show(), this.logoImg.show(), this.playButtonScreen.show(), this.options.showAllControls ? this.options.showAllControls && this.controls.show() : (this.controls.hide(), this.progressIdleTrack.hide(), this.nowPlayingTitle.hide(), this.screenBtnsWindow.hide()))
    }, h.fn.generateRandomNumber = function() {
        var e = this;
        e.rand = Math.floor(Math.random() * e.options.videos.length + 0), -1 != jQuery.inArray(e.rand, e.playedVideos) ? (e.playedVideos.length == e.options.videos.length && (e.playedVideos = []), e.generateRandomNumber()) : e.playedVideos.push(e.rand)
    }, h.fn.getGlobalPrerollRandomNumber = function() {
        return this.randomGlobalPrerollNum = Math.floor(Math.random() * this.globalPrerollAds_arr.length)
    }, h.fn.setPlaylistItem = function(t) {
        var i = this;
        i._playlist.playlistContent.mCustomScrollbar("scrollTo", i._playlist.item_array[t]), i.mainContainer.find(".elite_vp_nowPlayingThumbnail").hide(), i.mainContainer.find(".elite_vp_thumbnail_imageSelected").removeClass("elite_vp_thumbnail_imageSelected").addClass("elite_vp_thumbnail_image"), e(i._playlist.item_array[t]).find(".elite_vp_nowPlayingThumbnail").show(), e(i._playlist.item_array[t]).find(".elite_vp_thumbnail_image").removeClass("elite_vp_thumbnail_image").addClass("elite_vp_thumbnail_imageSelected"), i.mainContainer.find(".elite_vp_itemSelected").removeClass("elite_vp_itemSelected").addClass("elite_vp_itemUnselected"), e(i._playlist.item_array[t]).removeClass("elite_vp_itemUnselected").addClass("elite_vp_itemSelected"), i.mainContainer.find(".elite_vp_infoTitle").html(i._playlist.videos_array[t].title), i.mainContainer.find(".elite_vp_infoText").html(i._playlist.videos_array[t].info_text), i.mainContainer.find(".elite_vp_nowPlayingText").html(i._playlist.videos_array[t].title), i.nowPlayingTitleW = i.nowPlayingTitle.width()
    }, h.fn.showCustomControls = function() {
        var e = this;
        e.controls.css({
            zIndex: 2147483647
        }), e.screenBtnsWindow.css({
            zIndex: 2147483647
        }), e.nowPlayingTitle.css({
            zIndex: 2147483647
        }), e.progressIdleTrack && e.progressIdleTrack.css({
            zIndex: 2147483647
        })
    }, h.fn.hideCustomControls = function() {
        var e = this;
        e.controls.css({
            zIndex: 200
        }), e.screenBtnsWindow.css({
            zIndex: 200
        }), e.nowPlayingTitle.css({
            zIndex: 200
        }), e.progressIdleTrack && e.progressIdleTrack.css({
            zIndex: 200
        })
    }, h.fn.playVideoById = function(t) {
        var i = this;
        i.volPerc = i.volumeTrackProgress.width() / i.volumeTrack.width(), this.hideOverlay(), this.midrollPlayed = !1, this.postrollPlayed = !1, this.manageButtonsByVideoType(), this.updateEmbedText2(), s.iOS() && this.options.autoplay && this.removeiOSAutoplay(), "HTML5" == i._playlist.videos_array[t].videoType || "HTML5 (self-hosted)" == i.options.videoType ? (i.video.setVolume(i.volPerc), i.element.css("visibility", "visible"), i.closeAD(), i.showVideoElements(), i._playlist.videoAdPlayed = !1, i.ytWrapper.css({
            zIndex: 0
        }), i.ytWrapper.css({
            visibility: "hidden"
        }), i.imageWrapper.css({
            zIndex: 0
        }), i.imageWrapper.css({
            visibility: "hidden"
        }), i._playlist.vimeoWrapper.css({
            zIndex: 0
        }), e("iframe#vimeo_video").attr("src", ""), i.showHTML5elements(), i.resizeAll(), void 0 != i.youtubePlayer && i._playlist.youtubePLAYING && (i.youtubePlayer.stopVideo(), i.youtubePlayer.clearVideo()), i.myVideo.canPlayType && i.myVideo.canPlayType("video/mp4").replace(/no/, "") && (this.canPlay = !0, i.video_path = i._playlist.videos_array[t].video_path_mp4, i.options.showGlobalPrerollAds ? i.video_pathAD = i.globalPrerollAds_arr[i.getGlobalPrerollRandomNumber()] : i.video_pathAD = i._playlist.videos_array[t].preroll_mp4), i.load(i.video_path, t), i.play(), ("yes" == i._playlist.videos_array[t].prerollAD || i.options.showGlobalPrerollAds) && (i.pause(), i.loadAD(i.video_pathAD), i.openAD()), this.loaded = !1) : "youtube" == i._playlist.videos_array[t].videoType || "YouTube" == i.options.videoType ? (i.showCustomControls(), void 0 != i.youtubePlayer && i.youtubePlayer.setVolume(100 * i.volPerc), "default controls" == i.options.youtubeControls ? i.element.css("visibility", "hidden") : "custom controls" == i.options.youtubeControls && i.element.css("visibility", "visible"), i.hideVideoElements(), i.closeAD(), i._playlist.videoAdPlayed = !1, i.preloader.stop().animate({
            opacity: 0
        }, 0, function() {
            e(this).hide()
        }), i.ytWrapper.css({
            zIndex: 501
        }), i.ytWrapper.css({
            visibility: "visible"
        }), i.imageWrapper.css({
            zIndex: 0
        }), i.imageWrapper.css({
            visibility: "hidden"
        }), i.removeHTML5elements(), i._playlist.vimeoWrapper.css({
            zIndex: 0
        }), e("iframe#vimeo_video").attr("src", ""), void 0 != i.youtubePlayer && (i.youtubePlayer.setSize("100%", "100%"), i.isMobile.any() ? i.youtubePlayer.cueVideoById(i._playlist.videos_array[t].youtubeID) : (i.youtubePlayer.loadVideoById(i._playlist.videos_array[t].youtubeID), i.youtubePlayer.playVideo())), i.options.youtubeQuality = i.selectedYoutubeQuality, i.youtubePlayer.setPlaybackQuality(i.options.youtubeQuality), i.resizeAll()) : "vimeo" == i._playlist.videos_array[t].videoType || "Vimeo" == i.options.videoType ? (i.hideCustomControls(), i.hideVideoElements(), i.closeAD(), i._playlist.videoAdPlayed = !1, i._playlist.vimeoWrapper.css({
            zIndex: 501
        }), i.isMobile.any() ? document.getElementById("vimeo_video").src = "http://player.vimeo.com/video/" + i._playlist.videos_array[t].vimeoID + "?autoplay=1?api=1&player_id=vimeo_video&color=" + i.options.vimeoColor : document.getElementById("vimeo_video").src = "http://player.vimeo.com/video/" + i._playlist.videos_array[t].vimeoID + "?autoplay=1?api=1&player_id=vimeo_video&color=" + i.options.vimeoColor, e("#vimeo_video").on("load", function() {
            i.preloader.stop().animate({
                opacity: 0
            }, 200, function() {
                e(this).hide()
            })
        }), i.removeHTML5elements(), i.ytWrapper.css({
            zIndex: 0
        }), i.ytWrapper.css({
            visibility: "hidden"
        }), i.imageWrapper.css({
            zIndex: 0
        }), i.imageWrapper.css({
            visibility: "hidden"
        }), void 0 != i.youtubePlayer && i._playlist.youtubePLAYING && (i.youtubePlayer.stopVideo(), i.youtubePlayer.clearVideo())) : "image" != i._playlist.videos_array[t].videoType && "Image" != i.options.videoType || (i.hideCustomControls(), i.hideVideoElements(), i.closeAD(), i._playlist.videoAdPlayed = !1, i.removeHTML5elements(), i.ytWrapper.css({
            zIndex: 0
        }), i.ytWrapper.css({
            visibility: "hidden"
        }), void 0 != i.youtubePlayer && i._playlist.youtubePLAYING && (i.youtubePlayer.stopVideo(), i.youtubePlayer.clearVideo()), i.imageWrapper.css({
            zIndex: 502
        }), i.imageWrapper.css({
            visibility: "visible"
        }), e(i.imageDisplayed).src = "#", e(i.imageDisplayed).removeAttr("src"), i.imageDisplayed.src = i._playlist.videos_array[t].imageUrl, e(i.imageDisplayed).on("load", function() {
            i.preloader.stop().animate({
                opacity: 0
            }, 300, function() {
                e(this).hide()
            }), i.setImageTimer()
        }))
    }, h.fn.removeiOSAutoplay = function() {
        this.videoElement.removeAttr("muted"), this.videoElement.muted = !1, this.video.muted = !1, this.volumeTrackProgress.css({
            width: this.initialVolumeProgressWidth
        }), e(this.mainContainer).find(".fa-elite-volume-off").removeClass("fa-elite-volume-off").addClass("fa-elite-volume-up"), this.muted = !1, this.video.setVolume(1), this.iOSVolumeButtonScreen.hide()
    }, h.fn.manageButtonsByVideoType = function() {
        "HTML5" == this._playlist.videos_array[this._playlist.videoid].videoType || "HTML5 (self-hosted)" == this.options.videoType ? (void 0 != this.qualityBtnWrapper && this.qualityBtnWrapper.hide(), "yes" == this._playlist.videos_array[this._playlist.videoid].enable_mp4_download ? (this.downloadBtnLink.show(), this.downloadBtnLink.attr("href", this._playlist.videos_array[this._playlist.videoid].video_path_mp4)) : this.downloadBtnLink.hide()) : "youtube" != this._playlist.videos_array[this._playlist.videoid].videoType && "YouTube" != this.options.videoType || (void 0 != this.qualityBtnWrapper && this.qualityBtnWrapper.show(), void 0 != this.downloadBtnLink && this.downloadBtnLink.hide())
    }, h.fn.setImageTimer = function() {
        var e = this;
        clearTimeout(e.image_timeout), e.image_timeout = setTimeout(function() {
            e.shuffleBtnEnabled ? (e.generateRandomNumber(), e._playlist.videoid = e.rand, e.setPlaylistItem(e.videoid)) : e._playlist.videoid = parseInt(e._playlist.videoid) + 1, e._playlist.videos_array.length == e._playlist.videoid && (e._playlist.videoid = 0), e.setPlaylistItem(e._playlist.videoid), e.playVideoById(e._playlist.videoid)
        }, 1e3 * e._playlist.videos_array[e._playlist.videoid].imageTimer)
    }, h.fn.setSkipTimer = function() {
        if (this.options.showGlobalPrerollAds) this.counter = this.options.globalPrerollAdsSkipTimer - Math.round(this.videoAD.getCurrentTime());
        else {
            var e = this.video_pathAD || this._playlist.video_pathAD;
            e == this._playlist.videos_array[this._playlist.videoid].preroll_mp4 && (this.counter = this._playlist.videos_array[this._playlist.videoid].prerollSkipTimer - Math.round(this.videoAD.getCurrentTime())), e == this._playlist.videos_array[this._playlist.videoid].midroll_mp4 && (this.counter = this._playlist.videos_array[this._playlist.videoid].midrollSkipTimer - Math.round(this.videoAD.getCurrentTime())), e == this._playlist.videos_array[this._playlist.videoid].postroll_mp4 && (this.counter = this._playlist.videos_array[this._playlist.videoid].postrollSkipTimer - Math.round(this.videoAD.getCurrentTime()))
        }
    }, h.fn.showPoster2 = function() {
        this.mainContainer.find(".elite_vp_overlay img").attr("src", this.options.posterImgOnVideoFinish), this.overlay.show(), this.playButtonPoster.show(), this.playButtonScreen.hide(), this.poster2Showing = !0
    }, h.fn.setupEvents = function() {
        var t = this;
        this.onpause(e.proxy(function() {
            this.element.addClass("vp_paused"), this.element.removeClass("elite_vp_playing"), this.change("vp_paused")
        }, this)), this.onplay(e.proxy(function() {
            this.element.removeClass("vp_paused"), this.element.addClass("elite_vp_playing"), this.change("elite_vp_playing")
        }, this)), e(t.videoElementAD).bind("ended", function() {
            t.closeAD(), t._playlist.videoAdPlayed = !0
        }), e(t.videoElementAD).bind("loadeddata", function() {
            t.preloader.stop().animate({
                opacity: 0
            }, 300, function() {
                e(this).hide()
            }), t.preloaderAD.stop().animate({
                opacity: 0
            }, 300, function() {
                e(this).hide()
            }), t.options.hideVideoSource && t.videoElementAD.empty(), clearInterval(t.myInterval), t.myInterval = setInterval(function() {
                t.isPaused && !t.options.allowSkipAd || (t.setSkipTimer(), e(t.skipAdCountContentLeft).find(".elite_vp_skipAdCountTitle").text(t.options.skipAdText + " " + t.counter + " s"), 0 == t.counter && (t.toggleSkipAdCount(), t.skipBoxOn = !1, t.toggleSkipAdBox(), clearInterval(t.myInterval)))
            }, 1e3)
        }), e(t.videoElementAD).bind("pause", function() {
            t.isPaused = !0
        }), e(t.videoElementAD).bind("play", function() {
            t.isPaused = !1
        }), e(t.videoElementAD).bind("timeupdate", function() {
            t.timeLeftInside.text("(-" + t.secondsFormat(t.videoAD.getEndTime() - t.videoAD.getCurrentTime()) + ")"), t.progressWidthAD = t.videoAD.currentTime / t.videoAD.duration * t.elementAD.width(), t.progressAD.css("width", t.progressWidthAD), t.preloaderAD.stop().animate({
                opacity: 0
            }, 300, function() {
                e(this).hide()
            })
        }), this.onended(e.proxy(function() {
            t.midrollPlayed = !1, t.postrollPlayed = !1, this._playlist.videoid = parseInt(this._playlist.videoid) + 1, this._playlist.videos_array.length == this._playlist.videoid && (this._playlist.videoid = 0), t.preloader && t.preloader.stop().animate({
                opacity: 1
            }, 0, function() {
                e(this).show()
            }), "Play next video" == t.options.onFinish ? (t._playlist.videoAdPlayed = !1, t.shuffleBtnEnabled ? (t.generateRandomNumber(), t._playlist.videoid = t.rand, t.setPlaylistItem(t.videoid)) : t.setPlaylistItem(t._playlist.videoid), t.playVideoById(t._playlist.videoid), "HTML5" == t._playlist.videos_array[t._playlist.videoid].videoType || "HTML5 (self-hosted)" == t.options.videoType || "youtube" == t._playlist.videos_array[t._playlist.videoid].videoType || "YouTube" == t.options.videoType || "vimeo" == t._playlist.videos_array[t._playlist.videoid].videoType || "Vimeo" == t.options.videoType, t.shuffleBtnEnabled ? t.setPlaylistItem(t.randEnd) : t.setPlaylistItem(t._playlist.videoid)) : "Restart video" == t.options.onFinish ? (this.resetPlayer(), this.seek(0), this.play(), this.preloader.hide()) : "Stop video" == t.options.onFinish && (this.pause(), this.preloader.hide(), "" != this.options.posterImgOnVideoFinish && (this.resetPlayer(), this.seek(0), this.pause(), this.showPoster2()))
        }, this)), this.oncanplay(e.proxy(function() {
            this.canPlay = !0, this.controls.removeClass("elite_vp_disabled")
        }, this)), this.mainContainer.parent().hover(function() {}), this.mainContainer.parent().hover(function() {
            e(document).keydown(e.proxy(function(e) {
                return 32 == e.keyCode ? (t.togglePlay(), !1) : void(27 == e.keyCode && this.inFullScreen && t.fullScreen(!this.inFullScreen))
            }, this))
        }, function() {
            e(document).unbind("keydown")
        })
    }, window.Video = h
}(jQuery);