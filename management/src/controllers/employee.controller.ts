import { filterByTag } from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  model,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  BodyParser,
  getJsonSchema
} from '@loopback/rest';
import {EmployeeInfo,SalaryandDep} from '../models';
import {EmployeeInfoRepository} from '../repositories';


export class EmployeeController {
  constructor(
    @repository(EmployeeInfoRepository)
    public employeeInfoRepository: EmployeeInfoRepository,
  ) {}


  @post('/employeeinfo', {
    responses: {
      '200': {
        description: 'EmployeeInfo model instance',
        content: {
          'application/json': {schema: getModelSchemaRef(EmployeeInfo)},
        },
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmployeeInfo, {
            title: 'NewEmployeeInfo',
          }),
        },
      },
    })

    employeeInfo: EmployeeInfo,
  ): Promise<EmployeeInfo> {
    return this.employeeInfoRepository.create(employeeInfo);
  }
  
  @get('/employeeinfo/count', {
    responses: {
      '200': {
        description: 'EmployeeInfo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(EmployeeInfo) where?: Where<EmployeeInfo>,
  ): Promise<Count> {
    return this.employeeInfoRepository.count(where);
  }

  @get('/employeeinfo', {
    responses: {
      '200': {
        description: 'Array of EmployeeInfo model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(EmployeeInfo, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(EmployeeInfo) filter?: Filter<EmployeeInfo>,
  ): Promise<EmployeeInfo[]> {
    return this.employeeInfoRepository.find(filter);
  }

  @patch('/employeeinfo', {
    responses: {
      '200': {
        description: 'EmployeeInfo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmployeeInfo, {partial: true}),
        },
      },
    })
    employeeInfo: EmployeeInfo,
    @param.where(EmployeeInfo) where?: Where<EmployeeInfo>,
  ): Promise<Count> {
    return this.employeeInfoRepository.updateAll(employeeInfo, where);
  }

  @get('/employeeinfo/{id}', {
    responses: {
      '200': {
        description: 'EmployeeInfo model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(EmployeeInfo, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(EmployeeInfo, {exclude: 'where'})
    filter?: FilterExcludingWhere<EmployeeInfo>,
  ): Promise<EmployeeInfo> {
    return this.employeeInfoRepository.findById(id, filter);
  }

  @patch('/employeeinfo/{id}', {
    responses: {
      '204': {
        description: 'EmployeeInfo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmployeeInfo, {partial: true}),
        },
      },
    })
    employeeInfo: EmployeeInfo,
  ): Promise<void> {
    await this.employeeInfoRepository.updateById(id, employeeInfo);
  }

  @put('/employeeinfo/{id}', {
    responses: {
      '204': {
        description: 'EmployeeInfo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() employeeInfo: EmployeeInfo,
  ): Promise<void> {
    await this.employeeInfoRepository.replaceById(id, employeeInfo);
  }

  @del('/employeeinfo/{id}', {
    responses: {
      '204': {
        description: 'EmployeeInfo DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.employeeInfoRepository.deleteById(id);
  }



  
  
}

