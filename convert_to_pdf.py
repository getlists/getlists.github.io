from flask import Flask, request, send_file
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Image

app = Flask(__name__)

@app.route('/convert_to_pdf', methods=['POST'])
def convert_to_pdf():
    images = request.files.getlist('images[]')

    pdf = SimpleDocTemplate('output.pdf', pagesize=letter)

    flowables = []
    for image in images:
        # Process the images and add them to the PDF
        image_data = Image(image)
        flowables.append(image_data)

    pdf.build(flowables)

    return send_file('output.pdf', as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True)
