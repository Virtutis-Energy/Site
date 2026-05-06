import type { SubdivisionKey } from './types'

export const subdivisionNameAliases: Record<SubdivisionKey, string[]> = {
  secretaryEconomy: ['Secretaria de Economia'],
  secretaryHr: ['Secretaria de Recursos Humanos'],
  administrativeSector: ['Setor Administrativo'],
  legalSector: ['Setor Jurídico'],
  structuralSector: ['Setor Estrutural'],
  technologySector: ['Setor Tecnológico'],
  commercialSector: ['Setor Comercial'],
  accountingDepartment: ['Departamento de Contabilidade'],
  landDepartment: ['Departamento de Terreno', 'Departamento de Terrenos'],
  projectsDepartment: ['Departamento de Projeto', 'Departamento de Projetos'],
  worksDepartment: ['Departamento de Obra', 'Departamento de Obras'],
  operationsDepartment: ['Departamento de Operação'],
}

