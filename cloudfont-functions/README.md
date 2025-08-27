# Amazon CloudFront の CloudFront Functions のサンプル

- cloudfront-functions
    - CloudFront Functions のサンプル (JavaScript)
    - S3 バケットをオリジンとするディストリビューションのビューワーリクエストに設定
    - `CloudFront-Viewer-Country` ヘッダーを送信するようにディストリビューションを構成する
        - マネコン左側のポリシーのメニューから、オリジンリクエストのカスタムポリシーを作成し、ヘッダーを追加する
        - そのポリシーをディストリビューションのビヘイビアで指定する  
    - 関数のコードで、`CloudFront-Viewer-Country` ヘッダーの値が `JP` の場合、/jp/index.html にリダイレクトさせる
- s3-bucket フォルダには、オリジンの S3 バケットのオブジェクトを格納
     
 

