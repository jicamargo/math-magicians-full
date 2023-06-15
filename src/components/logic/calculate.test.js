import calculate from './calculate';
import operate from './operate';

jest.mock('./operate'); // Mock the operate module

describe('calculate', () => {
  it('should return an object with null values when buttonName is "AC"', () => {
    const result = calculate({}, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should call the operate function when there is a next, operation, and total', () => {
    operate.mockReturnValue('result');
    const obj = {
      total: '4',
      next: '2',
      operation: '+',
    };
    const result = calculate(obj, '=');
    expect(operate).toHaveBeenCalledWith('4', '2', '+');
    expect(result).toEqual({
      total: 'result',
      next: null,
      operation: null,
    });
  });
});
