# Amazon CloudFront の Lambda@Edge と CloudFront Functions のサンプル

- cloudfront-functions
    - CloudFront Functions のサンプル (JavaScript)
    - S3 バケットをオリジンとするディストリビューションのビューワーリクエストに設定
    - `CloudFront-Viewer-Country` ヘッダーを送信するようにディストリビューションを構成する
    - 関数のコードで、`CloudFront-Viewer-Country` ヘッダーの値が `JP` の場合、/jp/index.html にリダイレクトさせる
- lambda-at-edge
    - Lambda@Edge のサンプル (Node.js 18)
    - S3 バケットをオリジンとするディストリビューションのビューワーリクエストに設定
    - 関数のコードで、クエリ文字列に `test=b` が含まれていたらリクエストのパスを `/test-b/cherry.html` にする。
        -  それ以外の場合は、リクエストのパスを `/test-b/cherry.html` にする
     
 

