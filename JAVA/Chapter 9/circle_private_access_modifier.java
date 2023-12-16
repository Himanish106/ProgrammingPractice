/*
Check area and circumference of a circle using getters and setters. Set Area,circumference,radius of the circle
and show warning if the desired answer is wrong
*/

class Circle{
    private float radius;
    private float area;
    private float circumference;

    public void setRadius(float r) {
         radius=r;
    }
    public void setArea(float a)
    {
        if (a==(float) Math.PI*radius*radius)
            area=a;
        else
            System.out.println("WARNING!..Wrong Area as per the radius");

    }

    public float getArea() {
        return area;
//        return (float) Math.PI*radius*radius;
    }
    public void setCircumference(float c) {
        if (c==2*(float) Math.PI*radius)
            circumference=c;
        else
            System.out.println("WARNING!..Wrong Circumference as per the radius");

    }

    public float getCircumference() {
        return circumference;
//    return 2*(float) Math.PI*radius;
    }
}
public class circle_private_access_modifier
{
    public static void main(String[] args) {
    Circle property=new Circle();
    property.setRadius(5.0f);
    property.setArea(78.53982f);
    property.setCircumference(31.415928f);
        System.out.println("Area of the circle is: "+property.getArea()+" and the Perimeter of circle is: "+property.getCircumference());
    }
}
