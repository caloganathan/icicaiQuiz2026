#!/usr/bin/env python3
"""Generate a simple placeholder emblem PNG for the ICAI quiz app.

Pillow is not available in this environment, so this writes a valid PNG using
only the standard library (zlib + struct). The output is an obvious placeholder
(charcoal field, burgundy disc, gold ring) that the organizer will replace with
the real ICAI logo file at the same path: assets/img/icai-logo.png
"""
import struct
import zlib
import math

SIZE = 512
CX = CY = SIZE / 2

# Palette (matches the app's "Big Four Gala" theme)
CHARCOAL = (26, 26, 29)     # #1A1A1D
BURGUNDY = (110, 13, 37)    # #6E0D25
GOLD = (201, 162, 39)       # #C9A227

R_DISC = 200        # burgundy disc radius
R_RING_OUT = 240    # gold ring outer radius
R_RING_IN = 224     # gold ring inner radius


def blend(fg, bg, a):
    return tuple(int(fg[i] * a + bg[i] * (1 - a)) for i in range(3))


def pixel(x, y):
    dx, dy = x - CX + 0.5, y - CY + 0.5
    d = math.hypot(dx, dy)

    # Anti-aliased gold ring
    if R_RING_IN - 1 <= d <= R_RING_OUT + 1:
        a = min(d - (R_RING_IN - 1), (R_RING_OUT + 1) - d, 1.0)
        a = max(0.0, min(1.0, a))
        return blend(GOLD, CHARCOAL, a) + (255,)

    # Anti-aliased burgundy disc
    if d <= R_DISC + 1:
        a = max(0.0, min(1.0, (R_DISC + 1) - d))
        return blend(BURGUNDY, CHARCOAL, a) + (255,)

    return CHARCOAL + (255,)


def build_png(path):
    raw = bytearray()
    for y in range(SIZE):
        raw.append(0)  # filter type 0 (None) per scanline
        for x in range(SIZE):
            raw.extend(pixel(x, y))

    def chunk(tag, data):
        c = struct.pack(">I", len(data)) + tag + data
        c += struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)
        return c

    sig = b"\x89PNG\r\n\x1a\n"
    ihdr = struct.pack(">IIBBBBB", SIZE, SIZE, 8, 6, 0, 0, 0)  # 8-bit RGBA
    idat = zlib.compress(bytes(raw), 9)

    with open(path, "wb") as f:
        f.write(sig)
        f.write(chunk(b"IHDR", ihdr))
        f.write(chunk(b"IDAT", idat))
        f.write(chunk(b"IEND", b""))


if __name__ == "__main__":
    build_png("assets/img/icai-logo.png")
    print("Wrote assets/img/icai-logo.png")
