import { camelToUpperSnakeCase } from '../../utils/utils';

/** action should be in camelCase string */
export const createAjaxActions = (action) => {
  const actionInSnakeCase = camelToUpperSnakeCase(action);

  return {
    REQUESTED: `${actionInSnakeCase}_REQUESTED`,
    SUCCEEDED: `${actionInSnakeCase}_SUCCEEDED`,
    FAILED: `${actionInSnakeCase}_FAILED`,

    get actions() {
      return {
        [`${action}Requested`]: (payload) => ({
          type: this.REQUESTED,
          payload,
        }),
        [`${action}Succeeded`]: (response) => ({
          type: this.SUCCEEDED,
          response,
        }),
        [`${action}Failed`]: (error) => ({ type: this.FAILED, error }),
      };
    },
  };
};
