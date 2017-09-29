import apolloService from 'apolloService';

describe('The apollo service', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = apolloService;
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
