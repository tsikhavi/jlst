// lifecycles.ts
import { Strapi } from '@strapi/strapi';

export default {
  async beforeCreate(event) {
    const { data } = event.params;

    if (data.StorageSize && data.Document) {
      data.AverageDocumentSize = data.Document > 0 ? data.StorageSize / data.Document : 0;
    }
  },
  async beforeUpdate(event) {
    const { data } = event.params;

    if (data.StorageSize && data.Document) {
      data.AverageDocumentSize = data.Document > 0 ? data.StorageSize / data.Document : 0;
    }
  },
};
