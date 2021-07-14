FROM python:3.8-alpine

WORKDIR /images_gallery_api

EXPOSE 5050

COPY requirements.txt ./

RUN pip install -r requirements.txt

COPY . ./

CMD ["python", "main.py"]