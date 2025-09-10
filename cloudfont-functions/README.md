# Amazon CloudFront の CloudFront Functions のサンプル

- cloudfront-functions
    - CloudFront Functions のサンプル (JavaScript)
    - S3 バケットをオリジンとするディストリビューションの **ビューワーリクエスト** に設定
    - **`CloudFront-Viewer-Country` ヘッダー** を送信するようにディストリビューションを構成する
        - `CloudFront-Viewer-Country` ヘッダーには、**ユーザーがアクセスする国の情報**が設定される
        - マネコン左側のポリシーのメニューから、オリジンリクエストのタブを選択して、カスタムポリシーを作成し、このヘッダーを追加する
        - そのポリシーをディストリビューションのビヘイビアで指定する  
    - **関数のコードで、`CloudFront-Viewer-Country` ヘッダーの値が `JP` の場合、/jp/index.html にリダイレクトさせる**
- s3-bucket フォルダには、オリジンの S3 バケットのオブジェクトを格納
     
 

