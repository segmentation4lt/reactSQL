//-----------------------------------------------------//
//必須で指定 ※ファイル単位
//-----------------------------------------------------//
"use strict";

//-----------------------------------------------------//
// この関数を実施する前にActionに応じたAPIリクエストを実施し結果をオブジェクトメンバ(clientinfo.page_api)に反映させている
//-----------------------------------------------------//
function Execute(){
    //-----------------------------------------------------//
    // クライアント環境情報※取得APIデータ込
    //-----------------------------------------------------//
    console.log(clientinfo);

    //-----------------------------------------------------//
    // <HEAD>タグ内描画処理はここに記載
    //-----------------------------------------------------//



    //-----------------------------------------------------//
    // 初期に描画されたタグ内に更に追記する場合はここに記載
    //-----------------------------------------------------//
    /*
     * Render(template出力)処理
     * 引数:<common|action/テンプレート名>,<出力対象タグのid>,<JSON文字列>,<任意のコールバック関数名>,<追記形態:'beforebegin'/'afterbegin'/'beforeend'/'afterend'>
     *                                                     */
    //wasm.bonerender("action/XXX_main","main",clientinfo.page_api.api_data);


};

//-----------------------------------------------------//
// 初期描画内の待ち受け処理(addEventListener等)をここに記載
//-----------------------------------------------------//
function EventAction(){

};
