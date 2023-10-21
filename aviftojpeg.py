import os
import pillow_avif
from PIL import Image


def avif_to_jpeg(directory):
    # 列出目录下所有文件
    for filename in os.listdir(directory):
        # 检查文件是否为avif格式
        if filename.endswith('.avif'):
            # 构建完整的文件路径
            filepath = os.path.join(directory, filename)
            # 使用Pillow打开图片
            with Image.open(filepath) as image:
                # 构建JPEG文件的路径
                jpeg_filename = os.path.splitext(filename)[0] + '.jpeg'
                jpeg_filepath = os.path.join(directory, jpeg_filename)
                # 保存为JPEG格式
                image.save(jpeg_filepath, 'JPEG')
            print(f"Converted {filename} to {jpeg_filename}")


def delete_avif_files(directory):
    # 列出目录下的所有文件
    for filename in os.listdir(directory):
        # 检查文件是否为.avif格式
        if filename.endswith('.avif'):
            filepath = os.path.join(directory, filename)
            os.remove(filepath)
            print(f"Deleted {filename}")


if __name__ == "__main__":
    dir_path = input("Please enter the directory path: ")
    avif_to_jpeg(dir_path)
    delete_avif_files(dir_path)
