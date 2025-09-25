import React, { useCallback, useMemo } from 'react'

const useMemoHook = () => {
  const memoizedValue = useMemo(()=>func_name(),[])
  const memoizedFunc= useCallback(()=>func_name(),[])
  return (
    <div>useMemoHook</div>
  )
}

export default useMemoHook