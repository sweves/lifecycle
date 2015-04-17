import controlP5.*;

ControlP5 cp5;
int slider = 100;

void setup() {
  size(480, 800);
  smooth();
  cp5 = new ControlP5(this);

  cp5.addSlider("slider")
    .setSize(width, 80)
      .setPosition(0, height-20)
        .setRange(10, width/2)
          .setColorForeground(color(255))
            .setColorActive(color(255))
              .setColorBackground(color(150));

  cp5.getController("slider").getValueLabel().align(ControlP5.LEFT, ControlP5.BOTTOM_OUTSIDE).setPaddingX(0);
  cp5.getController("slider").getCaptionLabel().align(ControlP5.RIGHT, ControlP5.BOTTOM_OUTSIDE).setPaddingX(0);
}


void draw() {
  background(50);

  noStroke();
  fill(255);
  ellipse(width/2, height/2, slider, slider);
  
    fill(142, 83, 23);
    float centerX = width/2;
    float centerY = height/2;
    for(float a=0; a<360; a+=15)
    {
        float t = 0;
        float x = centerX + cos(t) * 100;
        float y = centerY + sin(t) * 100;
        ellipse(x, y, 10,10);
    }


}
