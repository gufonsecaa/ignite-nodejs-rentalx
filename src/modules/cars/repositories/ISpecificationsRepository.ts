import { Specification } from '../model/Specification';

interface ICReateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICReateSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICReateSpecificationDTO };
