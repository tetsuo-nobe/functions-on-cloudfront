# Amazon CloudFront の Lambda@Edge のサンプル

- lambda-at-edge
    - Lambda@Edge のサンプル (Node.js 18)
    - S3 バケットをオリジンとするディストリビューションのビューワーリクエストに設定
    - 関数のコードで、**クエリ文字列に `test=b` が含まれていたらリクエストのパスを `/test-b/cherry.jpg` にする。**
        -  **それ以外の場合は、リクエストのパスを `/test-a/cherry.jpg` にする**
- s3-bucket フォルダには、オリジンの S3 バケットのオブジェクトを格納
     
 

