from flask import Flask, request

app = Flask(__name__)

# HTML шаблон страницы, куда будет вставляться текст статьи
HTML_TEMPLATE = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Статья</title>
</head>
<body>
    <h1>Новая статья</h1>
    <div>{article_text}</div>
</body>
</html>
"""

@app.route('/publish_article', methods=['POST'])
def publish_article():
    # Получаем текст статьи из запроса
    article_text = request.form['article_text']

    # Вставляем текст статьи в HTML шаблон
    html_content = HTML_TEMPLATE.format(article_text=article_text)

    # Записываем HTML контент в файл
    with open('article.html', 'w') as f:
        f.write(html_content)

    return 'Статья успешно опубликована на сайте!'

if __name__ == '__main__':
    app.run(debug=True)
