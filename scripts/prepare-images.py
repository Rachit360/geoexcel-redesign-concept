"""Resize the product photos taken from geoexcel.group for the site.

Usage: python3 scripts/prepare-images.py <folder-with-original-downloads>

Most product shots on their site are small photos on a white 1080x1920
canvas, so the white border gets trimmed off first.
"""
import sys
from pathlib import Path
from PIL import Image, ImageChops

SRC = Path(sys.argv[1] if len(sys.argv) > 1 else "originals")
OUT = Path(__file__).resolve().parent.parent / "src" / "assets"

# source file prefix -> output name
PRODUCTS = {
    "20": "rice-1121-basmati-steam", "21": "rice-1121-basmati-sella",
    "22": "rice-1121-basmati-golden-sella", "23": "rice-1401-pusa-basmati-steam",
    "24": "rice-1509-basmati-sella", "25": "rice-1509-basmati-steam",
    "26": "rice-ir-64-parboiled", "27": "rice-sona-masuri-steam",
    "28": "rice-ponni", "29": "rice-jeerakasala", "30": "rice-palakkadan-matta",
    "31": "rice-pr-11-steam",
    "32": "spice-green-cardamom", "33": "spice-black-pepper", "34": "spice-cloves",
    "35": "spice-cinnamon", "36": "spice-mace", "37": "spice-nutmeg",
    "38": "spice-coriander-seeds", "39": "spice-cumin-seeds", "40": "spice-ajwain",
    "41": "spice-fenugreek-seeds", "42": "spice-mustard-seeds", "43": "spice-star-anise",
    "44": "spice-sesame-seeds-white", "45": "spice-sesame-seeds-black",
    "46": "frozen-green-peas", "47": "frozen-sweet-corn", "48": "frozen-carrot",
    "49": "frozen-cauliflower", "50": "frozen-broccoli", "51": "frozen-mixed-vegetables",
    "52": "frozen-french-fries", "53": "frozen-hash-browns", "54": "frozen-speciality-potato",
    "55": "oil-coconut", "56": "oil-extra-virgin-coconut", "57": "oil-groundnut",
    "58": "oil-mustard", "59": "oil-sesame", "60": "oil-olive",
    "61": "oil-extra-virgin-olive", "62": "ghee-pure", "63": "ghee-a2",
}
PHOTOS = {
    "04": "hero-rice-spoon", "03": "band-spice-bowls", "13": "frozen-peas-macro",
    "05": "olive-oil-pour", "06": "rice-red-texture", "09": "sesame-spoons",
    "10": "cloves-macro", "12": "coconut-oil",
}


def find(prefix):
    matches = sorted(SRC.glob(f"{prefix}_*"))
    if not matches:
        raise SystemExit(f"missing source for {prefix}")
    return matches[0]


def trim_white(im, tol=12):
    rgb = im.convert("RGB")
    bg = Image.new("RGB", rgb.size, (255, 255, 255))
    diff = ImageChops.difference(rgb, bg).convert("L").point(lambda p: 255 if p > tol else 0)
    box = diff.getbbox()
    return rgb.crop(box) if box else rgb


def save(im, path, max_edge, quality=86):
    im = im.convert("RGB")
    im.thumbnail((max_edge, max_edge), Image.LANCZOS)
    im.save(path, "JPEG", quality=quality, optimize=True, progressive=True)
    print(f"{path.name:40s} {im.size}")


for prefix, name in PRODUCTS.items():
    save(trim_white(Image.open(find(prefix))), OUT / "products" / f"{name}.jpg", 1400)

for prefix, name in PHOTOS.items():
    save(Image.open(find(prefix)), OUT / "photos" / f"{name}.jpg", 2400, quality=84)
