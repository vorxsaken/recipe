import RecipeCard from '@/components/RecipeCard'
import Layout from '@/components/Layout'
import InfiniteFetch from '@/components/InfiniteFetch'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import RecipeDetailsModal from '@/components/RecipeDetails/RecipeDetailsModal'

function Category() {
  const router = useRouter()
  const { category } = router.query;
  const ref = useRef()
  var skip = 0;

  const increaseSkip = () => skip + 10;
  const successView = (results: any) => {
    return results.map((result: any, index: any) => (
      <RecipeCard
        recipeId={result.id}
        key={result.id}
        image={result.smallImage}
        title={result.title}
        calorie={result.calorie}
        ratings={result.ratings}
        collection={result.collections}
        serving={result.servingTime}
        link={`/category/${category}/?recipeDetails=${result.id}`}
      />
    ))
  }
  const emptyView =
    <div className="w-full flex justify-start items-start text-base md:text-sm text-slate-800 pl-6 md:pl-0 italic">
      Theres no recipe with this category anymore
    </div>

  useEffect(() => {
    (ref.current as any).refetch();
  }, [category])

  return (
    <Layout title={category as string}>
      <RecipeDetailsModal route={`/category/${category}`} />
      <div className='min-h-[700px] flex flex-col justify-start items-center gap-8 py-10 overflow-hidden mt-16 md:mt-0'>
        <div className='w-full text-base text-gray-500 pl-6 md:pl-10'>
          Showing for category :&nbsp;
          <span className='font-bold text-gray-600'>
            {category}
          </span>
        </div>
        <div className='w-full flex justify-center md:justify-start items-start gap-2 md:gap-4 md:pl-10 flex-wrap px-3'>
          <InfiniteFetch
            url={`/api/recipe/read/category`}
            body={{
              method: 'POST',
              body: JSON.stringify({
                category: category,
                skip: skip
              })
            }}
            emptyView={emptyView}
            successView={successView}
            increaseSkip={increaseSkip}
            endPage={10}
            ref={ref}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Category