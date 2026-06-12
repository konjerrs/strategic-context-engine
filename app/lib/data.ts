import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import type { Force, Signal, Context, Snapshot } from './types'

const DATA_DIR = path.join(process.cwd(), '..', 'data')

function readYaml<T>(filePath: string): T {
  const content = fs.readFileSync(filePath, 'utf8')
  return yaml.load(content, { schema: yaml.JSON_SCHEMA }) as T
}

function readDir<T>(subdir: string): T[] {
  const dir = path.join(DATA_DIR, subdir)
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.yaml'))
    .map((f) => readYaml<T>(path.join(dir, f)))
}

export function getAllContexts(): Context[] {
  return readDir<Context>('contexts')
}

export function getContext(id: string): Context | null {
  try {
    return readYaml<Context>(path.join(DATA_DIR, 'contexts', `${id}.yaml`))
  } catch {
    return null
  }
}

export function getAllForces(): Force[] {
  return readDir<Force>('forces')
}

export function getForce(id: string): Force | null {
  try {
    return readYaml<Force>(path.join(DATA_DIR, 'forces', `${id}.yaml`))
  } catch {
    return null
  }
}

export function getAllSignals(): Signal[] {
  return readDir<Signal>('signals')
}

export function getSignal(id: string): Signal | null {
  try {
    return readYaml<Signal>(path.join(DATA_DIR, 'signals', `${id}.yaml`))
  } catch {
    return null
  }
}

export function getSnapshot(id: string): Snapshot | null {
  try {
    return readYaml<Snapshot>(path.join(DATA_DIR, 'snapshots', `${id}.yaml`))
  } catch {
    return null
  }
}

export function getContextWithRelations(id: string) {
  const context = getContext(id)
  if (!context) return null

  const forces = context.ranked_forces.map((rf) => ({
    ...rf,
    force: getForce(rf.force_id),
  }))

  const signals = context.tracked_signals
    .map((sid) => getSignal(sid))
    .filter(Boolean) as Signal[]

  const snapshots = context.snapshots
    .map((sid) => getSnapshot(sid))
    .filter(Boolean) as Snapshot[]

  return { context, forces, signals, snapshots }
}
