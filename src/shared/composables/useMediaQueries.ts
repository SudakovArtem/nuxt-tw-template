export const useMediaQueries = () => {
  const viewport = useViewport()

  const isDesktop = computed<boolean>(() => viewport.isGreaterOrEquals('md'))
  const isTablet = computed<boolean>(() => viewport.isGreaterOrEquals('sm') && viewport.isLessThan('md'))
  const isTabletDesktop = computed<boolean>(() => viewport.isGreaterOrEquals('sm'))
  const isMobile = computed<boolean>(() => viewport.isLessThan('sm'))
  const isMobileTablet = computed<boolean>(() => viewport.isLessThan('md'))

  return {
    isDesktop,
    isTablet,
    isTabletDesktop,
    isMobile,
    isMobileTablet
  }
}
