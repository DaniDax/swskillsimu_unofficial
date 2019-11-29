(function (w) {
    'use strict'

    /*
       Localize your language here

       Note:
       - <b>text</b>: "text" will be in bold
       - <br/>: line break in HTML
       - {0}, {1}, {2} and go on: the placeholder which will be replaced by Javascript on runtime,
                                  when a string has these, you should translate but leave these placeholders within the string.
                                  Example: "The class you selected requires the character to be at least at level {0}" will happen
                                  when user select character level below the required level of the current selected class.
                                  + {0} will be replaced with the required level of the current selected class by the code
    */
    var localize = {
        General: {
            // use mainly for default font display
            Lang: "zh",
            WindowTitle: "技能配點模擬器",

            // {0}: the character name
            WindowTitleWithCharacter: "技能配點模擬器 - {0}",

            ClipboardSuccess: "已復製目前配點的網址到剪貼簿。",
            ClipboardAccessFailure: "無法複製到剪貼簿！請手動複製下方網址：",
            ButtonClose: "關閉",
            ButtonCancel: "取消",
            ButtonSelect: "選擇",
            ButtonRemove: "移除",

            // When a character's JSON data doesn't specify character classes, this string will be used as the initial class
            DefaultCharacterClassName: "一般"
        },
        SkillTree: {
            CharacterClass: "類型：",
            CharacterLevel: "等級：",
            InvestedSP: "已分配SP：",
            RemainingSP: "剩餘SP：",
            Button_ResetAllSkills: "重置所有配點",
            Button_SlotAssignment: "技能欄模擬",
            Button_Options: "模擬器設定",
            Button_CopyLinkToCurrentSkillTree: "複製目前配點的網址",
            Button_CopyLinkToCurrentSkillTreeAndShowSkillAssignment: "複製目前配點的網址 並 在載入頁面時顯示技能欄",

            // {0}: the character name
            MenuItem_MoreInfoAboutCharacter: "更多關於 {0} 的資訊",

            MenuItem_MoreInfo: "更多資訊",
            MenuItem_Home: "回首頁"
        },
        Notify: {
            // {0}: the level
            ClassRequireCharacterLevel: "角色必須至少高於 {0} 級才能使用所選的類型！",
            UnableToUnlearnBelowDefaultSkillLevel: "已經是技能的最低或預設等級！",
            InsufficientSP: "技能點不足！",
            InsufficientCharacterLevel: "角色等級不足，無法學習！"
        },
        Prompt: {
            ResetSkill: "確定要重置所有配點嗎？",
            ChangeClass: "<b>更改類型將會重置目前的配點</b><br/>是否要繼續？",
        },
        ToolTip: {
            CurrentHeader: "目前",
            AfterHeader: "之後",
            NoInfoAvailable: "沒有資料",
            SkillEffectHeader: "效果",
            SkillDescriptionHeader: "描述",
        },
        SkillSlot: {
            SkillSlotAssignmentDialogHeader: "技能欄配置",
            SkillSlotSelectionDialogHeader: "選擇技能以配置",
            ButtonResetAssignment: "重置",
            Prompt_ResetAssignment: "確定要重置所有技能欄嗎？",
            SmallGuideText_HowToAssignASkill: "(點選欄位以配置技能)",
            SmallGuideText_HowToSelectASkill: "點選欄位以配置技能",

            SkillChainEffectHeader_SecondChain: "2階技能獎勵：",
            SkillChainEffectHeader_ThirdChain: "3階技能獎勵：",

            // {0}: the value of the effect. See effect value below
            SkillChainEffect_DamageUp: "傷害量 +{0}",
            SkillChainEffect_CooldownReduce: "冷卻時間減少 -{0}",
            SkillChainEffect_SGCostReduce: "SG消耗量減少 -{0}",

            // Second skill chain effect value
            SkillChainEffect2nd_DamageValue: "4%",
            SkillChainEffect2nd_CooldownValue: "8%",
            SkillChainEffect2nd_SGCostValue: "12%",

            // Third skill chain effect value
            SkillChainEffect3rd_DamageValue: "8%",
            SkillChainEffect3rd_CooldownValue: "15%",
            SkillChainEffect3rd_SGCostValue: "25%",
        },
        Option: {
            Tooltip_SaveToBrowser: "您下次造訪此網站時，並不會記住您在此更改的設定。將設定儲存至瀏覽器能使瀏覽器永遠記住該設定，即使重新啟動瀏覽器也是如此。",
            OptionSavedToBrowser: "已儲存你的設定！",
            Button_SaveSettingToBrowser: "儲存設定至瀏覽器",

            // {0}: the "localStorage" hyperlink which refers to https://www.w3schools.com/html/html5_webstorage.asp
            // {1}: the "cookie" hyperlink which refers to https://www.w3schools.com/js/js_cookies.asp
            SaveSettingToBrowser: "<span>本設定將使用 {0} 儲存至您的瀏覽器中（如果瀏覽器不支援 {0} 將會改為使用 {1} 來儲存）。<br/><strong>您要儲存設定到電腦中嗎？</strong></span>",
            SaveSettingToBrowserRetry: "是否要重試？",

            SkillPreviewHeader: "技能預覽：",
            Selection_PreviewOff: "不使用預覽",
            Selection_PreviewOn_Beta: "開啟預覽（WebM）(Beta)",
            Selection_PreviewOn: "開啟預覽（MP4）",
            SelectionDescription_PreviewOff: "關閉影片預覽",
            SelectionDescription_PreviewOn_Beta: "使用 帶有VP9影片編碼/解碼器的WebM容器 顯示技能預覽，可實現更高的壓縮率。 這代表將會下載更少的資料（它只會下載一次，直到瀏覽器的快取過期或被清理，相當於幾乎沒有保存任何東西）以換取更高的計算能力來解碼和播放影片。 可能會有一些視覺錯誤，如果您無法忍受此視覺錯誤或影片無法播放，請改選「開啟影片預覽（MP4）」選項。",
            SelectionDescription_PreviewOn: "使用 帶有H.264（高品質）影片編碼/解碼器的MP4容器 顯示技能預覽。大多數常見的瀏覽器都支援此容器和編碼/解碼器。",
        },
        Confirmation: {
            Warning: "警告",
            Notice: "注意",
			DoubleConfirm: "再次確認",
        },
        Others: {
            CreativeCommon: "創用CC 姓名標示-非商業性-相同方式分享",
            // {0}: the "Creative Commons Attribution-NonCommercial-ShareAlike" hyperlink which refers to https://creativecommons.org/licenses/by-nc-sa/3.0/
            // {1}: the "Lion Games" hyperlink which refers to http://www.liongames.co.kr/Front/
            CreativeCommonNote: "<span>以上內容如未另外註明，在 {0} 之下都是有效的。<br />官方美術、遊戲內容、螢幕截圖都屬於 {1} 與 遊戲發行商 的商標和版權。</span>",
        },
    };

    // Don't modify anything below
    let skillTreeData;
    if (!w.hasOwnProperty("SkillTreeData")) {
        skillTreeData = {};
        Object.defineProperty(w, "SkillTreeData", {
            value: skillTreeData,
            configurable: false,
            enumerable: true,
            writable: false
        });
    } else {
        skillTreeData = w.SkillTreeData;
    }

    Object.defineProperty(skillTreeData, "Localization", {
        value: deepFreeze(localize),
        configurable: false,
        enumerable: true,
        writable: false
    });
})(window);