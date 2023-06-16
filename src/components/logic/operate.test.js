import operate from './operate';

describe('operate function', () => {
  it('should return the correct result for addition', () => {
    const result = operate('2', '3', '+');
    expect(result).toBe('5');
  });

  it('should return the correct result for subtraction', () => {
    const result = operate('5', '2', '-');
    expect(result).toBe('3');
  });

  it('should return the correct result for multiplication', () => {
    const result = operate('4', '3', 'x');
    expect(result).toBe('12');
  });

  it('should return the correct result for division', () => {
    const result = operate('10', '2', '÷');
    expect(result).toBe('5');
  });

  it('should return "Can\'t divide by 0." when dividing by zero', () => {
    const result = operate('7', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('should return the correct result for modulo', () => {
    const result = operate('9', '4', '%');
    expect(result).toBe('1');
  });

  it('should return "Can\'t find modulo as can\'t divide by 0." when finding modulo by zero', () => {
    const result = operate('5', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operation', () => {
    expect(() => operate('5', '2', '&')).toThrowError("Unknown operation '&'");
  });
});
