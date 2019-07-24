import { getBlockInfo } from 'redux/actions';
import { mapStateToProps, mapDispatchToProps } from '../BlockDetail';

describe('BlockDetail Container', () => {
  it('returns object the state turned in props', () => {
    const state = {
      block: {},
      transactions: [],
    };

    const props = {
      match: {
        params: {
          blockId: 98736,
        },
      },
    };

    const expected = {
      block: state.block,
      transactions: state.transactions,
      blockId: props.match.params.blockId,
    };

    expect(mapStateToProps(state, props)).toEqual(expected);
  });

  it('returns function that dispatch actions', () => {
    const expected = {
      getBlockInfo: blockId => getBlockInfo(blockId),
    };

    const props = mapDispatchToProps(() => {});

    expect(props).toEqual(expected);
  });
});
