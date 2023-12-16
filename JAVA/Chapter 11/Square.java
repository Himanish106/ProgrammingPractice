class Square extends Shape{
    @Override
    public int Area() {
        return (int)Math.pow(super.getSquarelength(),2);
    }

    @Override
    public int Perimeter() {
        return 4*squarelength;
    }
}
