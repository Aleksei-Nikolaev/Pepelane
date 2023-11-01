export const useDetailedPageRoutes = () => {
  const { t } = useI18n()

  const sections = [
    {
      value: 'specification',
      label: t('detailedPage.sections.specification')
    },
    {
      value: 'team',
      label: t('detailedPage.sections.team')
    },
    {
      value: 'rentTerms',
      label: t('detailedPage.sections.rentTerms')
    }
  ]

  const defaultRoute = sections[0].value

  return {
    sections,
    defaultRoute
  }
}
