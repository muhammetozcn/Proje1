import {DefaultCrudRepository} from '@loopback/repository';
import {EmployeeInfo, EmployeeInfoRelations,SalaryandDep} from '../models';
import {PsqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EmployeeInfoRepository extends DefaultCrudRepository<
  EmployeeInfo,
  typeof EmployeeInfo.prototype.id,
  EmployeeInfoRelations
> {
  constructor(
    @inject('datasources.psql') dataSource: PsqlDataSource,
  ) {
    super(EmployeeInfo, dataSource);
  }
}
