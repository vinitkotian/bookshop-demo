import endpoints from '../../Config/apiConfig';
import httpService from '../../Utils/httpService';

const BookPurchaseApiModel = {
  getBookDetailByBookId: async (bookId) => {
    const endpoint = endpoints.getBookDetailsByBookId(bookId);
    const response = await httpService().get(endpoint);
    return response;
  },
  placeBookOrder: async (body) => {
    const endpoint = endpoints.placeBookOrder();
    const response = await httpService().post(endpoint, body);
    return response;
  },
};
export default BookPurchaseApiModel;
